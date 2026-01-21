import { test, expect } from '@playwright/test';

test.describe('Form Tests', () => {
  test('contact form shows validation errors', async ({ page }) => {
    await page.goto('/contact');

    // Submit without filling fields
    await page.getByRole('button', { name: 'Send Message' }).click();

    // Check for validation errors
    await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
    await expect(page.getByText('Message must be at least 10 characters')).toBeVisible();
  });

  test('contact form accepts valid input', async ({ page }) => {
    await page.goto('/contact');

    // Fill form
    await page.getByLabel('Full Name *').fill('John Smith');
    await page.getByLabel('Email Address *').fill('john@example.com');
    await page.getByLabel('Message *').fill('This is a test message for the contact form.');

    // Check no validation errors
    await expect(page.getByText('Name must be at least 2 characters')).not.toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).not.toBeVisible();
  });

  test('booking form validation on step 1', async ({ page }) => {
    await page.goto('/booking');

    // Try to proceed without filling
    await page.getByRole('button', { name: 'Next Step' }).click();

    // Check validation errors
    await expect(page.getByText('Check-in date is required')).toBeVisible();
    await expect(page.getByText('Check-out date is required')).toBeVisible();
    await expect(page.getByText('Room preference is required')).toBeVisible();
  });

  test('booking form step navigation', async ({ page }) => {
    await page.goto('/booking');

    // Fill step 1
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    await page.locator('input[type="date"]').first().fill(tomorrow.toISOString().split('T')[0]);
    await page.locator('input[type="date"]').nth(1).fill(nextWeek.toISOString().split('T')[0]);
    await page.getByRole('combobox').nth(1).selectOption('penthouse-suite');

    // Go to step 2
    await page.getByRole('button', { name: 'Next Step' }).click();
    await page.waitForTimeout(500);

    // Should see Guest Information heading
    await expect(page.getByRole('heading', { name: 'Guest Information' })).toBeVisible();

    // Go back to step 1
    await page.getByRole('button', { name: 'Back' }).click();
    await page.waitForTimeout(500);

    // Should see Stay Details heading
    await expect(page.getByRole('heading', { name: 'Stay Details' })).toBeVisible();
  });
});
