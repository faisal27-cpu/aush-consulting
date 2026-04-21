import Link from "next/link"
import { ArrowRight, BarChart2, Code2, Plug } from "lucide-react"
import type { Service } from "@/lib/types"

const iconMap: Record<string, React.ElementType> = {
  starter: BarChart2,
  growth: Code2,
  enterprise: Plug,
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            AI that fits your business,
            <br />
            not the other way around
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.tier] ?? BarChart2
            return (
              <div
                key={service.id}
                className="group rounded-xl p-6 border transition-all"
                style={{
                  backgroundColor: "#111113",
                  borderColor: "#1C1C1F",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,194,168,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1C1C1F"
                }}
              >
                <Icon
                  className="w-6 h-6 mb-4"
                  style={{ color: "#00C2A8" }}
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#F5F5F5" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-sm mt-2 leading-relaxed"
                  style={{ color: "#A1A1AA" }}
                >
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm mt-4 transition-all"
                  style={{ color: "#00C2A8" }}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
