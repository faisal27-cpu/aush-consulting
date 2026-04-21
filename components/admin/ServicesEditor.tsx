"use client"

import { useState } from "react"
import { Pencil, Trash2, Plus, Loader2, X } from "lucide-react"
import { upsertService, deleteService } from "@/lib/actions/content"
import type { Service, ServiceTier } from "@/lib/types"

interface ServicesEditorProps {
  services: Service[]
}

interface FormData {
  id?: string
  name: string
  description: string
  features: string[]
  tier: ServiceTier
  price: string
  is_active: boolean
}

const empty: FormData = {
  name: "",
  description: "",
  features: [""],
  tier: "starter",
  price: "",
  is_active: true,
}

export function ServicesEditor({ services }: ServicesEditorProps) {
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

  function openEdit(s: Service) {
    setForm({
      id: s.id,
      name: s.name,
      description: s.description,
      features: s.features.length > 0 ? s.features : [""],
      tier: s.tier,
      price: s.price,
      is_active: s.is_active,
    })
    setError("")
    setDialogOpen(true)
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError("")
    const cleanedFeatures = form.features.filter((f) => f.trim().length > 0)
    const result = await upsertService({ ...form, features: cleanedFeatures })
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
    await deleteService(id)
    setDeletingId(null)
  }

  function updateFeature(idx: number, val: string) {
    const f = [...form.features]
    f[idx] = val
    setForm({ ...form, features: f })
  }

  function addFeature() {
    setForm({ ...form, features: [...form.features, ""] })
  }

  function removeFeature(idx: number) {
    const f = form.features.filter((_, i) => i !== idx)
    setForm({ ...form, features: f.length > 0 ? f : [""] })
  }

  const tierLabel: Record<ServiceTier, string> = {
    starter: "Starter",
    growth: "Growth",
    enterprise: "Enterprise",
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: "#71717A" }}>
          {services.length} service{services.length !== 1 ? "s" : ""}
        </p>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
        >
          <Plus className="w-3.5 h-3.5" />
          Add Service
        </button>
      </div>

      <div className="space-y-3">
        {services.map((s) => (
          <div
            key={s.id}
            className="rounded-xl border p-6"
            style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ color: "#00C2A8" }}
                  >
                    {tierLabel[s.tier]}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#F5F5F5" }}>
                    {s.name}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#71717A" }}>
                    · {s.price}
                  </span>
                  {!s.is_active && (
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#18181B", color: "#71717A" }}
                    >
                      hidden
                    </span>
                  )}
                </div>
                <p className="text-sm" style={{ color: "#A1A1AA" }}>
                  {s.features.length} features · {s.description.slice(0, 80)}…
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openEdit(s)}
                  className="p-1.5 rounded-lg"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F5F5" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#71717A" }}
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
                  disabled={deletingId === s.id}
                  className="p-1.5 rounded-lg disabled:opacity-40"
                  style={{ color: "#71717A" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#EF4444" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#71717A" }}
                >
                  {deletingId === s.id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
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
            className="relative w-full max-w-xl rounded-xl border p-6 z-10 overflow-y-auto max-h-[90vh]"
            style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold" style={{ color: "#F5F5F5" }}>
                {form.id ? "Edit Service" : "Add Service"}
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
                  <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                    onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                    onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>Tier *</label>
                  <select
                    value={form.tier}
                    onChange={(e) => setForm({ ...form, tier: e.target.value as ServiceTier })}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                  >
                    <option value="starter">Starter</option>
                    <option value="growth">Growth</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>Price *</label>
                <input
                  required
                  placeholder="$2,500/mo"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                  onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                  onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "#A1A1AA" }}>Description *</label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                  style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                  onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                  onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "#A1A1AA" }}>Features *</label>
                <div className="space-y-2">
                  {form.features.map((f, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        value={f}
                        onChange={(e) => updateFeature(i, e.target.value)}
                        placeholder={`Feature ${i + 1}`}
                        className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                        style={{ backgroundColor: "#0C0C0E", border: "1px solid #1C1C1F", color: "#F5F5F5" }}
                        onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                        onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(i)}
                        className="p-2 rounded-lg"
                        style={{ color: "#71717A" }}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeature}
                    className="text-xs flex items-center gap-1"
                    style={{ color: "#00C2A8" }}
                  >
                    <Plus className="w-3 h-3" /> Add feature
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="svc_active"
                  checked={form.is_active}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                />
                <label htmlFor="svc_active" className="text-sm" style={{ color: "#A1A1AA" }}>
                  Show on public site
                </label>
              </div>

              {error && (
                <p className="text-sm" style={{ color: "#EF4444" }}>{error}</p>
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
