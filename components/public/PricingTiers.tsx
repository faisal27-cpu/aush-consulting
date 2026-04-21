import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import type { Service } from "@/lib/types"

interface PricingTiersProps {
  services: Service[]
}

const tierOrder = { starter: 0, growth: 1, enterprise: 2 }

export function PricingTiers({ services }: PricingTiersProps) {
  const sorted = [...services].sort(
    (a, b) => (tierOrder[a.tier] ?? 0) - (tierOrder[b.tier] ?? 0)
  )

  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Straightforward pricing,
            <br />
            no surprises
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sorted.map((service) => {
            const isFeatured = service.tier === "growth"
            return (
              <div
                key={service.id}
                className="relative rounded-2xl p-8 border flex flex-col"
                style={{
                  backgroundColor: "#0C0C0E",
                  borderColor: isFeatured
                    ? "rgba(0,194,168,0.4)"
                    : "#1C1C1F",
                  boxShadow: isFeatured
                    ? "0 0 0 1px rgba(0,194,168,0.15)"
                    : "none",
                }}
              >
                {isFeatured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "#00C2A8",
                      color: "#0C0C0E",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "#00C2A8" }}
                  >
                    {service.tier}
                  </span>
                  <h3
                    className="text-2xl font-bold mt-2"
                    style={{ color: "#F5F5F5" }}
                  >
                    {service.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "#F5F5F5" }}
                    >
                      {service.price === "Custom pricing"
                        ? "Custom"
                        : service.price.split("/")[0]}
                    </span>
                    {service.price !== "Custom pricing" && (
                      <span className="text-sm" style={{ color: "#71717A" }}>
                        /month
                      </span>
                    )}
                  </div>

                  <p
                    className="text-sm mt-3 leading-relaxed"
                    style={{ color: "#A1A1AA" }}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: "#00C2A8" }}
                      />
                      <span className="text-sm" style={{ color: "#A1A1AA" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={
                      isFeatured
                        ? { backgroundColor: "#00C2A8", color: "#0C0C0E" }
                        : {
                            backgroundColor: "transparent",
                            color: "#F5F5F5",
                            border: "1px solid #2A2A2F",
                          }
                    }
                  >
                    {service.tier === "enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div
          className="mt-12 text-center rounded-xl p-6 border"
          style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
        >
          <p className="text-sm" style={{ color: "#A1A1AA" }}>
            Not sure which tier fits?{" "}
            <Link
              href="/contact"
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: "#00C2A8" }}
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
