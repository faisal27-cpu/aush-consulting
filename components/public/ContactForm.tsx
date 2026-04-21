"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

const services = [
  "AI Strategy",
  "Custom AI Development",
  "AI Integration",
  "Not Sure Yet",
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [submittedName, setSubmittedName] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setStatus("loading")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim() || undefined,
      service_interest: (form.elements.namedItem("service_interest") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Submission failed")
      }

      setSubmittedName(data.name)
      setStatus("success")
    } catch {
      setStatus("error")
      setError("Something went wrong. Please try again or email us directly.")
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center text-center py-20 px-6 rounded-xl border"
        style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
        role="alert"
      >
        <CheckCircle2 className="w-12 h-12 mb-4" style={{ color: "#00C2A8" }} />
        <h3 className="text-xl font-semibold" style={{ color: "#F5F5F5" }}>
          Message received.
        </h3>
        <p className="text-sm mt-2 max-w-sm" style={{ color: "#A1A1AA" }}>
          Thanks, {submittedName}. We&apos;ve got your message and will be in
          touch within one business day. In the meantime, feel free to explore
          our{" "}
          <a href="/services" style={{ color: "#00C2A8" }}>
            services page
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "#F5F5F5" }}
          >
            Name <span style={{ color: "#00C2A8" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Alex Chen"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
            style={{
              backgroundColor: "#111113",
              border: "1px solid #1C1C1F",
              color: "#F5F5F5",
            }}
            onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
            onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "#F5F5F5" }}
          >
            Work Email <span style={{ color: "#00C2A8" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="alex@company.com"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
            style={{
              backgroundColor: "#111113",
              border: "1px solid #1C1C1F",
              color: "#F5F5F5",
            }}
            onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
            onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#F5F5F5" }}
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Corp"
          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
          style={{
            backgroundColor: "#111113",
            border: "1px solid #1C1C1F",
            color: "#F5F5F5",
          }}
          onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
          onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
        />
      </div>

      {/* Service interest */}
      <div>
        <label
          htmlFor="service_interest"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#F5F5F5" }}
        >
          Service Interest <span style={{ color: "#00C2A8" }}>*</span>
        </label>
        <select
          id="service_interest"
          name="service_interest"
          required
          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all appearance-none"
          style={{
            backgroundColor: "#111113",
            border: "1px solid #1C1C1F",
            color: "#F5F5F5",
          }}
          onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
          onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
        >
          <option value="" style={{ backgroundColor: "#111113" }}>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s} value={s} style={{ backgroundColor: "#111113" }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#F5F5F5" }}
        >
          Message <span style={{ color: "#00C2A8" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          placeholder="Tell us about your project, your data situation, and what success looks like for you."
          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
          style={{
            backgroundColor: "#111113",
            border: "1px solid #1C1C1F",
            color: "#F5F5F5",
          }}
          onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
          onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm" style={{ color: "#EF4444" }} role="alert">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all disabled:opacity-60"
        style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
