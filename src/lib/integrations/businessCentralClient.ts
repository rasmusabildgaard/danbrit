/**
 * Business Central Integration Client
 * Håndterer kommunikation med Microsoft Dynamics 365 Business Central
 * 
 * Alle kald:
 * - Køres over HTTPS
 * - Har timeout og retry
 * - Logges i IntegrationLog
 */

import { db } from '@/lib/db'

// ============================================
// TYPER
// ============================================

export type BusinessCentralConfig = {
  baseUrl: string
  apiKey?: string
  username?: string
  password?: string
  tenantId?: string
  clientId?: string
  clientSecret?: string
}

export interface BCCustomer {
  id: string
  number: string
  displayName: string
  email: string
  phoneNumber?: string
  addressLine1?: string
  city?: string
  postalCode?: string
  country?: string
}

export interface BCPrice {
  itemId: string
  unitPrice: number
  discountPercent: number
  currency: string
}

export interface BCStock {
  itemId: string
  quantity: number
  available: number
  reserved: number
}

export interface BCOrderPayload {
  customerId: string
  customerReference?: string
  lines: Array<{
    itemId: string
    quantity: number
    unitPrice: number
    discountPercent?: number
  }>
  shippingAddress?: {
    name: string
    street: string
    city: string
    postalCode: string
    country: string
  }
}

export interface BCOrder {
  id: string
  number: string
  status: string
  totalAmount: number
  currency: string
}

// ============================================
// KONFIGURATION
// ============================================

const config: BusinessCentralConfig = {
  baseUrl: process.env.BC_BASE_URL || '',
  apiKey: process.env.BC_API_KEY,
  username: process.env.BC_USERNAME,
  password: process.env.BC_PASSWORD,
  tenantId: process.env.BC_TENANT_ID,
  clientId: process.env.BC_CLIENT_ID,
  clientSecret: process.env.BC_CLIENT_SECRET,
}

const DEFAULT_TIMEOUT = 10000 // 10 sekunder
const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 sekund

// ============================================
// HJÆLPEFUNKTIONER
// ============================================

/**
 * Opret Authorization header baseret på konfiguration
 */
function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (config.apiKey) {
    headers['Authorization'] = `Bearer ${config.apiKey}`
  } else if (config.username && config.password) {
    const credentials = Buffer.from(`${config.username}:${config.password}`).toString('base64')
    headers['Authorization'] = `Basic ${credentials}`
  }

  return headers
}

/**
 * Fetch med timeout
 */
async function fetchWithTimeout(
  url: string, 
  options: RequestInit, 
  timeout: number = DEFAULT_TIMEOUT
): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * Fetch med retry
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = MAX_RETRIES
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, options)
      
      if (response.ok) {
        return response
      }
      
      // Retry kun på server-fejl (5xx)
      if (response.status >= 500 && attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt))
        continue
      }
      
      return response
    } catch (error) {
      lastError = error as Error
      
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt))
        continue
      }
    }
  }

  throw lastError || new Error('Request failed after retries')
}

/**
 * Log integration kald til database
 */
async function logIntegration(
  type: 'PRICE_LOOKUP' | 'STOCK_LOOKUP' | 'ORDER_CREATE' | 'ORDER_STATUS' | 'CUSTOMER_SYNC' | 'PRODUCT_SYNC',
  status: 'SUCCESS' | 'ERROR' | 'TIMEOUT',
  endpoint: string,
  request?: unknown,
  response?: unknown,
  errorMessage?: string,
  duration?: number
): Promise<void> {
  try {
    await db.integrationLog.create({
      data: {
        type,
        status,
        endpoint,
        request: request ? JSON.parse(JSON.stringify(request)) : null,
        response: response ? JSON.parse(JSON.stringify(response)) : null,
        errorMessage,
        duration,
      },
    })
  } catch (error) {
    // Log fejl bør ikke stoppe applikationen
    console.error('Failed to log integration:', error)
  }
}

// ============================================
// BUSINESS CENTRAL CLIENT
// ============================================

