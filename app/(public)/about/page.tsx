import type { Metadata } from "next"
import { TeamGrid } from "@/components/public/TeamGrid"
import { ValuesSection } from "@/components/public/ValuesSection"
import { CtaSection } from "@/components/public/CtaSection"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the AUSH team — engineers and strategists who have shipped AI at scale across healthcare, fintech, and logistics.",
}

export default function AboutPage() {
  return (
    <>
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
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "720px",
              marginBottom: "32px",
            }}
          >
            We started AUSH because too many AI projects fail for the wrong
            reasons
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: "600px",
            }}
          >
            The problem isn&apos;t the technology. It&apos;s consultancies that
            optimize for billable hours instead of outcomes, and engineers who
            build impressive demos on clean data that fall apart in production.
            We built AUSH to do it differently — small teams, deep ownership,
            and a refusal to start building until we understand the problem.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #E2E0DA" }} />

      <TeamGrid />
      <ValuesSection />
      <CtaSection />
    </>
  )
}
