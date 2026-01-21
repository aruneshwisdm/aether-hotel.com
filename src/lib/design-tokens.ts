/**
 * AETHER HOTEL - Design Tokens
 * Aesthetic: Luxury Refined
 *
 * TypeScript definitions for design system tokens.
 * Use these for programmatic access to design values.
 */

export const colors = {
  // Primary - Deep Navy
  navy: {
    DEFAULT: '#0F172A',
    light: '#1E293B',
    dark: '#020617',
  },

  // Secondary - Warm Gold
  gold: {
    DEFAULT: '#D4AF37',
    light: '#E5C158',
    dark: '#B8972E',
  },

  // Neutral - Cream & White
  cream: {
    DEFAULT: '#F8F6F0',
    dark: '#EDE9DD',
  },
  white: '#FFFFFF',
  charcoal: '#1E293B',

  // Grays
  gray: {
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
  },
} as const;

export const typography = {
  // Font Families
  fontFamily: {
    serif: ['Playfair Display', 'Georgia', 'serif'],
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },

  // Font Sizes (Perfect Fourth: 1.333)
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.333rem',     // 21px
    '2xl': '1.777rem',  // 28px
    '3xl': '2.369rem',  // 38px
    '4xl': '3.157rem',  // 50px
    '5xl': '4.209rem',  // 67px
    '6xl': '5.61rem',   // 90px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.15em',
  },
} as const;

export const spacing = {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.5rem',    // 24px
  6: '2rem',      // 32px
  8: '3rem',      // 48px
  10: '4rem',     // 64px
  12: '5rem',     // 80px
  16: '6rem',     // 96px
  20: '8rem',     // 128px
  24: '10rem',    // 160px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  xl: '1rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(15 23 42 / 0.05)',
  md: '0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.05)',
  lg: '0 10px 15px -3px rgb(15 23 42 / 0.08), 0 4px 6px -4px rgb(15 23 42 / 0.04)',
  xl: '0 20px 25px -5px rgb(15 23 42 / 0.1), 0 8px 10px -6px rgb(15 23 42 / 0.04)',
  '2xl': '0 25px 50px -12px rgb(15 23 42 / 0.2)',
  gold: '0 4px 14px 0 rgb(212 175 55 / 0.3)',
} as const;

export const transitions = {
  // Durations
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },

  // Easing Curves
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation variants for Framer Motion
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },

  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },

  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  staggerFast: {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
} as const;

// Default transition config for Framer Motion
export const defaultTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // luxury easing
} as const;

// Page load animation sequence
export const pageLoadSequence = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
} as const;

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  motionVariants,
  defaultTransition,
  pageLoadSequence,
};
