import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight } from "lucide-react"

export default function CustomerLoginPage() {
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
              <span className="text-foreground font-medium">Kundelogin</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-md px-4 py-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <Image
                src="/danbrit-direct-battery-wholesale-company-logo-prof.jpg"
                alt="Danbrit Direct"
                width={160}
                height={40}
                className="h-10 w-auto mx-auto object-contain mb-6"
              />
              <h1 className="text-2xl font-bold text-foreground mb-2">Log ind</h1>
              <p className="text-muted-foreground">Log ind for at se dine priser og bestille</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="din@email.dk" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Adgangskode</Label>
                  <Link href="/customer/forgot-password" className="text-sm text-accent hover:underline">
                    Glemt adgangskode?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Husk mig
                </Label>
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Log ind
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">Har du ikke en konto?</p>
              <Link href="/customer/register">
                <Button variant="outline" className="w-full bg-transparent">
                  Bliv kunde hos Danbrit Direct
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
