import { getInitials } from "@/lib/utils"
import type { Testimonial } from "@/lib/types"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section
      className="py-24 border-t"
      style={{ backgroundColor: "#111113", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: "#00C2A8" }}
          >
            What Clients Say
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Trusted by teams building at scale
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl p-6 border flex flex-col"
              style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
            >
              {/* Quote mark */}
              <span
                className="text-2xl font-serif mb-3 leading-none"
                style={{ color: "rgba(0,194,168,0.4)" }}
              >
                &ldquo;
              </span>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#A1A1AA" }}
              >
                {t.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t" style={{ borderColor: "#1C1C1F" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{
                    backgroundColor: "rgba(0,194,168,0.1)",
                    color: "#00C2A8",
                  }}
                >
                  {getInitials(t.author_name)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#F5F5F5" }}>
                    {t.author_name}
                  </p>
                  <p className="text-xs" style={{ color: "#71717A" }}>
                    {t.author_role}, {t.author_company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
