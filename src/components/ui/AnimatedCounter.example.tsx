import { AnimatedCounter } from './AnimatedCounter';

export default function AnimatedCounterExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">AnimatedCounter Examples</h2>
        <p className="text-gray-600 mb-8">
          Scroll down to see the counters animate when they enter the viewport.
        </p>
      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-screen" />

      {/* Example 1: Simple counter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Simple Counter</h3>
        <AnimatedCounter 
          value={100} 
          className="text-4xl font-bold text-primary"
        />
      </div>

      {/* Example 2: Counter with percentage suffix */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Percentage</h3>
        <AnimatedCounter 
          value={80} 
          suffix="%" 
          className="text-4xl font-bold text-secondary"
        />
        <p className="text-sm text-gray-600 mt-2">Earlier Disease Detection</p>
      </div>

      {/* Example 3: Large number with plus suffix */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Large Number</h3>
        <AnimatedCounter 
          value={10000} 
          suffix="+" 
          className="text-4xl font-bold text-accent"
        />
        <p className="text-sm text-gray-600 mt-2">Farmers to Reach in Rwanda</p>
      </div>

      {/* Example 4: Custom duration */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Slow Animation (3 seconds)</h3>
        <AnimatedCounter 
          value={250} 
          duration={3}
          className="text-4xl font-bold text-primary"
        />
      </div>

      {/* Example 5: Fast animation */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Fast Animation (1 second)</h3>
        <AnimatedCounter 
          value={500} 
          duration={1}
          className="text-4xl font-bold text-secondary"
        />
      </div>

      {/* Example 6: Impact metrics grid */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Impact Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <AnimatedCounter 
              value={30} 
              suffix="%" 
              className="text-5xl font-bold text-accent"
            />
            <p className="text-sm text-gray-600 mt-2">Potential Yield Increase</p>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              value={80} 
              suffix="%" 
              className="text-5xl font-bold text-accent"
            />
            <p className="text-sm text-gray-600 mt-2">Earlier Disease Detection</p>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              value={10000} 
              suffix="+" 
              className="text-5xl font-bold text-accent"
            />
            <p className="text-sm text-gray-600 mt-2">Farmers to Reach</p>
          </div>
        </div>
      </div>
    </div>
  );
}
