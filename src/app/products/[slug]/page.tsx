"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/mock-data"
import { useState } from "react"

// Placeholder for authentication - replace with NextAuth
const useAuth = () => ({ isLoggedIn: false })

export default function ProductPage() {
  const params = useParams()
  const { isLoggedIn } = useAuth()
  const [activeTab, setActiveTab] = useState<"specs" | "compatibility" | "documents">("specs")
  const [quantity, setQuantity] = useState(1)

  // Find product by ID
  const productId = params.slug as string
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
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral-100 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Forside
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-neutral-900 transition-colors">
              Produkter
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/products/${product.categorySlug}`} className="hover:text-neutral-900 transition-colors">
              {product.categoryName}
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-neutral-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="bg-neutral-100 rounded-lg p-8 aspect-square relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            {product.technology && (
              <span className="absolute top-4 left-4 bg-[#0066b3] text-white text-xs font-medium px-2 py-1 rounded">
                {product.technology}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <p className="text-sm text-neutral-500 mb-1">
                {product.sku} {product.oemNumber && `| OEM: ${product.oemNumber}`}
              </p>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{product.name}</h1>
              <span className={`text-xs font-medium px-2 py-1 rounded ${stockColor}`}>
                {stockStatus} ({product.stock} stk)
              </span>
            </div>

            <p className="text-neutral-500 mb-6">{product.description}</p>

            {/* Specs quick view */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {product.voltage && (
                <div className="bg-neutral-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-neutral-500">Spænding</p>
                  <p className="font-semibold text-neutral-900">{product.voltage}V</p>
                </div>
              )}
              {product.ah && (
                <div className="bg-neutral-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-neutral-500">Kapacitet</p>
                  <p className="font-semibold text-neutral-900">{product.ah}Ah</p>
                </div>
              )}
              {product.length && (
                <div className="bg-neutral-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-neutral-500">Længde</p>
                  <p className="font-semibold text-neutral-900">{product.length}mm</p>
                </div>
              )}
              {product.technology && (
                <div className="bg-neutral-100 rounded-lg p-3 text-center">
                  <p className="text-sm text-neutral-500">Teknologi</p>
                  <p className="font-semibold text-neutral-900">{product.technology}</p>
                </div>
              )}
            </div>

            {/* Price section */}
            {isLoggedIn ? (
              <div className="bg-neutral-100 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-neutral-500">Listepris</p>
                    <p className="text-3xl font-bold text-neutral-900">{product.price.toLocaleString("da-DK")} kr</p>
                    <p className="text-sm text-neutral-500">ekskl. moms</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#0066b3] font-medium">Din pris</p>
                    <p className="text-sm text-neutral-500">-15% rabat</p>
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-neutral-200 rounded-lg bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-neutral-100 rounded-l-lg transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-0 focus:ring-0" 
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-neutral-100 rounded-r-lg transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <button className="flex-1 bg-[#0066b3] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#005299] transition-colors flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Læg i kurv
                  </button>
                  <button className="p-3 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
                    <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-neutral-100 rounded-lg p-6 mb-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Log ind for at se priser</h3>
                <p className="text-neutral-500 mb-4">Priser er kun tilgængelige for registrerede erhvervskunder.</p>
                <div className="flex gap-3 justify-center">
                  <Link href="/customer/login" className="bg-[#0066b3] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#005299] transition-colors">
                    Log ind
                  </Link>
                  <Link href="/customer/register" className="bg-white border border-neutral-200 text-neutral-700 px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
                    Opret konto
                  </Link>
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Hurtig levering</p>
                  <p className="text-neutral-500">1-2 hverdage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">2 års garanti</p>
                  <p className="text-neutral-500">Fuld dækning</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Nem retur</p>
                  <p className="text-neutral-500">30 dage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-neutral-200">
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab("specs")}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "specs"
                    ? "border-[#0066b3] text-[#0066b3]"
                    : "border-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Specifikationer
              </button>
              <button
                onClick={() => setActiveTab("compatibility")}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "compatibility"
                    ? "border-[#0066b3] text-[#0066b3]"
                    : "border-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Passer til
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "documents"
                    ? "border-[#0066b3] text-[#0066b3]"
                    : "border-transparent text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Dokumenter
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "specs" && (
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900 w-1/3">Varenummer</td>
                      <td className="px-4 py-3 text-neutral-700">{product.sku}</td>
                    </tr>
                    {product.oemNumber && (
                      <tr>
                        <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900">OEM-nummer</td>
                        <td className="px-4 py-3 text-neutral-700">{product.oemNumber}</td>
                      </tr>
                    )}
                    {product.voltage && (
                      <tr>
                        <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900">Spænding</td>
                        <td className="px-4 py-3 text-neutral-700">{product.voltage}V</td>
                      </tr>
                    )}
                    {product.ah && (
                      <tr>
                        <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900">Kapacitet</td>
                        <td className="px-4 py-3 text-neutral-700">{product.ah}Ah</td>
                      </tr>
                    )}
                    {product.technology && (
                      <tr>
                        <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900">Teknologi</td>
                        <td className="px-4 py-3 text-neutral-700">{product.technology}</td>
                      </tr>
                    )}
                    {product.length && product.width && product.height && (
                      <tr>
                        <td className="px-4 py-3 bg-neutral-50 font-medium text-neutral-900">Dimensioner (LxBxH)</td>
                        <td className="px-4 py-3 text-neutral-700">
                          {product.length} x {product.width} x {product.height} mm
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "compatibility" && (
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <p className="text-neutral-500 mb-4">
                  Dette batteri passer til følgende køretøjer og anvendelser:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-neutral-700">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    VW Golf, Passat, Polo (2010-2024)
                  </li>
                  <li className="flex items-center gap-2 text-neutral-700">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Audi A3, A4, A6 (2012-2024)
                  </li>
                  <li className="flex items-center gap-2 text-neutral-700">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Skoda Octavia, Superb (2013-2024)
                  </li>
                  <li className="flex items-center gap-2 text-neutral-700">
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Seat Leon, Ibiza (2011-2024)
                  </li>
                </ul>
                <p className="text-sm text-neutral-500 mt-4">
                  Brug vores{" "}
                  <Link href="/license-plate" className="text-[#0066b3] hover:underline">
                    nummerpladesøgning
                  </Link>{" "}
                  for at bekræfte kompatibilitet.
                </p>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <p className="text-neutral-500">Ingen dokumenter tilgængelige for dette produkt.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Relaterede produkter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
