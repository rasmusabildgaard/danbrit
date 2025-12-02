import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/industrial-warehouse-batteries-dark-moody-professi.jpg" alt="Background" fill className="object-cover opacity-10" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="mb-6">
            <Image
              src="/danbrit-direct-logo-white-battery-company.jpg"
              alt="Danbrit Direct"
              width={180}
              height={48}
              className="h-12 w-auto mx-auto object-contain"
            />
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground mb-2">Admin Login</h1>
          <p className="text-white/70">Danbrit Direct Administration</p>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="admin@danbritdirect.dk" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Adgangskode</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Log ind
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-white/50 mt-6">
          <Link href="/" className="hover:text-white transition-colors">
            Tilbage til webshoppen
          </Link>
        </p>
      </div>
    </div>
  )
}
