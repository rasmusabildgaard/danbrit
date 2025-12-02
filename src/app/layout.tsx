import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danbrit - B2B Batterier til erhverv",
  description: "Danmarks førende B2B-leverandør af kvalitetsbatterier. Startbatterier, Truck batterier, Marine & Caravan, AGM og meget mere. Over 40 års erfaring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-neutral-50">
          {/* Top Bar */}
          <div className="bg-neutral-900 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
              <div className="flex items-center gap-4 flex-wrap">
                <a href="tel:+4598159300" className="flex items-center gap-2 hover:text-[#0066b3] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +45 98 15 93 00
                </a>
                <span className="text-neutral-600 hidden sm:inline">|</span>
                <span className="text-neutral-400 hidden sm:inline">Man-Tor 7:30-16:00 · Fre 7:30-15:30</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="/customer/login" className="hover:text-[#0066b3] transition-colors">Kundelogin</a>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 gap-8">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                  <span className="text-2xl font-bold text-[#0066b3] tracking-tight">DANBRIT</span>
                </a>

                {/* Search */}
                <div className="flex-grow max-w-2xl hidden md:block">
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Søg på varenr., OEM-nummer eller produktnavn..."
                      className="w-full px-4 py-2.5 pl-10 bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                    />
                    <svg className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a href="/customer/login" className="p-2 text-neutral-600 hover:text-[#0066b3] transition-colors" title="Min konto">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </a>
                  <a href="/cart" className="p-2 text-neutral-600 hover:text-[#0066b3] transition-colors relative" title="Indkøbskurv">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0066b3] text-white text-xs rounded-full flex items-center justify-center font-medium">0</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Category Navigation */}
            <nav className="bg-[#0066b3]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center gap-0 overflow-x-auto py-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                  <li>
                    <a href="/products" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Alle produkter
                    </a>
                  </li>
                  <li>
                    <a href="/products/startbatterier" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Startbatterier
                    </a>
                  </li>
                  <li>
                    <a href="/products/marine-caravan" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Marine & Caravan
                    </a>
                  </li>
                  <li>
                    <a href="/products/agm-batterier" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      AGM batterier
                    </a>
                  </li>
                  <li>
                    <a href="/products/truck-batterier" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Truck batterier
                    </a>
                  </li>
                  <li>
                    <a href="/products/traktions-batterier" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Traktionsbatterier
                    </a>
                  </li>
                  <li>
                    <a href="/products/lithium" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Lithium
                    </a>
                  </li>
                  <li>
                    <a href="/products/batterilader" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                      Batterilader
                    </a>
                  </li>
                  <li>
                    <a href="/license-plate" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap">
                      <span className="bg-yellow-400 text-neutral-900 text-xs px-1.5 py-0.5 rounded font-bold">NY</span>
                      Nummerpladesøgning
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-neutral-900 text-white">
            {/* Brand logos */}
            <div className="border-b border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-center text-sm text-neutral-500 uppercase tracking-wider mb-6">Vi forhandler</p>
                <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap opacity-50">
                  <span className="text-lg font-semibold">VARTA</span>
                  <span className="text-lg font-semibold">BOSCH</span>
                  <span className="text-lg font-semibold">Trojan</span>
                  <span className="text-lg font-semibold">Victron</span>
                  <span className="text-lg font-semibold">NOCO</span>
                  <span className="text-lg font-semibold">Vision</span>
                </div>
              </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company info */}
                <div>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-[#0066b3]">DANBRIT</span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4">
                    Danbrit Akkumulator A/S - Danmarks førende B2B-leverandør af kvalitetsbatterier. Over 40 års erfaring i branchen.
                  </p>
                  <div className="space-y-3 text-sm">
                    <a href="tel:+4598159300" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +45 98 15 93 00
                    </a>
                    <a href="mailto:salg@danbritas.dk" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      salg@danbritas.dk
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h4 className="font-semibold mb-4">Afdelinger</h4>
                  <div className="space-y-4 text-sm text-neutral-400">
                    <div>
                      <p className="text-white font-medium mb-1">Aalborg</p>
                      <p>Ankeret 4</p>
                      <p>9220 Aalborg Øst</p>
                      <a href="tel:+4598159300" className="hover:text-white transition-colors">Tlf: 98 15 93 00</a>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Brøndby</p>
                      <p>Nyager 9</p>
                      <p>2605 Brøndby</p>
                      <a href="tel:+4543621033" className="hover:text-white transition-colors">Tlf: 43 62 10 33</a>
                    </div>
                  </div>
                </div>

                {/* Products */}
                <div>
                  <h4 className="font-semibold mb-4">Produkter</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li><a href="/products/startbatterier" className="hover:text-white transition-colors">Startbatterier</a></li>
                    <li><a href="/products/marine-caravan" className="hover:text-white transition-colors">Marine & Caravan</a></li>
                    <li><a href="/products/agm-batterier" className="hover:text-white transition-colors">AGM batterier</a></li>
                    <li><a href="/products/truck-batterier" className="hover:text-white transition-colors">Truck batterier</a></li>
                    <li><a href="/products/traktions-batterier" className="hover:text-white transition-colors">Traktionsbatterier</a></li>
                    <li><a href="/products/lithium" className="hover:text-white transition-colors">Lithium batterier</a></li>
                    <li><a href="/products/batterilader" className="hover:text-white transition-colors">Batterilader</a></li>
                  </ul>
                </div>

                {/* Customer Service */}
                <div>
                  <h4 className="font-semibold mb-4">Kundeservice</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li><a href="/customer/login" className="hover:text-white transition-colors">Kundelogin</a></li>
                    <li><a href="/license-plate" className="hover:text-white transition-colors">Nummerpladesøgning</a></li>
                    <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt os</a></li>
                    <li><a href="/returneringer" className="hover:text-white transition-colors">Returneringer</a></li>
                    <li><a href="/garantibestemmelser" className="hover:text-white transition-colors">Garantibestemmelser</a></li>
                    <li><a href="/salgs-levering-betingelser" className="hover:text-white transition-colors">Salgs- & leveringsbetingelser</a></li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <p className="text-xs text-neutral-500 mb-2">Åbningstider</p>
                    <p className="text-sm text-neutral-400">Man-Tor: 7:30-16:00</p>
                    <p className="text-sm text-neutral-400">Fredag: 7:30-15:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-neutral-500">
                  © {new Date().getFullYear()} Danbrit Akkumulator A/S. Alle rettigheder forbeholdes.
                </p>
                <p className="text-sm text-neutral-500">
                  CVR: 81183228
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
