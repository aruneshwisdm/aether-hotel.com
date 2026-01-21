import { Playfair_Display, Inter } from 'next/font/google';

/**
 * Playfair Display - Elegant serif for headings
 * Used for: h1-h6, hero text, section titles
 * Characteristics: High contrast, classic elegance
 */
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

/**
 * Inter - Clean sans-serif for body text
 * Used for: Body text, navigation, buttons, form labels
 * Characteristics: Highly legible, modern, professional
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

/**
 * Combined font variables for className
 */
export const fontVariables = `${playfair.variable} ${inter.variable}`;
