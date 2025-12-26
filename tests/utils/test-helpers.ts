import { Page } from '@playwright/test';

/**
 * Test Utilities and Helpers
 * 
 * Common functions used across E2E tests.
 */

/**
 * Bypass CookieScript consent banner for testing
 * This prevents the cookie banner from blocking clicks during tests
 */
export async function bypassCookieConsent(page: Page) {
    await page.addInitScript(() => {
        // Set CookieScript consent in localStorage
        window.localStorage.setItem('CookieScriptConsent', JSON.stringify({
            action: 'accept',
            categories: ['strict', 'performance', 'targeting'],
            key: 'test',
        }));
    });
}

/**
 * Wait for page to be fully loaded and hydrated
 */
export async function waitForPageReady(page: Page) {
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');

    // Wait for any React hydration to complete
    await page.waitForFunction(() => {
        return document.readyState === 'complete';
    });
}

/**
 * Safely click an element, forcing the click if button is obscured
 */
export async function safeClick(page: Page, selector: string) {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible' });

    try {
        await element.click({ timeout: 5000 });
    } catch (error) {
        // If normal click fails, force the click
        await element.click({ force: true });
    }
}
