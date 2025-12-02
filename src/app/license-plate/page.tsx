"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/mock-data"

export default function LicensePlatePage() {
  const [licensePlate, setLicensePlate] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  
  // Mock search results - in production this would call an API
  const searchResults = hasSearched ? products.slice(0, 3) : []

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (licensePlate.trim()) {
      setHasSearched(true)
    }
  }

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
            <span className="text-neutral-900 font-medium">Nummerpladesøgning</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mechanic-checking-car-battery-danish-license-plate.jpg"
            alt="Nummerpladesøgning"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-[#0066b3] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Ny funktion
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find det rette batteri med nummerplade
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Indtast nummerpladen og få med det samme vist hvilke batterier der passer til køretøjet.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#0066b3] rounded-l-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DK</span>
                  </div>
                  <input
                    type="text"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                    placeholder="AB 12 345"
                    className="w-full pl-14 pr-4 py-4 bg-white text-neutral-900 text-xl font-mono font-bold rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 uppercase tracking-wider"
                    maxLength={10}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#0066b3] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#005299] transition-colors flex items-center gap-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Søg
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-12 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Resultater for &quot;{licensePlate}&quot;
              </h2>
              <p className="text-neutral-500">
                Følgende batterier passer til dit køretøj
              </p>
            </div>

            {/* Vehicle Info */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-neutral-900 mb-4">Køretøjsoplysninger</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500">Mærke</p>
                  <p className="font-medium text-neutral-900">Volkswagen</p>
                </div>
                <div>
                  <p className="text-neutral-500">Model</p>
                  <p className="font-medium text-neutral-900">Golf</p>
                </div>
                <div>
                  <p className="text-neutral-500">Årgang</p>
                  <p className="font-medium text-neutral-900">2019</p>
                </div>
                <div>
                  <p className="text-neutral-500">Motor</p>
                  <p className="font-medium text-neutral-900">1.4 TSI</p>
                </div>
              </div>
            </div>

            {/* Product Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Sådan virker det</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Find det rette batteri på få sekunder med vores nummerpladesøgning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#0066b3]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Indtast nummerplade</h3>
              <p className="text-neutral-500">
                Skriv kundens nummerplade i søgefeltet ovenfor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#0066b3]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Se køretøjsdata</h3>
              <p className="text-neutral-500">
                Vi slår automatisk køretøjets data op i DMR og finder batterispecifikationerne.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#0066b3]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Vælg batteri</h3>
              <p className="text-neutral-500">
                Vælg mellem de batterier der passer til køretøjet og læg direkte i kurven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Spar tid og undgå fejl
              </h2>
              <p className="text-neutral-500 mb-6 leading-relaxed">
                Med vores nummerpladesøgning kan du hurtigt finde det rigtige batteri uden at skulle 
                slå dimensioner og specifikationer op manuelt. Det betyder hurtigere service til 
                dine kunder og færre returer på grund af forkerte batterier.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Automatisk opslag i DMR</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Viser kun kompatible batterier</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Reducerer risiko for fejlkøb</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Hurtigere kundeservice</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/car-license-plate-battery-search-danish.jpg"
                alt="Nummerpladesøgning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
