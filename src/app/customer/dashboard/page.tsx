/**
 * Kunde Dashboard
 * Oversigt for indlogget kunde
 */

export default function CustomerDashboardPage() {
  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Velkommen tilbage</h1>
        <p className="text-gray-600">Her er en oversigt over din konto</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Åbne ordrer</p>
          <p className="text-3xl font-bold text-blue-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Ordrer i år</p>
          <p className="text-3xl font-bold text-gray-900">24</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Favoritter</p>
          <p className="text-3xl font-bold text-gray-900">8</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Din rabat</p>
          <p className="text-3xl font-bold text-green-600">15%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Seneste ordrer</h2>
              <a href="/customer/orders" className="text-sm text-blue-600 hover:underline">
                Se alle →
              </a>
            </div>
          </div>
          <div className="divide-y">
            {[
              { id: 'ORD-001', date: '28. nov 2024', status: 'Afsendt', total: '4.250 DKK' },
              { id: 'ORD-002', date: '25. nov 2024', status: 'Leveret', total: '2.100 DKK' },
              { id: 'ORD-003', date: '20. nov 2024', status: 'Leveret', total: '8.500 DKK' },
            ].map((order) => (
              <a key={order.id} href={`/customer/orders/${order.id}`} className="block p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.total}</p>
                    <p className={`text-sm ${order.status === 'Afsendt' ? 'text-blue-600' : 'text-green-600'}`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Reorder */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Sidst købte produkter</h2>
              <a href="/customer/favorites" className="text-sm text-blue-600 hover:underline">
                Se favoritter →
              </a>
            </div>
          </div>
          <div className="divide-y">
            {[
              { sku: 'BAT-12V-74', name: 'Premium AGM 74Ah', price: '1.250 DKK' },
              { sku: 'BAT-12V-100', name: 'Heavy Duty 100Ah', price: '1.850 DKK' },
              { sku: 'BAT-24V-200', name: 'Truck Battery 200Ah', price: '3.500 DKK' },
            ].map((product) => (
              <div key={product.sku} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sku}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium">{product.price}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Genbestil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Kontooplysninger</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Virksomhed</p>
            <p className="font-medium">Eksempel ApS</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Kundenummer</p>
            <p className="font-medium">K-10234</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">E-mail</p>
            <p className="font-medium">kontakt@eksempel.dk</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Kundegruppe</p>
            <p className="font-medium">Premium Forhandler</p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/customer/profile" className="text-blue-600 hover:underline text-sm">
            Rediger oplysninger →
          </a>
        </div>
      </div>
    </div>
  )
}

