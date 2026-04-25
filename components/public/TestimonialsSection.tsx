import type { Testimonial } from "@/lib/types"
import { getInitials } from "@/lib/utils"

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
    <section style={{ backgroundColor: "#F5F4F0", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
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
              Client Results
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
              What happens when
              <br />
              AI actually works.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "400px",
            }}
          >
            We let our clients do the talking. These are real outcomes from production deployments — not estimates.
          </p>
        </div>

        {/* Featured testimonial */}
        {featured && (
          <blockquote
            style={{
              borderTop: "2px solid #0A0A0A",
              paddingTop: "56px",
              marginBottom: "80px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(20px, 2.5vw, 30px)",
                fontStyle: "italic",
                color: "#0A0A0A",
                lineHeight: 1.55,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                maxWidth: "800px",
                marginBottom: "40px",
              }}
            >
              &ldquo;{featured.content}&rdquo;
            </p>
            <footer style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#0A0A0A",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {getInitials(featured.author_name)}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#0A0A0A",
                  }}
                >
                  {featured.author_name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "#9B9B9B",
                    marginTop: "2px",
                  }}
                >
                  {featured.author_role}, {featured.author_company}
                </p>
              </div>
            </footer>
          </blockquote>
        )}

        {/* Supporting cards */}
        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((t) => (
              <div
                key={t.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E0DA",
                  padding: "40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: "32px",
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{t.content}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid #F0EDE6", paddingTop: "20px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#0A0A0A",
                    }}
                  >
                    {t.author_name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "12px",
                      color: "#9B9B9B",
                      marginTop: "2px",
                    }}
                  >
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
