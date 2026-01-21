import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Aether Hotel\'s story, our commitment to excellence, and the passionate team dedicated to creating unforgettable experiences for our guests.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
