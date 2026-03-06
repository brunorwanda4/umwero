import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  HERO_CONTENT,
  CTA_CONTENT
} from '@/lib/constants';

// Lazy load below-the-fold sections for better performance
// Dynamic imports create separate chunks for each section, reducing initial bundle size
const ProblemSection = dynamic(() => import('@/components/sections/ProblemSection').then(mod => ({ default: mod.ProblemSection })));

const SolutionSection = dynamic(() => import('@/components/sections/SolutionSection').then(mod => ({ default: mod.SolutionSection })));

const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection').then(mod => ({ default: mod.HowItWorksSection })));

const DifferentiationSection = dynamic(() => import('@/components/sections/DifferentiationSection').then(mod => ({ default: mod.DifferentiationSection })));

const ImpactSection = dynamic(() => import('@/components/sections/ImpactSection').then(mod => ({ default: mod.ImpactSection })));

const TechnologySection = dynamic(() => import('@/components/sections/TechnologySection').then(mod => ({ default: mod.TechnologySection })));

const CTASection = dynamic(() => import('@/components/sections/CTASection'));

export default function Home() {
  return (
    <main>
      {/* Hero Section - No animation wrapper as it has its own animations */}
      <HeroSection {...HERO_CONTENT} />

      {/* Problem Section */}
      <AnimatedSection>
        <ProblemSection />
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection delay={0.1}>
        <SolutionSection />
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection delay={0.2}>
        <HowItWorksSection />
      </AnimatedSection>

      {/* Differentiation Section */}
      <AnimatedSection delay={0.1}>
        <DifferentiationSection />
      </AnimatedSection>

      {/* Impact Section */}
      <AnimatedSection delay={0.2}>
        <ImpactSection />
      </AnimatedSection>

      {/* Technology Section */}
      <AnimatedSection delay={0.1}>
        <TechnologySection />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
        <CTASection {...CTA_CONTENT} />
      </AnimatedSection>
    </main>
  );
}
