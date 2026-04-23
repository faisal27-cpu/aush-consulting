import type { Testimonial } from "@/lib/types"

const staticTestimonials: Testimonial[] = [
  {
    id: "1",
    author_name: "Sarah Chen",
    author_role: "CTO",
    author_company: "Meridian Health",
    content:
      "AUSH didn't just build the model — they rebuilt how our team thinks about data. Twelve months later we're running the system ourselves and it's processing 40,000 claims per day with 94% accuracy.",
    is_active: true,
    created_at: "",
  },
  {
    id: "2",
    author_name: "James Okafor",
    author_role: "VP of Operations",
    author_company: "Cargolink Logistics",
    content:
      "The honesty was what got us. They told us our data wasn't ready in week one, fixed it with us, and delivered three weeks late with something that actually worked.",
    is_active: true,
    created_at: "",
  },
  {
    id: "3",
    author_name: "Priya Mehta",
    author_role: "CEO",
    author_company: "Clarendon Financial",
    content:
      "We'd been burned by two AI vendors before. AUSH was different from the first call — no hype, just hard questions about what we were trying to solve.",
    is_active: true,
    created_at: "",
  },
]

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const data = testimonials.length > 0 ? testimonials : staticTestimonials
  const featured = data[0]
  const cards = data.slice(1, 4)

  return (
    <section style={{ backgroundColor: "#F5F4F0", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-8">
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#9B9B9B",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          What Clients Say
        </p>

        {featured && (
          <div className="mb-20 max-w-4xl">
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(80px, 10vw, 120px)",
                color: "#E2E0DA",
                lineHeight: 0.8,
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              &ldquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontStyle: "italic",
                color: "#0A0A0A",
                lineHeight: 1.5,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                maxWidth: "800px",
              }}
            >
              {featured.content}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                color: "#6B6B6B",
                marginTop: "24px",
              }}
            >
              {featured.author_name} — {featured.author_role}, {featured.author_company}
            </p>
          </div>
        )}

        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l" style={{ borderColor: "#E2E0DA" }}>
            {cards.map((t) => (
              <div
                key={t.id}
                className="border-r border-b"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E0DA",
                  padding: "40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "40px",
                    color: "#E2E0DA",
                    lineHeight: 0.8,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "#6B6B6B",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {t.content}
                </p>
                <div style={{ borderTop: "1px solid #E2E0DA", marginTop: "24px", paddingTop: "20px" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#0A0A0A", fontWeight: 500 }}>
                    {t.author_name}
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#9B9B9B", marginTop: "2px" }}>
                    {t.author_role}, {t.author_company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
