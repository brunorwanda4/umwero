import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HowItWorksSection } from './HowItWorksSection';
import { STEPS } from '@/lib/constants';

describe('HowItWorksSection', () => {
  it('renders the section title', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('Five simple steps to healthier crops')).toBeInTheDocument();
  });

  it('displays exactly 5 steps from STEPS constant', () => {
    render(<HowItWorksSection />);
    const stepItems = screen.getAllByTestId('step-item');
    // 5 steps x 2 (desktop + mobile layouts)
    expect(stepItems).toHaveLength(STEPS.length * 2);
    expect(STEPS).toHaveLength(5);
  });

  it('displays 5 steps in sequential order', () => {
    render(<HowItWorksSection />);
    
    // Verify all 5 steps are present in order
    expect(STEPS).toHaveLength(5);
    
    STEPS.forEach((step, index) => {
      expect(step.number).toBe(index + 1);
      expect(screen.getAllByText(step.number.toString()).length).toBeGreaterThan(0);
      expect(screen.getAllByText(step.title).length).toBeGreaterThan(0);
    });
  });

  it('displays steps in correct sequential order: Capture, Analyze, Diagnose, Recommend, Monitor', () => {
    render(<HowItWorksSection />);
    
    const expectedSteps = ['Capture', 'Analyze', 'Diagnose', 'Recommend', 'Monitor'];
    expectedSteps.forEach((stepTitle, index) => {
      expect(screen.getAllByText(stepTitle).length).toBeGreaterThan(0);
      expect(STEPS[index].title).toBe(stepTitle);
      expect(STEPS[index].number).toBe(index + 1);
    });
  });

  it('renders step numbers in accent color (#F9A825)', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Check that step number circles have the accent color
    const stepCircles = container.querySelectorAll('[style*="background-color"]');
    expect(stepCircles.length).toBeGreaterThan(0);
    
    // Verify at least one circle has the accent color
    const hasAccentColor = Array.from(stepCircles).some(
      circle => (circle as HTMLElement).style.backgroundColor === 'rgb(249, 168, 37)' // #F9A825
    );
    expect(hasAccentColor).toBe(true);
  });

  it('renders all step titles and descriptions', () => {
    render(<HowItWorksSection />);
    
    STEPS.forEach((step) => {
      expect(screen.getAllByText(step.title).length).toBeGreaterThan(0);
      expect(screen.getAllByText(step.description).length).toBeGreaterThan(0);
    });
  });

  it('has correct data-section attribute', () => {
    const { container } = render(<HowItWorksSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('data-section', 'how-it-works');
  });

  it('uses responsive layout with desktop horizontal timeline', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Desktop layout should have grid-cols-5 for horizontal timeline
    const desktopLayout = container.querySelector('.grid-cols-5');
    expect(desktopLayout).toBeInTheDocument();
    
    // Desktop layout should be hidden on mobile/tablet
    const desktopContainer = container.querySelector('.hidden.lg\\:block');
    expect(desktopContainer).toBeInTheDocument();
  });

  it('uses responsive layout with mobile/tablet vertical timeline', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Mobile/tablet layout should use space-y for vertical stacking
    const mobileLayout = container.querySelector('.space-y-8');
    expect(mobileLayout).toBeInTheDocument();
    
    // Mobile layout should be hidden on desktop
    const mobileContainer = container.querySelector('.lg\\:hidden');
    expect(mobileContainer).toBeInTheDocument();
  });

  it('has connecting line in desktop layout', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Desktop should have horizontal connecting line
    const desktopLine = container.querySelector('.hidden.lg\\:block .absolute.top-12');
    expect(desktopLine).toBeInTheDocument();
  });

  it('has connecting line in mobile layout', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Mobile should have vertical connecting line
    const mobileLine = container.querySelector('.lg\\:hidden .absolute.left-6');
    expect(mobileLine).toBeInTheDocument();
  });

  it('applies primary color to section title', () => {
    render(<HowItWorksSection />);
    
    const title = screen.getByText('How It Works');
    expect(title).toHaveClass('text-primary');
  });

  it('renders step items with proper structure in desktop layout', () => {
    const { container } = render(<HowItWorksSection />);
    
    const desktopSteps = container.querySelectorAll('.hidden.lg\\:block .grid-cols-5 [data-testid="step-item"]');
    expect(desktopSteps).toHaveLength(5);
  });

  it('renders step items with proper structure in mobile layout', () => {
    const { container } = render(<HowItWorksSection />);
    
    const mobileSteps = container.querySelectorAll('.lg\\:hidden [data-testid="step-item"]');
    expect(mobileSteps).toHaveLength(5);
  });

  it('uses correct responsive classes for layout adaptation', () => {
    const { container } = render(<HowItWorksSection />);
    
    // Check section has responsive padding
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-16');
    expect(section).toHaveClass('md:py-24');
  });
});
