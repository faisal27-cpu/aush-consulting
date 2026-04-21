import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span
              className="font-mono text-xl font-bold"
              style={{ color: "#00C2A8" }}
            >
              AUSH
            </span>
            <p className="text-sm mt-2" style={{ color: "#71717A" }}>
              We Build AI That Works
            </p>
            <p className="text-xs mt-4" style={{ color: "#71717A" }}>
              © {new Date().getFullYear()} AUSH Consulting.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "#71717A" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#A1A1AA" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "#71717A" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@aushconsulting.com"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#A1A1AA" }}
              >
                hello@aushconsulting.com
              </a>
              <p className="text-sm" style={{ color: "#A1A1AA" }}>
                San Francisco, CA
              </p>
              <p className="text-sm" style={{ color: "#71717A" }}>
                Remote-first
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
