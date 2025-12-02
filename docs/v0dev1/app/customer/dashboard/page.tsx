import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockCustomer, orders, products } from "@/lib/mock-data"
import { ChevronRight, Package, Heart, Clock, Settings, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react"

export default function CustomerDashboardPage() {
  const recentProducts = products.slice(0, 4)
  const recentOrders = orders.slice(0, 3)

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
              <span className="text-foreground font-medium">Min konto</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Welcome */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">Velkommen, {mockCustomer.name}</h1>
                <p className="text-muted-foreground">
                  Kundenr. {mockCustomer.customerNumber} | {mockCustomer.segment} | {mockCustomer.discountPercent}%
                  rabat
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/products">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Bestil nu
                  </Button>
                </Link>
                <Link href="/customer/settings">
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Indstillinger
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Orders */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Seneste ordrer
                  </h2>
                  <Link href="/customer/orders" className="text-accent text-sm hover:underline flex items-center gap-1">
                    Se alle <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="divide-y divide-border">
                  {recentOrders.map((order) => (
                    <Link
                      key={order.id}
                      href={`/customer/orders/${order.id}`}
                      className="block p-4 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{order.bcOrderNumber}</span>
                        <Badge variant={order.status === "Leveret" ? "secondary" : "default"}>{order.status}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{order.createdAt}</span>
                        <span className="font-medium text-foreground">
                          {order.total.toLocaleString("da-DK")} {order.currency}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick reorder */}
              <div className="bg-card border border-border rounded-lg">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Genbestil hurtigt
                  </h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {recentProducts.map((product) => (
                      <div key={product.id} className="text-center">
                        <div className="aspect-square bg-secondary rounded-lg mb-2 relative overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{product.sku}</p>
                        <p className="text-sm font-medium text-foreground line-clamp-1">{product.name}</p>
                        <Button size="sm" variant="outline" className="mt-2 w-full text-xs bg-transparent">
                          Tilføj
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Genveje</h3>
                <nav className="space-y-2">
                  <Link
                    href="/customer/orders"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      Ordrehistorik
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/customer/favorites"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      Favoritter
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/customer/settings"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      Kontoindstillinger
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </nav>
              </div>

              {/* Stats */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Din statistik
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Ordrer i år</p>
                    <p className="text-2xl font-bold text-foreground">24</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total køb i år</p>
                    <p className="text-2xl font-bold text-foreground">187.450 kr</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Din rabatsats</p>
                    <p className="text-2xl font-bold text-accent">{mockCustomer.discountPercent}%</p>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="font-semibold mb-2">Brug for hjælp?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Kontakt vores kundeservice for spørgsmål om ordrer eller produkter.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Kontakt os
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
