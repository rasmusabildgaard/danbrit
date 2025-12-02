import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { categories, products } from "@/lib/mock-data"
import { Search, SlidersHorizontal, ChevronRight } from "lucide-react"

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params

  const category = categories.find((c) => c.slug === categorySlug)
  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.categorySlug === categorySlug)

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
              <Link href="/products" className="hover:text-foreground">
                Produkter
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{category.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtre
                  </h2>
                  <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                    Nulstil
                  </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-2 block">Søg</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Varenr., OEM..." className="pl-9" />
                  </div>
                </div>

                {/* Voltage */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Spænding (V)</Label>
                  <div className="space-y-2">
                    {[6, 12, 24, 48].map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-foreground">{v}V</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Kapacitet (Ah)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" type="number" />
                    <Input placeholder="Max" type="number" />
                  </div>
                </div>

                {/* Technology */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Teknologi</Label>
                  <div className="space-y-2">
                    {["Bly-syre", "AGM", "EFB", "GEL", "Deep Cycle", "Lithium"].map((tech) => (
                      <label key={tech} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-foreground">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Anvend filtre</Button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{category.name}</h1>
                  <p className="text-muted-foreground">{categoryProducts.length} produkter</p>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground whitespace-nowrap">Sorter efter:</Label>
                  <select className="border border-border rounded-md px-3 py-2 text-sm bg-card">
                    <option>Popularitet</option>
                    <option>Pris: Lav til høj</option>
                    <option>Pris: Høj til lav</option>
                    <option>Navn: A-Å</option>
                    <option>Kapacitet</option>
                  </select>
                </div>
              </div>

              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Ingen produkter fundet i denne kategori.</p>
                  <Link href="/products">
                    <Button variant="link" className="text-accent">
                      Se alle produkter
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
