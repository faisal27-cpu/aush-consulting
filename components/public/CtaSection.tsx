import Link from "next/link"

const trustPoints = [
  "Senior engineers on every project — no bait and switch to juniors",
  "Average 73% reduction in processing time, measured at 90 days",
  "98% of clients continue beyond their initial engagement",
  "Production-ready deployments in under 12 weeks on average",
]

export function CtaSection() {
  return (
    <section style={{ backgroundColor: "#0A0A0A", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left column */}
          <div
            style={{
              paddingRight: "80px",
              borderRight: "1px solid #1A1A1A",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#4A4A4A",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Let&apos;s Talk
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              Ready to build AI
              <br />
              that actually ships?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "17px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "48px",
              }}
            >
              Most AI projects fail because of misaligned expectations or poor data strategy. We fix that before we write a line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A0A",
                  padding: "16px 32px",
                  display: "inline-block",
                }}
              >
                Start a conversation →
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 400,
                  backgroundColor: "transparent",
                  color: "#6B6B6B",
                  padding: "16px 32px",
                  display: "inline-block",
                  border: "1px solid #2A2A2A",
                }}
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div style={{ paddingLeft: "80px" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#4A4A4A",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              What to expect
            </p>
            {trustPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: "1px solid #1A1A1A",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "12px",
                    color: "#2A2A2A",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    paddingTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "#9B9B9B",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
