import { Mail, MapPin, Clock } from "lucide-react"

export function ContactSidebar() {
  return (
    <div className="space-y-10">
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Email
        </p>
        <a
          href="mailto:hello@aushconsulting.com"
          className="flex items-center gap-3"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#0A0A0A",
          }}
        >
          <Mail className="w-4 h-4 shrink-0" style={{ color: "#9B9B9B" }} />
          hello@aushconsulting.com
        </a>
      </div>

      <div style={{ borderTop: "1px solid #E2E0DA", paddingTop: "32px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Location
        </p>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#9B9B9B" }} />
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#0A0A0A" }}>
              San Francisco, CA
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#9B9B9B", marginTop: "2px" }}>
              Remote-first
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #E2E0DA", paddingTop: "32px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Response Time
        </p>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 shrink-0" style={{ color: "#9B9B9B" }} />
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#0A0A0A" }}>
            Within 1 business day
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #E2E0DA",
          paddingTop: "32px",
        }}
      >
        <div
          style={{
            padding: "28px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E0DA",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              color: "#6B6B6B",
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Prefer to talk first? Book a 30-minute discovery call — no
            commitment, no sales pitch. We&apos;ll listen and tell you honestly
            if we can help.
          </p>
          <a
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#0A0A0A",
              border: "1px solid #E2E0DA",
              padding: "10px 20px",
              display: "inline-block",
            }}
          >
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </div>
  )
}
