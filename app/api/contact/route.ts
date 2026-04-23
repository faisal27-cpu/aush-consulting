import { z } from "zod"
import { createClient } from "@supabase/supabase-js"
import { sendContactNotification } from "@/lib/resend"

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  company: z.string().max(100).optional(),
  service_interest: z.enum([
    "AI Strategy",
    "Custom AI Development",
    "AI Integration",
    "Not Sure Yet",
  ]),
  message: z.string().min(10).max(5000),
})

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "http://localhost",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? "placeholder",
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid input", issues: parsed.error.issues },
      { status: 400 }
    )
  }

  const supabase = getAdminClient()
  const { error: dbError } = await supabase
    .from("contact_submissions")
    .insert({ ...parsed.data, status: "unread" })

  if (dbError) {
    console.error("DB insert failed:", dbError)
    return Response.json({ error: "Submission failed" }, { status: 500 })
  }

  // Non-blocking — email failure does not fail the request
  sendContactNotification(parsed.data).catch((err) => {
    console.error("Email notification failed (non-fatal):", err)
  })

  return Response.json({ success: true }, { status: 201 })
}
