import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aether-hotel.com'),
  title: {
    default: 'Aether Hotel | Boutique Luxury in Nature',
    template: '%s | Aether Hotel',
  },
  description:
    'Escape to tranquility at Aether Hotel. Experience boutique luxury nestled in the heart of nature with world-class amenities, fine dining, and personalized service.',
  keywords: [
    'luxury hotel',
    'boutique hotel',
    'spa resort',
    'fine dining',
    'nature retreat',
    'wellness',
    'California hotel',
  ],
  authors: [{ name: 'Aether Hotel' }],
  creator: 'Aether Hotel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aether-hotel.com',
    siteName: 'Aether Hotel',
    title: 'Aether Hotel | Boutique Luxury in Nature',
    description:
      'Escape to tranquility at Aether Hotel. Experience boutique luxury nestled in the heart of nature.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Aether Hotel - Boutique Luxury',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aether Hotel | Boutique Luxury in Nature',
    description:
      'Escape to tranquility at Aether Hotel. Experience boutique luxury nestled in the heart of nature.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}
