import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { categories, products } from "@/lib/mock-data"
import { Search, ArrowRight, Truck, Shield, Clock, Users, ChevronRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/industrial-battery-warehouse-dark-professional-moo.jpg"
              alt="Danbrit lager"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
            <div className="max-w-2xl">
              <p className="text-accent font-medium mb-4">B2B Batteriløsninger</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Professionelle batterier til erhverv
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Danbrit Direct er din partner inden for kvalitetsbatterier. Vi leverer til autoværksteder, industri,
                landbrug og marine i hele Danmark.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Søg på varenr., OEM eller produktnavn..."
                    className="pl-10 h-12 bg-white text-foreground border-0"
                  />
                </div>
                <Link href="/license-plate">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                    Nummerpladesøgning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* USP Bar */}
        <section className="bg-secondary border-y border-border">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Hurtig levering</p>
                  <p className="text-sm text-muted-foreground">1-2 hverdage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Garanti</p>
                  <p className="text-sm text-muted-foreground">Op til 3 år</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Support</p>
                  <p className="text-sm text-muted-foreground">Man-Fre 7:30-16</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">B2B-priser</p>
                  <p className="text-sm text-muted-foreground">Kundespecifikke</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories - Updated to use actual category images */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Kategorier</h2>
                <p className="text-muted-foreground">Find det rette batteri til dit behov</p>
              </div>
              <Link href="/products" className="text-accent hover:underline flex items-center gap-1">
                Se alle <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products/${category.slug}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.productCount} produkter</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Populære produkter</h2>
                <p className="text-muted-foreground">Vores mest solgte batterier</p>
              </div>
              <Link href="/products" className="text-accent hover:underline flex items-center gap-1">
                Se alle <ChevronRight className="h-4 w-4" />
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
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                    Ny funktion
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                    Find det rette batteri på sekunder
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Indtast kundens nummerplade, og vi finder automatisk det korrekte batteri. Hurtigere service, færre
                    fejl.
                  </p>
                  <Link href="/license-plate">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                      Prøv nummerpladesøgning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image src="/mechanic-checking-car-battery-danish-license-plate.jpg" alt="Nummerpladesøgning" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Benefits */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Hvorfor vælge Danbrit Direct?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vi er din dedikerede B2B-partner med fokus på kvalitet, service og konkurrencedygtige priser.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Kundespecifikke priser</h3>
                <p className="text-muted-foreground">
                  Log ind og se dine personlige priser og rabatter baseret på din kundeaftale med os.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hurtig levering</h3>
                <p className="text-muted-foreground">
                  Bestil før kl. 14 og få levering næste hverdag. Vi dækker hele Danmark.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Kvalitetsgaranti</h3>
                <p className="text-muted-foreground">
                  Vi fører kun A-mærke batterier med op til 3 års garanti. Kvalitet du kan stole på.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - Brand logos */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-10">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Vi forhandler</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
              <Image
                src="/bosch-logo-simple.jpg"
                alt="Bosch"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="/varta-logo-simple.jpg"
                alt="Varta"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="/yuasa-logo-simple.jpg"
                alt="Yuasa"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="/victron-energy-logo-simple.jpg"
                alt="Victron"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="/exide-battery-logo-simple.jpg"
                alt="Exide"
                width={120}
                height={48}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
