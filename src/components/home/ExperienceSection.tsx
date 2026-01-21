'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="The Aether Experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:py-8"
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="mt-4 mb-6">The Aether Experience</h2>
            <div className="divider-gold" />

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Nestled between mountain and sea, Aether Hotel represents a new paradigm
                in boutique luxury. Here, the boundaries between nature and elegance
                dissolve, creating a sanctuary where every moment is an invitation to
                breathe, reflect, and reconnect.
              </p>
              <p>
                Our philosophy is simple: luxury should feel natural. From the organic
                textures of our interiors to the locally sourced ingredients in our
                kitchens, every detail has been thoughtfully curated to honor both
                tradition and innovation.
              </p>
              <p>
                Whether you seek adventure in our surrounding wilderness or serenity in
                our world-class spa, Aether offers an experience that transcends the
                ordinary and touches the soul.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-gold font-medium hover:gap-4 transition-all duration-300 group"
            >
              <span>Learn More About Us</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
