"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, LinkIcon, FolderTree, Megaphone, FileText, LogOut } from "lucide-react"

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/integrations", label: "Integrationer", icon: LinkIcon },
  { href: "/admin/catalog-mapping", label: "Katalog-mapping", icon: FolderTree },
  { href: "/admin/campaigns", label: "Kampagner", icon: Megaphone },
  { href: "/admin/content", label: "Indhold", icon: FileText },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-primary text-primary-foreground flex flex-col min-h-screen">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="block">
          <Image
            src="/danbrit-direct-logo-white-battery-company.jpg"
            alt="Danbrit Direct"
            width={140}
            height={36}
            className="h-8 w-auto object-contain mb-1"
          />
          <span className="text-white/60 text-xs">Administration</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "bg-white/10 text-white" : "hover:bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link href="/" className="block mb-2">
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
            Se webshop
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
          <LogOut className="h-4 w-4 mr-3" />
          Log ud
        </Button>
      </div>
    </aside>
  )
}
