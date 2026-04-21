import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C0C0E" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 hero-dot-grid opacity-60" />
      {/* Teal glow */}
      <div className="absolute inset-0 teal-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{
                color: "#00C2A8",
                borderColor: "rgba(0,194,168,0.2)",
                backgroundColor: "rgba(0,194,168,0.05)",
              }}
            >
              AI Consulting
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] gradient-headline"
          >
            We Build AI
            <br />
            That Works
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            AUSH Consulting partners with growth-stage and enterprise companies
            to design, build, and deploy AI systems that create measurable
            business outcomes — not demos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-colors hover:border-[#2A2A2F]"
              style={{
                borderColor: "#1C1C1F",
                color: "#F5F5F5",
                backgroundColor: "transparent",
              }}
            >
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
