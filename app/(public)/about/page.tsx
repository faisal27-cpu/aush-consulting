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
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight"
            style={{ color: "#F5F5F5" }}
          >
            We started AUSH because too many AI projects fail for the wrong
            reasons
          </h1>
          <p
            className="text-lg mt-6 max-w-2xl leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            The problem isn&apos;t the technology. It&apos;s consultancies that
            optimize for billable hours instead of outcomes, and engineers who
            build impressive demos on clean data that fall apart in production.
            We built AUSH to do it differently — small teams, deep ownership,
            and a refusal to start building until we understand the problem.
          </p>
        </div>
      </section>

      <TeamGrid />
      <ValuesSection />
      <CtaSection />
    </>
  )
}
