import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  LinkIcon,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Users,
  Package,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overblik over Danbrit Direct platformen</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              +12%
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">Ordrer i dag</p>
          <p className="text-2xl font-bold text-foreground">47</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              +8%
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">Omsætning i dag</p>
          <p className="text-2xl font-bold text-foreground">124.500 kr</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Aktive kunder</p>
          <p className="text-2xl font-bold text-foreground">1.247</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5 text-orange-600" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Produkter</p>
          <p className="text-2xl font-bold text-foreground">2.456</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Integration status */}
        <div className="bg-card border border-border rounded-lg">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Integrationsstatus
            </h2>
            <Link href="/admin/integrations" className="text-accent text-sm hover:underline">
              Se detaljer
            </Link>
          </div>
          <div className="divide-y divide-border">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-foreground">Business Central - Priser</p>
                  <p className="text-sm text-muted-foreground">Sidst synkroniseret: 5 min siden</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">Online</Badge>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-foreground">Business Central - Lager</p>
                  <p className="text-sm text-muted-foreground">Sidst synkroniseret: 2 min siden</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">Online</Badge>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-foreground">Nummerplade API</p>
                  <p className="text-sm text-muted-foreground">Langsom responstid</p>
                </div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Advarsel</Badge>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-card border border-border rounded-lg">
          <div className="p-6 border-b border-border">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Seneste aktivitet
            </h2>
          </div>
          <div className="divide-y divide-border">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Ny ordre</span> fra Hansens Autoværksted
                  </p>
                  <p className="text-xs text-muted-foreground">For 3 minutter siden</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Ordre leveret</span> SO-2024-001234
                  </p>
                  <p className="text-xs text-muted-foreground">For 15 minutter siden</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Ny kunde</span> oprettet i systemet
                  </p>
                  <p className="text-xs text-muted-foreground">For 1 time siden</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Prissynkronisering</span> fuldført
                  </p>
                  <p className="text-xs text-muted-foreground">For 2 timer siden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
