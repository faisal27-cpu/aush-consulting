"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#F5F4F0", borderColor: "#E2E0DA" }}
    >
      <nav className="max-w-7xl mx-auto px-8 h-[64px] flex items-center justify-between">
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "20px",
            fontWeight: 600,
            color: "#0A0A0A",
            letterSpacing: "-0.02em",
          }}
        >
          AUSH
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                color: pathname === link.href ? "#0A0A0A" : "#6B6B6B",
                fontWeight: pathname === link.href ? 500 : 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#0A0A0A" }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = pathname === link.href ? "#0A0A0A" : "#6B6B6B" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#0A0A0A",
              color: "#FFFFFF",
              padding: "8px 20px",
              display: "inline-block",
            }}
          >
            Get in touch
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          style={{ color: "#0A0A0A" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-t px-8 py-6 flex flex-col gap-5"
          style={{ backgroundColor: "#F5F4F0", borderColor: "#E2E0DA" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "15px",
                color: pathname === link.href ? "#0A0A0A" : "#6B6B6B",
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#0A0A0A",
              color: "#FFFFFF",
              padding: "10px 20px",
              display: "inline-block",
              marginTop: "4px",
              width: "fit-content",
            }}
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
