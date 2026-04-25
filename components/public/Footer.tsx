import Link from "next/link"

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services", label: "AI Strategy" },
  { href: "/services", label: "AI Development" },
  { href: "/services", label: "Enterprise" },
  { href: "/services", label: "Pricing" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A" }}>
      <div style={{ borderTop: "1px solid #1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-8 py-20">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

            {/* Brand — 2 cols wide */}
            <div className="md:col-span-2">
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  display: "block",
                  letterSpacing: "-0.02em",
                }}
              >
                AUSH
              </span>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "#6B6B6B",
                  lineHeight: 1.7,
                  marginTop: "20px",
                  maxWidth: "320px",
                  fontWeight: 300,
                }}
              >
                We build production-grade AI for companies that can&apos;t afford proof-of-concepts. Enterprise-grade systems, boutique attention.
              </p>
              <a
                href="mailto:hello@aushconsulting.com"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  color: "#4A4A4A",
                  display: "block",
                  marginTop: "28px",
                }}
              >
                hello@aushconsulting.com
              </a>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#2A2A2A",
                  marginTop: "8px",
                }}
              >
                Responses within 1 business day
              </p>
            </div>

            {/* Company */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#3A3A3A",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Company
              </p>
              <nav className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      color: "#6B6B6B",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#3A3A3A",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Services
              </p>
              <nav className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      color: "#6B6B6B",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#3A3A3A",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@aushconsulting.com"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#6B6B6B",
                  }}
                >
                  hello@aushconsulting.com
                </a>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#6B6B6B",
                  }}
                >
                  San Francisco, CA
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#4A4A4A",
                  }}
                >
                  Remote-first team
                </p>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid #1A1A1A",
              marginTop: "64px",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "#3A3A3A",
              }}
            >
              © {new Date().getFullYear()} AUSH Consulting. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "#2A2A2A",
              }}
            >
              San Francisco · Remote-first
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
