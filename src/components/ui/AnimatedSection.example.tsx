/**
 * Example usage of AnimatedSection component
 * 
 * This file demonstrates how to use the AnimatedSection wrapper
 * to add scroll-triggered fade-in animations to your content.
 */

import { AnimatedSection } from './AnimatedSection';

export function AnimatedSectionExample() {
  return (
    <div className="space-y-8">
      {/* Basic usage - fades in when 20% visible */}
      <AnimatedSection>
        <div className="p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Basic Animation</h2>
          <p>This section will fade in when it enters the viewport.</p>
        </div>
      </AnimatedSection>

      {/* With custom delay */}
      <AnimatedSection delay={0.2}>
        <div className="p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Delayed Animation</h2>
          <p>This section has a 0.2s delay before animating.</p>
        </div>
      </AnimatedSection>

      {/* With custom className */}
      <AnimatedSection className="max-w-4xl mx-auto">
        <div className="p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Custom Styling</h2>
          <p>This section has custom classes applied to the wrapper.</p>
        </div>
      </AnimatedSection>

      {/* Multiple sections with staggered delays */}
      {[0, 0.1, 0.2, 0.3].map((delay, index) => (
        <AnimatedSection key={index} delay={delay}>
          <div className="p-8 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Card {index + 1}</h3>
            <p>Staggered animation with {delay}s delay</p>
          </div>
        </AnimatedSection>
   