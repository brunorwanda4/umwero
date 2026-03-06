/**
 * Example usage of ImpactSection component
 * 
 * This example demonstrates the ImpactSection component with animated statistics
 * that count up when the section enters the viewport.
 */

import { ImpactSection } from './ImpactSection';

export function ImpactSectionExample() {
  return (
    <div className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-600">Scroll down to see the Impact Section</p>
      </div>
      <ImpactSection />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-600">Impact section above</p>
      </div>
    </div>
  );
}

export default ImpactSectionExample;
