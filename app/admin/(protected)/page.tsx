import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { StatsCards } from "@/components/admin/StatsCards"
import { SubmissionsTrend } from "@/components/admin/SubmissionsTrend"
import { RecentSubmissions } from "@/components/admin/RecentSubmissions"
import type { ContactSubmission, DailyCount } from "@/lib/types"

export const dynamic = "force-dynamic"

export const metadata = { title: "Dashboard — Admin" }

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/admin/login")

  // Parallel fetches
  const [
    { count: total },
    { count: unread },
    { data: allSubmissions },
  ] = await Promise.all([
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "unread"),
    supabase
      .from("contact_submissions")
      .select("id, name, email, company, service_interest, message, status, notes, created_at")
      .order("created_at", { ascending: false })
      .limit(50),
  ])

  const submissions = (allSubmissions as ContactSubmission[]) ?? []

  // This month count
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
  const thisMonth = submissions.filter((s) => s.created_at >= startOfMonth).length

  // Build last 30 days trend
  const trendMap = new Map<string, number>()
  const today = new Date()
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    trendMap.set(d.toISOString().slice(0, 10), 0)
  }
  for (const s of submissions) {
    const day = s.created_at.slice(0, 10)
    if (trendMap.has(day)) {
      trendMap.set(day, (trendMap.get(day) ?? 0) + 1)
    }
  }
  const trend: DailyCount[] = Array.from(trendMap.entries()).map(([date, count]) => ({
    date,
    count,
  }))

  const recent = submissions.slice(0, 5)

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold" style={{ color: "#F5F5F5" }}>
            Dashboard
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#71717A" }}>
            Welcome back
          </p>
        </div>
      </div>

      {/* Stats */}
      <StatsCards
        total={total ?? 0}
        unread={unread ?? 0}
        thisMonth={thisMonth}
      />

      {/* Chart + Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SubmissionsTrend data={trend} />
        </div>
        <div>
          <RecentSubmissions submissions={recent} />
        </div>
      </div>
    </div>
  )
}
