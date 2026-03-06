'use client';

import { useEffect, useRef } from 'react';
import { useSpring, useTransform, useInView, useReducedMotion, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '', 
  className 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  // Create spring animation for smooth counting
  const spring = useSpring(0, {
    duration: shouldReduceMotion ? 0 : duration * 1000,
    bounce: 0
  });

  // Transform spring value to rounded number with formatting
  const display = useTransform(spring, (current) => {
    return formatNumber(Math.round(current));
  });

  // Start animation when component enters viewport
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={cn(className)}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// Format numbers with appropriate separators
function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}
