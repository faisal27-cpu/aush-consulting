"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

const services = [
  "AI Strategy",
  "Custom AI Development",
  "AI Integration",
  "Not Sure Yet",
]

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  color: "#0A0A0A",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E2E0DA",
  outline: "none",
  display: "block",
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [submittedName, setSubmittedName] = useState("")
  const [error, setError] = useState("")

  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderColor = "#0A0A0A"
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.target.style.borderColor = "#E2E0DA"
  }

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
      if (!res.ok) throw new Error("Submission failed")
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
        style={{
          padding: "64px 48px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E0DA",
          textAlign: "center",
        }}
        role="alert"
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "28px",
            fontWeight: 500,
            color: "#0A0A0A",
            marginBottom: "12px",
          }}
        >
          Message received.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            color: "#6B6B6B",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Thanks, {submittedName}. We&apos;ve got your message and will respond
          within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#0A0A0A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
              fontWeight: 500,
            }}
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Alex Chen"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#0A0A0A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
              fontWeight: 500,
            }}
          >
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="alex@company.com"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          style={{
            display: "block",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            color: "#0A0A0A",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontWeight: 500,
          }}
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Corp"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <label
          htmlFor="service_interest"
          style={{
            display: "block",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            color: "#0A0A0A",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontWeight: 500,
          }}
        >
          Service Interest *
        </label>
        <select
          id="service_interest"
          name="service_interest"
          required
          style={{ ...inputStyle, appearance: "none" as const }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            color: "#0A0A0A",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
            fontWeight: 500,
          }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          minLength={10}
          placeholder="Tell us about your project, your data situation, and what success looks like for you."
          style={{
            width: "100%",
            padding: "14px 16px",
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#0A0A0A",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E0DA",
            outline: "none",
            display: "block",
            resize: "none",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#DC2626",
          }}
          role="alert"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "14px",
          fontWeight: 500,
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "16px 40px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          opacity: status === "loading" ? 0.6 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          border: "none",
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message →"
        )}
      </button>
    </form>
  )
}
