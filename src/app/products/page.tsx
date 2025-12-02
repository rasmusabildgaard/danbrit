import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { categories, products } from "@/lib/mock-data"

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-100 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Forside
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-neutral-900 font-medium">Alle produkter</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-neutral-900 flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Filtre
                </h2>
                <button className="text-neutral-500 text-xs hover:text-neutral-900 transition-colors">
                  Nulstil
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block text-neutral-700">Søg</label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    placeholder="Varenr., OEM..." 
                    className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0066b3] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block text-neutral-700">Kategori</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-[#0066b3] focus:ring-[#0066b3]" />
                      <span className="text-sm text-neutral-700">{category.name}</span>
                      <span className="text-xs text-neutral-500 ml-auto">({category.productCount})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Voltage */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block text-neutral-700">Spænding (V)</label>
                <div className="space-y-2">
                  {[6, 12, 24, 48].map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-[#0066b3] focus:ring-[#0066b3]" />
                      <span className="text-sm text-neutral-700">{v}V</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Capacity */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block text-neutral-700">Kapacitet (Ah)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    placeholder="Min" 
                    type="number" 
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0066b3] focus:border-transparent"
                  />
                  <input 
                    placeholder="Max" 
                    type="number" 
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0066b3] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Technology */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block text-neutral-700">Teknologi</label>
                <div className="space-y-2">
                  {["Bly-syre", "AGM", "EFB", "GEL", "Deep Cycle", "Lithium"].map((tech) => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-[#0066b3] focus:ring-[#0066b3]" />
                      <span className="text-sm text-neutral-700">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#0066b3] text-white py-2.5 rounded-lg font-medium hover:bg-[#005299] transition-colors">
                Anvend filtre
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Alle produkter</h1>
                <p className="text-neutral-500">{products.length} produkter</p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-neutral-500 whitespace-nowrap">Sorter efter:</label>
                <select className="border border-neutral-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0066b3]">
                  <option>Popularitet</option>
                  <option>Pris: Lav til høj</option>
                  <option>Pris: Høj til lav</option>
                  <option>Navn: A-Å</option>
                  <option>Kapacitet</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
