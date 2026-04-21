import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | AUSH Consulting",
    default: "AUSH Consulting — We Build AI That Works",
  },
  description:
    "AUSH Consulting builds production-ready AI systems for mid-market and enterprise companies. Strategy, custom development, and full-scale integration.",
  openGraph: {
    type: "website",
    siteName: "AUSH Consulting",
    title: "AUSH Consulting — We Build AI That Works",
    description:
      "Production-ready AI systems for mid-market and enterprise companies.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body
        className="antialiased"
        style={{ backgroundColor: "#0C0C0E", color: "#F5F5F5" }}
      >
        {children}
      </body>
    </html>
  )
}
