import { test, expect } from '@playwright/test';
import { bypassCookieConsent, waitForPageReady } from '../utils/test-helpers';

/**
 * E2E Test: Site Navigation & SEO
 * 
 * High-signal tests for navigation patterns and SEO fundamentals.
 * Focuses on user-facing navigation flows and search engine requirements.
 */

test.describe('Core Navigation Patterns', () => {
    test.beforeEach(async ({ page }) => {
        await bypassCookieConsent(page);
    });

    test('should complete primary navigation flow', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Primary nav links work
        const navbar = page.locator('nav').first();

        // Navigate to journal
        await navbar.locator('a[href="/journal"]').click();
        await expect(page).toHaveURL('/journal');

        // Return home via browser back
        await page.goBack();
        await expect(page).toHaveURL('/');
    });

    test('should provide access to legal documentation', async ({ page }) => {
        // ARRANGE
        const legalPages = ['/privacy', '/terms', '/disclaimer'];

        for (const path of legalPages) {
            // ACT
            await page.goto(path);
            await waitForPageReady(page);

            // ASSERT - Page loads with proper heading structure
            const heading = page.getByRole('heading', { level: 1 });
            await expect(heading).toBeVisible();

            // Not a 404
            const bodyText = await page.locator('body').textContent();
            expect(bodyText?.toLowerCase()).not.toContain('not found');
        }
    });

    test('should navigate via footer links', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT - Scroll to footer and click link
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        const footer = page.locator('footer');
        await footer.locator('a[href="/privacy"]').click();

        // ASSERT
        await expect(page).toHaveURL('/privacy');
    });
});

test.describe('SEO Infrastructure', () => {
    test.beforeEach(async ({ page }) => {
        await bypassCookieConsent(page);
    });

    test('should serve valid XML sitemap', async ({ page }) => {
        // ACT
        const response = await page.goto('/sitemap.xml');

        // ASSERT
        expect(response?.status()).toBe(200);
        expect(response?.headers()['content-type']).toContain('xml');

        const content = await response?.text();
        expect(content).toContain('<url'); // Valid sitemap structure
        expect(content).toContain('/journal'); // Critical pages included
    });

    test('should serve robots.txt for crawlers', async ({ page }) => {
        // ACT
        const response = await page.goto('/robots.txt');

        // ASSERT
        expect(response?.status()).toBe(200);

        const content = await response?.text();
        expect(content).toBeTruthy();
        expect(content?.length).toBeGreaterThan(0);
    });

    test('should have comprehensive homepage metadata', async ({ page }) => {
        // ACT
        await page.goto('/');

        // ASSERT - Critical SEO elements
        const title = await page.title();
        expect(title.length).toBeGreaterThan(0);
        expect(title.length).toBeLessThan(60); // SEO best practice

        const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
        expect(metaDesc).toBeTruthy();
        expect(metaDesc!.length).toBeGreaterThan(50); // Meaningful description

        // Social sharing meta tags
        const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
        const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
        expect(ogTitle).toBeTruthy();
        expect(ogImage).toBeTruthy();
    });

    test('should load without critical JavaScript errors', async ({ page }) => {
        // ARRANGE
        const criticalErrors: string[] = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                // Filter out non-critical warnings
                const text = msg.text();
                if (!text.toLowerCase().includes('metadatabase') &&
                    !text.toLowerCase().includes('warning')) {
                    criticalErrors.push(text);
                }
            }
        });

        // ACT
        await page.goto('/');
        await waitForPageReady(page);

        // ASSERT
        expect(criticalErrors).toHaveLength(0);
    });
});
