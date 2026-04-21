"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { updateSubmissionStatus, addSubmissionNote } from "@/lib/actions/submissions"
import type { SubmissionStatus } from "@/lib/types"

interface SubmissionActionsProps {
  id: string
  status: SubmissionStatus
  currentNote: string | null
}

export function SubmissionActions({ id, status, currentNote }: SubmissionActionsProps) {
  const [loading, setLoading] = useState<string | null>(null)
  const [note, setNote] = useState(currentNote ?? "")
  const [noteLoading, setNoteLoading] = useState(false)
  const [noteSaved, setNoteSaved] = useState(false)

  async function handleStatusChange(newStatus: SubmissionStatus) {
    setLoading(newStatus)
    await updateSubmissionStatus(id, newStatus)
    setLoading(null)
  }

  async function handleSaveNote(e: React.FormEvent) {
    e.preventDefault()
    setNoteLoading(true)
    await addSubmissionNote(id, note)
    setNoteLoading(false)
    setNoteSaved(true)
    setTimeout(() => setNoteSaved(false), 2000)
  }

  const actionButtons: { label: string; status: SubmissionStatus; show: boolean }[] = [
    { label: "Mark as Read", status: "read", show: status === "unread" },
    { label: "Mark as Responded", status: "responded", show: status !== "responded" },
    { label: "Mark as Unread", status: "unread", show: status !== "unread" },
  ]

  return (
    <div className="space-y-6">
      {/* Status actions */}
      <div
        className="rounded-xl border p-6"
        style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
      >
        <p
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: "#71717A" }}
        >
          Actions
        </p>
        <div className="flex flex-wrap gap-3">
          {actionButtons
            .filter((b) => b.show)
            .map((btn) => (
              <button
                key={btn.status}
                onClick={() => handleStatusChange(btn.status)}
                disabled={loading !== null}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors disabled:opacity-60"
                style={{
                  borderColor: "#2A2A2F",
                  color: "#F5F5F5",
                  backgroundColor: "transparent",
                }}
              >
                {loading === btn.status ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : null}
                {btn.label}
              </button>
            ))}
        </div>
      </div>

      {/* Notes */}
      <div
        className="rounded-xl border p-6"
        style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
      >
        <p
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: "#71717A" }}
        >
          Internal Notes
        </p>
        <form onSubmit={handleSaveNote} className="space-y-3">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="Add internal notes about this submission..."
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
            style={{
              backgroundColor: "#0C0C0E",
              border: "1px solid #1C1C1F",
              color: "#F5F5F5",
            }}
            onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
            onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
          />
          <button
            type="submit"
            disabled={noteLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-60"
            style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
          >
            {noteLoading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : null}
            {noteSaved ? "Saved!" : "Save Note"}
          </button>
        </form>
      </div>
    </div>
  )
}
