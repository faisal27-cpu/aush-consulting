import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminSidebar } from "@/components/admin/AdminSidebar"

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#0C0C0E" }}
    >
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <main
          className="flex-1 overflow-y-auto p-6"
          style={{ backgroundColor: "#0C0C0E" }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
