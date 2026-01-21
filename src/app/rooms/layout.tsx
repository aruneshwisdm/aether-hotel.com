import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rooms & Suites',
  description:
    'Discover our collection of thoughtfully designed accommodations. From luxurious suites to comfortable standard rooms, each space offers a unique blend of comfort and elegance.',
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
