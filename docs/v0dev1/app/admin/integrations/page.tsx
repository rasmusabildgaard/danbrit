import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle, RefreshCw, Settings, ExternalLink } from "lucide-react"

const integrations = [
  {
    id: "bc-prices",
    name: "Business Central - Priser",
    description: "Synkroniserer kundespecifikke priser og rabatter fra Business Central",
    status: "online",
    lastSync: "5 minutter siden",
    syncInterval: "Hver 15. minut",
  },
  {
    id: "bc-stock",
    name: "Business Central - Lagerstatus",
    description: "Real-time lagerstatus for alle produkter",
    status: "online",
    lastSync: "2 minutter siden",
    syncInterval: "Hver 5. minut",
  },
  {
    id: "bc-orders",
    name: "Business Central - Ordrer",
    description: "Opretter og synkroniserer ordrer til Business Central",
    status: "online",
    lastSync: "1 minut siden",
    syncInterval: "Real-time",
  },
  {
    id: "license-plate",
    name: "Nummerplade API (DMR)",
    description: "Opslag af køretøjsdata via nummerplade",
    status: "warning",
    lastSync: "10 minutter siden",
    syncInterval: "On-demand",
    warning: "Langsom responstid (>2s)",
  },
  {
    id: "email",
    name: "E-mail service",
    description: "Afsendelse af ordrebekræftelser og notifikationer",
    status: "online",
    lastSync: "Just nu",
    syncInterval: "Real-time",
  },
]

const logs = [
  { time: "14:32:15", type: "PRICE_LOOKUP", status: "SUCCESS", message: "Prisopslag for kunde 10045 - 12 produkter" },
  { time: "14:31:42", type: "ORDER_CREATE", status: "SUCCESS", message: "Ordre SO-2024-001289 oprettet i BC" },
  {
    time: "14:30:18",
    type: "STOCK_LOOKUP",
    status: "SUCCESS",
    message: "Lagersynkronisering fuldført - 2456 produkter",
  },
  { time: "14:28:55", type: "LICENSE_PLATE", status: "WARNING", message: "Langsom respons fra DMR API (2.3s)" },
  { time: "14:25:00", type: "PRICE_SYNC", status: "SUCCESS", message: "Fuld prissynkronisering fuldført" },
  { time: "14:20:12", type: "ORDER_CREATE", status: "SUCCESS", message: "Ordre SO-2024-001288 oprettet i BC" },
]

export default function AdminIntegrationsPage() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Integrationer</h1>
        <p className="text-muted-foreground">Administrer og overvåg systemintegrationer</p>
      </div>

      {/* Integrations grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {integrations.map((integration) => (
          <div key={integration.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {integration.status === "online" && <CheckCircle className="h-5 w-5 text-green-600" />}
                {integration.status === "warning" && <AlertCircle className="h-5 w-5 text-yellow-600" />}
                {integration.status === "offline" && <XCircle className="h-5 w-5 text-red-600" />}
                <div>
                  <h3 className="font-semibold text-foreground">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
              </div>
              <Badge
                className={
                  integration.status === "online"
                    ? "bg-green-100 text-green-700"
                    : integration.status === "warning"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }
              >
                {integration.status === "online" ? "Online" : integration.status === "warning" ? "Advarsel" : "Offline"}
              </Badge>
            </div>

            {integration.warning && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-sm text-yellow-800">
                {integration.warning}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-muted-foreground">Sidst synkroniseret</p>
                <p className="font-medium text-foreground">{integration.lastSync}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Synkroniseringsinterval</p>
                <p className="font-medium text-foreground">{integration.syncInterval}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                Synkroniser nu
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-1" />
                Indstillinger
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Integration logs */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-foreground">Integrationslog</h2>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4 mr-1" />
            Se alle logs
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-foreground">Tid</th>
                <th className="text-left px-6 py-3 font-medium text-foreground">Type</th>
                <th className="text-left px-6 py-3 font-medium text-foreground">Status</th>
                <th className="text-left px-6 py-3 font-medium text-foreground">Besked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.map((log, index) => (
                <tr key={index} className="hover:bg-secondary/50">
                  <td className="px-6 py-3 font-mono text-muted-foreground">{log.time}</td>
                  <td className="px-6 py-3">
                    <Badge variant="outline">{log.type}</Badge>
                  </td>
                  <td className="px-6 py-3">
                    <Badge
                      className={
                        log.status === "SUCCESS"
                          ? "bg-green-100 text-green-700"
                          : log.status === "WARNING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }
                    >
                      {log.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-3 text-foreground">{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
