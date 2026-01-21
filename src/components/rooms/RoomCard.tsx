'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiUsers } from 'react-icons/hi';
import { formatPrice } from '@/lib/utils';
import type { Room } from '@/lib/data';

interface RoomCardProps {
  room: Room;
  onSelect: (room: Room) => void;
}

export default function RoomCard({ room, onSelect }: RoomCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-sm overflow-hidden card-hover cursor-pointer"
      onClick={() => onSelect(room)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium tracking-wider uppercase transition-all duration-300"
          >
            View Details
          </motion.span>
        </div>

        {/* Room Type Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium tracking-wider uppercase text-navy">
          {room.type}
        </span>

        {/* Featured Badge */}
        {room.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-navy text-xs font-medium tracking-wider uppercase">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors duration-300">
            {room.name}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm flex-shrink-0">
            <HiUsers className="w-4 h-4" />
            <span>{room.maxGuests}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.shortDescription}
        </p>

        <div className="flex items-end justify-between pt-4 border-t border-cream-dark">
          <div>
            <span className="text-2xl font-serif text-navy">
              {formatPrice(room.price)}
            </span>
            <span className="text-gray-500 text-sm ml-1">/ night</span>
          </div>
          <span className="text-gold text-sm font-medium group-hover:underline">
            Details →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
