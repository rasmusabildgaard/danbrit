/**
 * Integrations Page
 * Oversigt over Business Central integration og logs
 */

export default function IntegrationsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Integrationer</h1>
        <p className="text-gray-600">Status og logs for Business Central integration</p>
      </div>

      {/* Integration Status Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Pris-opslag</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              AKTIV
            </span>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Seneste kald</dt>
              <dd>5 min siden</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Kald i dag</dt>
              <dd>1,234</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Fejlrate</dt>
              <dd className="text-green-600">0.1%</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Lager-opslag</h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
              LANGSOM
            </span>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Seneste kald</dt>
              <dd>2 min siden</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Kald i dag</dt>
              <dd>856</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Avg. responstid</dt>
              <dd className="text-yellow-600">2.3s</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Ordre-oprettelse</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              AKTIV
            </span>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Seneste ordre</dt>
              <dd>12 min siden</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Ordrer i dag</dt>
              <dd>24</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Fejlrate</dt>
              <dd className="text-green-600">0%</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Integration Logs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Integrationslogs</h2>
            <div className="flex gap-4">
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Alle typer</option>
                <option>PRICE_LOOKUP</option>
                <option>STOCK_LOOKUP</option>
                <option>ORDER_CREATE</option>
                <option>CUSTOMER_SYNC</option>
              </select>
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Alle status</option>
                <option>SUCCESS</option>
                <option>ERROR</option>
                <option>TIMEOUT</option>
              </select>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tidspunkt</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Varighed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Detaljer</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { time: '14:32:05', type: 'ORDER_CREATE', status: 'SUCCESS', duration: '234ms', details: 'Order ORD-001 created' },
              { time: '14:31:42', type: 'PRICE_LOOKUP', status: 'SUCCESS', duration: '89ms', details: 'Customer K-10234, 3 items' },
              { time: '14:28:15', type: 'STOCK_LOOKUP', status: 'ERROR', duration: '5002ms', details: 'Timeout: Connection refused' },
              { time: '14:25:33', type: 'PRICE_LOOKUP', status: 'SUCCESS', duration: '112ms', details: 'Customer K-10567, 1 item' },
              { time: '14:22:08', type: 'CUSTOMER_SYNC', status: 'SUCCESS', duration: '1.2s', details: 'Synced 5 customers' },
            ].map((log, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono">{log.time}</td>
                <td className="px-6 py-4 text-sm">
                  <code className="px-2 py-1 bg-gray-100 rounded">{log.type}</code>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    log.status === 'SUCCESS' 
                      ? 'bg-green-100 text-green-800'
                      : log.status === 'ERROR'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{log.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 border-t flex justify-between items-center">
          <p className="text-sm text-gray-500">Viser 1-5 af 1,234 logs</p>
          <nav className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Forrige</button>
            <button className="px-3 py-1 bg-gray-900 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Næste</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

