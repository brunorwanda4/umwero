import { COLORS, BREAKPOINTS } from '@/lib/constants';

// Color and breakpoint type utilities
export type ColorKey = keyof typeof COLORS;
export type BreakpointKey = keyof typeof BREAKPOINTS;

// Problem section types
export interface Problem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Feature section types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// How It Works section types
export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

// Differentiation section types
export interface Differentiator {
  id: string;
  feature: string;
  umwero: string;
  others: string;
}

// Impact section types
export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

// Technology section types
export interface TechItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// CTA section types
export interface CTAButton {
  text: string;
  href: string;
}

export interface CTAContent {
  title: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

// Component prop types
export interface HeroSectionProps {
  title: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export interface ProblemSectionProps {
  title: string;
  problems: readonly Problem[];
}

export interface SolutionSectionProps {
  title: string;
  features: readonly Feature[];
}

export interface HowItWorksSectionProps {
  title: string;
  steps: readonly Step[];
}

export interface DifferentiationSectionProps {
  title: string;
  differentiators: readonly Differentiator[];
}

export interface ImpactSectionProps {
  title: string;
  metrics: readonly Metric[];
}

export interface TechnologySectionProps {
  title: string;
  description: string;
  techStack: readonly TechItem[];
}

export interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

// Shared component prop types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: 'default' | 'outlined' | 'elevated';
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}
