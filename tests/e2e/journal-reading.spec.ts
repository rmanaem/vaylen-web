import { test, expect } from '@playwright/test';
import { bypassCookieConsent, waitForPageReady } from '../utils/test-helpers';

/**
 * E2E Test: Journal Content Discovery & Reading
 * 
 * High-signal tests for the journal user journey.
 * Focuses on content accessibility, navigation flow, and semantic structure.
 */

test.describe('Journal Content Discovery', () => {
    test.beforeEach(async ({ page }) => {
        await bypassCookieConsent(page);
    });

    test('should navigate complete journal discovery flow', async ({ page }) => {
        // ARRANGE - Start from homepage
        await page.goto('/');
        await waitForPageReady(page);

        // ACT - Navigate to journal index
        await page.locator('a[href="/journal"]').first().click();
        await waitForPageReady(page);

        // ASSERT - Journal index is accessible with articles
        await expect(page).toHaveURL('/journal');
        const articleLinks = page.locator('a[href^="/journal/"]');
        const count = await articleLinks.count();
        expect(count).toBeGreaterThan(0);
    });

    test('should display article with semantic structure', async ({ page }) => {
        // ARRANGE
        await page.goto('/journal/science-of-recomposition');
        await waitForPageReady(page);

        // ACT & ASSERT - Verify semantic HTML structure
        // Main heading present and accessible
        const mainHeading = page.getByRole('heading', { level: 1 });
        await expect(mainHeading).toBeVisible();
        const headingText = await mainHeading.textContent();
        expect(headingText).toBeTruthy();

        // Subheadings create document outline
        const subheadings = page.getByRole('heading', { level: 2 });
        const subheadingCount = await subheadings.count();
        expect(subheadingCount).toBeGreaterThan(0);

        // Article has references section (academic integrity)
        const referencesHeading = page.getByRole('heading', { name: /references/i });
        await expect(referencesHeading).toBeVisible();
    });

    test('should support bidirectional journal navigation', async ({ page }) => {
        // ARRANGE - Start on article
        await page.goto('/journal/science-of-recomposition');
        await waitForPageReady(page);

        // ACT - Navigate back to index
        const backLink = page.getByRole('link', { name: /back to journal/i });
        await backLink.click();

        // ASSERT - Returned to journal index
        await expect(page).toHaveURL('/journal');

        // ACT - Navigate forward to article again
        const articleLink = page.locator('a[href="/journal/science-of-recomposition"]').first();
        await articleLink.click();

        // ASSERT - Article loaded again
        await expect(page).toHaveURL('/journal/science-of-recomposition');
    });

    test('should have SEO-optimized metadata', async ({ page }) => {
        // ARRANGE & ACT
        await page.goto('/journal/science-of-recomposition');

        // ASSERT - Essential SEO meta tags present
        await expect(page).toHaveTitle(/.+/); // Non-empty title

        const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
        expect(metaDescription).toBeTruthy();
        expect(metaDescription!.length).toBeGreaterThan(50); // Meaningful description

        // Open Graph for social sharing
        const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
        expect(ogTitle).toBeTruthy();
    });

    test('should render MDX content correctly', async ({ page }) => {
        // ARRANGE
        await page.goto('/journal/science-of-recomposition');
        await waitForPageReady(page);

        // ACT & ASSERT - Custom MDX components render
        // Equation boxes for scientific content (check for delta symbol)
        const equationContent = page.getByText(/Δ/); // Delta symbol indicates equations
        await expect(equationContent.first()).toBeVisible();

        // Embedded email form (component composition)
        const embeddedForm = page.locator('form').last();
        await expect(embeddedForm).toBeVisible();

        // Verify form has email input (structural check)
        const emailInput = embeddedForm.locator('input[type="email"]');
        await expect(emailInput).toBeVisible();
    });
});
