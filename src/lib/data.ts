/**
 * AETHER HOTEL - Content Data
 * Centralized content management for easy updates
 */

// Room Types
export type RoomType = 'suite' | 'deluxe' | 'standard';

export interface Room {
  id: string;
  slug: string;
  name: string;
  type: RoomType;
  description: string;
  shortDescription: string;
  price: number;
  size: string;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  images: string[];
  featured?: boolean;
}

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'penthouse-suite',
    name: 'Penthouse Suite',
    type: 'suite',
    description: 'Our most exclusive accommodation, the Penthouse Suite offers panoramic views and unparalleled luxury. Spanning the entire top floor, this suite features a private terrace, personal butler service, and bespoke furnishings curated from around the world.',
    shortDescription: 'Panoramic views with private terrace and butler service',
    price: 1200,
    size: '2,500 sq ft',
    maxGuests: 4,
    bedType: 'King bed + Sofa bed',
    amenities: ['Private Terrace', 'Butler Service', 'Jacuzzi', 'Fireplace', 'Mini Bar', 'Ocean View', 'Separate Living Area', 'Premium Toiletries'],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'garden-suite',
    name: 'Garden Suite',
    type: 'suite',
    description: 'Immerse yourself in nature with direct access to our private gardens. The Garden Suite combines indoor luxury with outdoor serenity, featuring floor-to-ceiling windows and a private patio surrounded by lush landscaping.',
    shortDescription: 'Private garden access with floor-to-ceiling windows',
    price: 850,
    size: '1,800 sq ft',
    maxGuests: 3,
    bedType: 'King bed',
    amenities: ['Private Garden', 'Patio', 'Rain Shower', 'Work Desk', 'Mini Bar', 'Garden View', 'Bathtub', 'Espresso Machine'],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'ocean-view-deluxe',
    name: 'Ocean View Deluxe',
    type: 'deluxe',
    description: 'Wake up to breathtaking ocean views in our deluxe accommodation. This spacious room features a private balcony, premium bedding, and thoughtful amenities designed for the discerning traveler.',
    shortDescription: 'Stunning ocean views with private balcony',
    price: 550,
    size: '650 sq ft',
    maxGuests: 2,
    bedType: 'King bed',
    amenities: ['Private Balcony', 'Ocean View', 'Rain Shower', 'Work Desk', 'Mini Bar', 'Smart TV', 'Premium Toiletries'],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    ],
  },
  {
    id: '4',
    slug: 'mountain-deluxe',
    name: 'Mountain Deluxe',
    type: 'deluxe',
    description: 'Nestled against the mountain backdrop, this room offers tranquil views and a cozy atmosphere. Features include a reading nook, fireplace, and premium amenities for a restful retreat.',
    shortDescription: 'Mountain views with fireplace and reading nook',
    price: 480,
    size: '600 sq ft',
    maxGuests: 2,
    bedType: 'Queen bed',
    amenities: ['Mountain View', 'Fireplace', 'Reading Nook', 'Rain Shower', 'Mini Bar', 'Smart TV', 'Coffee Maker'],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    ],
  },
  {
    id: '5',
    slug: 'classic-room',
    name: 'Classic Room',
    type: 'standard',
    description: 'Experience refined comfort in our Classic Room. Thoughtfully designed with elegant furnishings and all essential amenities for a comfortable stay.',
    shortDescription: 'Elegant comfort with essential luxury amenities',
    price: 320,
    size: '400 sq ft',
    maxGuests: 2,
    bedType: 'Queen bed',
    amenities: ['Rain Shower', 'Work Desk', 'Smart TV', 'Coffee Maker', 'Safe', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=800&q=80',
    ],
  },
  {
    id: '6',
    slug: 'courtyard-room',
    name: 'Courtyard Room',
    type: 'standard',
    description: 'Overlooking our serene interior courtyard, this room offers a peaceful retreat. Features include courtyard views, premium bedding, and modern amenities.',
    shortDescription: 'Peaceful courtyard views with modern comforts',
    price: 280,
    size: '380 sq ft',
    maxGuests: 2,
    bedType: 'Queen bed',
    amenities: ['Courtyard View', 'Rain Shower', 'Work Desk', 'Smart TV', 'Coffee Maker', 'Safe'],
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80',
    ],
  },
];

