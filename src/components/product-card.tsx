"use client"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/mock-data"

// Placeholder for authentication - replace with NextAuth
const useAuth = () => ({ isLoggedIn: false })

export function ProductCard({ product }: { product: Product }) {
  const { isLoggedIn } = useAuth()
  
  const stockStatus = product.stock > 10 ? "På lager" : product.stock > 0 ? "Få på lager" : "Ikke på lager"
  const stockColor =
    product.stock > 10
      ? "bg-green-100 text-green-800"
      : product.stock > 0
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800"

  return (
    <div className="group bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative bg-neutral-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform"
          />
          {product.technology && (
            <span className="absolute top-3 left-3 bg-[#0066b3] text-white text-xs font-medium px-2 py-1 rounded">
              {product.technology}
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-neutral-500 mb-1">{product.sku}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-neutral-900 hover:text-[#0066b3] transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
          {product.voltage && <span>{product.voltage}V</span>}
          {product.ah && <span>{product.ah}Ah</span>}
          {product.length && product.width && product.height && (
            <span>
              {product.length}x{product.width}x{product.height}mm
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded ${stockColor}`}>
            {stockStatus}
          </span>
        </div>
        <div className="flex items-end justify-between">
          {isLoggedIn ? (
            <div>
              <p className="text-xs text-neutral-500">Fra</p>
              <p className="text-xl font-bold text-neutral-900">{product.price.toLocaleString("da-DK")} kr</p>
            </div>
          ) : (
            <p className="text-sm text-neutral-500">Log ind for pris</p>
          )}
          {isLoggedIn && (
            <button className="bg-[#0066b3] text-white text-sm font-medium px-3 py-2 rounded hover:bg-[#005299] transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Tilføj
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

