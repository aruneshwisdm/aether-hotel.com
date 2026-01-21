'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiUsers, HiOutlineViewGrid } from 'react-icons/hi';
import { IoBedOutline } from 'react-icons/io5';
import { Button } from '@/components/ui';
import { formatPrice } from '@/lib/utils';
import type { Room } from '@/lib/data';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (room) {
      document.body.style.overflow = 'hidden';
      setSelectedImage(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [room]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!room) return null;

  return (
    <AnimatePresence>
      {room && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-[var(--z-modal-backdrop)]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-sm z-[var(--z-modal)] overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-auto">
              {/* Image Gallery */}
              <div className="lg:w-3/5 bg-cream p-4 lg:p-6">
                {/* Main Image */}
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-sm overflow-hidden mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={room.images[selectedImage]}
                        alt={`${room.name} - Image ${selectedImage + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-[4/3] w-20 lg:w-24 rounded-sm overflow-hidden transition-all duration-300 ${
                        selectedImage === index
                          ? 'ring-2 ring-gold'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${room.name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col">
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  {room.type}
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl text-navy mt-2 mb-4">
                  {room.name}
                </h2>

                {/* Room Info */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-cream-dark mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <HiOutlineViewGrid className="w-5 h-5 text-gold" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <HiUsers className="w-5 h-5 text-gold" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <IoBedOutline className="w-5 h-5 text-gold" />
                    <span>{room.bedType}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="font-serif text-lg text-navy mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1.5 bg-cream text-sm text-gray-600 rounded-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto pt-6 border-t border-cream-dark">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <span className="text-gray-500 text-sm">From</span>
                      <div className="text-3xl font-serif text-navy">
                        {formatPrice(room.price)}
                        <span className="text-base text-gray-500 font-sans ml-1">
                          / night
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/booking?room=${room.slug}`} onClick={onClose}>
                    <Button variant="primary" size="lg" fullWidth>
                      Book This Room
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
