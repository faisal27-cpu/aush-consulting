import { createClient } from "@/lib/supabase/server"

interface AdminTopbarProps {
  title: string
}

export async function AdminTopbar({ title }: AdminTopbarProps) {
  const supabase = await createClient()

  const { data: unreadData } = await supabase
    .from("contact_submissions")
    .select("id", { count: "exact", head: true })
    .eq("status", "unread")

  const { data: { user } } = await supabase.auth.getUser()

  const unreadCount = (unreadData as unknown as { count: number } | null)?.count ?? 0

  return (
    <header
      className="h-14 px-6 flex items-center justify-between border-b shrink-0"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <h1 className="text-sm font-medium" style={{ color: "#F5F5F5" }}>
        {title}
      </h1>

      <div className="flex items-center gap-4">
        {unreadCount > 0 && (
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: "rgba(0,194,168,0.1)",
              color: "#00C2A8",
              border: "1px solid rgba(0,194,168,0.2)",
            }}
          >
            {unreadCount} unread
          </span>
        )}
        {user?.email && (
          <span className="text-xs" style={{ color: "#71717A" }}>
            {user.email}
          </span>
        )}
      </div>
    </header>
  )
}