export const businessCentral = {
  /**
   * Hent kunde fra Business Central
   */
  async getCustomer(customerId: string): Promise<BCCustomer | null> {
    const startTime = Date.now()
    const endpoint = `/customers('${customerId}')`
    const url = `${config.baseUrl}${endpoint}`

    try {
      const response = await fetchWithRetry(url, {
        method: 'GET',
        headers: getAuthHeaders(),
      })

      const duration = Date.now() - startTime

      if (!response.ok) {
        await logIntegration('CUSTOMER_SYNC', 'ERROR', endpoint, { customerId }, null, `HTTP ${response.status}`, duration)
        return null
      }

      const data = await response.json()
      await logIntegration('CUSTOMER_SYNC', 'SUCCESS', endpoint, { customerId }, data, undefined, duration)
      
      return data as BCCustomer
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const status = errorMessage.includes('abort') ? 'TIMEOUT' : 'ERROR'
      
      await logIntegration('CUSTOMER_SYNC', status, endpoint, { customerId }, null, errorMessage, duration)
      return null
    }
  },

  /**
   * Hent kundespecifik pris fra Business Central
   */
  async getCustomerPrice(
    customerId: string, 
    itemId: string, 
    quantity: number = 1
  ): Promise<BCPrice | null> {
    const startTime = Date.now()
    const endpoint = `/salesPrices`
    const url = `${config.baseUrl}${endpoint}?$filter=customerId eq '${customerId}' and itemId eq '${itemId}'`

    try {
      const response = await fetchWithRetry(url, {
        method: 'GET',
        headers: getAuthHeaders(),
      })

      const duration = Date.now() - startTime

      if (!response.ok) {
        await logIntegration('PRICE_LOOKUP', 'ERROR', endpoint, { customerId, itemId, quantity }, null, `HTTP ${response.status}`, duration)
        return null
      }

      const data = await response.json()
      await logIntegration('PRICE_LOOKUP', 'SUCCESS', endpoint, { customerId, itemId, quantity }, data, undefined, duration)
      
      // Returner første matchende pris
      return data.value?.[0] as BCPrice || null
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const status = errorMessage.includes('abort') ? 'TIMEOUT' : 'ERROR'
      
      await logIntegration('PRICE_LOOKUP', status, endpoint, { customerId, itemId, quantity }, null, errorMessage, duration)
      return null
    }
  },

  /**
   * Hent lagerstatus fra Business Central
   */
  async getStock(itemId: string): Promise<BCStock | null> {
    const startTime = Date.now()
    const endpoint = `/items('${itemId}')/inventory`
    const url = `${config.baseUrl}${endpoint}`

    try {
      const response = await fetchWithRetry(url, {
        method: 'GET',
        headers: getAuthHeaders(),
      })

      const duration = Date.now() - startTime

      if (!response.ok) {
        await logIntegration('STOCK_LOOKUP', 'ERROR', endpoint, { itemId }, null, `HTTP ${response.status}`, duration)
        return null
      }

      const data = await response.json()
      await logIntegration('STOCK_LOOKUP', 'SUCCESS', endpoint, { itemId }, data, undefined, duration)
      
      return data as BCStock
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const status = errorMessage.includes('abort') ? 'TIMEOUT' : 'ERROR'
      
      await logIntegration('STOCK_LOOKUP', status, endpoint, { itemId }, null, errorMessage, duration)
      return null
    }
  },

  /**
   * Opret ordre i Business Central
   */
  async createOrder(payload: BCOrderPayload): Promise<BCOrder | null> {
    const startTime = Date.now()
    const endpoint = `/salesOrders`
    const url = `${config.baseUrl}${endpoint}`

    try {
      const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      })

      const duration = Date.now() - startTime

      if (!response.ok) {
        const errorBody = await response.text()
        await logIntegration('ORDER_CREATE', 'ERROR', endpoint, payload, null, `HTTP ${response.status}: ${errorBody}`, duration)
        return null
      }

      const data = await response.json()
      await logIntegration('ORDER_CREATE', 'SUCCESS', endpoint, payload, data, undefined, duration)
      
      return data as BCOrder
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const status = errorMessage.includes('abort') ? 'TIMEOUT' : 'ERROR'
      
      await logIntegration('ORDER_CREATE', status, endpoint, payload, null, errorMessage, duration)
      return null
    }
  },

  /**
   * Hent kundens ordrer fra Business Central
   */
  async getCustomerOrders(customerId: string): Promise<BCOrder[]> {
    const startTime = Date.now()
    const endpoint = `/salesOrders`
    const url = `${config.baseUrl}${endpoint}?$filter=customerId eq '${customerId}'&$orderby=orderDate desc`

    try {
      const response = await fetchWithRetry(url, {
        method: 'GET',
        headers: getAuthHeaders(),
      })

      const duration = Date.now() - startTime

      if (!response.ok) {
        await logIntegration('ORDER_STATUS', 'ERROR', endpoint, { customerId }, null, `HTTP ${response.status}`, duration)
        return []
      }

      const data = await response.json()
      await logIntegration('ORDER_STATUS', 'SUCCESS', endpoint, { customerId }, { count: data.value?.length }, undefined, duration)
      
      return data.value as BCOrder[] || []
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      const status = errorMessage.includes('abort') ? 'TIMEOUT' : 'ERROR'
      
      await logIntegration('ORDER_STATUS', status, endpoint, { customerId }, null, errorMessage, duration)
      return []
    }
  },

  /**
   * Test forbindelse til Business Central
   */
  async testConnection(): Promise<{ connected: boolean; error?: string }> {
    try {
      const response = await fetchWithTimeout(
        `${config.baseUrl}/companies`,
        {
          method: 'GET',
          headers: getAuthHeaders(),
        },
        5000
      )

      return { connected: response.ok }
    } catch (error) {
      return {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  },
}

export default businessCentral

