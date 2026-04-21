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
      <section
        className="py-24 border-b relative overflow-hidden"
        style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
      >
        <div className="absolute inset-0 hero-dot-grid opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: "#00C2A8" }}
          >
            Services & Pricing
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Straightforward services,
            <br />
            transparent pricing
          </h1>
          <p
            className="text-lg mt-5 max-w-2xl leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            Three engagement models to match where you are in your AI journey.
            All include direct access to senior engineers and weekly progress
            updates.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {serviceList.map((service, i) => (
        <section
          key={service.id}
          className="py-24 border-t"
          style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "#00C2A8" }}
                >
                  {service.tier}
                </span>
                <h2
                  className="text-3xl font-bold mt-2 tracking-tight"
                  style={{ color: "#F5F5F5" }}
                >
                  {service.name}
                </h2>
                <p
                  className="text-base mt-4 leading-relaxed"
                  style={{ color: "#A1A1AA" }}
                >
                  {service.description}
                </p>
                <p
                  className="text-sm mt-3 italic"
                  style={{ color: "#71717A" }}
                >
                  Who it&apos;s for: {whoItsFor[service.tier]}
                </p>
                <div className="mt-6">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "#F5F5F5" }}
                  >
                    {service.price === "Custom pricing"
                      ? "Custom"
                      : service.price.split("/")[0]}
                  </span>
                  {service.price !== "Custom pricing" && (
                    <span className="text-sm ml-1" style={{ color: "#71717A" }}>
                      /month
                    </span>
                  )}
                </div>
              </div>

              {/* Features card */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div
                  className="rounded-xl p-8 border"
                  style={{
                    backgroundColor: "#111113",
                    borderColor: "#1C1C1F",
                  }}
                >
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-4"
                    style={{ color: "#71717A" }}
                  >
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "#00C2A8" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "#A1A1AA" }}
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
