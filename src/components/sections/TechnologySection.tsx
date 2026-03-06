'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { TECH_STACK } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/components/animations/variants';

export function TechnologySection() {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-white"
      data-section="technology"
      id="technology"
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
            Built with Modern Technology
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-text/80 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            UMWERO leverages cutting-edge technology to deliver reliable, fast, and intelligent crop health solutions
          </motion.p>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-testid="technology-grid"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.id}
                variants={fadeInUp}
                data-testid="tech-card"
              >
                <Card className="h-full" hoverable>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <OptimizedImage
                        src={tech.icon}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {tech.name}
                    </h3>
                    <p className="text-text/70">
                      {tech.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
