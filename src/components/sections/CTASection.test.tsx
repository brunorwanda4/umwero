/**
 * Unit tests for CTASection component
 * 
 * Tests Requirements 8.1, 8.2, 8.3, 8.4
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';
import { CTA_CONTENT, COLORS } from '@/lib/constants';

describe('CTASection', () => {
  it('displays the title and description', () => {
    render(<CTASection {...CTA_CONTENT} />);
    
    expect(screen.getByText(CTA_CONTENT.title)).toBeInTheDocument();
    expect(screen.getByText(CTA_CONTENT.description)).toBeInTheDocument();
  });

  // Requirement 8.2: Provide at least one clear action for visitors to take
  describe('Primary CTA presence and color (Requirement 8.2, 8.3)', () => {
    it('renders primary CTA button with correct text and href', () => {
      render(<CTASection {...CTA_CONTENT} />);
      
      const primaryButton = screen.getByRole('link', { name: CTA_CONTENT.primaryCTA.text });
      expect(primaryButton).toBeInTheDocument();
      expect(primaryButton).toHaveAttribute('href', CTA_CONTENT.primaryCTA.href);
    });

    it('applies contrasting accent color to primary CTA button', () => {
      render(<CTASection {...CTA_CONTENT} />);
      
      const primaryButton = screen.getByRole('link', { name: CTA_CONTENT.primaryCTA.text });
      expect(primaryButton).toHaveStyle({ backgroundColor: COLORS.accent });
    });

    it('primary CTA has white text for contrast', () => {
      render(<CTASection {...CTA_CONTENT} />);
      
      const primaryButton = screen.getByRole('link', { name: CTA_CONTENT.primaryCTA.text });
      expect(primaryButton).toHaveClass('text-white');
    });
  });

  // Requirement 8.2: Secondary CTA provides additional action option
  describe('Secondary CTA presence (Requirement 8.2)', () => {
    it('renders secondary CTA button when provided', () => {
      render(<CTASection {...CTA_CONTENT} />);
      
      const secondaryButton = screen.getByRole('link', { name: CTA_CONTENT.secondaryCTA.text });
      expect(secondaryButton).toBeInTheDocument();
      expect(secondaryButton).toHaveAttribute('href', CTA_CONTENT.secondaryCTA.href);
    });

    it('does not render secondary CTA when not provided', () => {
      const propsWithoutSecondary = {
        title: CTA_CONTENT.title,
        description: CTA_CONTENT.description,
        primaryCTA: CTA_CONTENT.primaryCTA
      };
      
      render(<CTASection {...propsWithoutSecondary} />);
      
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(1);
    });

    it('applies primary color border to secondary CTA button for contrast', () => {
      render(<CTASection {...CTA_CONTENT} />);
      
      const secondaryButton = screen.getByRole('link', { name: CTA_CONTENT.secondaryCTA.text });
      const style = secondaryButton.getAttribute('style');
      expect(style).toContain('color: rgb(46, 125, 50)');
      expect(style).toContain('border: 2px solid rgb(46, 125, 50)');
    });
  });

  it('includes proper ARIA labels for accessibility', () => {
    render(<CTASection {...CTA_CONTENT} />);
    
    const primaryButton = screen.getByRole('link', { name: CTA_CONTENT.primaryCTA.text });
    const secondaryButton = screen.getByRole('link', { name: CTA_CONTENT.secondaryCTA.text });
    
    expect(primaryButton).toHaveAttribute('aria-label', CTA_CONTENT.primaryCTA.text);
    expect(secondaryButton).toHaveAttribute('aria-label', CTA_CONTENT.secondaryCTA.text);
  });

  it('renders with correct section data attribute', () => {
    const { container } = render(<CTASection {...CTA_CONTENT} />);
    
    const section = container.querySelector('section[data-section="cta"]');
    expect(section).toBeInTheDocument();
  });
});
