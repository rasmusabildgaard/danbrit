/**
 * Ordre Detaljer
 * Viser enkelt ordre med alle linjer
 */

interface OrderDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
  const { id } = await params

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <a href="/customer/orders" className="text-sm text-blue-600 hover:underline mb-2 inline-block">
          ← Tilbage til ordrer
        </a>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Ordre {id}</h1>
            <p className="text-gray-600">Oprettet 28. november 2024</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Genbestil alle
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="md:col-span-2 space-y-6">
          {/* Status */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Status</h2>
            <div className="flex items-center gap-4">
              <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                Afsendt
              </span>
              <span className="text-gray-500">Track & Trace: ABC123456789</span>
            </div>
            
            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mb-1 mx-auto">
                    ✓
                  </div>
                  <p className="text-xs text-gray-500">Modtaget</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mb-1 mx-auto">
                    ✓
                  </div>
                  <p className="text-xs text-gray-500">Bekræftet</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-1 mx-auto">
                    →
                  </div>
                  <p className="text-xs text-gray-500">Afsendt</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-1 mx-auto">
                    ○
                  </div>
                  <p className="text-xs text-gray-500">Leveret</p>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full">
                <div className="h-1 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Order Lines */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Ordrelinjer</h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produkt</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Antal</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Pris</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { sku: 'BAT-12V-74', name: 'Premium AGM 74Ah', qty: 2, price: 1250, discount: 15 },
                  { sku: 'BAT-12V-100', name: 'Heavy Duty 100Ah', qty: 1, price: 1850, discount: 15 },
                ].map((line) => (
                  <tr key={line.sku}>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium">{line.name}</p>
                        <p className="text-sm text-gray-500">{line.sku}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">{line.qty}</td>
                    <td className="px-6 py-4 text-right">
                      <div>
                        <p>{(line.price * (1 - line.discount / 100)).toFixed(2)} DKK</p>
                        <p className="text-xs text-gray-500 line-through">{line.price.toFixed(2)} DKK</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium">
                      {(line.qty * line.price * (1 - line.discount / 100)).toFixed(2)} DKK
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Opsummering</h2>
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-gray-500">Subtotal</dt>
                <dd>4.350,00 DKK</dd>
              </div>
              <div className="flex justify-between text-green-600">
                <dt>Rabat (15%)</dt>
                <dd>-652,50 DKK</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Fragt</dt>
                <dd>0,00 DKK</dd>
              </div>
              <div className="flex justify-between pt-3 border-t font-semibold text-lg">
                <dt>Total</dt>
                <dd>3.697,50 DKK</dd>
              </div>
            </dl>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Leveringsadresse</h2>
            <address className="not-italic text-gray-600">
              Eksempel ApS<br />
              Industrivej 42<br />
              2600 Glostrup<br />
              Danmark
            </address>
          </div>

          {/* Reference */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Reference</h2>
            <p className="text-gray-600">PO-4521</p>
          </div>
        </div>
      </div>
    </div>
  )
}

