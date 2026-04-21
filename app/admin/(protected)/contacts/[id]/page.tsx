import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { SubmissionActions } from "@/components/admin/SubmissionActions"
import { formatDate } from "@/lib/utils"
import type { ContactSubmission } from "@/lib/types"

export const dynamic = "force-dynamic"

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  unread: { bg: "rgba(0,194,168,0.08)", color: "#00C2A8", border: "rgba(0,194,168,0.2)" },
  read: { bg: "rgba(161,161,170,0.08)", color: "#A1A1AA", border: "#2A2A2F" },
  responded: { bg: "rgba(34,197,94,0.08)", color: "#22C55E", border: "rgba(34,197,94,0.2)" },
}

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/admin/login")

  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) notFound()

  const s = data as ContactSubmission
  const style = statusStyles[s.status] ?? statusStyles.read

  const fields = [
    { label: "Email", value: s.email },
    { label: "Company", value: s.company ?? "—" },
    { label: "Service Interest", value: s.service_interest },
    { label: "Submitted", value: formatDate(s.created_at) },
  ]

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Back link */}
      <Link
        href="/admin/contacts"
        className="inline-flex items-center gap-1.5 text-sm transition-colors hover:opacity-80"
        style={{ color: "#71717A" }}
      >
        <ArrowLeft className="w-4 h-4" />
        All Submissions
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold" style={{ color: "#F5F5F5" }}>
            {s.name}
          </h1>
          <p className="text-sm mt-1" style={{ color: "#71717A" }}>
            {formatDate(s.created_at)}
          </p>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded font-medium shrink-0"
          style={{
            backgroundColor: style.bg,
            color: style.color,
            border: `1px solid ${style.border}`,
          }}
        >
          {s.status}
        </span>
      </div>

      {/* Details card */}
      <div
        className="rounded-xl border divide-y overflow-hidden"
        style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
      >
        {fields.map((f) => (
          <div key={f.label} className="px-6 py-4 flex gap-8">
            <span
              className="text-xs font-mono uppercase tracking-wider w-32 shrink-0 pt-0.5"
              style={{ color: "#71717A" }}
            >
              {f.label}
            </span>
            <span className="text-sm" style={{ color: "#F5F5F5" }}>
              {f.value}
            </span>
          </div>
        ))}

        {/* Message */}
        <div className="px-6 py-4">
          <p
            className="text-xs font-mono uppercase tracking-wider mb-3"
            style={{ color: "#71717A" }}
          >
            Message
          </p>
          <p
            className="text-sm leading-relaxed whitespace-pre-wrap"
            style={{ color: "#A1A1AA" }}
          >
            {s.message}
          </p>
        </div>
      </div>

      {/* Actions + Notes */}
      <SubmissionActions id={s.id} status={s.status} currentNote={s.notes} />
    </div>
  )
}
