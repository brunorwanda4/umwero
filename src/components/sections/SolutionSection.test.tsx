import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SolutionSection } from './SolutionSection';
import { FEATURES } from '@/lib/constants';

describe('SolutionSection', () => {
  it('renders the section with title and description', () => {
    render(<SolutionSection />);
    
    expect(screen.getByText('Our Solution')).toBeInTheDocument();
    expect(screen.getByText(/UMWERO empowers farmers/i)).toBeInTheDocument();
  });

  it('displays all three feature cards', () => {
    render(<SolutionSection />);
    
    const cards = screen.getAllByTestId('feature-card');
    expect(cards).toHaveLength(3);
  });

  it('displays disease detection feature', () => {
    render(<SolutionSection />);
    
    expect(screen.getByText('AI Disease Detection')).toBeInTheDocument();
    expect(screen.getByText(/Identify crop diseases early/i)).toBeInTheDocument();
  });

  it('displays crop monitoring feature', () => {
    render(<SolutionSection />);
    
    expect(screen.getByText('Real-Time Monitoring')).toBeInTheDocument();
    expect(screen.getByText(/Track crop health/i)).toBeInTheDocument();
  });

  it('displays personalized recommendations feature', () => {
    render(<SolutionSection />);
    
    expect(screen.getByText('Personalized Recommendations')).toBeInTheDocument();
    expect(screen.getByText(/Get tailored advice/i)).toBeInTheDocument();
  });

  it('uses secondary color for feature titles', () => {
    render(<SolutionSection />);
    
    const featureTitle = screen.getByText('AI Disease Detection');
    expect(featureTitle).toHaveClass('text-secondary');
  });

  it('renders feature cards with proper structure', () => {
    render(<SolutionSection />);
    
    FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  it('has proper section attributes', () => {
    const { container } = render(<SolutionSection />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('data-section', 'solution');
    expect(section).toHaveAttribute('id', 'solution');
  });

  it('uses responsive grid layout', () => {
    render(<SolutionSection />);
    
    const grid = screen.getByTestId('solution-grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });
});
