"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, FolderTree } from "lucide-react"

const mappings = [
  {
    id: "1",
    bcCode: "STARTER-12V",
    bcName: "Startbatterier 12V",
    webCategory: "Startbatterier",
    productCount: 45,
    active: true,
  },
  {
    id: "2",
    bcCode: "STARTER-24V",
    bcName: "Startbatterier 24V",
    webCategory: "Lastbil & Bus",
    productCount: 15,
    active: true,
  },
  {
    id: "3",
    bcCode: "IND-TRAK",
    bcName: "Industri Traktionsbatterier",
    webCategory: "Industribatterier",
    productCount: 32,
    active: true,
  },
  {
    id: "4",
    bcCode: "MARINE-DC",
    bcName: "Marine Deep Cycle",
    webCategory: "Marine & Fritid",
    productCount: 18,
    active: true,
  },
  {
    id: "5",
    bcCode: "SOLAR-GEL",
    bcName: "Solcelle GEL",
    webCategory: "Solcelle & Backup",
    productCount: 12,
    active: true,
  },
  {
    id: "6",
    bcCode: "MOTO-AGM",
    bcName: "Motorcykel AGM",
    webCategory: "Motorcykel & ATV",
    productCount: 24,
    active: true,
  },
  { id: "7", bcCode: "LEGACY-OLD", bcName: "Gamle batterityper", webCategory: null, productCount: 8, active: false },
]

export default function AdminCatalogMappingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMappings = mappings.filter(
    (m) =>
      m.bcCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.bcName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.webCategory && m.webCategory.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Katalog-mapping</h1>
        <p className="text-muted-foreground">Tilknyt Business Central varegrupper til webshop-kategorier</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Søg i mappings..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" />
          Ny mapping
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Aktive mappings</p>
          <p className="text-2xl font-bold text-foreground">{mappings.filter((m) => m.active).length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Umappede grupper</p>
          <p className="text-2xl font-bold text-yellow-600">{mappings.filter((m) => !m.webCategory).length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Produkter mappet</p>
          <p className="text-2xl font-bold text-foreground">{mappings.reduce((acc, m) => acc + m.productCount, 0)}</p>
        </div>
      </div>

      {/* Mapping table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-foreground">BC Kode</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-foreground">BC Navn</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Webshop kategori</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Produkter</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Status</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-foreground">Handlinger</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredMappings.map((mapping) => (
              <tr key={mapping.id} className="hover:bg-secondary/50">
                <td className="px-6 py-4">
                  <code className="text-sm bg-secondary px-2 py-1 rounded">{mapping.bcCode}</code>
                </td>
                <td className="px-6 py-4 text-foreground">{mapping.bcName}</td>
                <td className="px-6 py-4">
                  {mapping.webCategory ? (
                    <div className="flex items-center gap-2">
                      <FolderTree className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{mapping.webCategory}</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground italic">Ikke mappet</span>
                  )}
                </td>
                <td className="px-6 py-4 text-muted-foreground">{mapping.productCount}</td>
                <td className="px-6 py-4">
                  {mapping.active ? (
                    <Badge className="bg-green-100 text-green-700">Aktiv</Badge>
                  ) : (
                    <Badge variant="secondary">Inaktiv</Badge>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
