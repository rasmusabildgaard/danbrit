/**
 * Catalog Mapping Page
 * Administrer mapping mellem BC varegrupper og webshop kategorier
 */

export default function CatalogMappingPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Kategori-mapping</h1>
        <p className="text-gray-600">Kobl Business Central varegrupper til webshop kategorier</p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <input 
            type="search" 
            placeholder="Søg i kategorier..."
            className="border rounded-lg px-4 py-2 w-64"
          />
          <select className="border rounded-lg px-4 py-2">
            <option>Alle</option>
            <option>Mappede</option>
            <option>Ikke mappede</option>
          </select>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          + Ny kategori
        </button>
      </div>

      {/* Mapping Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Webshop kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">BC Varegruppe</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produkter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { category: 'Startbatterier', bcCode: 'BAT-START', products: 145, mapped: true },
              { category: 'AGM Batterier', bcCode: 'BAT-AGM', products: 89, mapped: true },
              { category: 'GEL Batterier', bcCode: 'BAT-GEL', products: 42, mapped: true },
              { category: 'Forbrugsbatterier', bcCode: null, products: 0, mapped: false },
              { category: 'Tilbehør', bcCode: 'ACC-MISC', products: 23, mapped: true },
            ].map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm text-gray-500">/{item.category.toLowerCase().replace(' ', '-')}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {item.bcCode ? (
                    <code className="px-2 py-1 bg-gray-100 rounded text-sm">{item.bcCode}</code>
                  ) : (
                    <span className="text-gray-400 italic">Ikke mappt</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm">{item.products}</td>
                <td className="px-6 py-4">
                  {item.mapped ? (
                    <span className="inline-flex items-center gap-1 text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Aktiv
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-yellow-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      Mangler mapping
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:underline text-sm">Rediger</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BC Groups not mapped */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 mb-4">
          BC Varegrupper uden mapping ({3})
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['BAT-MARINE', 'BAT-SOLAR', 'ACC-TOOLS'].map((code) => (
            <div key={code} className="bg-white rounded-lg p-4 flex justify-between items-center">
              <code className="text-sm">{code}</code>
              <button className="text-sm text-blue-600 hover:underline">
                Opret kategori
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

