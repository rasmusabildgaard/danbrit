"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, User, ShoppingCart, Phone } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+4570707070" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+45 70 70 70 70</span>
            </a>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline text-white/60">Man-Fre 7:30-16:00</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/customer/login" className="hover:text-accent transition-colors">
              Kundelogin
            </Link>
            <Link href="/admin/login" className="hover:text-accent transition-colors hidden sm:inline">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/danbrit-direct-logo-white-battery-company.jpg"
              alt="Danbrit Direct"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Søg på varenr., OEM-nummer eller produktnavn..."
                className="pl-10 bg-white text-foreground border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/customer/login">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-white/10 hidden md:block">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-8 py-3 text-sm font-medium">
            <li>
              <Link href="/products" className="hover:text-accent transition-colors">
                Alle produkter
              </Link>
            </li>
            <li>
              <Link href="/products/startbatterier" className="hover:text-accent transition-colors">
                Startbatterier
              </Link>
            </li>
            <li>
              <Link href="/products/industribatterier" className="hover:text-accent transition-colors">
                Industribatterier
              </Link>
            </li>
            <li>
              <Link href="/products/marine-fritid" className="hover:text-accent transition-colors">
                Marine & Fritid
              </Link>
            </li>
            <li>
              <Link href="/license-plate" className="hover:text-accent transition-colors flex items-center gap-1.5">
                <span className="bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded">NY</span>
                Nummerpladesøgning
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <div className="px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Søg produkter..." className="pl-10 bg-white text-foreground border-0" />
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="block hover:text-accent transition-colors">
                  Alle produkter
                </Link>
              </li>
              <li>
                <Link href="/products/startbatterier" className="block hover:text-accent transition-colors">
                  Startbatterier
                </Link>
              </li>
              <li>
                <Link href="/products/industribatterier" className="block hover:text-accent transition-colors">
                  Industribatterier
                </Link>
              </li>
              <li>
                <Link href="/products/marine-fritid" className="block hover:text-accent transition-colors">
                  Marine & Fritid
                </Link>
              </li>
              <li>
                <Link href="/license-plate" className="block hover:text-accent transition-colors">
                  Nummerpladesøgning
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
