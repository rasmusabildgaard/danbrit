/**
 * Favoritter
 * Kundens gemte produkter
 */

export default function FavoritesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mine favoritter</h1>
        <p className="text-gray-600">Produkter du har gemt til hurtig adgang</p>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          { sku: 'BAT-12V-74', name: 'Premium AGM 74Ah', price: '1.062,50', originalPrice: '1.250,00', stock: true },
          { sku: 'BAT-12V-100', name: 'Heavy Duty 100Ah', price: '1.572,50', originalPrice: '1.850,00', stock: true },
          { sku: 'BAT-24V-200', name: 'Truck Battery 200Ah', price: '2.975,00', originalPrice: '3.500,00', stock: false },
          { sku: 'BAT-12V-45', name: 'Compact 45Ah', price: '637,50', originalPrice: '750,00', stock: true },
        ].map((product) => (
          <div key={product.sku} className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="relative">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Billede</span>
              </div>
              <button 
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-red-50 transition-colors"
                title="Fjern fra favoritter"
              >
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{product.sku}</p>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              
              {/* Stock status */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${product.stock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-sm ${product.stock ? 'text-green-700' : 'text-red-700'}`}>
                  {product.stock ? 'På lager' : 'Ikke på lager'}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-lg font-bold text-blue-600">{product.price} DKK</p>
                <p className="text-sm text-gray-500 line-through">{product.originalPrice} DKK</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <input 
                  type="number" 
                  defaultValue={1} 
                  min={1}
                  className="w-16 px-2 py-2 border rounded-lg text-center text-sm"
                />
                <button 
                  className={`flex-grow py-2 rounded-lg text-sm font-medium transition-colors ${
                    product.stock 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.stock}
                >
                  {product.stock ? 'Tilføj til kurv' : 'Ikke tilgængelig'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {false && (
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ingen favoritter endnu</h3>
          <p className="text-gray-500 mb-6">Tilføj produkter til dine favoritter for hurtig adgang</p>
          <a 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Udforsk produkter
          </a>
        </div>
      )}
    </div>
  )
}

