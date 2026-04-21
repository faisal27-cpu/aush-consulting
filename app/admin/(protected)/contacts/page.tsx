import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SubmissionsTable } from "@/components/admin/SubmissionsTable"
import type { ContactSubmission } from "@/lib/types"

export const dynamic = "force-dynamic"
export const metadata = { title: "Contacts — Admin" }

export default async function ContactsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/admin/login")

  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  const submissions = (data as ContactSubmission[]) ?? []

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl font-semibold" style={{ color: "#F5F5F5" }}>
          Contact Submissions
        </h1>
        <p className="text-sm mt-0.5" style={{ color: "#71717A" }}>
          {submissions.length} total submission{submissions.length !== 1 ? "s" : ""}
        </p>
      </div>

      <SubmissionsTable submissions={submissions} />
    </div>
  )
}
