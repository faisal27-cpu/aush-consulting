"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setLoading(true)

    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value

    const supabase = createClient()

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError || !data.user) {
      setError("Invalid credentials. Please check your email and password.")
      setLoading(false)
      return
    }

    // Verify admin role
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", data.user.id)
      .single()

    if (profile?.role !== "admin") {
      await supabase.auth.signOut()
      setError("Access denied. Admin privileges required.")
      setLoading(false)
      return
    }

    router.push("/admin")
    router.refresh()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#0C0C0E" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <span
            className="font-mono text-2xl font-bold"
            style={{ color: "#00C2A8" }}
          >
            AUSH
          </span>
          <p className="text-sm mt-1" style={{ color: "#71717A" }}>
            Admin Access
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-xl p-8 border"
          style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
        >
          <h1 className="text-lg font-semibold mb-6" style={{ color: "#F5F5F5" }}>
            Sign in
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#F5F5F5" }}
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  backgroundColor: "#0C0C0E",
                  border: "1px solid #1C1C1F",
                  color: "#F5F5F5",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#F5F5F5" }}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  backgroundColor: "#0C0C0E",
                  border: "1px solid #1C1C1F",
                  color: "#F5F5F5",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#00C2A8" }}
                onBlur={(e) => { e.target.style.borderColor = "#1C1C1F" }}
              />
            </div>

            {error && (
              <p
                className="text-sm rounded-lg p-3"
                style={{
                  color: "#EF4444",
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-60"
              style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        <p className="text-xs text-center mt-4" style={{ color: "#71717A" }}>
          Access restricted to authorized administrators.
        </p>
      </div>
    </div>
  )
}
