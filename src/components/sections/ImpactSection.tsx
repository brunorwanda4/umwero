'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { IMPACT_METRICS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/components/animations/variants';

export function ImpactSection() {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-background"
      data-section="impact"
      id="impact"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary"
            variants={fadeInUp}
          >
            Our Impact
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-text/80 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Transforming agriculture across Rwanda and Africa
          </motion.p>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-testid="impact-grid"
          >
            {IMPACT_METRICS.map((metric) => (
              <motion.div
                key={metric.id}
                variants={fadeInUp}
                data-testid="impact-metric"
                className="text-center"
              >
                <div className="mb-4">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    duration={2}
                    className="text-5xl md:text-6xl font-bold text-accent"
                  />
                </div>
                <p className="text-lg text-text/70">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
