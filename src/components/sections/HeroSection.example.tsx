/**
 * HeroSection Example Usage
 * 
 * Demonstrates how to use the HeroSection component with HERO_CONTENT constant.
 */

import HeroSection from './HeroSection';
import { HERO_CONTENT } from '@/lib/constants';

export default function HeroSectionExample() {
  return (
    <div className="min-h-screen">
      <HeroSection {...HERO_CONTENT} />
    </div>
  );
}
