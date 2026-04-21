"use client"

import { useState } from "react"
import { Pencil, Trash2, Plus, Loader2, X } from "lucide-react"
import { upsertTestimonial, deleteTestimonial } from "@/lib/actions/content"
import { getInitials } from "@/lib/utils"
import type { Testimonial } from "@/lib/types"

interface TestimonialsEditorProps {
  testimonials: Testimonial[]
}

interface FormData {
  id?: string
  author_name: string
  author_role: string
  author_company: string
  content: string
  is_active: boolean
}

const empty: FormData = {
  author_name: "",
  author_role: "",
  author_company: "",
  content: "",
  is_active: true,
}

export function TestimonialsEditor({ testimonials }: TestimonialsEditorProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [form, setForm] = useState<FormData>(empty)
  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [error, setError] = useState("")

  function openAdd() {
    setForm(empty)
    setError("")
    setDialogOpen(true)
  }

  function openEdit(t: Testimonial) {
    setForm({
      id: t.id,
      author_name: t.author_name,
      author_role: t.author_role,
      author_company: t.author_company,
      content: t.content,
      is_active: t.is_active,
    })
    setError("")
    setDialogOpen(true)
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError("")
    const result = await upsertTestimonial(form)
    if (!result.success) {
      setError(result.error ?? "Save failed")
      setSaving(false)
      return
    }
    setSaving(false)
    setDialogOpen(false)
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure? This cannot be undone.")) return
    setDeletingId(id)
    await deleteTestimonial(id)
    setDeletingId(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: "#71717A" }}>
          {testimonials.length} testimonial{testimonials.length !== 1 ? "s" : ""}
        </p>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
          style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
        >
          <Plus className="w-3.5 h-3.5" />
          Add Testimonial
        </button>
      </div>

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-xl border p-6"
            style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{ backgroundColor: "rgba(0,194,168,0.1)", color: "#00C2A8" }}
                  >
                    {getInitials(t.author_name)}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#F5F5F5" }}>
                      {t.author_name}
                    </p>
                    <p className="text-xs" style={{ color: "#71717A" }}>
                      {t.author_role}, {t.author_company}
                    </p>
                  </div>
                  {!t.is_active && (
                    <span
                      className="text-xs px-2 py-0.5 rounded ml-2"
                      style={{ backgroundColor: "#18181B", color: "#71717A" }}
                    >
                      hidden
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openEdit(t)}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F5F5" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#71717A" }}
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  disabled={deletingId === t.id}
                  className="p-1.5 rounded-lg transition-colors disabled:opacity-40"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#EF4444" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#71717A" }}
                >
                  {deletingId === t.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div
            className="rounded-xl border p-12 text-center"
            style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
          >
            <p className="text-sm" style={{ color: "#71717A" }}>
              No testimonials yet. Add one to display it on the public site.
            </p>
          </div>
        )}
      </div>

      {/* Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            onClick={() => setDialogOpen(false)}
          />
          <div
            className="relative w-full max-w-lg rounded-xl border p-6 z-10"
            style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold" style={{ color: "#F5F5F5" }}>
                {form.id ? "Edit Testimonial" : "Add Testimonial"}
              </h2>
              <button
                onClick={() => setDialogOpen(false)}
                className="p-1.5 rounded-lg"
                style={{ color: "#71717A" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>
                    Author Name *
                  </label>
                  <input
                    required
                    value={form.author_name}
                    onChange={(e) => setForm({ ...form, author_name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                    onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                    onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>
                    Role *
                  </label>
                  <input
                    required
                    value={form.author_role}
                    onChange={(e) => setForm({ ...form, author_role: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                    onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                    onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>
                  Company *
                </label>
                <input
                  required
                  value={form.author_company}
                  onChange={(e) => setForm({ ...form, author_company: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                  onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                  onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>
                  Quote *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                  style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                  onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                  onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={form.is_active}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="is_active" className="text-sm" style={{ color: "#A1A1AA" }}>
                  Show on public site
                </label>
              </div>

              {error && (
                <p className="text-sm" style={{ color: "#EF4444" }}>
                  {error}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-60"
                  style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
                >
                  {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium border"
                  style={{ borderColor: "#2A2A2F", color: "#A1A1AA" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
