import Link from "next/link"

const services = [
  {
    number: "01",
    name: "AI Strategy & Roadmap",
    description:
      "We assess your data, your constraints, and your market position, then build a concrete AI roadmap tied to business outcomes — not technology trends.",
  },
  {
    number: "02",
    name: "Custom AI Development",
    description:
      "From LLM fine-tuning to computer vision pipelines, we build production-grade AI systems designed to run at scale with real data and real users.",
  },
  {
    number: "03",
    name: "AI Integration & Ops",
    description:
      "We connect AI capabilities to your existing stack, establish monitoring, and ensure your team can own and iterate on the systems we build.",
  },
]

export function ServicesGrid() {
  return (
    <section style={{ backgroundColor: "#F5F4F0", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#9B9B9B",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: "#0A0A0A",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Three ways we work
              <br />
              with clients.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            Every engagement is scoped to your actual problem. We don't sell packages — we scope engagements.
          </p>
        </div>

        <div>
          {services.map((service, i) => (
            <div
              key={service.number}
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr auto",
                gap: "40px",
                padding: "48px 0",
                borderTop: "1px solid #E2E0DA",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  color: "#C8C6BF",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  paddingTop: "5px",
                }}
              >
                {service.number}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(20px, 2vw, 24px)",
                    fontWeight: 500,
                    color: "#0A0A0A",
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    maxWidth: "560px",
                  }}
                >
                  {service.description}
                </p>
              </div>

              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  color: "#0A0A0A",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  paddingTop: "5px",
                }}
              >
                Learn more →
              </Link>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid #E2E0DA" }} />
        </div>

      </div>
    </section>
  )
}
