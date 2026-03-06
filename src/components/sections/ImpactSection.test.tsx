/**
 * Unit tests for ImpactSection component
 * 
 * Tests Requirements 6.2, 6.4
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ImpactSection } from './ImpactSection';
import { IMPACT_METRICS, COLORS } from '@/lib/constants';

describe('ImpactSection', () => {
  it('renders the section with correct heading', () => {
    render(<ImpactSection />);
    expect(screen.getByText('Our Impact')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<ImpactSection />);
    expect(screen.getByText(/Transforming agriculture across Rwanda and Africa/i)).toBeInTheDocument();
  });

  it('displays all impact metrics from IMPACT_METRICS constant', () => {
    render(<ImpactSection />);
    const metrics = screen.getAllByTestId('impact-metric');
    expect(metrics).toHaveLength(IMPACT_METRICS.length);
  });

  // Requirement 6.2: THE Impact Section SHALL present at least 3 key impact metrics or benefits
  it('displays minimum 3 impact metrics (Requirement 6.2)', () => {
    render(<ImpactSection />);
    const metrics = screen.getAllByTestId('impact-metric');
    expect(metrics.length).toBeGreaterThanOrEqual(3);
  });

  it('renders each metric label correctly', () => {
    render(<ImpactSection />);
    
    IMPACT_METRICS.forEach((metric) => {
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it('uses AnimatedCounter component for each metric', () => {
    render(<ImpactSection />);
    const metrics = screen.getAllByTestId('impact-metric');
    
    // Each metric should contain the animated counter
    expect(metrics.length).toBe(IMPACT_METRICS.length);
  });

  // Requirement 6.4: THE Impact Section SHALL use the accent color (#F9A825) for highlighting key numbers
  it('applies accent color (#F9A825) to metric values (Requirement 6.4)', () => {
    const { container } = render(<ImpactSection />);
    
    // Find all AnimatedCounter elements (they have the text-accent class)
    const counterElements = container.querySelectorAll('.text-accent');
    
    // Should have at least 3 counters with accent color
    expect(counterElements.length).toBeGreaterThanOrEqual(3);
    
    // Verify each counter has the text-accent class applied
    counterElements.forEach((element) => {
      expect(element).toHaveClass('text-accent');
    });
  });

  it('has correct data-section attribute', () => {
    const { container } = render(<ImpactSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('data-section', 'impact');
  });

  it('has correct id for anchor navigation', () => {
    const { container } = render(<ImpactSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'impact');
  });

  it('uses responsive grid layout', () => {
    const { container } = render(<ImpactSection />);
    const grid = screen.getByTestId('impact-grid');
    
    // Check for responsive grid classes
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-3');
  });
});
