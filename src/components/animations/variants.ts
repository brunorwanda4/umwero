/**
 * Framer Motion Animation Variants
 * 
 * Centralized animation configurations for the UMWERO landing website.
 * These variants are used across multiple components to ensure consistent
 * animation behavior and timing.
 * 
 * Validates: Requirements 9.2, 9.3
 */

import { Variants } from 'framer-motion';

/**
 * Fade-in animation with upward movement
 * Used for section content that enters from below
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

/**
 * Container variant for staggered children animations
 * Used for sections with multiple items that should animate sequentially
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Card hover effect with lift and scale
 * Used for interactive card components
 */
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

/**
 * Plant growth animation for hero section
 * Animates from seed to mature plant with smooth easing
 */
export const plantGrowth: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.4, 0, 0.2, 1],
      times: [0, 0.3, 0.6, 1]
    }
  }
};
