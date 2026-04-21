"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { formatDate } from "@/lib/utils"
import type { ContactSubmission, SubmissionStatus } from "@/lib/types"

interface SubmissionsTableProps {
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

const filterTabs: { label: string; value: SubmissionStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Read", value: "read" },
  { label: "Responded", value: "responded" },
]

export function SubmissionsTable({ submissions }: SubmissionsTableProps) {
  const router = useRouter()
  const [filter, setFilter] = useState<SubmissionStatus | "all">("all")

  const filtered =
    filter === "all"
      ? submissions
      : submissions.filter((s) => s.status === filter)

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      {/* Filter tabs */}
      <div
        className="px-6 py-4 flex items-center gap-1 border-b overflow-x-auto"
        style={{ borderColor: "#1C1C1F" }}
      >
        {filterTabs.map((tab) => {
          const active = filter === tab.value
          return (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap"
              style={{
                backgroundColor: active ? "#18181B" : "transparent",
                color: active ? "#F5F5F5" : "#71717A",
              }}
            >
              {tab.label}
              <span
                className="ml-1.5 px-1.5 py-0.5 rounded text-xs"
                style={{
                  backgroundColor: active ? "#2A2A2F" : "transparent",
                  color: active ? "#A1A1AA" : "#71717A",
                }}
              >
                {tab.value === "all"
                  ? submissions.length
                  : submissions.filter((s) => s.status === tab.value).length}
              </span>
            </button>
          )
        })}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="text-sm" style={{ color: "#71717A" }}>
            No submissions yet. When visitors submit the contact form, they&apos;ll
            appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid #1C1C1F" }}>
                {["Name", "Email", "Company", "Service", "Date", "Status"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider"
                      style={{ color: "#71717A" }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => {
                const style = statusStyles[s.status] ?? statusStyles.read
                return (
                  <tr
                    key={s.id}
                    className="cursor-pointer transition-colors"
                    style={{ borderBottom: "1px solid #1C1C1F" }}
                    onClick={() => router.push(`/admin/contacts/${s.id}`)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#18181B"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    <td
                      className="px-4 py-3.5 font-medium"
                      style={{ color: "#F5F5F5" }}
                    >
                      {s.name}
                    </td>
                    <td className="px-4 py-3.5" style={{ color: "#A1A1AA" }}>
                      {s.email}
                    </td>
                    <td className="px-4 py-3.5" style={{ color: "#A1A1AA" }}>
                      {s.company ?? "—"}
                    </td>
                    <td className="px-4 py-3.5" style={{ color: "#A1A1AA" }}>
                      {s.service_interest}
                    </td>
                    <td className="px-4 py-3.5" style={{ color: "#71717A" }}>
                      {formatDate(s.created_at)}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{
                          backgroundColor: style.bg,
                          color: style.color,
                          border: `1px solid ${style.border}`,
                        }}
                      >
                        {s.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
