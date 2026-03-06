// Color system constants
export const COLORS = {
  primary: '#2E7D32',      // Green - headers, key elements
  secondary: '#66BB6A',    // Light green - accents, highlights
  accent: '#F9A825',       // Gold - CTAs, emphasis
  background: '#F5F7F6',   // Light gray - page background
  text: '#1F2937',         // Dark gray - body text
  white: '#FFFFFF',
  black: '#000000'
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280
} as const;

// Animation timing constants
export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  verySlow: 0.8
} as const;

// Hero section content
export const HERO_CONTENT = {
  title: 'UMWERO',
  tagline: 'Helping Africa grow healthier crops and secure the future of food',
  ctaText: 'Learn More',
  ctaHref: '#solution'
} as const;

// Problem section content
export const PROBLEMS = [
  {
    id: 'disease-detection',
    title: 'Late Disease Detection',
    description: 'Farmers often discover crop diseases too late, leading to significant yield losses',
    icon: '/icons/disease.svg'
  },
  {
    id: 'limited-expertise',
    title: 'Limited Agricultural Expertise',
    description: 'Access to agricultural experts is scarce in rural areas',
    icon: '/icons/expertise.svg'
  },
  {
    id: 'climate-challenges',
    title: 'Climate Variability',
    description: 'Unpredictable weather patterns make crop management difficult',
    icon: '/icons/climate.svg'
  }
] as const;

// Solution section features
export const FEATURES = [
  {
    id: 'disease-detection',
    title: 'AI Disease Detection',
    description: 'Identify crop diseases early using smartphone camera and AI analysis',
    icon: '/icons/ai-detection.svg'
  },
  {
    id: 'crop-monitoring',
    title: 'Real-Time Monitoring',
    description: 'Track crop health and receive alerts about potential issues',
    icon: '/icons/monitoring.svg'
  },
  {
    id: 'recommendations',
    title: 'Personalized Recommendations',
    description: 'Get tailored advice based on your specific crops, soil, and location',
    icon: '/icons/recommendations.svg'
  }
] as const;

// How It Works section steps
export const STEPS = [
  {
    id: 'step-1',
    number: 1,
    title: 'Capture',
    description: 'Take a photo of your crop using your smartphone'
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Analyze',
    description: 'AI analyzes the image for diseases and health indicators'
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Diagnose',
    description: 'Receive instant diagnosis with confidence scores'
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Recommend',
    description: 'Get personalized treatment recommendations'
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Monitor',
    description: 'Track progress and receive ongoing guidance'
  }
] as const;

// Differentiation section content
export const DIFFERENTIATORS = [
  {
    id: 'crop-focus',
    feature: 'Crop Database',
    umwero: 'African crops (cassava, maize, beans)',
    others: 'Global crops, limited African coverage'
  },
  {
    id: 'soil-conditions',
    feature: 'Soil Analysis',
    umwero: 'Optimized for African soil conditions',
    others: 'Generic soil recommendations'
  },
  {
    id: 'connectivity',
    feature: 'Internet Requirements',
    umwero: 'Works with limited connectivity',
    others: 'Requires stable internet connection'
  }
] as const;

// Impact section metrics
export const IMPACT_METRICS = [
  {
    id: 'yield-increase',
    value: 30,
    suffix: '%',
    label: 'Potential Yield Increase'
  },
  {
    id: 'early-detection',
    value: 80,
    suffix: '%',
    label: 'Earlier Disease Detection'
  },
  {
    id: 'farmers-reached',
    value: 10000,
    suffix: '+',
    label: 'Farmers to Reach in Rwanda'
  }
] as const;

// Technology section content
export const TECH_STACK = [
  {
    id: 'nextjs',
    name: 'Next.js 16',
    description: 'Modern React framework for optimal performance',
    icon: '/icons/nextjs.svg'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Type-safe development for reliability',
    icon: '/icons/typescript.svg'
  },
  {
    id: 'ai',
    name: 'AI/ML',
    description: 'Advanced machine learning for crop analysis',
    icon: '/icons/ai.svg'
  }
] as const;

// CTA section content
export const CTA_CONTENT = {
  title: 'Join Us in Transforming African Agriculture',
  description: 'We\'re looking for partners, developers, and agricultural experts to help build UMWERO',
  primaryCTA: {
    text: 'Get Involved',
    href: '#contact'
  },
  secondaryCTA: {
    text: 'Learn More',
    href: '#technology'
  }
} as const;
