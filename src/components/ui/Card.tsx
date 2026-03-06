'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: 'default' | 'outlined' | 'elevated';
}

export function Card({ 
  children, 
  className, 
  hoverable = true, 
  variant = 'default' 
}: CardProps) {
  const baseStyles = 'rounded-lg p-6 transition-shadow duration-300';
  
  const variantStyles = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-transparent border-2 border-primary',
    elevated: 'bg-white shadow-md'
  };

  const hoverAnimation = {
    rest: { y: 0, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
    hover: hoverable ? { 
      y: -8, 
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }
    } : { 
      y: 0, 
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    }
  };

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      initial="rest"
      whileHover="hover"
      variants={hoverAnimation}
    >
      {children}
    </motion.div>
  );
}
