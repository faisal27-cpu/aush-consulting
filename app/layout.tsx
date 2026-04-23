import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ backgroundColor: "#F5F4F0", color: "#0A0A0A" }}>
        {children}
      </body>
    </html>
  )
}
