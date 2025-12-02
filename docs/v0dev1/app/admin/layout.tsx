import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-secondary flex">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
