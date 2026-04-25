'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

const marqueeText =
  "Financial Services  ·  Healthcare  ·  SaaS  ·  Manufacturing  ·  Logistics  ·  Retail  ·  Legal  ·  Real Estate  ·  "

const testimonials = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "VP of Operations, Meridian Health",
    quote: "AUSH reduced our manual processing time by 73% in the first quarter.",
    tag: "Healthcare · AI Pipeline",
  },
  {
    initials: "MR",
    name: "Marcus Riley",
    role: "CTO, Stackline",
    quote: "We evaluated three other AI firms. AUSH was the only one that shipped production-ready code.",
    tag: "SaaS · Custom Development",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Head of Data, Apex Logistics",
    quote: "Our AI routing system went live in 6 weeks and cut fuel costs by 18% immediately.",
    tag: "Logistics · ML Pipeline",
  },
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % testimonials.length)
        setVisible(true)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [visible])

  const t = testimonials[index]

  return (
    <section
      className="flex flex-col"
      style={{ backgroundColor: "#F5F4F0", minHeight: "100vh" }}
    >
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex items-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">

          {/* Left column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#9B9B9B",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              AI Consulting
            </p>

            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(48px, 7.5vw, 72px)",
                fontWeight: 700,
                color: "#0A0A0A",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "32px",
              }}
            >
              We turn AI
              <br />
              from experiment
              <br />
              to enterprise
              <br />
              advantage.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                color: "#6B6B6B",
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              AUSH Consulting works with growth-stage and enterprise companies to
              design, build, and deploy AI that creates measurable outcomes — not
              demos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#0A0A0A",
                  color: "#FFFFFF",
                  padding: "16px 32px",
                  display: "inline-block",
                }}
              >
                Start a conversation →
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 400,
                  backgroundColor: "transparent",
                  color: "#0A0A0A",
                  padding: "16px 32px",
                  display: "inline-block",
                  border: "1px solid #E2E0DA",
                }}
              >
                See our work
              </Link>
            </div>
          </div>

          {/* Right column — rotating testimonial */}
          <div className="hidden md:flex flex-col gap-6">

            {/* Card */}
            <div className="float-card">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E0DA",
                  padding: "28px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                }}
              >
                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#0A0A0A",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#0A0A0A",
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "12px",
                        color: "#9B9B9B",
                        margin: 0,
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid #F0EDE6", margin: "16px 0" }} />

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "#0A0A0A",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stars */}
                <div
                  style={{
                    color: "#D4A853",
                    fontSize: "14px",
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  ★★★★★
                </div>

                {/* Tag */}
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#9B9B9B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {t.tag}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: i === index ? "#0A0A0A" : "#E2E0DA",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "8px" }}>
              {["50+ Enterprise Projects", "98% Client Retention"].map((label) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: "#F0EDE6",
                    border: "1px solid #E2E0DA",
                    padding: "8px 16px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#6B6B6B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <div style={{ borderTop: "1px solid #E2E0DA" }}>
        <div className="overflow-hidden py-6">
          <div className="marquee-track flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#9B9B9B",
                  textTransform: "uppercase",
                  flexShrink: 0,
                  paddingRight: "0",
                }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
