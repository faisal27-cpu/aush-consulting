export type UserRole = "admin" | "visitor"
export type SubmissionStatus = "unread" | "read" | "responded"
export type ServiceTier = "starter" | "growth" | "enterprise"

export interface Profile {
  id: string
  user_id: string
  full_name: string
  email: string
  role: UserRole
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  company: string | null
  service_interest: string
  message: string
  status: SubmissionStatus
  notes: string | null
  created_at: string
}

export interface Testimonial {
  id: string
  author_name: string
  author_role: string
  author_company: string
  content: string
  is_active: boolean
  created_at: string
}

export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  tier: ServiceTier
  price: string
  is_active: boolean
  sort_order: number
  created_at: string
}

export interface DailyCount {
  date: string
  count: number
}

export interface DashboardStats {
  total: number
  unread: number
  thisMonth: number
  trend: DailyCount[]
}
