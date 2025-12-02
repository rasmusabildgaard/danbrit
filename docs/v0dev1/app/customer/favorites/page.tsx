import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mock-data"
import { ChevronRight, Heart } from "lucide-react"

export default function CustomerFavoritesPage() {
  // Mock favorites - first 4 products
  const favorites = products.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-secondary">
        {/* Breadcrumb */}
        <div className="bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Forside
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/customer/dashboard" className="hover:text-foreground">
                Min konto
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Favoritter</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-1">Mine favoritter</h1>
            <p className="text-muted-foreground">Dine gemte produkter til hurtig genbestilling</p>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card border border-border rounded-lg">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Ingen favoritter endnu</h2>
              <p className="text-muted-foreground mb-4">Tilføj produkter til dine favoritter for hurtig adgang.</p>
              <Link href="/products">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Se produkter</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
