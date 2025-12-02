/**
 * Prisma Database Client
 * Singleton pattern for database connections
 * 
 * Brug: import { db } from '@/lib/db'
 */

import { PrismaClient } from '@prisma/client'

// Tilføj prisma til global type for at undgå hot-reload issues
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Opret singleton instance
export const db = globalForPrisma.prisma ?? new PrismaClient()

// Gem i global for at undgå multiple instances ved hot-reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}

// Eksporter også som prisma for fleksibilitet
export const prisma = db

