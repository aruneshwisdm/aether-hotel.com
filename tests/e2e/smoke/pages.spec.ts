import { test, expect } from '@playwright/test';

test.describe('Page Load Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aether Hotel/);
    await expect(page.locator('h1')).toContainText('Escape to Tranquility');
    await expect(page.getByRole('link', { name: 'AETHER' })).toBeVisible();
  });

  test('rooms page loads successfully', async ({ page }) => {
    await page.goto('/rooms');
    await expect(page).toHaveTitle(/Rooms & Suites/);
    await expect(page.locator('h1')).toContainText('Our Rooms & Suites');
    // Check that room cards are visible
    await expect(page.getByRole('article')).toHaveCount(6);
  });

  test('about page loads successfully', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveTitle(/About Us/);
    await expect(page.locator('h1')).toContainText('Our Story');
  });

  test('contact page loads successfully', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle(/Contact Us/);
    await expect(page.locator('h1')).toContainText('Get In Touch');
    // Check form is present
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('booking page loads successfully', async ({ page }) => {
    await page.goto('/booking');
    await expect(page).toHaveTitle(/Book Your Stay/);
    await expect(page.locator('h1')).toContainText('Book Your Stay');
    // Check multi-step form is present
    await expect(page.getByRole('button', { name: 'Next Step' })).toBeVisible();
  });
});
