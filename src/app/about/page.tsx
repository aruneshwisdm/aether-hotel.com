'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineStar, HiOutlineHeart, HiOutlineLightBulb } from 'react-icons/hi';
import { IoLeafOutline } from 'react-icons/io5';
import { Navigation, Footer } from '@/components/layout';
import { SectionHeading, ScrollToTop } from '@/components/ui';
import { teamMembers, values } from '@/lib/data';

const valueIcons = {
  leaf: IoLeafOutline,
  star: HiOutlineStar,
  heart: HiOutlineHeart,
  lightbulb: HiOutlineLightBulb,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-navy">
          <div className="container-luxury text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              About Aether
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              A journey of passion, purpose, and the pursuit of perfection.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                  Since 2010
                </span>
                <h2 className="mt-4 mb-6">A Vision of Tranquility</h2>
                <div className="divider-gold" />

                <div className="space-y-6 text-gray-600 leading-relaxed mt-8">
                  <p>
                    Aether Hotel was born from a simple yet profound vision: to create
                    a space where luxury and nature exist in perfect harmony. Founded
                    over a decade ago, we set out to redefine what a boutique hotel
                    could be.
                  </p>
                  <p>
                    Our founders believed that true luxury is not just about opulence,
                    but about creating meaningful experiences that nourish the soul.
                    This philosophy guides everything we do, from the architecture that
                    embraces our natural surroundings to the personalized service that
                    anticipates your every need.
                  </p>
                  <p>
                    Today, Aether stands as a testament to that original vision—a
                    sanctuary where guests can disconnect from the ordinary and
                    reconnect with what truly matters.
                  </p>
                </div>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
                      alt="Hotel exterior"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-sm overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80"
                      alt="Pool area"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-sm overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80"
                      alt="Spa treatment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
                      alt="Restaurant"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <SectionHeading
              title="Meet Our Team"
              subtitle="The passionate individuals behind the Aether experience."
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="group bg-white rounded-sm overflow-hidden card-hover"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Bio Overlay */}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-colors duration-500 flex items-center justify-center p-6">
                      <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl text-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm font-medium tracking-wide">
                      {member.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide our commitment to excellence."
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => {
                const Icon = valueIcons[value.icon as keyof typeof valueIcons];
                return (
                  <motion.div
                    key={value.id}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-navy mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
