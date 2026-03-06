import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProblemSection } from './ProblemSection';
import { PROBLEMS } from '@/lib/constants';

describe('ProblemSection', () => {
  it('renders the section with title and description', () => {
    render(<ProblemSection />);
    
    expect(screen.getByText('Challenges Facing African Farmers')).toBeInTheDocument();
    expect(screen.getByText(/African farmers face unique challenges/i)).toBeInTheDocument();
  });

  it('displays at least 3 problem cards', () => {
    render(<ProblemSection />);
    
    const cards = screen.getAllByTestId('problem-card');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it('displays exactly 3 problem cards from constants', () => {
    render(<ProblemSection />);
    
    const cards = screen.getAllByTestId('problem-card');
    expect(cards).toHaveLength(PROBLEMS.length);
  });

  it('displays late disease detection problem', () => {
    render(<ProblemSection />);
    
    expect(screen.getByText('Late Disease Detection')).toBeInTheDocument();
    expect(screen.getByText(/Farmers often discover crop diseases too late/i)).toBeInTheDocument();
  });

  it('displays limited expertise problem', () => {
    render(<ProblemSection />);
    
    expect(screen.getByText('Limited Agricultural Expertise')).toBeInTheDocument();
    expect(screen.getByText(/Access to agricultural experts is scarce/i)).toBeInTheDocument();
  });

  it('displays climate challenges problem', () => {
    render(<ProblemSection />);
    
    expect(screen.getByText('Climate Variability')).toBeInTheDocument();
    expect(screen.getByText(/Unpredictable weather patterns/i)).toBeInTheDocument();
  });

  it('renders all problem cards with proper structure', () => {
    render(<ProblemSection />);
    
    PROBLEMS.forEach((problem) => {
      expect(screen.getByText(problem.title)).toBeInTheDocument();
      expect(screen.getByText(problem.description)).toBeInTheDocument();
    });
  });

  it('has proper section attributes', () => {
    const { container } = render(<ProblemSection />);
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('data-section', 'problem');
  });

  it('uses responsive grid layout with 3 columns desktop, 2 tablet, 1 mobile', () => {
    render(<ProblemSection />);
    
    const grid = screen.getByTestId('problem-grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('applies primary color to section title', () => {
    render(<ProblemSection />);
    
    const title = screen.getByText('Challenges Facing African Farmers');
    expect(title).toHaveClass('text-primary');
  });

  it('renders problem cards inside Card components', () => {
    const { container } = render(<ProblemSection />);
    
    const cards = container.querySelectorAll('[data-testid="problem-card"]');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
