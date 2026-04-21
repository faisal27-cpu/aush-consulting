"use server"

import { revalidatePath } from "next/cache"
import { requireAdmin } from "./_guard"
import type { SubmissionStatus } from "@/lib/types"

export async function updateSubmissionStatus(
  id: string,
  status: SubmissionStatus
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const { error } = await supabase
    .from("contact_submissions")
    .update({ status })
    .eq("id", id)

  if (error) return { success: false, error: error.message }

  revalidatePath("/admin/contacts")
  revalidatePath(`/admin/contacts/${id}`)
  revalidatePath("/admin")
  return { success: true }
}

export async function addSubmissionNote(
  id: string,
  notes: string
): Promise<{ success: boolean; error?: string }> {
  const { supabase } = await requireAdmin()

  const { error } = await supabase
    .from("contact_submissions")
    .update({ notes })
    .eq("id", id)

  if (error) return { success: false, error: error.message }

  revalidatePath(`/admin/contacts/${id}`)
  return { success: true }
}
