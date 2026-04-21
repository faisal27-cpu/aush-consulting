import { Mail, MapPin, Clock } from "lucide-react"

export function ContactSidebar() {
  return (
    <div className="space-y-8">
      <div>
        <p
          className="font-mono text-xs uppercase tracking-widest mb-3"
          style={{ color: "#71717A" }}
        >
          Email
        </p>
        <a
          href="mailto:hello@aushconsulting.com"
          className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
          style={{ color: "#F5F5F5" }}
        >
          <Mail className="w-4 h-4 shrink-0" style={{ color: "#00C2A8" }} />
          hello@aushconsulting.com
        </a>
      </div>

      <div>
        <p
          className="font-mono text-xs uppercase tracking-widest mb-3"
          style={{ color: "#71717A" }}
        >
          Location
        </p>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00C2A8" }} />
          <div>
            <p className="text-sm" style={{ color: "#F5F5F5" }}>
              San Francisco, CA
            </p>
            <p className="text-sm" style={{ color: "#71717A" }}>
              Remote-first
            </p>
          </div>
        </div>
      </div>

      <div>
        <p
          className="font-mono text-xs uppercase tracking-widest mb-3"
          style={{ color: "#71717A" }}
        >
          Response Time
        </p>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 shrink-0" style={{ color: "#00C2A8" }} />
          <p className="text-sm" style={{ color: "#F5F5F5" }}>
            Within 1 business day
          </p>
        </div>
      </div>

      <div
        className="rounded-xl p-6 border"
        style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
          Prefer to talk first? Book a 30-minute discovery call — no commitment,
          no sales pitch. We&apos;ll listen to your problem and tell you honestly
          if we can help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center w-full mt-4 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:opacity-80"
          style={{
            borderColor: "#2A2A2F",
            color: "#F5F5F5",
            backgroundColor: "transparent",
          }}
        >
          Book a Discovery Call
        </a>
      </div>
    </div>
  )
}
