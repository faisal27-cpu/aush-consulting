import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { PricingTiers } from "@/components/public/PricingTiers"
import { CtaSection } from "@/components/public/CtaSection"
import type { Service } from "@/lib/types"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI consulting services from strategy to full-stack development. Transparent pricing, measurable outcomes.",
}

const whoItsFor: Record<string, string> = {
  starter:
    "CEOs and CTOs who know they need to move on AI but aren't sure where to start. Best for companies with $5M–$50M revenue.",
  growth:
    "Companies with a clear use case and the data to support it, ready to move from proof-of-concept to production.",
  enterprise:
    "Enterprise companies with complex environments, compliance requirements, and the need for long-term AI infrastructure.",
}

export default async function ServicesPage() {
  const supabase = await createClient()
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })

  const serviceList = (services as Service[]) ?? []

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "96px 0 80px" }}>
        <div className="max-w-7xl mx-auto px-8">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#9B9B9B",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Services & Pricing
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Straightforward services,
            <br />
            transparent pricing
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: "520px",
            }}
          >
            Three engagement models to match where you are in your AI journey.
            All include direct access to senior engineers and weekly progress
            updates.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #E2E0DA" }} />

      {/* Service detail sections */}
      {serviceList.map((service, i) => (
        <section
          key={service.id}
          style={{
            backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F5F4F0",
            padding: "96px 0",
            borderBottom: "1px solid #E2E0DA",
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "#9B9B9B",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {service.tier}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(32px, 3.5vw, 44px)",
                    fontWeight: 500,
                    color: "#0A0A0A",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    marginBottom: "20px",
                  }}
                >
                  {service.name}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "16px",
                    color: "#6B6B6B",
                    lineHeight: 1.65,
                    fontWeight: 300,
                    marginBottom: "16px",
                  }}
                >
                  {service.description}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#9B9B9B",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    marginBottom: "32px",
                  }}
                >
                  Who it&apos;s for: {whoItsFor[service.tier]}
                </p>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "40px",
                      fontWeight: 500,
                      color: "#0A0A0A",
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
                        fontSize: "15px",
                        color: "#9B9B9B",
                        marginLeft: "6px",
                      }}
                    >
                      /month
                    </span>
                  )}
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div
                  style={{
                    padding: "40px",
                    border: "1px solid #E2E0DA",
                    backgroundColor: i % 2 === 0 ? "#F5F4F0" : "#FFFFFF",
                  }}
                >
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
                    What&apos;s included
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "#0A0A0A" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "15px",
                            color: "#6B6B6B",
                            lineHeight: 1.5,
                            fontWeight: 300,
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <PricingTiers services={serviceList} />
      <CtaSection />
    </>
  )
}
