import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { orders, products, mockCustomer } from "@/lib/mock-data"
import { ChevronRight, Printer, RotateCcw, Truck, CheckCircle, Clock, Package } from "lucide-react"

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const order = orders.find((o) => o.id === id)

  if (!order) {
    notFound()
  }

  const orderProducts = order.items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId),
  }))

  const statusSteps = [
    { label: "Modtaget", icon: Package, completed: true },
    { label: "Under behandling", icon: Clock, completed: order.status !== "Modtaget" },
    { label: "Afsendt", icon: Truck, completed: order.status === "Leveret" },
    { label: "Leveret", icon: CheckCircle, completed: order.status === "Leveret" },
  ]

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
              <Link href="/customer/orders" className="hover:text-foreground">
                Ordrehistorik
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{order.bcOrderNumber}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-foreground">{order.bcOrderNumber}</h1>
                <Badge
                  className={order.status === "Leveret" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}
                >
                  {order.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">Bestilt {order.createdAt}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <RotateCcw className="h-4 w-4 mr-2" />
                Genbestil
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Status timeline */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-semibold text-foreground mb-6">Ordrestatus</h2>
                <div className="flex items-center justify-between">
                  {statusSteps.map((step, index) => (
                    <div key={step.label} className="flex flex-col items-center relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed ? "bg-green-100" : "bg-secondary"
                        }`}
                      >
                        <step.icon
                          className={`h-5 w-5 ${step.completed ? "text-green-600" : "text-muted-foreground"}`}
                        />
                      </div>
                      <span
                        className={`text-xs mt-2 ${step.completed ? "text-foreground font-medium" : "text-muted-foreground"}`}
                      >
                        {step.label}
                      </span>
                      {index < statusSteps.length - 1 && (
                        <div
                          className={`absolute top-5 left-full w-full h-0.5 -translate-y-1/2 ${
                            step.completed ? "bg-green-200" : "bg-border"
                          }`}
                          style={{ width: "calc(100% - 40px)", left: "50%", marginLeft: "20px" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order items */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="font-semibold text-foreground">Ordrelinjer</h2>
                </div>
                <div className="divide-y divide-border">
                  {orderProducts.map((item) => (
                    <div key={item.productId} className="p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0">
                        {item.product && (
                          <img
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.productName}
                            className="w-full h-full object-contain p-2"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{item.productName}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} stk x {item.unitPrice.toLocaleString("da-DK")} kr
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">
                          {(item.quantity * item.unitPrice).toLocaleString("da-DK")} kr
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Order summary */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-semibold text-foreground mb-4">Ordreoversigt</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{order.total.toLocaleString("da-DK")} kr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fragt</span>
                    <span className="text-foreground">0 kr</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-medium">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">
                      {order.total.toLocaleString("da-DK")} {order.currency}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">ekskl. moms</p>
                </div>
              </div>

              {/* Shipping address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-semibold text-foreground mb-4">Leveringsadresse</h2>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{mockCustomer.name}</p>
                  <p>Industrivej 15</p>
                  <p>4600 Køge</p>
                  <p>Danmark</p>
                </div>
              </div>

              {/* Invoice address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="font-semibold text-foreground mb-4">Fakturaadresse</h2>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{mockCustomer.name}</p>
                  <p>Industrivej 15</p>
                  <p>4600 Køge</p>
                  <p>Danmark</p>
                  <p className="mt-2">CVR: 12345678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
