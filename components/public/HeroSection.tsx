import Link from "next/link"

const marqueeText =
  "Financial Services  ·  Healthcare  ·  SaaS  ·  Manufacturing  ·  Logistics  ·  Retail  ·  Legal  ·  Real Estate  ·  "

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

          {/* Right column — stacked testimonial cards */}
          <div className="hidden md:flex flex-col items-center justify-center gap-6">

            {/* Card stack */}
            <div
              className="float-card"
              style={{ position: "relative", height: "420px", width: "100%" }}
            >

              {/* Card 1 — bottom, furthest back */}
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "20px",
                  right: "20px",
                  minHeight: "280px",
                  backgroundColor: "#E8E5DF",
                  border: "1px solid #D8D5CF",
                  transform: "rotate(-2deg)",
                  padding: "28px",
                  opacity: 0.5,
                  zIndex: 1,
                }}
              />

              {/* Card 2 — middle */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "10px",
                  right: "10px",
                  minHeight: "280px",
                  backgroundColor: "#F0EDE6",
                  border: "1px solid #E2E0DA",
                  transform: "rotate(-1deg)",
                  padding: "28px",
                  zIndex: 2,
                }}
              />

              {/* Card 3 — top, front */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E0DA",
                  padding: "28px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  zIndex: 3,
                }}
              >
                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#0A0A0A",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    SC
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#0A0A0A",
                        margin: 0,
                      }}
                    >
                      Sarah Chen
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "12px",
                        color: "#9B9B9B",
                        margin: 0,
                      }}
                    >
                      VP of Operations, Meridian Health
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #F0EDE6", margin: "16px 0" }} />

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "#0A0A0A",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;AUSH reduced our manual processing time by 73% in the first quarter.&rdquo;
                </p>

                {/* Stars */}
                <div
                  style={{
                    color: "#D4A853",
                    fontSize: "14px",
                    marginBottom: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  ★★★★★
                </div>

                {/* Tag */}
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#9B9B9B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Healthcare · AI Pipeline
                </p>
              </div>

            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "8px", width: "100%" }}>
              {["50+ Enterprise Projects", "98% Client Retention"].map((label) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: "#F0EDE6",
                    border: "1px solid #E2E0DA",
                    padding: "8px 16px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#6B6B6B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              ))}
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
