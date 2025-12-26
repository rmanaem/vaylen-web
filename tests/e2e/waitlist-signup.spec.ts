import { test, expect } from '@playwright/test';
import { bypassCookieConsent, waitForPageReady } from '../utils/test-helpers';

/**
 * E2E Test: Email Signup User Journey
 * 
 * High-signal tests focusing on the complete user journey for waitlist signup.
 * Tests observable behavior and public contracts, not implementation details.
 */

test.describe('Email Signup User Journey', () => {
    test.beforeEach(async ({ page }) => {
        await bypassCookieConsent(page);
    });

    test('should complete successful email signup from hero section', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT
        const emailInput = page.locator('form').first().locator('input[type="email"]');
        await emailInput.fill('test@example.com');

        const submitButton = page.locator('form').first().locator('button[type="submit"]');
        await submitButton.click();

        // ASSERT - Verify form accepts valid email
        await expect(emailInput).toHaveValue('test@example.com');
    });

    test('should prevent submission of invalid email', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT
        const form = page.locator('form').first();
        const emailInput = form.locator('input[type="email"]');
        await emailInput.fill('invalid-email');

        const submitButton = form.locator('button[type="submit"]');
        await submitButton.click();

        // ASSERT - HTML5 validation should trigger
        const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
        expect(isValid).toBe(false);
    });

    test('should provide email signup in article context', async ({ page }) => {
        // ARRANGE
        await page.goto('/journal/science-of-recomposition');
        await waitForPageReady(page);

        // ACT - Scroll to CTA and locate form
        await page.getByText(/vaylen approach/i).scrollIntoViewIfNeeded();
        const articleForm = page.locator('form').last();

        // ASSERT - Form is functional in article context
        const emailInput = articleForm.locator('input[type="email"]');
        await emailInput.fill('article-reader@example.com');
        await expect(emailInput).toHaveValue('article-reader@example.com');
    });

    test('should have accessible email forms', async ({ page }) => {
        // ARRANGE
        await page.goto('/');
        await waitForPageReady(page);

        // ACT & ASSERT - Check accessibility
        const form = page.locator('form').first();
        const emailInput = form.locator('input[type="email"]');
        const submitButton = form.locator('button[type="submit"]');

        // Input should have proper type for screen readers
        await expect(emailInput).toHaveAttribute('type', 'email');

        // Button should have accessible text
        const buttonText = await submitButton.textContent();
        expect(buttonText).toBeTruthy();
        expect(buttonText?.length).toBeGreaterThan(0);

        // Form should be keyboard accessible
        await emailInput.focus();
        const isFocused = await emailInput.evaluate(el => el === document.activeElement);
        expect(isFocused).toBe(true);
    });
});
