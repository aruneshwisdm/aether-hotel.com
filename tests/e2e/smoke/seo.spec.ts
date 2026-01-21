import { test, expect } from '@playwright/test';

test.describe('SEO Tests', () => {
  test('homepage has proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Aether Hotel/);

    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Escape to tranquility');

    // Check OG tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('Aether Hotel');

    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();
  });

  test('each page has unique title', async ({ page }) => {
    const pageTitles: string[] = [];

    await page.goto('/');
    pageTitles.push(await page.title());

    await page.goto('/rooms');
    pageTitles.push(await page.title());

    await page.goto('/about');
    pageTitles.push(await page.title());

    await page.goto('/contact');
    pageTitles.push(await page.title());

    await page.goto('/booking');
    pageTitles.push(await page.title());

    // All titles should be unique
    const uniqueTitles = new Set(pageTitles);
    expect(uniqueTitles.size).toBe(pageTitles.length);
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
  });

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
  });

  test('proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // h2s should exist
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0);
  });
});
