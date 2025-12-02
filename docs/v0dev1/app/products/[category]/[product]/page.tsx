import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/mock-data"
import { ChevronRight, ShoppingCart, Heart, Truck, Shield, RotateCcw, Minus, Plus, Check } from "lucide-react"

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category: categorySlug, product: productId } = await params

  const product = products.find((p) => p.id === productId)
  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4)

  const stockStatus = product.stock > 10 ? "På lager" : product.stock > 0 ? "Få på lager" : "Ikke på lager"
  const stockColor =
    product.stock > 10
      ? "bg-green-100 text-green-800"
      : product.stock > 0
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800"

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
              <Link href={`/products/${product.categorySlug}`} className="hover:text-foreground">
                {product.categoryName}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Image */}
            <div className="bg-secondary rounded-lg p-8 aspect-square relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              {product.technology && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.technology}</Badge>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">
                  {product.sku} {product.oemNumber && `| OEM: ${product.oemNumber}`}
                </p>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <Badge variant="secondary" className={stockColor}>
                  {stockStatus} ({product.stock} stk)
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Specs quick view */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {product.voltage && (
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Spænding</p>
                    <p className="font-semibold text-foreground">{product.voltage}V</p>
                  </div>
                )}
                {product.ah && (
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Kapacitet</p>
                    <p className="font-semibold text-foreground">{product.ah}Ah</p>
                  </div>
                )}
                {product.length && (
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Længde</p>
                    <p className="font-semibold text-foreground">{product.length}mm</p>
                  </div>
                )}
                {product.technology && (
                  <div className="bg-secondary rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Teknologi</p>
                    <p className="font-semibold text-foreground">{product.technology}</p>
                  </div>
                )}
              </div>

              {/* Price section */}
              <div className="bg-secondary rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Listepris</p>
                    <p className="text-3xl font-bold text-foreground">{product.price.toLocaleString("da-DK")} kr</p>
                    <p className="text-sm text-muted-foreground">ekskl. moms</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-accent font-medium">Log ind for din pris</p>
                    <Link href="/customer/login" className="text-sm text-accent hover:underline">
                      Se kundespecifik pris
                    </Link>
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-border rounded-lg bg-card">
                    <Button variant="ghost" size="icon" className="rounded-r-none">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input type="number" defaultValue="1" className="w-20 text-center border-0 focus-visible:ring-0" />
                    <Button variant="ghost" size="icon" className="rounded-l-none">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Læg i kurv
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hurtig levering</p>
                    <p className="text-muted-foreground">1-2 hverdage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2 års garanti</p>
                    <p className="text-muted-foreground">Fuld dækning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <RotateCcw className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Nem retur</p>
                    <p className="text-muted-foreground">30 dage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="specs" className="mb-16">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
              <TabsTrigger
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Specifikationer
              </TabsTrigger>
              <TabsTrigger
                value="compatibility"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Passer til
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Dokumenter
              </TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="pt-6">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 bg-secondary font-medium text-foreground w-1/3">Varenummer</td>
                      <td className="px-4 py-3 text-foreground">{product.sku}</td>
                    </tr>
                    {product.oemNumber && (
                      <tr>
                        <td className="px-4 py-3 bg-secondary font-medium text-foreground">OEM-nummer</td>
                        <td className="px-4 py-3 text-foreground">{product.oemNumber}</td>
                      </tr>
                    )}
                    {product.voltage && (
                      <tr>
                        <td className="px-4 py-3 bg-secondary font-medium text-foreground">Spænding</td>
                        <td className="px-4 py-3 text-foreground">{product.voltage}V</td>
                      </tr>
                    )}
                    {product.ah && (
                      <tr>
                        <td className="px-4 py-3 bg-secondary font-medium text-foreground">Kapacitet</td>
                        <td className="px-4 py-3 text-foreground">{product.ah}Ah</td>
                      </tr>
                    )}
                    {product.technology && (
                      <tr>
                        <td className="px-4 py-3 bg-secondary font-medium text-foreground">Teknologi</td>
                        <td className="px-4 py-3 text-foreground">{product.technology}</td>
                      </tr>
                    )}
                    {product.length && product.width && product.height && (
                      <tr>
                        <td className="px-4 py-3 bg-secondary font-medium text-foreground">Dimensioner (LxBxH)</td>
                        <td className="px-4 py-3 text-foreground">
                          {product.length} x {product.width} x {product.height} mm
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="compatibility" className="pt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Dette batteri passer til følgende køretøjer og anvendelser:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 text-green-600" />
                    VW Golf, Passat, Polo (2010-2024)
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 text-green-600" />
                    Audi A3, A4, A6 (2012-2024)
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 text-green-600" />
                    Skoda Octavia, Superb (2013-2024)
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 text-green-600" />
                    Seat Leon, Ibiza (2011-2024)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Brug vores{" "}
                  <Link href="/license-plate" className="text-accent hover:underline">
                    nummerpladesøgning
                  </Link>{" "}
                  for at bekræfte kompatibilitet.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="documents" className="pt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">Ingen dokumenter tilgængelige for dette produkt.</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Relaterede produkter</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
