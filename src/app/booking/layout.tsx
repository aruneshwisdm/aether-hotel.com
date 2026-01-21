import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Stay',
  description:
    'Reserve your room at Aether Hotel. Choose from our collection of luxurious accommodations and begin your journey to tranquility.',
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
