import { test, expect } from "@playwright/test"

const ADMIN_EMAIL = process.env.TEST_ADMIN_EMAIL!
const ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD!

test.describe("Admin authentication", () => {
  test("redirects unauthenticated users from /admin to login", async ({ page }) => {
    await page.goto("/admin")
    await expect(page).toHaveURL(/\/admin\/login/)
  })

  test("redirects unauthenticated users from /admin/contacts to login", async ({ page }) => {
    await page.goto("/admin/contacts")
    await expect(page).toHaveURL(/\/admin\/login/)
  })

  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/admin/login")
    await page.getByLabel("Email address").fill("wrong@example.com")
    await page.getByLabel("Password").fill("wrongpassword123")
    await page.getByRole("button", { name: "Sign in" }).click()

    await expect(page.getByRole("alert")).toBeVisible({ timeout: 8000 })
    await expect(page).toHaveURL(/\/admin\/login/)
  })

  test("successful login redirects to dashboard", async ({ page }) => {
    test.skip(!ADMIN_EMAIL || !ADMIN_PASSWORD, "Admin credentials not set")

    await page.goto("/admin/login")
    await page.getByLabel("Email address").fill(ADMIN_EMAIL)
    await page.getByLabel("Password").fill(ADMIN_PASSWORD)
    await page.getByRole("button", { name: "Sign in" }).click()

    await expect(page).toHaveURL("/admin", { timeout: 15000 })
    await expect(page.getByText("Dashboard")).toBeVisible()
  })

  test("dashboard shows stats cards after login", async ({ page }) => {
    test.skip(!ADMIN_EMAIL || !ADMIN_PASSWORD, "Admin credentials not set")

    await page.goto("/admin/login")
    await page.getByLabel("Email address").fill(ADMIN_EMAIL)
    await page.getByLabel("Password").fill(ADMIN_PASSWORD)
    await page.getByRole("button", { name: "Sign in" }).click()
    await page.waitForURL("/admin", { timeout: 15000 })

    await expect(page.getByText("Total Submissions")).toBeVisible()
    await expect(page.getByText("Unread")).toBeVisible()
    await expect(page.getByText("This Month")).toBeVisible()
  })
})
