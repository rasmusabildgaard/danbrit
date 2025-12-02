/**
 * Ordrehistorik
 * Liste over kundens ordrer
 */

export default function OrdersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mine ordrer</h1>
        <p className="text-gray-600">Oversigt over alle dine ordrer</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Alle</option>
              <option>Afventer</option>
              <option>Bekræftet</option>
              <option>Afsendt</option>
              <option>Leveret</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Periode</label>
            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Alle</option>
              <option>Seneste 30 dage</option>
              <option>Seneste 90 dage</option>
              <option>I år</option>
            </select>
          </div>
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">Søg</label>
            <input 
              type="search" 
              placeholder="Ordrenummer eller reference..."
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ordre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dato
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              { id: 'ORD-2024-001', date: '28. nov 2024', status: 'Afsendt', ref: 'PO-4521', total: '4.250,00 DKK' },
              { id: 'ORD-2024-002', date: '25. nov 2024', status: 'Leveret', ref: 'PO-4520', total: '2.100,00 DKK' },
              { id: 'ORD-2024-003', date: '20. nov 2024', status: 'Leveret', ref: 'PO-4519', total: '8.500,00 DKK' },
              { id: 'ORD-2024-004', date: '15. nov 2024', status: 'Leveret', ref: 'PO-4518', total: '3.200,00 DKK' },
              { id: 'ORD-2024-005', date: '10. nov 2024', status: 'Leveret', ref: 'PO-4517', total: '6.750,00 DKK' },
            ].map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={`/customer/orders/${order.id}`} className="font-medium text-blue-600 hover:underline">
                    {order.id}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    order.status === 'Afsendt' 
                      ? 'bg-blue-100 text-blue-800' 
                      : order.status === 'Leveret'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.ref}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                  {order.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-600 hover:underline">
                    Genbestil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-500">Viser 1-5 af 24 ordrer</p>
        <nav className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Forrige</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Næste</button>
        </nav>
      </div>
    </div>
  )
}

