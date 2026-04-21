import { HeroSection } from "@/components/public/HeroSection"
import { StatsBar } from "@/components/public/StatsBar"
import { ServicesGrid } from "@/components/public/ServicesGrid"
import { HowItWorks } from "@/components/public/HowItWorks"
import { TestimonialsSection } from "@/components/public/TestimonialsSection"
import { CtaSection } from "@/components/public/CtaSection"
import { createClient } from "@/lib/supabase/server"
import type { Service, Testimonial } from "@/lib/types"

export const revalidate = 60

export const metadata = {
  title: "AUSH Consulting — We Build AI That Works",
  description:
    "AUSH Consulting builds production-ready AI systems for mid-market and enterprise companies. Strategy, custom development, and full-scale integration.",
}

export default async function HomePage() {
  const supabase = await createClient()

  const [{ data: testimonials }, { data: services }] = await Promise.all([
    supabase
      .from("testimonials")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: true }),
    supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true }),
  ])

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid services={(services as Service[]) ?? []} />
      <HowItWorks />
      <TestimonialsSection testimonials={(testimonials as Testimonial[]) ?? []} />
      <CtaSection />
    </>
  )
}
