import { test, expect } from "@playwright/test"

const publicPages = ["/", "/about", "/services", "/contact"]

for (const path of publicPages) {
  test.describe(`${path} — responsive layout`, () => {
    test("renders without horizontal overflow", async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState("networkidle")

      const viewportWidth = page.viewportSize()!.width
      const bodyScrollWidth = await page.evaluate(
        () => document.body.scrollWidth
      )

      expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + 2)
    })

    test("navbar and footer are visible", async ({ page }) => {
      await page.goto(path)

      await expect(page.getByRole("navigation")).toBeVisible()
      await expect(page.getByRole("contentinfo")).toBeVisible()
    })

    test("AUSH brand is visible", async ({ page }) => {
      await page.goto(path)
      const aushElements = await page.getByText("AUSH").count()
      expect(aushElements).toBeGreaterThanOrEqual(1)
    })
  })
}

test.describe("Landing page content", () => {
  test("hero headline is visible on all viewports", async ({ page }) => {
    await page.goto("/")
    await expect(
      page.getByRole("heading", { name: /We Build AI/i })
    ).toBeVisible()
  })

  test("stats bar shows numbers", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText("50+")).toBeVisible()
    await expect(page.getByText("30+")).toBeVisible()
    await expect(page.getByText("98%")).toBeVisible()
  })
})

test.describe("Mobile nav menu", () => {
  test("hamburger menu opens on mobile", async ({ page }) => {
    test.skip(
      page.viewportSize()!.width > 767,
      "Desktop — no hamburger"
    )

    await page.goto("/")
    await page.getByRole("button", { name: /open menu/i }).click()
    await expect(page.getByRole("link", { name: "About" }).last()).toBeVisible()
  })
})

test.describe("Contact form", () => {
  test("form is visible at all viewport sizes", async ({ page }) => {
    await page.goto("/contact")
    await expect(page.getByLabel("Name")).toBeVisible()
    await expect(page.getByLabel("Work Email")).toBeVisible()
    await expect(page.getByLabel("Message")).toBeVisible()
    await expect(page.getByRole("button", { name: "Send Message" })).toBeVisible()
  })
})
