import Link from "next/link"
import Image from "next/image"
import { ProductCard } from "@/components/product-card"
import { categories, products } from "@/lib/mock-data"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/industrial-battery-warehouse-dark-professional-moo.jpg"
            alt="Danbrit lager"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[#0066b3] font-medium mb-4">B2B Batteriløsninger</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professionelle batterier til erhverv
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Danbrit er din partner inden for kvalitetsbatterier. Vi leverer til autoværksteder, industri,
              landbrug og marine i hele Danmark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  placeholder="Søg på varenr., OEM eller produktnavn..."
                  className="w-full pl-10 pr-4 h-12 bg-white text-neutral-900 rounded-lg border-0 focus:ring-2 focus:ring-[#0066b3]"
                />
              </div>
              <Link href="/license-plate" className="inline-flex items-center justify-center gap-2 bg-[#0066b3] text-white font-medium px-6 h-12 rounded-lg hover:bg-[#005299] transition-colors">
                Nummerpladesøgning
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Bar */}
      <section className="bg-neutral-100 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0066b3]/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Hurtig levering</p>
                <p className="text-sm text-neutral-500">1-2 hverdage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0066b3]/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Garanti</p>
                <p className="text-sm text-neutral-500">Op til 3 år</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0066b3]/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Support</p>
                <p className="text-sm text-neutral-500">Man-Fre 7:30-16</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0066b3]/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">B2B-priser</p>
                <p className="text-sm text-neutral-500">Kundespecifikke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Kategorier</h2>
              <p className="text-neutral-500">Find det rette batteri til dit behov</p>
            </div>
            <Link href="/products" className="text-[#0066b3] hover:underline flex items-center gap-1 text-sm font-medium">
              Se alle 
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="group bg-white border border-neutral-200 rounded-lg p-6 hover:border-[#0066b3] hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0066b3]/10 transition-colors overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900 group-hover:text-[#0066b3] transition-colors mb-1 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-neutral-500">{category.productCount} produkter</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Populære produkter</h2>
              <p className="text-neutral-500">Vores mest solgte batterier</p>
            </div>
            <Link href="/products" className="text-[#0066b3] hover:underline flex items-center gap-1 text-sm font-medium">
              Se alle 
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* License Plate Search CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 text-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-[#0066b3] text-white text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                  Ny funktion
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Find det rette batteri på sekunder
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Indtast kundens nummerplade, og vi finder automatisk det korrekte batteri. Hurtigere service, færre
                  fejl.
                </p>
                <Link href="/license-plate" className="inline-flex items-center justify-center gap-2 bg-[#0066b3] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#005299] transition-colors w-fit">
                  Prøv nummerpladesøgning
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="/mechanic-checking-car-battery-danish-license-plate.jpg" 
                  alt="Nummerpladesøgning" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Hvorfor vælge Danbrit?</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi er din dedikerede B2B-partner med fokus på kvalitet, service og konkurrencedygtige priser.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Kundespecifikke priser</h3>
              <p className="text-neutral-500">
                Log ind og se dine personlige priser og rabatter baseret på din kundeaftale med os.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Hurtig levering</h3>
              <p className="text-neutral-500">
                Bestil før kl. 14 og få levering næste hverdag. Vi dækker hele Danmark.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Kvalitetsgaranti</h3>
              <p className="text-neutral-500">
                Vi fører kun A-mærke batterier med op til 3 års garanti. Kvalitet du kan stole på.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
