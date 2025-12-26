# Vaylen Website E2E Testing Suite

## Overview

Comprehensive end-to-end testing suite using Playwright to validate critical user flows before launch.

## Test Coverage

### ✅ Phase 1: Critical E2E Tests (IMPLEMENTED)

**1. Waitlist Signup Flow** (`tests/e2e/waitlist-signup.spec.ts`)
- Hero email form submission
- Footer email form submission  
- Journal article CTA submission
- Email validation
- Loading states
- Success feedback

**2. Journal Reading Flow** (`tests/e2e/journal-reading.spec.ts`)
- Article discovery from homepage
- Journal index page
- Full article rendering with MDX components
- Metadata display (category, read time, author, date)
- References section rendering
- Navigation between articles
- SEO meta tags

**3. Site Navigation** (`tests/e2e/navigation.spec.ts`)
- Homepage loading
- Navbar functionality
- Legal pages (Privacy, Terms, Disclaimer, etc.)
- Footer links
- Sitemap and robots.txt generation
- Responsive design (mobile, tablet, desktop)
- Console error detection
- SEO validation

## Running Tests

### Install Dependencies
```bash
npm install
npx playwright install chromium  # Install browser
```

### Run All Tests
```bash
npm run test:e2e
```

### Run with UI (Visual Testing)
```bash
npm run test:e2e:ui
```

### Run in Headed Mode (See Browser)
```bash
npm run test:e2e:headed
```

### View Test Report
```bash
npm run test:report
```

## Test Configuration

Tests are configured in `playwright.config.ts` with:
- **Multi-browser support**: Chromium, Firefox, WebKit
- **Mobile testing**: Pixel 5, iPhone 12 viewports
- **Automatic server startup**: Builds and starts Next.js before tests
- **Retry logic**: 2 retries on CI, 0 locally
- **Artifacts**: Screenshots and videos on failure

## Pre-Launch Checklist

Before deploying to production, ensure:

- [ ] All E2E tests pass: `npm run test:e2e`
- [ ] No console errors in tests
- [ ] Waitlist signup works from all 3 entry points
- [ ] Journal articles render correctly with all metadata
- [ ] All legal pages load without 404s
- [ ] Sitemap and robots.txt generate correctly
- [ ] Mobile responsive tests pass

## CI/CD Integration

Add to your GitHub Actions workflow:

```yaml
- name: Install Playwright
  run: npx playwright install chromium

- name: Run E2E tests
  run: npm run test:e2e

- name: Upload test report
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Test Maintenance

### Adding New Tests

1. Create a new `.spec.ts` file in `tests/e2e/`
2. Follow the existing pattern:
   ```typescript
   import { test, expect } from '@playwright/test';

   test.describe('Feature Name', () => {
     test('should do something', async ({ page }) => {
       await page.goto('/');
       // Test logic
     });
   });
   ```

### Debugging Failed Tests

1. **View the HTML report**: `npm run test:report`
2. **Run in UI mode**: `npm run test:e2e:ui`
3. **Check screenshots**: Located in `test-results/`
4. **Watch videos**: Also in `test-results/` (on failure only)

## Known Issues

- `metadataBase` warning in Next.js build (non-blocking, safe to ignore)
- Tests require production build (configured automatically)

## Next Phases

- **Phase 2**: Unit tests for components (Jest + RTL)
- **Phase 3**: Integration tests for API routes
- **Phase 4**: Accessibility audits (WCAG 2.1 AA)
