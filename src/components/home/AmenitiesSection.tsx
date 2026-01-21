'use client';

import { motion } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoRestaurantOutline, IoLeafOutline } from 'react-icons/io5';
import { BiBell } from 'react-icons/bi';
import { SectionHeading } from '@/components/ui';

const amenities = [
  {
    icon: IoRestaurantOutline,
    title: 'Fine Dining',
    description:
      'Savor culinary masterpieces crafted by our award-winning chefs using locally sourced, seasonal ingredients.',
  },
  {
    icon: IoLeafOutline,
    title: 'Spa & Wellness',
    description:
      'Rejuvenate your body and mind with our holistic spa treatments and state-of-the-art wellness facilities.',
  },
  {
    icon: BiBell,
    title: 'Concierge Service',
    description:
      'Our dedicated concierge team is available around the clock to curate your perfect experience.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding bg-cream">
      <div className="container-luxury">
        <SectionHeading
          title="Refined Comforts"
          subtitle="Discover the exceptional amenities that make every stay at Aether an unforgettable experience."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              variants={itemVariants}
              className="group bg-white p-8 md:p-10 rounded-sm card-hover"
            >
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-navy mb-4">
                {amenity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
