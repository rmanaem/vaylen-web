import { test, expect } from '@playwright/test';
import { bypassCookieConsent, waitForPageReady } from '../utils/test-helpers';

/**
 * E2E Test: Theme-Aware Favicon
 * 
 * High-signal test for favicon switching based on color scheme.
 * Tests that correct favicon displays for light and dark modes.
 */

test.describe('Theme-Aware Favicon', () => {
    test('should display dark favicon in light mode', async ({ page }) => {
        // ARRANGE - Emulate light color scheme
        await page.emulateMedia({ colorScheme: 'light' });
        await bypassCookieConsent(page);

        // ACT
        await page.goto('/');
        await waitForPageReady(page);

        // Wait for ThemeFavicon component to inject links
        await page.waitForTimeout(500);

        // ASSERT - Dark favicon (onyx) should be present for light mode
        const lightModeFavicon = page.locator('link[rel="icon"][media*="light"]');
        await expect(lightModeFavicon).toHaveAttribute('href', '/favicon-onyx.ico');

        // Verify it's actually in the DOM
        const faviconCount = await page.locator('link[rel="icon"][media]').count();
        expect(faviconCount).toBeGreaterThanOrEqual(2); // Both theme favicons should exist
    });

    test('should display light favicon in dark mode', async ({ page }) => {
        // ARRANGE - Emulate dark color scheme
        await page.emulateMedia({ colorScheme: 'dark' });
        await bypassCookieConsent(page);

        // ACT
        await page.goto('/');
        await waitForPageReady(page);

        // Wait for ThemeFavicon component to inject links
        await page.waitForTimeout(500);

        // ASSERT - Light favicon (silver) should be present for dark mode
        const darkModeFavicon = page.locator('link[rel="icon"][media*="dark"]');
        await expect(darkModeFavicon).toHaveAttribute('href', '/favicon-silver.ico');

        // Verify both theme-aware favicons exist
        const faviconCount = await page.locator('link[rel="icon"][media]').count();
        expect(faviconCount).toBeGreaterThanOrEqual(2);
    });

    test('should switch favicon when theme changes', async ({ page }) => {
        // ARRANGE - Start with light mode
        await page.emulateMedia({ colorScheme: 'light' });
        await bypassCookieConsent(page);
        await page.goto('/');
        await waitForPageReady(page);
        await page.waitForTimeout(500);

        // ASSERT - Verify light mode favicon exists
        const lightModeFavicon = page.locator('link[rel="icon"][media*="light"]');
        await expect(lightModeFavicon).toHaveAttribute('href', '/favicon-onyx.ico');

        // ACT - Switch to dark mode
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.waitForTimeout(300);

        // ASSERT - Verify dark mode favicon exists (both should be in DOM)
        const darkModeFavicon = page.locator('link[rel="icon"][media*="dark"]');
        await expect(darkModeFavicon).toHaveAttribute('href', '/favicon-silver.ico');

        // Both favicons should still be present with media queries
        const lightFavicon = await lightModeFavicon.getAttribute('href');
        const darkFavicon = await darkModeFavicon.getAttribute('href');

        expect(lightFavicon).toBe('/favicon-onyx.ico');
        expect(darkFavicon).toBe('/favicon-silver.ico');
    });
});
