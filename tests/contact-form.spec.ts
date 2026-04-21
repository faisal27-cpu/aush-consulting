import { test, expect } from "@playwright/test"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const TEST_EMAIL = "playwright-contact-test@example.com"

test.describe("Contact form submission", () => {
  test.beforeEach(async () => {
    await supabase
      .from("contact_submissions")
      .delete()
      .eq("email", TEST_EMAIL)
  })

  test.afterAll(async () => {
    await supabase
      .from("contact_submissions")
      .delete()
      .eq("email", TEST_EMAIL)
  })

  test("submits successfully and shows success state", async ({ page }) => {
    await page.goto("/contact")

    await page.getByLabel("Name").fill("Playwright Test User")
    await page.getByLabel("Work Email").fill(TEST_EMAIL)
    await page.getByLabel("Company").fill("Test Corp")
    await page.getByLabel("Service Interest").selectOption("AI Strategy")
    await page.getByLabel("Message").fill(
      "This is a test message from Playwright. It is long enough to pass validation."
    )

    await page.getByRole("button", { name: "Send Message" }).click()

    await expect(page.getByText("Message received.")).toBeVisible({
      timeout: 15000,
    })
    await expect(page.getByText("Playwright Test User")).toBeVisible()
  })

  test("saves submission to Supabase", async ({ page }) => {
    await page.goto("/contact")

    await page.getByLabel("Name").fill("DB Test User")
    await page.getByLabel("Work Email").fill(TEST_EMAIL)
    await page.getByLabel("Service Interest").selectOption("AI Strategy")
    await page.getByLabel("Message").fill(
      "Testing database persistence from Playwright test suite."
    )

    await page.getByRole("button", { name: "Send Message" }).click()
    await expect(page.getByText("Message received.")).toBeVisible({ timeout: 15000 })

    const { data } = await supabase
      .from("contact_submissions")
      .select("*")
      .eq("email", TEST_EMAIL)
      .single()

    expect(data).toBeTruthy()
    expect(data.name).toBe("DB Test User")
    expect(data.status).toBe("unread")
    expect(data.service_interest).toBe("AI Strategy")
  })

  test("blocks submission with empty required fields", async ({ page }) => {
    await page.goto("/contact")
    await page.getByRole("button", { name: "Send Message" }).click()
    await expect(page.getByText("Message received.")).not.toBeVisible()
  })
})
