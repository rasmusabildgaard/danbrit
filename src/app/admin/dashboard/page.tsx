/**
 * Admin Dashboard
 * Oversigt for administratorer
 */

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Oversigt over platform og integrationer</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Ordrer i dag</p>
              <p className="text-3xl font-bold text-gray-900">24</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12% fra i går</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Aktive kunder</p>
              <p className="text-3xl font-bold text-gray-900">342</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+5 denne uge</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">BC Synkronisering</p>
              <p className="text-3xl font-bold text-green-600">OK</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Sidst synk: 5 min siden</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Fejl (24t)</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <a href="/admin/integrations" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
            Se detaljer →
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Recent Integration Logs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Seneste integrationslogs</h2>
              <a href="/admin/integrations" className="text-sm text-blue-600 hover:underline">
                Se alle →
              </a>
            </div>
          </div>
          <div className="divide-y">
            {[
              { type: 'ORDER_CREATE', status: 'SUCCESS', time: '5 min siden' },
              { type: 'PRICE_LOOKUP', status: 'SUCCESS', time: '12 min siden' },
              { type: 'STOCK_LOOKUP', status: 'ERROR', time: '23 min siden' },
              { type: 'CUSTOMER_SYNC', status: 'SUCCESS', time: '1 time siden' },
            ].map((log, i) => (
              <div key={i} className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${
                    log.status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  <div>
                    <p className="font-medium">{log.type}</p>
                    <p className="text-sm text-gray-500">{log.time}</p>
                  </div>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${
                  log.status === 'SUCCESS' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Seneste ordrer</h2>
          </div>
          <div className="divide-y">
            {[
              { id: 'ORD-001', customer: 'Eksempel ApS', total: '4.250 DKK', status: 'Ny' },
              { id: 'ORD-002', customer: 'Test A/S', total: '2.100 DKK', status: 'Bekræftet' },
              { id: 'ORD-003', customer: 'Demo IVS', total: '8.500 DKK', status: 'Afsendt' },
            ].map((order) => (
              <div key={order.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.total}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    order.status === 'Ny' 
                      ? 'bg-blue-100 text-blue-800'
                      : order.status === 'Bekræftet'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

