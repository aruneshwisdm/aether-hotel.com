'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { RoomType } from '@/lib/data';

type FilterOption = 'all' | RoomType;

interface RoomFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

const filters: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'All Rooms' },
  { value: 'suite', label: 'Suites' },
  { value: 'deluxe', label: 'Deluxe' },
  { value: 'standard', label: 'Standard' },
];

export default function RoomFilter({ activeFilter, onFilterChange }: RoomFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3 mb-12"
      role="tablist"
      aria-label="Filter rooms by type"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          role="tab"
          aria-selected={activeFilter === filter.value}
          className={cn(
            'relative px-6 py-2.5 text-sm font-medium tracking-wide uppercase transition-colors duration-300',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
            activeFilter === filter.value
              ? 'text-navy'
              : 'text-gray-500 hover:text-navy'
          )}
        >
          {filter.label}
          {activeFilter === filter.value && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-gold/10 border border-gold rounded-sm -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
