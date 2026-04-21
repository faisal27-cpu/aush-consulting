"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, MessageSquare, FileEdit, LogOut } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/contacts", label: "Contacts", icon: MessageSquare, exact: false },
  { href: "/admin/content", label: "Content", icon: FileEdit, exact: false },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  function isActive(item: (typeof navItems)[0]) {
    return item.exact ? pathname === item.href : pathname.startsWith(item.href)
  }

  return (
    <aside
      className="hidden lg:flex w-64 flex-col border-r shrink-0"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      {/* Logo */}
      <div
        className="h-14 px-6 flex items-center gap-2 border-b"
        style={{ borderColor: "#1C1C1F" }}
      >
        <span className="font-mono font-bold text-base" style={{ color: "#00C2A8" }}>
          AUSH
        </span>
        <span className="text-xs" style={{ color: "#71717A" }}>
          Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item)
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{
                backgroundColor: active ? "#18181B" : "transparent",
                color: active ? "#F5F5F5" : "#A1A1AA",
              }}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t" style={{ borderColor: "#1C1C1F" }}>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm w-full transition-colors hover:bg-[#18181B]"
          style={{ color: "#71717A" }}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
