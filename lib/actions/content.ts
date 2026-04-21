"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import { requireAdmin } from "./_guard"

const testimonialSchema = z.object({
  id: z.string().uuid().optional(),
  author_name: z.string().min(1).max(100),
  author_role: z.string().min(1).max(100),
  author_company: z.string().min(1).max(100),
  content: z.string().min(10).max(2000),
  is_active: z.boolean().default(true),
})

const serviceSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1).max(100),
  description: z.string().min(10).max(2000),
  features: z.array(z.string().min(1)).min(1).max(20),
  tier: z.enum(["starter", "growth", "enterprise"]),
  price: z.string().min(1).max(50),
  is_active: z.boolean().default(true),
})

export async function upsertTestimonial(
  data: z.infer<typeof testimonialSchema>
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const parsed = testimonialSchema.safeParse(data)
  if (!parsed.success) return { success: false, error: "Invalid data" }

  const { id, ...rest } = parsed.data

  const { error } = id
    ? await supabase.from("testimonials").update(rest).eq("id", id)
    : await supabase.from("testimonials").insert(rest)

  if (error) return { success: false, error: error.message }

  revalidatePath("/")
  revalidatePath("/admin/content")
  return { success: true }
}

export async function deleteTestimonial(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id)

  if (error) return { success: false, error: error.message }

  revalidatePath("/")
  revalidatePath("/admin/content")
  return { success: true }
}

export async function upsertService(
  data: z.infer<typeof serviceSchema>
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const parsed = serviceSchema.safeParse(data)
  if (!parsed.success) return { success: false, error: "Invalid data" }

  const { id, ...rest } = parsed.data

  const { error } = id
    ? await supabase.from("services").update(rest).eq("id", id)
    : await supabase.from("services").insert(rest)

  if (error) return { success: false, error: error.message }

  revalidatePath("/")
  revalidatePath("/services")
  revalidatePath("/admin/content")
  return { success: true }
}

export async function deleteService(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const { error } = await supabase.from("services").delete().eq("id", id)

  if (error) return { success: false, error: error.message }

  revalidatePath("/services")
  revalidatePath("/admin/content")
  return { success: true }
}
