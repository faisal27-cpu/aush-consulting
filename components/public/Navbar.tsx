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
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(12,12,14,0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "#1C1C1F",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight"
          style={{ color: "#00C2A8" }}
        >
          AUSH
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{
                color: pathname === link.href ? "#F5F5F5" : "#A1A1AA",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#A1A1AA" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "#0C0C0E", borderColor: "#1C1C1F" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm py-1 transition-colors"
              style={{
                color: pathname === link.href ? "#F5F5F5" : "#A1A1AA",
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium mt-2"
            style={{ backgroundColor: "#00C2A8", color: "#0C0C0E" }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
