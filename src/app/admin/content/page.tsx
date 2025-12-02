/**
 * Content Page
 * Administrer hero-sektioner og indhold
 */

export default function ContentPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Indhold</h1>
        <p className="text-gray-600">Administrer hero-sektioner og forsideindhold</p>
      </div>

      {/* Site Selector */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
          danbritdirect.dk
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          danbrit.com
        </button>
      </div>

      {/* Hero Sections */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Hero sektioner</h2>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            + Ny hero
          </button>
        </div>

        <div className="space-y-4">
          {[
            { 
              title: 'Black Friday Kampagne', 
              subtitle: 'Op til 25% rabat på udvalgte batterier',
              active: true,
              order: 1
            },
            { 
              title: 'Nyt sortiment', 
              subtitle: 'Se vores nye AGM batterier',
              active: true,
              order: 2
            },
            { 
              title: 'Efterårskampagne', 
              subtitle: 'Forbered bilen til vinteren',
              active: false,
              order: 3
            },
          ].map((hero, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex">
                {/* Preview */}
                <div className="w-48 h-32 bg-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
                  Billede
                </div>
                
                {/* Content */}
                <div className="flex-grow p-4 flex justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{hero.title}</h3>
                      {hero.active ? (
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">Aktiv</span>
                      ) : (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Inaktiv</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{hero.subtitle}</p>
                    <p className="text-xs text-gray-400 mt-2">Position: {hero.order}</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded" title="Flyt op">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded" title="Flyt ned">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded text-blue-600" title="Rediger">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded text-red-600" title="Slet">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Hurtige links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Forsideprodukter</h3>
            <p className="text-sm text-gray-500">Vælg hvilke produkter der vises på forsiden</p>
          </a>
          <a href="#" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Kategoribilleder</h3>
            <p className="text-sm text-gray-500">Upload billeder til kategorisider</p>
          </a>
          <a href="#" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Footer indhold</h3>
            <p className="text-sm text-gray-500">Rediger footer links og information</p>
          </a>
        </div>
      </div>
    </div>
  )
}

