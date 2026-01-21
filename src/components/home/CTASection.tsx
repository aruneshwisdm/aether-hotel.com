'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="container-luxury relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
        >
          Ready to Experience Aether?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white mb-6"
        >
          Begin Your Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
        >
          Book your stay today and discover why our guests return time and again.
          Experience luxury that feels like home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/booking">
            <Button variant="primary" size="lg">
              Book Your Stay
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