// Testimonials
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'An unforgettable experience. The attention to detail and personalized service made our anniversary truly special. We cannot wait to return.',
    author: 'Sarah & Michael Thompson',
    location: 'New York, USA',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Aether Hotel redefined luxury for me. From the moment we arrived, every need was anticipated. The spa treatments were world-class.',
    author: 'Emma Richardson',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The perfect blend of nature and elegance. Waking up to those mountain views while enjoying their exceptional breakfast is something I will never forget.',
    author: 'James Chen',
    location: 'Singapore',
    rating: 5,
  },
];

// Amenities
export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const amenities: Amenity[] = [
  {
    id: '1',
    title: 'Fine Dining',
    description: 'Savor culinary masterpieces crafted by our award-winning chefs using locally sourced ingredients.',
    icon: 'restaurant',
  },
  {
    id: '2',
    title: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind with our holistic spa treatments and state-of-the-art wellness facilities.',
    icon: 'spa',
  },
  {
    id: '3',
    title: 'Concierge Service',
    description: 'Our dedicated concierge team is available around the clock to curate your perfect experience.',
    icon: 'concierge',
  },
];

// Team Members
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alexander Whitmore',
    title: 'General Manager',
    bio: 'With over two decades of experience in luxury hospitality, Alexander brings an unwavering commitment to excellence. His vision has shaped Aether Hotel into a sanctuary of refined comfort.',
    shortBio: 'Two decades of luxury hospitality excellence',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: '2',
    name: 'Chef Marie Laurent',
    title: 'Executive Chef',
    bio: 'Trained in Paris and Tokyo, Chef Marie crafts culinary experiences that celebrate local ingredients with international flair. Her farm-to-table philosophy drives our dining excellence.',
    shortBio: 'Parisian-trained, farm-to-table visionary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: '3',
    name: 'Dr. Elena Rossi',
    title: 'Spa Director',
    bio: 'Dr. Rossi combines Eastern healing traditions with Western wellness science. Her holistic approach ensures every guest leaves feeling renewed and restored.',
    shortBio: 'Holistic wellness with Eastern-Western fusion',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
];

// Values
export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const values: Value[] = [
  {
    id: '1',
    title: 'Sustainability',
    description: 'Committed to preserving nature for future generations through eco-conscious practices.',
    icon: 'leaf',
  },
  {
    id: '2',
    title: 'Excellence',
    description: 'Every detail matters. We pursue perfection in all that we do.',
    icon: 'star',
  },
  {
    id: '3',
    title: 'Hospitality',
    description: 'Genuine warmth and personalized care define our guest experience.',
    icon: 'heart',
  },
  {
    id: '4',
    title: 'Innovation',
    description: 'Embracing new ideas while honoring timeless traditions of luxury.',
    icon: 'lightbulb',
  },
];

// Contact Information
export const contactInfo = {
  address: {
    street: '123 Serenity Way',
    city: 'Coastal Haven',
    state: 'California',
    zip: '90210',
    country: 'USA',
  },
  phone: '+1 (555) 123-4567',
  email: 'reservations@aetherhotel.com',
  hours: {
    reception: '24/7',
    restaurant: '7:00 AM - 11:00 PM',
    spa: '8:00 AM - 9:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/aetherhotel',
    facebook: 'https://facebook.com/aetherhotel',
    twitter: 'https://twitter.com/aetherhotel',
  },
  coordinates: {
    lat: 34.0195,
    lng: -118.4912,
  },
};

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};
