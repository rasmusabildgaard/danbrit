import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info - Updated logo */}
          <div>
            <div className="mb-4">
              <Image
                src="/danbrit-direct-logo-white-battery-company.jpg"
                alt="Danbrit Direct"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Danmarks førende B2B-leverandør af kvalitetsbatterier til alle formål. Over 30 års erfaring i branchen.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+4570707070"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                +45 70 70 70 70
              </a>
              <a
                href="mailto:salg@danbritdirect.dk"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                salg@danbritdirect.dk
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Industrivej 42
                  <br />
                  4600 Køge
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Produkter</h3>
            <ul className="space-y-2 text-sm text-white/70">
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
                <Link href="/products/solcelle-backup" className="hover:text-accent transition-colors">
                  Solcelle & Backup
                </Link>
              </li>
              <li>
                <Link href="/products/motorcykel-atv" className="hover:text-accent transition-colors">
                  Motorcykel & ATV
                </Link>
              </li>
              <li>
                <Link href="/products/lastbil-bus" className="hover:text-accent transition-colors">
                  Lastbil & Bus
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold mb-4">Kundeservice</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/customer/login" className="hover:text-accent transition-colors">
                  Kundelogin
                </Link>
              </li>
              <li>
                <Link href="/license-plate" className="hover:text-accent transition-colors">
                  Nummerpladesøgning
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-accent transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/support/shipping" className="hover:text-accent transition-colors">
                  Levering
                </Link>
              </li>
              <li>
                <Link href="/support/returns" className="hover:text-accent transition-colors">
                  Reklamation
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">Om Danbrit</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="hover:text-accent transition-colors">
                  Vores historie
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="hover:text-accent transition-colors">
                  Bæredygtighed
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="hover:text-accent transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Handelsbetingelser
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Danbrit Direct. Alle rettigheder forbeholdes.</p>
          <p>CVR: 12345678</p>
        </div>
      </div>
    </footer>
  )
}
