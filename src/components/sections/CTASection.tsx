/**
 * CTASection Component
 * 
 * Encourages visitor engagement and collaboration with prominent call-to-action buttons.
 * Features primary CTA with accent color and secondary CTA with outline style.
 * 
 * Validates: Requirements 8.1, 8.2, 8.3, 8.4
 */

'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/components/animations/variants';
import { COLORS } from '@/lib/constants';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA 
}: CTASectionProps) {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5"
      data-section="cta"
      id="cta"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: COLORS.primary }}
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-text/80 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {description}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            {/* Primary CTA Button */}
            <motion.a
              href={primaryCTA.href}
              className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              style={{ backgroundColor: COLORS.accent }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={primaryCTA.text}
            >
              {primaryCTA.text}
            </motion.a>

            {/* Secondary CTA Button (Optional) */}
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href}
                className="inline-block rounded-lg px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/5"
                style={{ 
                  color: COLORS.primary,
                  border: `2px solid ${COLORS.primary}`
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label={secondaryCTA.text}
              >
                {secondaryCTA.text}
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
