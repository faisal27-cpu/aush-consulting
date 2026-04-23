import Link from "next/link"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A" }}>
      <div
        className="border-t"
        style={{ borderColor: "#2A2A2A" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                AUSH
              </span>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6B6B6B", lineHeight: "1.6" }}>
                We build AI that creates measurable
                <br />
                business outcomes — not demos.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  color: "#4A4A4A",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Navigation
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#6B6B6B",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  color: "#4A4A4A",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Contact
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@aushconsulting.com"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6B6B6B" }}
                >
                  hello@aushconsulting.com
                </a>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#6B6B6B" }}>
                  San Francisco, CA
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#4A4A4A" }}>
                  Remote-first
                </p>
              </div>
            </div>
          </div>

          <div
            className="border-t mt-12 pt-8"
            style={{ borderColor: "#2A2A2A" }}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#4A4A4A" }}>
              © {new Date().getFullYear()} AUSH Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
