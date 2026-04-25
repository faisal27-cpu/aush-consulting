import { Mail, MapPin, Clock } from "lucide-react"

const guarantees = [
  "We read every submission personally",
  "Response within 1 business day",
  "No sales pitch on the first call",
  "Honest assessment of fit — even if it's not us",
]

export function ContactSidebar() {
  return (
    <div>

      {/* Contact details */}
      <div className="space-y-8">
        <div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "#9B9B9B",
              textTransform: "uppercase",
              marginBottom: "14px",
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
              marginBottom: "14px",
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
                Remote-first team
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
              marginBottom: "14px",
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
      </div>

      {/* What to expect */}
      <div style={{ marginTop: "48px", borderTop: "1px solid #E2E0DA", paddingTop: "40px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          What to expect
        </p>
        <div className="flex flex-col gap-0">
          {guarantees.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                padding: "14px 0",
                borderBottom: "1px solid #F0EDE6",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#C8C6BF",
                  flexShrink: 0,
                  paddingTop: "1px",
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "#6B6B6B",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Discovery call CTA */}
      <div
        style={{
          marginTop: "40px",
          padding: "32px",
          backgroundColor: "#0A0A0A",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "18px",
            fontWeight: 500,
            color: "#FFFFFF",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          Prefer to talk first?
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "14px",
            color: "#6B6B6B",
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: "24px",
          }}
        >
          Book a 30-minute discovery call. No commitment, no sales pitch — we&apos;ll listen and tell you honestly if we can help.
        </p>
        <a
          href="/contact"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#0A0A0A",
            backgroundColor: "#FFFFFF",
            padding: "12px 24px",
            display: "inline-block",
          }}
        >
          Book a discovery call →
        </a>
      </div>

    </div>
  )
}
