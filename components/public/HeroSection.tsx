import Link from "next/link"

const marqueeText =
  "Financial Services\u00a0\u00a0·\u00a0\u00a0Healthcare\u00a0\u00a0·\u00a0\u00a0SaaS\u00a0\u00a0·\u00a0\u00a0Manufacturing\u00a0\u00a0·\u00a0\u00a0Logistics\u00a0\u00a0·\u00a0\u00a0Retail\u00a0\u00a0·\u00a0\u00a0Legal\u00a0\u00a0·\u00a0\u00a0Real Estate\u00a0\u00a0·\u00a0\u00a0"

export function HeroSection() {
  return (
    <section
      className="flex flex-col"
      style={{ backgroundColor: "#F5F4F0", minHeight: "100vh" }}
    >
      <div className="flex-1 max-w-5xl mx-auto px-8 w-full flex flex-col justify-center py-32">
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          AI Consulting
        </p>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(48px, 7vw, 72px)",
            fontWeight: 500,
            color: "#0A0A0A",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          We turn AI
          <br />
          from experiment
          <br />
          to enterprise
          <br />
          advantage.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "18px",
            color: "#6B6B6B",
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: "480px",
            marginBottom: "40px",
          }}
        >
          AUSH Consulting works with growth-stage and enterprise companies to
          design, build, and deploy AI that creates measurable outcomes — not
          demos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#0A0A0A",
              color: "#FFFFFF",
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
              color: "#0A0A0A",
              padding: "16px 32px",
              display: "inline-block",
              border: "1px solid #E2E0DA",
            }}
          >
            See our work
          </Link>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #E2E0DA" }}>
        <div className="overflow-hidden py-6">
          <div className="marquee-track flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#9B9B9B",
                  textTransform: "uppercase",
                  flexShrink: 0,
                  paddingRight: "0",
                }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
