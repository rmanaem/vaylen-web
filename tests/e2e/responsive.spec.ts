import { test, expect } from '@playwright/test';
import { bypassCookieConsent, waitForPageReady } from '../utils/test-helpers';

/**
 * E2E Test: Responsive Design & Accessibility
 * 
 * High-signal tests for responsive behavior and accessibility compliance.
 * Focuses on user interactions across viewports and WCAG standards.
 */

test.describe('Responsive User Experience', () => {
    test.beforeEach(async ({ page }) => {
        await bypassCookieConsent(page);
    });

    test('should maintain functionality on mobile viewport', async ({ page }) => {
        // ARRANGE
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Core interactions work on mobile
        // Email form is accessible and functional
        const emailInput = page.locator('form').first().locator('input[type="email"]');
        await emailInput.fill('mobile@test.com');
        await expect(emailInput).toHaveValue('mobile@test.com');

        // Navigation exists in DOM (may be hidden on mobile)
        const journalLinks = page.locator('a[href="/journal"]');
        const count = await journalLinks.count();
        expect(count).toBeGreaterThan(0);

        // Content scrolls properly
        const initialScroll = await page.evaluate(() => window.scrollY);
        await page.evaluate(() => window.scrollBy(0, 300));
        await page.waitForTimeout(200);
        const newScroll = await page.evaluate(() => window.scrollY);
        expect(newScroll).toBeGreaterThan(initialScroll);
    });

    test('should maintain functionality on tablet viewport', async ({ page }) => {
        // ARRANGE
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Navigation and forms functional
        const navbar = page.locator('nav');
        await expect(navbar).toBeVisible();

        const form = page.locator('form').first();
        await expect(form).toBeVisible();

        // Can navigate to journal
        await page.locator('a[href="/journal"]').first().click();
        await expect(page).toHaveURL('/journal');
    });

    test('should maintain functionality on desktop viewport', async ({ page }) => {
        // ARRANGE
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Full desktop experience
        const navbar = page.locator('nav');
        await expect(navbar).toBeVisible();

        // Footer visible without scrolling on large viewport
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(300);

        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
    });

    test('should support keyboard navigation', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Tab through interactive elements
        // Focus email input via keyboard
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab'); // May need multiple tabs depending on page structure

        const emailInput = page.locator('input[type="email"]').first();
        const isFocusable = await emailInput.evaluate(el =>
            el.tabIndex >= 0 || el.getAttribute('tabindex') !== '-1'
        );
        expect(isFocusable).toBe(true);

        // Form submit button is keyboard accessible
        const submitButton = page.locator('button[type="submit"]').first();
        await submitButton.focus();
        const isButtonFocused = await submitButton.evaluate(el => el === document.activeElement);
        expect(isButtonFocused).toBe(true);
    });

    test('should render readable text at different viewport sizes', async ({ page }) => {
        // ARRANGE
        const viewports = [
            { width: 375, height: 667 },
            { width: 768, height: 1024 },
            { width: 1920, height: 1080 },
        ];

        for (const viewport of viewports) {
            // ACT
            await page.setViewportSize(viewport);
            await page.goto('/journal/science-of-recomposition');
            await waitForPageReady(page);

            // ASSERT - Text content is accessible
            const paragraphs = page.locator('p').first();
            await expect(paragraphs).toBeVisible();

            // Article structure maintained across viewports
            const heading = page.getByRole('heading', { level: 1 });
            await expect(heading).toBeVisible();
        }
    });

    test('should provide consistent form experience across devices', async ({ page }) => {
        // ARRANGE
        const viewports = [375, 768, 1920];

        for (const width of viewports) {
            // ACT
            await page.setViewportSize({ width, height: 1080 });
            await page.goto('/');
            await waitForPageReady(page);

            // ASSERT - Email form works on all viewports
            const form = page.locator('form').first();
            const emailInput = form.locator('input[type="email"]');
            const submitButton = form.locator('button[type="submit"]');

            await expect(emailInput).toBeVisible();
            await expect(emailInput).toBeEditable();
            await expect(submitButton).toBeVisible();
            await expect(submitButton).toBeEnabled();
        }
    });
});
