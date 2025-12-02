import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight } from "lucide-react"

export default function CustomerRegisterPage() {
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
              <span className="text-foreground font-medium">Bliv kunde</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">Bliv kunde hos Danbrit Direct</h1>
              <p className="text-muted-foreground">
                Udfyld formularen herunder, så kontakter vi dig inden for 1-2 hverdage.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Firmanavn *</Label>
                  <Input id="companyName" placeholder="Dit firma ApS" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvr">CVR-nummer *</Label>
                  <Input id="cvr" placeholder="12345678" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Kontaktperson *</Label>
                  <Input id="contactName" placeholder="Hans Hansen" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input id="phone" type="tel" placeholder="+45 12 34 56 78" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="info@firma.dk" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse *</Label>
                <Input id="address" placeholder="Industrivej 42" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">Postnummer *</Label>
                  <Input id="zip" placeholder="4600" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">By *</Label>
                  <Input id="city" placeholder="Køge" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Branche</Label>
                <select id="business" className="w-full border border-border rounded-md px-3 py-2 bg-background">
                  <option value="">Vælg branche...</option>
                  <option value="auto">Autoværksted</option>
                  <option value="fleet">Vognpark / Fleet</option>
                  <option value="industry">Industri</option>
                  <option value="agriculture">Landbrug</option>
                  <option value="marine">Marine / Båd</option>
                  <option value="other">Andet</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Besked (valgfrit)</Label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Fortæl os lidt om din virksomhed og dine behov..."
                  className="w-full border border-border rounded-md px-3 py-2 bg-background resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                  Jeg accepterer Danbrit Directs{" "}
                  <Link href="/terms" className="text-accent hover:underline">
                    handelsbetingelser
                  </Link>{" "}
                  og{" "}
                  <Link href="/privacy" className="text-accent hover:underline">
                    privatlivspolitik
                  </Link>{" "}
                  *
                </Label>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm font-normal">
                  Ja tak, jeg vil gerne modtage nyhedsbreve med tilbud og produktnyheder
                </Label>
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send ansøgning
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Har du allerede en konto?{" "}
                <Link href="/customer/login" className="text-accent hover:underline">
                  Log ind her
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
