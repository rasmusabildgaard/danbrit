import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/mock-data"

export function ProductCard({ product }: { product: Product }) {
  const stockStatus = product.stock > 10 ? "På lager" : product.stock > 0 ? "Få på lager" : "Ikke på lager"
  const stockColor =
    product.stock > 10
      ? "bg-green-100 text-green-800"
      : product.stock > 0
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800"

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.categorySlug}/${product.id}`}>
        <div className="aspect-square relative bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform"
          />
          {product.technology && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.technology}</Badge>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.sku}</p>
        <Link href={`/products/${product.categorySlug}/${product.id}`}>
          <h3 className="font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          {product.voltage && <span>{product.voltage}V</span>}
          {product.ah && <span>{product.ah}Ah</span>}
          {product.length && product.width && product.height && (
            <span>
              {product.length}x{product.width}x{product.height}mm
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className={stockColor}>
            {stockStatus}
          </Badge>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Fra</p>
            <p className="text-xl font-bold text-foreground">{product.price.toLocaleString("da-DK")} kr</p>
          </div>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Tilføj
          </Button>
        </div>
      </div>
    </div>
  )
}
