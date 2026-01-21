'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Footer } from '@/components/layout';
import { SectionHeading, ScrollToTop } from '@/components/ui';
import { RoomCard, RoomFilter, RoomModal } from '@/components/rooms';
import { rooms, type Room, type RoomType } from '@/lib/data';

type FilterOption = 'all' | RoomType;

export default function RoomsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const filteredRooms = useMemo(() => {
    if (activeFilter === 'all') return rooms;
    return rooms.filter((room) => room.type === activeFilter);
  }, [activeFilter]);

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
              Accommodations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Our Rooms & Suites
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Each of our thoughtfully designed accommodations offers a unique blend
              of luxury, comfort, and natural beauty.
            </motion.p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <RoomFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredRooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onSelect={setSelectedRoom}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredRooms.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 py-12"
              >
                No rooms found for this category.
              </motion.p>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </>
  );
}
