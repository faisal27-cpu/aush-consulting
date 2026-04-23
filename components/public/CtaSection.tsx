import Link from "next/link"

export function CtaSection() {
  return (
    <section style={{ backgroundColor: "#0A0A0A", padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Ready to build something
          <br />
          that lasts?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "18px",
            color: "#9B9B9B",
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: "480px",
            margin: "0 auto 48px",
          }}
        >
          Most AI projects fail because of misaligned expectations or poor data
          strategy. We fix that before we write a line of code.
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "15px",
            fontWeight: 500,
            backgroundColor: "#FFFFFF",
            color: "#0A0A0A",
            padding: "20px 40px",
            display: "inline-block",
          }}
        >
          Start a conversation →
        </Link>
      </div>
    </section>
  )
}
