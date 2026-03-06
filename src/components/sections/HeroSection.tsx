/**
 * HeroSection Component
 * 
 * First impression component that communicates UMWERO's core value proposition.
 * Features an animated plant growth visualization and call-to-action.
 * 
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5
 */

'use client';

import { motion } from 'framer-motion';
import { plantGrowth } from '@/components/animations/variants';
import { COLORS } from '@/lib/constants';

interface HeroSectionProps {
  title: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export default function HeroSection({ title, tagline, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section 
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-white px-4 py-16"
      data-section="hero"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ color: COLORS.primary }}
            >
              {title}
            </h1>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl lg:text-3xl">
              {tagline}
            </p>
            <motion.a
              href={ctaHref}
              className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              style={{ backgroundColor: COLORS.accent }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {ctaText}
            </motion.a>
          </div>

          {/* Plant Animation Column */}
          <div className="flex items-center justify-center">
            <PlantGrowthAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * PlantGrowthAnimation Component
 * 
 * SVG-based plant growth visualization that animates from seed to mature plant.
 * Uses primary color for plant and accent color for highlights.
 */
function PlantGrowthAnimation() {
  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      initial="initial"
      animate="animate"
      variants={plantGrowth}
    >
      {/* Soil/Ground */}
      <motion.rect
        x="0"
        y="320"
        width="400"
        height="80"
        fill="#8B7355"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Seed (appears first) */}
      <motion.ellipse
        cx="200"
        cy="310"
        rx="8"
        ry="12"
        fill={COLORS.accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Main Stem */}
      <motion.path
        d="M 200 310 Q 200 250 200 150"
        stroke={COLORS.primary}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
      />

      {/* Left Leaf 1 */}
      <motion.path
        d="M 200 250 Q 150 240 130 220 Q 140 230 200 245"
        fill={COLORS.primary}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
        style={{ transformOrigin: '200px 250px' }}
      />

      {/* Right Leaf 1 */}
      <motion.path
        d="M 200 250 Q 250 240 270 220 Q 260 230 200 245"
        fill={COLORS.primary}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        style={{ transformOrigin: '200px 250px' }}
      />

      {/* Left Leaf 2 */}
      <motion.path
        d="M 200 200 Q 140 190 110 170 Q 125 180 200 195"
        fill={COLORS.primary}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
        style={{ transformOrigin: '200px 200px' }}
      />

      {/* Right Leaf 2 */}
      <motion.path
        d="M 200 200 Q 260 190 290 170 Q 275 180 200 195"
        fill={COLORS.primary}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.7 }}
        style={{ transformOrigin: '200px 200px' }}
      />

      {/* Flower/Bloom Center */}
      <motion.circle
        cx="200"
        cy="150"
        r="20"
        fill={COLORS.accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      />

      {/* Flower Petals */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => {
        const radians = (angle * Math.PI) / 180;
        const x = 200 + Math.cos(radians) * 30;
        const y = 150 + Math.sin(radians) * 30;
        
        return (
          <motion.ellipse
            key={angle}
            cx={x}
            cy={y}
            rx="15"
            ry="25"
            fill={COLORS.accent}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 0.3, delay: 2.1 + index * 0.05 }}
            style={{ 
              transformOrigin: `${x}px ${y}px`,
              transform: `rotate(${angle}deg)`
            }}
          />
        );
      })}

      {/* Sparkle effects around flower */}
      <motion.circle
        cx="160"
        cy="130"
        r="3"
        fill={COLORS.accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 1,
          delay: 2.5,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.circle
        cx="240"
        cy="130"
        r="3"
        fill={COLORS.accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 1,
          delay: 2.7,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.circle
        cx="200"
        cy="110"
        r="3"
        fill={COLORS.accent}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 1,
          delay: 2.6,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.svg>
  );
}
