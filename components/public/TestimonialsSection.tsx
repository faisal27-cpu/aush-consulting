import Link from "next/link"
import type { Testimonial } from "@/lib/types"

const caseStudies = [
  {
    industry: "Healthcare",
    duration: "14 weeks",
    title: "Rebuilding claims triage for a 500-bed hospital system",
    challenge:
      "Manual processing of 40,000+ daily insurance claims was creating a three-day backlog and costing over $2M annually in operational overhead and overtime.",
    metrics: [
      { value: "40K/day", label: "Claims processed" },
      { value: "94%", label: "Accuracy rate" },
      { value: "73%", label: "Time reduction" },
    ],
    author: "Sarah Chen",
    role: "CTO · Meridian Health",
    initials: "SC",
  },
  {
    industry: "Logistics",
    duration: "6 weeks",
    title: "AI dispatch system for a national freight carrier",
    challenge:
      "Legacy routing software was generating suboptimal routes, burning $340K per quarter in preventable fuel costs with no visibility into why routes were chosen.",
    metrics: [
      { value: "18%", label: "Fuel reduction" },
      { value: "$340K", label: "Saved in Q1" },
      { value: "6 wks", label: "To production" },
    ],
    author: "James Okafor",
    role: "VP of Operations · Cargolink Logistics",
    initials: "JO",
  },
  {
    industry: "Financial Services",
    duration: "10 weeks",
    title: "Fraud detection overhaul for a mid-market lender",
    challenge:
      "A 22% false positive rate was blocking $4M in legitimate transactions monthly and consuming two full-time analysts on manual review queues.",
    metrics: [
      { value: "67%", label: "Fewer false positives" },
      { value: "$4M", label: "Unblocked monthly" },
      { value: "10 wks", label: "End-to-end" },
    ],
    author: "Priya Mehta",
    role: "CEO · Clarendon Financial",
    initials: "PM",
  },
]

// Props kept for backward compatibility with page.tsx Supabase fetch
interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  void testimonials

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
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
              Client Work
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
              Real problems.
              <br />
              Measurable outcomes.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "420px",
              }}
            >
              Three engagements, three industries. The common thread: AI scoped correctly, built to production standards, and measured from day one.
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#0A0A0A",
                borderBottom: "1px solid #0A0A0A",
                paddingBottom: "2px",
              }}
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              style={{
                border: "1px solid #E2E0DA",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FAFAF8",
              }}
            >

              {/* Industry + duration tags */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "28px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0A0A0A",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E0DA",
                    padding: "4px 10px",
                  }}
                >
                  {study.industry}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9B9B9B",
                    backgroundColor: "transparent",
                    border: "1px solid #E2E0DA",
                    padding: "4px 10px",
                  }}
                >
                  {study.duration}
                </span>
              </div>

              {/* Case study title */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: "16px",
                }}
              >
                {study.title}
              </h3>

              {/* Challenge description */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "#6B6B6B",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  flexGrow: 1,
                  marginBottom: "32px",
                }}
              >
                {study.challenge}
              </p>

              {/* Outcome metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                  borderTop: "1px solid #E2E0DA",
                  paddingTop: "28px",
                  marginBottom: "28px",
                }}
              >
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "#0A0A0A",
                        lineHeight: 1,
                        marginBottom: "6px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {metric.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        color: "#9B9B9B",
                        lineHeight: 1.4,
                      }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Attribution */}
              <div
                style={{
                  borderTop: "1px solid #E2E0DA",
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
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
                  {study.initials}
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
                    {study.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      color: "#9B9B9B",
                      margin: 0,
                      marginTop: "2px",
                    }}
                  >
                    {study.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid #E2E0DA",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              color: "#6B6B6B",
              fontWeight: 300,
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            Every engagement starts with a discovery call — no proposals until we understand the problem.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#0A0A0A",
              color: "#FFFFFF",
              padding: "14px 32px",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            Book a discovery call →
          </Link>
        </div>

      </div>
    </section>
  )
}
