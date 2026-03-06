'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { DIFFERENTIATORS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/components/animations/variants';

export function DifferentiationSection() {
  return (
    <section 
      className="py-16 px-4 md:py-24 bg-white"
      data-section="differentiation"
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
            Why UMWERO is Different
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-text/80 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Built specifically for African agriculture
          </motion.p>

          {/* Desktop: Comparison table */}
          <div className="hidden md:block">
            <motion.div variants={fadeInUp}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-left py-4 px-6 text-text font-semibold">
                        Feature
                      </th>
                      <th className="text-left py-4 px-6 text-primary font-semibold bg-primary/5">
                        UMWERO
                      </th>
                      <th className="text-left py-4 px-6 text-text/60 font-semibold">
                        Other Solutions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIFFERENTIATORS.map((diff, index) => (
                      <motion.tr
                        key={diff.id}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                              duration: 0.5, 
                              ease: 'easeOut',
                              delay: index * 0.1 
                            }
                          }
                        }}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        data-testid="differentiator-row"
                      >
                        <td className="py-4 px-6 font-medium text-text">
                          {diff.feature}
                        </td>
                        <td className="py-4 px-6 bg-primary/5">
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 text-xl" role="img" aria-label="checkmark">
                              ✓
                            </span>
                            <span className="text-text">{diff.umwero}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-text/70">
                          {diff.others}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Mobile: Stacked cards */}
          <div className="md:hidden space-y-6">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: 'easeOut',
                      delay: index * 0.1 
                    }
                  }
                }}
                data-testid="differentiator-card"
              >
                <Card>
                  <h3 className="text-lg font-semibold mb-4 text-text">
                    {diff.feature}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* UMWERO advantage */}
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 text-xl shrink-0" role="img" aria-label="checkmark">
                          ✓
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-primary mb-1">
                            UMWERO
                          </p>
                          <p className="text-sm text-text">
                            {diff.umwero}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Others */}
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-xs font-semibold text-text/60 mb-1">
                        Other Solutions
                      </p>
                      <p className="text-sm text-text/70">
                        {diff.others}
                      </p>
                    </div>
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
