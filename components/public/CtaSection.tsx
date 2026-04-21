import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      className="py-32 border-t text-center relative overflow-hidden"
      style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
    >
      {/* Glow */}
      <div className="absolute inset-0 teal-glow" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "#F5F5F5" }}
        >
          Ready to build something
          <br />
          that actually works?
        </h2>
        <p
          className="text-lg mt-5 leading-relaxed"
          style={{ color: "#A1A1AA" }}
        >
          Most AI projects fail because of misaligned expectations or poor data
          strategy. We fix that before we write a line of code.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
