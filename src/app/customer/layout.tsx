/**
 * Customer Layout
 * Layout for kundeområdet - kræver CUSTOMER eller ADMIN rolle
 * Autorisation håndteres i middleware.ts
 */

import { ReactNode } from 'react'

interface CustomerLayoutProps {
  children: ReactNode
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Customer Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="text-2xl font-bold text-blue-900">
                Danbrit Direct
              </a>
              <span className="hidden md:block text-sm text-gray-500 border-l pl-4">
                Kundeportal
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="/customer/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </a>
              <a href="/customer/orders" className="text-gray-700 hover:text-blue-600 transition-colors">
                Ordrer
              </a>
              <a href="/customer/favorites" className="text-gray-700 hover:text-blue-600 transition-colors">
                Favoritter
              </a>
              <a href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Shop
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* User menu */}
              <div className="relative">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                  <span className="hidden md:block text-sm">Min konto</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Danbrit A/S. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  )
}

