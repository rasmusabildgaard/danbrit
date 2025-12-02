"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/mock-data"
import { Search, ChevronRight, Zap, AlertCircle } from "lucide-react"

export default function LicensePlatePage() {
  const [licensePlate, setLicensePlate] = useState("")
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  // Mock search result
  const matchingProducts = searched ? products.filter((p) => p.categorySlug === "startbatterier").slice(0, 3) : []

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!licensePlate.trim()) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setSearched(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Forside
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Nummerpladesøgning</span>
            </nav>
          </div>
        </div>

        {/* Hero - Added background image */}
        <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Nummerpladesøgning"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Hurtig og præcis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Find det rette batteri med nummerpladen
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Indtast kundens nummerplade, og vi slår automatisk køretøjet op og finder de batterier, der passer.
            </p>

            {/* Search form */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <div className="w-6 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">DK</span>
                    </div>
                  </div>
                  <Input
                    placeholder="AB 12 345"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                    className="pl-12 h-14 text-lg bg-white text-foreground border-0 font-mono tracking-wider"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Søg
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Results */}
        {searched && (
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4">
              {/* Vehicle info - Added car image */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Volkswagen Golf"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Køretøj fundet</p>
                    <h2 className="text-xl font-bold text-foreground mb-1">Volkswagen Golf VII 1.4 TSI</h2>
                    <p className="text-muted-foreground">2019 | Benzin | 150 hk</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Nummerplade</p>
                    <p className="font-mono text-lg font-bold text-foreground">{licensePlate || "AB 12 345"}</p>
                  </div>
                </div>
              </div>

              {/* Matching products */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Anbefalede batterier ({matchingProducts.length})
                </h3>
                <p className="text-muted-foreground mb-6">Disse batterier passer til din kundes køretøj</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800">Bemærk</p>
                  <p className="text-sm text-amber-700">
                    Tjek altid det eksisterende batteri før køb. Nogle køretøjer kan have afvigende specifikationer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How it works - Added images to steps */}
        {!searched && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-2xl font-bold text-foreground text-center mb-12">Sådan fungerer det</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Indtast nummerplade"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10 border-4 border-background">
                    <span className="text-sm font-bold text-accent-foreground">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Indtast nummerplade</h3>
                  <p className="text-muted-foreground">Skriv kundens nummerplade i søgefeltet ovenfor.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Vi finder køretøjet"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10 border-4 border-background">
                    <span className="text-sm font-bold text-accent-foreground">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Vi finder køretøjet</h3>
                  <p className="text-muted-foreground">Vi slår automatisk køretøjets data op i DMR.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Vælg batteri"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10 border-4 border-background">
                    <span className="text-sm font-bold text-accent-foreground">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Vælg det rette batteri</h3>
                  <p className="text-muted-foreground">Se anbefalede batterier og bestil med det samme.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
