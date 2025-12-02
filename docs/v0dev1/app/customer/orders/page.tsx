import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { orders } from "@/lib/mock-data"
import { ChevronRight, Search, Package, Eye, RotateCcw } from "lucide-react"

export default function CustomerOrdersPage() {
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
              <span className="text-foreground font-medium">Ordrehistorik</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Ordrehistorik</h1>
              <p className="text-muted-foreground">Se og administrer dine tidligere ordrer</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Søg i ordrer..." className="pl-9" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Ordrenummer</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Dato</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Produkter</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-foreground">Total</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-foreground">Handlinger</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4">
                        <Link href={`/customer/orders/${order.id}`} className="font-medium text-accent hover:underline">
                          {order.bcOrderNumber}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{order.createdAt}</td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={order.status === "Leveret" ? "secondary" : "default"}
                          className={
                            order.status === "Leveret" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }
                        >
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {order.items.length} {order.items.length === 1 ? "produkt" : "produkter"}
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-foreground">
                        {order.total.toLocaleString("da-DK")} {order.currency}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/customer/orders/${order.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              Se
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Genbestil
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {orders.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Ingen ordrer endnu</h2>
              <p className="text-muted-foreground mb-4">Du har ikke afgivet nogen ordrer endnu.</p>
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
