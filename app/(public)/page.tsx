import { HeroSection } from "@/components/public/HeroSection"
import { StatsBar } from "@/components/public/StatsBar"
import { ServicesGrid } from "@/components/public/ServicesGrid"
import { HowItWorks } from "@/components/public/HowItWorks"
import { TestimonialsSection } from "@/components/public/TestimonialsSection"
import { CtaSection } from "@/components/public/CtaSection"
import { createClient } from "@/lib/supabase/server"
import type { Testimonial } from "@/lib/types"

export const revalidate = 60

export const metadata = {
  title: "AUSH Consulting — We Build AI That Works",
  description:
    "AUSH Consulting builds production-ready AI systems for mid-market and enterprise companies. Strategy, custom development, and full-scale integration.",
}

export default async function HomePage() {
  const supabase = await createClient()

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: true })

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <HowItWorks />
      <TestimonialsSection testimonials={(testimonials as Testimonial[]) ?? []} />
      <CtaSection />
    </>
  )
}
