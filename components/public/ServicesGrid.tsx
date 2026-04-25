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
    <section style={{ backgroundColor: "#F5F4F0", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
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
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Three ways we work
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-0 border-l overflow-visible" style={{ borderColor: "#E2E0DA" }}>
          {services.map((service) => (
            <div
              key={service.number}
              className="border-r border-b"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E0DA",
                padding: "40px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  color: "#9B9B9B",
                  letterSpacing: "0.05em",
                  display: "block",
                }}
              >
                {service.number}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  lineHeight: 1.2,
                  marginTop: "32px",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.name}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#6B6B6B",
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {service.description}
              </p>

              <div style={{ borderTop: "1px solid #E2E0DA", marginTop: "32px", paddingTop: "20px" }}>
                <Link
                  href="/services"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "#0A0A0A",
                    fontWeight: 500,
                  }}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
