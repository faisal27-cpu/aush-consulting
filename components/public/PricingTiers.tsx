import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import type { Service } from "@/lib/types"

interface PricingTiersProps {
  services: Service[]
}

const tierOrder = { starter: 0, growth: 1, enterprise: 2 }

const staticServices: Service[] = [
  {
    id: "1",
    name: "AI Strategy",
    tier: "starter",
    description: "For companies that need to understand where AI fits before committing to build.",
    features: [
      "AI readiness assessment",
      "Data audit & gap analysis",
      "12-month AI roadmap",
      "Executive presentation",
      "Vendor evaluation support",
    ],
    price: "$12,000",
    is_active: true,
    sort_order: 0,
    created_at: "",
  },
  {
    id: "2",
    name: "AI Development",
    tier: "growth",
    description: "For companies ready to move from concept to a production AI system.",
    features: [
      "Everything in Strategy",
      "Custom model development",
      "API & integration layer",
      "Monitoring & alerting",
      "60-day post-launch support",
    ],
    price: "$25,000/month",
    is_active: true,
    sort_order: 1,
    created_at: "",
  },
  {
    id: "3",
    name: "Enterprise",
    tier: "enterprise",
    description: "For large organizations with complex data environments and compliance requirements.",
    features: [
      "Everything in Development",
      "Dedicated team",
      "Compliance & security review",
      "On-site workshops",
      "SLA-backed support",
    ],
    price: "Custom pricing",
    is_active: true,
    sort_order: 2,
    created_at: "",
  },
]

export function PricingTiers({ services }: PricingTiersProps) {
  const data = services.length > 0 ? services : staticServices
  const sorted = [...data].sort(
    (a, b) => (tierOrder[a.tier] ?? 0) - (tierOrder[b.tier] ?? 0)
  )

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
            Pricing
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
            Straightforward pricing,
            <br />
            no surprises
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l" style={{ borderColor: "#E2E0DA" }}>
          {sorted.map((service) => {
            const isFeatured = service.tier === "growth"
            return (
              <div
                key={service.id}
                className="border-r border-b flex flex-col"
                style={{
                  backgroundColor: isFeatured ? "#0A0A0A" : "#FFFFFF",
                  borderColor: "#E2E0DA",
                  padding: "40px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: isFeatured ? "#9B9B9B" : "#9B9B9B",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    {service.tier}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "26px",
                      fontWeight: 500,
                      color: isFeatured ? "#FFFFFF" : "#0A0A0A",
                      letterSpacing: "-0.01em",
                      marginBottom: "8px",
                    }}
                  >
                    {service.name}
                  </h3>

                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "36px",
                        fontWeight: 500,
                        color: isFeatured ? "#FFFFFF" : "#0A0A0A",
                      }}
                    >
                      {service.price === "Custom pricing"
                        ? "Custom"
                        : service.price.split("/")[0]}
                    </span>
                    {service.price !== "Custom pricing" && service.price.includes("/") && (
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "14px",
                          color: isFeatured ? "#9B9B9B" : "#9B9B9B",
                          marginLeft: "4px",
                        }}
                      >
                        /month
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      color: isFeatured ? "#9B9B9B" : "#6B6B6B",
                      lineHeight: 1.6,
                      fontWeight: 300,
                      marginBottom: "32px",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: isFeatured ? "#FFFFFF" : "#0A0A0A" }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "14px",
                          color: isFeatured ? "#9B9B9B" : "#6B6B6B",
                          fontWeight: 300,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "40px" }}>
                  <Link
                    href="/contact"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      fontWeight: 500,
                      display: "block",
                      textAlign: "center",
                      padding: "14px 24px",
                      backgroundColor: isFeatured ? "#FFFFFF" : "#0A0A0A",
                      color: isFeatured ? "#0A0A0A" : "#FFFFFF",
                    }}
                  >
                    {service.tier === "enterprise" ? "Contact Sales" : "Get Started"}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E0DA",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              color: "#6B6B6B",
            }}
          >
            Not sure which tier fits?{" "}
            <Link
              href="/contact"
              style={{ color: "#0A0A0A", fontWeight: 500 }}
            >
              Book a free 30-minute discovery call
            </Link>{" "}
            — we&apos;ll tell you honestly which engagement makes sense.
          </p>
        </div>
      </div>
    </section>
  )
}
