import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { ContactSubmission } from "@/lib/types"

interface RecentSubmissionsProps {
  submissions: ContactSubmission[]
}

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  unread: {
    bg: "rgba(0,194,168,0.08)",
    color: "#00C2A8",
    border: "rgba(0,194,168,0.2)",
  },
  read: {
    bg: "rgba(161,161,170,0.08)",
    color: "#A1A1AA",
    border: "#2A2A2F",
  },
  responded: {
    bg: "rgba(34,197,94,0.08)",
    color: "#22C55E",
    border: "rgba(34,197,94,0.2)",
  },
}

export function RecentSubmissions({ submissions }: RecentSubmissionsProps) {
  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <div
        className="px-6 py-4 flex items-center justify-between border-b"
        style={{ borderColor: "#1C1C1F" }}
      >
        <p className="text-sm font-medium" style={{ color: "#F5F5F5" }}>
          Recent Submissions
        </p>
        <Link
          href="/admin/contacts"
          className="text-xs transition-colors hover:opacity-80"
          style={{ color: "#00C2A8" }}
        >
          View all →
        </Link>
      </div>

      {submissions.length === 0 ? (
        <div className="px-6 py-8 text-center">
          <p className="text-sm" style={{ color: "#71717A" }}>
            No submissions yet.
          </p>
        </div>
      ) : (
        <div className="divide-y" style={{ borderColor: "#1C1C1F" }}>
          {submissions.map((s) => {
            const style = statusStyles[s.status] ?? statusStyles.read
            return (
              <Link
                key={s.id}
                href={`/admin/contacts/${s.id}`}
                className="block px-6 py-4 transition-colors hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium truncate" style={{ color: "#F5F5F5" }}>
                    {s.name}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-medium shrink-0"
                    style={{
                      backgroundColor: style.bg,
                      color: style.color,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="text-xs mt-1 truncate" style={{ color: "#71717A" }}>
                  {s.company ? `${s.company} · ` : ""}
                  {formatDate(s.created_at)}
                </p>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
