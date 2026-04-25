import Link from "next/link"

const marqueeText =
  "Financial Services  ·  Healthcare  ·  SaaS  ·  Manufacturing  ·  Logistics  ·  Retail  ·  Legal  ·  Real Estate  ·  "

const metrics = [
  { label: "Model Accuracy", value: "94.2%", fill: 94 },
  { label: "Processing Time", value: "1.2s avg", fill: 80 },
  { label: "Cost Reduction", value: "67%", fill: 67 },
]

export function HeroSection() {
  return (
    <section
      className="flex flex-col"
      style={{ backgroundColor: "#F5F4F0", minHeight: "100vh" }}
    >
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex items-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">

          {/* Left column */}
          <div>
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
                fontSize: "clamp(48px, 7.5vw, 72px)",
                fontWeight: 700,
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

          {/* Right column — metrics card */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="float-card"
              style={{
                backgroundColor: "#0A0A0A",
                border: "1px solid #2A2A2A",
                padding: "32px",
                width: "100%",
                maxWidth: "440px",
              }}
            >
              {/* Mac window dots */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28C840" }} />
              </div>

              {/* Card title */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#6B6B6B",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                Live project metrics
              </p>

              {/* Metric rows */}
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  style={{
                    paddingBottom: "16px",
                    marginBottom: "16px",
                    borderBottom: i < metrics.length - 1 ? "1px solid #1A1A1A" : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        color: "#9B9B9B",
                      }}
                    >
                      {metric.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      {metric.value}
                    </span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#1A1A1A",
                      height: "2px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F5F4F0",
                        height: "100%",
                        width: `${metric.fill}%`,
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Separator */}
              <div style={{ borderTop: "1px solid #1A1A1A", marginBottom: "16px" }} />

              {/* Stat pills */}
              <div style={{ display: "flex", gap: "8px" }}>
                {["50+ Projects", "98% Retention"].map((label) => (
                  <div
                    key={label}
                    style={{
                      backgroundColor: "#1A1A1A",
                      padding: "8px 16px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      color: "#9B9B9B",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
