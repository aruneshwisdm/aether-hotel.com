'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex flex-col mb-12 md:mb-16', alignClasses[align], className)}
    >
      <h2
        className={cn(
          'font-serif',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'divider-gold mt-4',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg',
            light ? 'text-white/80' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
