/**
 * Unit tests for TechnologySection component
 * 
 * Validates Requirements 7.2, 7.4
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechnologySection } from './TechnologySection';
import { TECH_STACK } from '@/lib/constants';

describe('TechnologySection', () => {
  it('renders the section heading', () => {
    render(<TechnologySection />);
    expect(screen.getByRole('heading', { name: /Built with Modern Technology/i })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<TechnologySection />);
    expect(screen.getByText(/UMWERO leverages cutting-edge technology/i)).toBeInTheDocument();
  });

  it('renders all technology cards from TECH_STACK', () => {
    render(<TechnologySection />);
    const techCards = screen.getAllByTestId('tech-card');
    expect(techCards).toHaveLength(TECH_STACK.length);
  });

  // Test Next.js mention (Requirement 7.2)
  it('mentions Next.js technology', () => {
    render(<TechnologySection />);
    expect(screen.getByText('Next.js 16')).toBeInTheDocument();
    expect(screen.getByText('Modern React framework for optimal performance')).toBeInTheDocument();
  });

  // Test TypeScript mention (Requirement 7.2)
  it('mentions TypeScript technology', () => {
    render(<TechnologySection />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Type-safe development for reliability')).toBeInTheDocument();
  });

  // Test AI capabilities mention (Requirement 7.2)
  it('mentions AI capabilities', () => {
    render(<TechnologySection />);
    expect(screen.getByText('AI/ML')).toBeInTheDocument();
    expect(screen.getByText('Advanced machine learning for crop analysis')).toBeInTheDocument();
  });

  // Test accessible presentation for non-technical audiences (Requirement 7.2)
  it('presents technology information in accessible manner with plain language descriptions', () => {
    render(<TechnologySection />);
    
    // Check that descriptions use accessible, non-technical language
    expect(screen.getByText(/Modern React framework for optimal performance/i)).toBeInTheDocument();
    expect(screen.getByText(/Type-safe development for reliability/i)).toBeInTheDocument();
    expect(screen.getByText(/Advanced machine learning for crop analysis/i)).toBeInTheDocument();
  });

  // Test visual elements presence (Requirement 7.4)
  it('uses visual elements (icons) to represent technology stack', () => {
    render(<TechnologySection />);
    
    // Check that each technology has an associated image/icon
    expect(screen.getByAltText('Next.js 16')).toBeInTheDocument();
    expect(screen.getByAltText('TypeScript')).toBeInTheDocument();
    expect(screen.getByAltText('AI/ML')).toBeInTheDocument();
  });

  // Test visual card layout (Requirement 7.4)
  it('presents technologies using visual card components', () => {
    const { container } = render(<TechnologySection />);
    
    const techCards = screen.getAllByTestId('tech-card');
    expect(techCards).toHaveLength(3);
    
    // Verify cards contain visual structure with icons and text
    techCards.forEach(card => {
      const img = card.querySelector('img');
      const heading = card.querySelector('h3');
      const description = card.querySelector('p');
      
      expect(img).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  it('renders technology grid with correct test id', () => {
    render(<TechnologySection />);
    expect(screen.getByTestId('technology-grid')).toBeInTheDocument();
  });

  it('has correct section attributes', () => {
    const { container } = render(<TechnologySection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('data-section', 'technology');
    expect(section).toHaveAttribute('id', 'technology');
  });

  it('uses responsive grid layout', () => {
    render(<TechnologySection />);
    
    const grid = screen.getByTestId('technology-grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-3');
  });

  it('applies primary color to section title', () => {
    render(<TechnologySection />);
    
    const title = screen.getByRole('heading', { name: /Built with Modern Technology/i });
    expect(title).toHaveClass('text-primary');
  });

  it('applies primary color to technology names', () => {
    render(<TechnologySection />);
    
    const nextjsTitle = screen.getByText('Next.js 16');
    const typescriptTitle = screen.getByText('TypeScript');
    const aiTitle = screen.getByText('AI/ML');
    
    expect(nextjsTitle).toHaveClass('text-primary');
    expect(typescriptTitle).toHaveClass('text-primary');
    expect(aiTitle).toHaveClass('text-primary');
  });

  it('renders all technologies from TECH_STACK constant', () => {
    render(<TechnologySection />);
    
    TECH_STACK.forEach((tech) => {
      expect(screen.getByText(tech.name)).toBeInTheDocument();
      expect(screen.getByText(tech.description)).toBeInTheDocument();
      expect(screen.getByAltText(tech.name)).toBeInTheDocument();
    });
  });
});
