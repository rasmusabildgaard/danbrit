"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus } from "lucide-react"

const campaigns = [
  {
    id: "1",
    name: "Black Friday 2024",
    segment: "Alle kunder",
    discount: "20%",
    startDate: "2024-11-25",
    endDate: "2024-12-01",
    status: "scheduled",
    products: 156,
  },
  {
    id: "2",
    name: "A-kunde rabat december",
    segment: "A-kunder",
    discount: "15%",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "active",
    products: 89,
  },
  {
    id: "3",
    name: "Truckcenter kampagne",
    segment: "Truckcenter",
    discount: "25%",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    status: "active",
    products: 45,
  },
  {
    id: "4",
    name: "Marine sæsonstart",
    segment: "Marine forhandlere",
    discount: "10%",
    startDate: "2024-03-01",
    endDate: "2024-04-30",
    status: "ended",
    products: 28,
  },
]

export default function AdminCampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCampaigns = campaigns.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.segment.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Aktiv</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-700">Planlagt</Badge>
      case "ended":
        return <Badge variant="secondary">Afsluttet</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Kampagner</h1>
        <p className="text-muted-foreground">Opret og administrer kampagner og tilbud</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Søg i kampagner..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" />
          Ny kampagne
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Aktive kampagner</p>
          <p className="text-2xl font-bold text-green-600">{campaigns.filter(c => c.status === "active").length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Planlagte</p>
          <p className="text-2xl font-bold text-blue-600">{campaigns.filter(c => c.status === "scheduled").length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Afsluttede</p>
          <p className="text-2xl font-bold text-m\
