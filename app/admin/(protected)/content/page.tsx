import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { ContentTabsClient } from "@/components/admin/ContentTabsClient"
import type { Testimonial, Service } from "@/lib/types"

export const dynamic = "force-dynamic"
export const metadata = { title: "Content Editor — Admin" }

export default async function ContentPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/admin/login")

  const [{ data: testimonials }, { data: services }] = await Promise.all([
    supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: true }),
    supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true }),
  ])

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl font-semibold" style={{ color: "#F5F5F5" }}>
          Content Editor
        </h1>
        <p className="text-sm mt-0.5" style={{ color: "#71717A" }}>
          Changes reflect immediately on the public site.
        </p>
      </div>

      <ContentTabsClient
        testimonials={(testimonials as Testimonial[]) ?? []}
        services={(services as Service[]) ?? []}
      />
    </div>
  )
}
