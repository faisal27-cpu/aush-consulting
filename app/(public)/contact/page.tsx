import type { Metadata } from "next"
import { ContactForm } from "@/components/public/ContactForm"
import { ContactSidebar } from "@/components/public/ContactSidebar"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with AUSH Consulting. Tell us what you're building and we'll tell you how we can help.",
}

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: "#F5F4F0", padding: "80px 0 64px" }}>
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
            Get In Touch
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Start a conversation
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "#6B6B6B",
              fontWeight: 300,
              lineHeight: 1.65,
              maxWidth: "480px",
            }}
          >
            Tell us about your project. We read every submission and respond
            within one business day.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #E2E0DA" }} />

      <section style={{ backgroundColor: "#F5F4F0", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
