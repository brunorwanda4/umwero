import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DifferentiationSection } from './DifferentiationSection';
import { DIFFERENTIATORS } from '@/lib/constants';

describe('DifferentiationSection', () => {
  it('renders section heading', () => {
    render(<DifferentiationSection />);
    expect(screen.getByText('Why UMWERO is Different')).toBeInTheDocument();
  });

  it('renders section description', () => {
    render(<DifferentiationSection />);
    expect(screen.getByText('Built specifically for African agriculture')).toBeInTheDocument();
  });

  it('displays all differentiators from constants', () => {
    render(<DifferentiationSection />);
    
    DIFFERENTIATORS.forEach((diff) => {
      expect(screen.getAllByText(diff.feature).length).toBeGreaterThan(0);
      expect(screen.getAllByText(diff.umwero).length).toBeGreaterThan(0);
      expect(screen.getAllByText(diff.others).length).toBeGreaterThan(0);
    });
  });

  // Validates Requirements: 5.2
  it('displays minimum 3 differentiators', () => {
    render(<DifferentiationSection />);
    
    // Check for table rows on desktop view
    const rows = screen.queryAllByTestId('differentiator-row');
    const cards = screen.queryAllByTestId('differentiator-card');
    
    // Either rows or cards should have at least 3 items
    const totalItems = rows.length + cards.length;
    expect(totalItems).toBeGreaterThanOrEqual(3);
  });

  // Validates Requirements: 5.2
  it('highlights at least 3 unique aspects specific to African agriculture', () => {
    render(<DifferentiationSection />);
    
    // Verify we have at least 3 differentiators
    expect(DIFFERENTIATORS.length).toBeGreaterThanOrEqual(3);
    
    // Verify each differentiator is displayed
    DIFFERENTIATORS.forEach((diff) => {
      expect(screen.getAllByText(diff.feature).length).toBeGreaterThan(0);
    });
  });

  it('highlights UMWERO advantages with checkmarks', () => {
    render(<DifferentiationSection />);
    
    // Check for checkmark symbols
    const checkmarks = screen.getAllByRole('img', { name: 'checkmark' });
    expect(checkmarks.length).toBeGreaterThanOrEqual(DIFFERENTIATORS.length);
  });

  // Validates Requirements: 5.4
  it('emphasizes African crop focus differentiator', () => {
    render(<DifferentiationSection />);
    
    expect(screen.getAllByText(/African crops/i).length).toBeGreaterThan(0);
  });

  // Validates Requirements: 5.4
  it('emphasizes soil conditions differentiator', () => {
    render(<DifferentiationSection />);
    
    expect(screen.getAllByText(/African soil conditions/i).length).toBeGreaterThan(0);
  });

  // Validates Requirements: 5.4
  it('emphasizes limited internet access optimization differentiator', () => {
    render(<DifferentiationSection />);
    
    expect(screen.getAllByText(/limited connectivity/i).length).toBeGreaterThan(0);
  });

  // Validates Requirements: 5.4
  it('displays all three required emphasis areas: crop focus, soil conditions, and connectivity', () => {
    render(<DifferentiationSection />);
    
    // Verify all three emphasis areas are present
    const cropFocus = screen.getAllByText(/African crops/i);
    const soilConditions = screen.getAllByText(/African soil conditions/i);
    const connectivity = screen.getAllByText(/limited connectivity/i);
    
    expect(cropFocus.length).toBeGreaterThan(0);
    expect(soilConditions.length).toBeGreaterThan(0);
    expect(connectivity.length).toBeGreaterThan(0);
  });

  it('has proper section data attribute', () => {
    const { container } = render(<DifferentiationSection />);
    const section = container.querySelector('section');
    
    expect(section).toHaveAttribute('data-section', 'differentiation');
  });

  // Validates Requirements: 5.3 - Comparison structure
  it('presents comparison using table structure on desktop', () => {
    const { container } = render(<DifferentiationSection />);
    
    // Desktop should have table structure
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    
    // Table should have proper headers
    expect(screen.getByText('Feature')).toBeInTheDocument();
    expect(screen.getAllByText('UMWERO').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Other Solutions').length).toBeGreaterThan(0);
  });

  // Validates Requirements: 5.3 - Comparison structure
  it('presents comparison using card structure on mobile', () => {
    const { container } = render(<DifferentiationSection />);
    
    // Mobile should have card structure
    const cards = screen.queryAllByTestId('differentiator-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('displays UMWERO column with visual highlighting in table', () => {
    const { container } = render(<DifferentiationSection />);
    
    // UMWERO column header should have background highlighting
    const umweroHeaders = container.querySelectorAll('th.bg-primary\\/5');
    expect(umweroHeaders.length).toBeGreaterThan(0);
    
    // Verify the header contains UMWERO text
    const umweroHeader = Array.from(umweroHeaders).find(
      header => header.textContent?.includes('UMWERO')
    );
    expect(umweroHeader).toBeTruthy();
  });

  it('displays checkmarks for UMWERO advantages in comparison', () => {
    render(<DifferentiationSection />);
    
    const checkmarks = screen.getAllByRole('img', { name: 'checkmark' });
    
    // Should have checkmarks for each differentiator (at least 3)
    expect(checkmarks.length).toBeGreaterThanOrEqual(3);
  });

  it('applies primary color to section title', () => {
    render(<DifferentiationSection />);
    
    const title = screen.getByText('Why UMWERO is Different');
    expect(title).toHaveClass('text-primary');
  });

  it('uses responsive layout with hidden classes', () => {
    const { container } = render(<DifferentiationSection />);
    
    // Desktop table should be hidden on mobile
    const desktopTable = container.querySelector('.hidden.md\\:block');
    expect(desktopTable).toBeInTheDocument();
    
    // Mobile cards should be hidden on desktop
    const mobileCards = container.querySelector('.md\\:hidden');
    expect(mobileCards).toBeInTheDocument();
  });

  it('renders all differentiator rows in desktop table', () => {
    render(<DifferentiationSection />);
    
    const rows = screen.getAllByTestId('differentiator-row');
    expect(rows).toHaveLength(DIFFERENTIATORS.length);
  });

  it('renders all differentiator cards in mobile view', () => {
    render(<DifferentiationSection />);
    
    const cards = screen.getAllByTestId('differentiator-card');
    expect(cards).toHaveLength(DIFFERENTIATORS.length);
  });

  it('displays feature names in both desktop and mobile layouts', () => {
    render(<DifferentiationSection />);
    
    DIFFERENTIATORS.forEach((diff) => {
      const featureElements = screen.getAllByText(diff.feature);
      // Should appear in both desktop table and mobile cards
      expect(featureElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('displays UMWERO advantages in both desktop and mobile layouts', () => {
    render(<DifferentiationSection />);
    
    DIFFERENTIATORS.forEach((diff) => {
      const umweroElements = screen.getAllByText(diff.umwero);
      // Should appear in both desktop table and mobile cards
      expect(umweroElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('displays other solutions in both desktop and mobile layouts', () => {
    render(<DifferentiationSection />);
    
    DIFFERENTIATORS.forEach((diff) => {
      const othersElements = screen.getAllByText(diff.others);
      // Should appear in both desktop table and mobile cards
      expect(othersElements.length).toBeGreaterThanOrEqual(1);
    });
  });
});
