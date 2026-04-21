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
      {/* Hero */}
      <section
        className="py-20 border-b"
        style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: "#00C2A8" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F5F5F5" }}
          >
            Start a conversation
          </h1>
          <p
            className="text-lg mt-4 max-w-xl leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            Tell us about your project. We read every submission and respond
            within one business day.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section
        className="py-20"
        style={{ backgroundColor: "#0C0C0E" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
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
