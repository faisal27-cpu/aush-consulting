import { test, expect } from "@playwright/test"
import { createClient } from "@supabase/supabase-js"

const ADMIN_EMAIL = process.env.TEST_ADMIN_EMAIL!
const ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD!

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function adminLogin(page: import("@playwright/test").Page) {
  await page.goto("/admin/login")
  await page.getByLabel("Email address").fill(ADMIN_EMAIL)
  await page.getByLabel("Password").fill(ADMIN_PASSWORD)
  await page.getByRole("button", { name: "Sign in" }).click()
  await page.waitForURL("/admin", { timeout: 15000 })
}

test.describe("Content editor → public site", () => {
  test.skip(
    () => !ADMIN_EMAIL || !ADMIN_PASSWORD,
    "Admin credentials not set"
  )

  test("new testimonial appears on public landing page", async ({ page }) => {
    await adminLogin(page)

    const uniqueContent = `Playwright integration test ${Date.now()} — AI transformed our entire operation.`

    await page.goto("/admin/content")
    await page.getByRole("button", { name: "Testimonials" }).click()
    await page.getByRole("button", { name: "Add Testimonial" }).click()

    await page.getByLabel("Author Name").fill("Playwright Tester")
    await page.getByLabel("Role").fill("QA Engineer")
    await page.getByLabel("Company").fill("Test Corp")
    await page.getByLabel("Quote").fill(uniqueContent)
    await page.getByRole("button", { name: "Save" }).click()

    await expect(page.getByRole("dialog")).not.toBeVisible({ timeout: 8000 })

    // Public page should reflect the new content (ISR revalidated)
    await page.goto("/")
    await expect(page.getByText(uniqueContent.slice(0, 50))).toBeVisible({
      timeout: 15000,
    })

    // Cleanup
    await supabase
      .from("testimonials")
      .delete()
      .eq("author_name", "Playwright Tester")
  })

  test("content editor page loads with tabs", async ({ page }) => {
    await adminLogin(page)
    await page.goto("/admin/content")

    await expect(page.getByText("Content Editor")).toBeVisible()
    await expect(page.getByRole("button", { name: "Testimonials" })).toBeVisible()
    await expect(page.getByRole("button", { name: "Services" })).toBeVisible()
  })
})
