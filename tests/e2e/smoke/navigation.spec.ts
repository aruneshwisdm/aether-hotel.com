import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('header navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test logo link
    await page.getByRole('link', { name: 'AETHER' }).first().click();
    await expect(page).toHaveURL('/');

    // Test nav links
    await page.getByRole('link', { name: 'Rooms' }).first().click();
    await expect(page).toHaveURL('/rooms');

    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL('/about');

    await page.getByRole('link', { name: 'Contact' }).first().click();
    await expect(page).toHaveURL('/contact');
  });

  test('Book Now button navigates to booking', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Book Now' }).first().click();
    await expect(page).toHaveURL('/booking');
  });

  test('CTA buttons on homepage work', async ({ page }) => {
    await page.goto('/');

    // Explore Rooms button
    await page.getByRole('link', { name: 'Explore Rooms' }).click();
    await expect(page).toHaveURL('/rooms');

    await page.goto('/');

    // Book Your Stay button
    await page.getByRole('link', { name: 'Book Your Stay' }).first().click();
    await expect(page).toHaveURL('/booking');
  });

  test('footer links work correctly', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Test quick links
    await page.getByRole('link', { name: 'About Us' }).click();
    await expect(page).toHaveURL('/about');
  });
});
