'use client';

import { motion } from 'framer-motion';
import { STEPS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/components/animations/variants';

export function HowItWorksSection() {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-background"
      data-section="how-it-works"
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
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-text/80 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Five simple steps to healthier crops
          </motion.p>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/20" />
              
              <div className="grid grid-cols-5 gap-4">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.6, 
                          ease: 'easeOut',
                          delay: index * 0.15 
                        }
                      }
                    }}
                    className="relative flex flex-col items-center"
                    data-testid="step-item"
                  >
                    {/* Step number circle */}
                    <div 
                      className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-4 relative z-10 shadow-lg"
                      style={{ backgroundColor: '#F9A825' }}
                    >
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Step content */}
                    <h3 className="text-xl font-semibold mb-2 text-text text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text/70 text-center">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              <div className="space-y-8">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          duration: 0.6, 
                          ease: 'easeOut',
                          delay: index * 0.15 
                        }
                      }
                    }}
                    className="relative flex items-start gap-6"
                    data-testid="step-item"
                  >
                    {/* Step number circle */}
                    <div 
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center relative z-10 shrink-0 shadow-lg"
                      style={{ backgroundColor: '#F9A825' }}
                    >
                      <span className="text-xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold mb-2 text-text">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text/70">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
