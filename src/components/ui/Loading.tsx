'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface LoadingProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loading({
  fullScreen = false,
  size = 'md',
  className,
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-2',
    lg: 'w-16 h-16 border-3',
  };

  const spinner = (
    <motion.div
      className={cn(
        'rounded-full border-cream border-t-gold',
        sizeClasses[size],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[var(--z-modal)] bg-navy flex items-center justify-center">
        {spinner}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute mt-24 text-cream/60 text-sm tracking-widest uppercase"
        >
          Loading
        </motion.span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      {spinner}
    </div>
  );
}
