/**
 * Example usage of CTASection component
 * 
 * This file demonstrates how to use the CTASection component
 * with the CTA_CONTENT constant from lib/constants.ts
 */

import CTASection from './CTASection';
import { CTA_CONTENT } from '@/lib/constants';

export default function CTASectionExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Example 1: Full CTA with both primary and secondary buttons */}
      <CTASection {...CTA_CONTENT} />

      {/* Example 2: CTA with only primary button */}
      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of farmers already using UMWERO to improve their crop yields"
        primaryCTA={{
          text: 'Start Now',
          href: '#signup'
        }}
      />

      {/* Example 3: Custom CTA content */}
      <CTASection
        title="Partner With Us"
        description="Are you an agricultural organization or technology partner? Let's collaborate to bring UMWERO to more farmers."
        primaryCTA={{
          text: 'Become a Partner',
          href: '#partnership'
        }}
        secondaryCTA={{
          text: 'View Partnership Benefits',
          href: '#benefits'
        }}
      />
    </div>
  );
}
