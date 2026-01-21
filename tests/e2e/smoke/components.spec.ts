import { test, expect } from '@playwright/test';

test.describe('Interactive Components', () => {
  test('room filter works correctly', async ({ page }) => {
    await page.goto('/rooms');

    // Initially all rooms visible
    await expect(page.getByRole('article')).toHaveCount(6);

    // Filter by Suites
    await page.getByRole('button', { name: 'Suites' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByRole('article')).toHaveCount(2);

    // Filter by Deluxe
    await page.getByRole('button', { name: 'Deluxe' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByRole('article')).toHaveCount(2);

    // Filter by Standard
    await page.getByRole('button', { name: 'Standard' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByRole('article')).toHaveCount(2);

    // Show all rooms again
    await page.getByRole('button', { name: 'All Rooms' }).click();
    await page.waitForTimeout(500);
    await expect(page.getByRole('article')).toHaveCount(6);
  });

  test('room modal opens and closes', async ({ page }) => {
    await page.goto('/rooms');

    // Click on first room card
    await page.getByRole('article').first().click();
    await page.waitForTimeout(500);

    // Modal should be visible
    await expect(page.getByRole('button', { name: 'Close modal' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Penthouse Suite' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Book This Room' })).toBeVisible();

    // Close modal
    await page.getByRole('button', { name: 'Close modal' }).click();
    await page.waitForTimeout(500);

    // Modal should be closed
    await expect(page.getByRole('button', { name: 'Close modal' })).not.toBeVisible();
  });

  test('testimonials carousel shows content', async ({ page }) => {
    await page.goto('/');

    // Scroll to testimonials section
    await page.evaluate(() => {
      const element = document.querySelector('blockquote');
      element?.scrollIntoView({ behavior: 'instant' });
    });

    // Check testimonial content is visible
    await expect(page.locator('blockquote').first()).toBeVisible();

    // Check navigation dots are present
    await expect(page.getByRole('button', { name: /Go to testimonial/ }).first()).toBeVisible();
  });
});
