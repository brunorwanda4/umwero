/**
 * Unit tests for HeroSection component
 * 
 * Tests Requirements 1.1, 1.4, 1.5
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { HERO_CONTENT, COLORS } from '@/lib/constants';

describe('HeroSection', () => {
  it('displays UMWERO name', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('UMWERO');
  });

  it('displays the tagline "Helping Africa grow healthier crops and secure the future of food"', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    expect(screen.getByText('Helping Africa grow healthier crops and secure the future of food')).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    const ctaButton = screen.getByRole('link', { name: HERO_CONTENT.ctaText });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveTextContent('Learn More');
  });

  it('renders CTA button with correct href', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    const ctaButton = screen.getByRole('link', { name: HERO_CONTENT.ctaText });
    expect(ctaButton).toHaveAttribute('href', '#solution');
  });

  it('applies primary color (#2E7D32) to the title', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveStyle({ color: COLORS.primary });
  });

  it('applies accent color (#F9A825) to the CTA button', () => {
    render(<HeroSection {...HERO_CONTENT} />);
    
    const ctaButton = screen.getByRole('link', { name: HERO_CONTENT.ctaText });
    expect(ctaButton).toHaveStyle({ backgroundColor: COLORS.accent });
  });

  it('renders with correct section data attribute', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const section = container.querySelector('section[data-section="hero"]');
    expect(section).toBeInTheDocument();
  });

  it('renders the plant growth animation SVG', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('uses primary color in plant animation elements', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // Check that primary color is used in the SVG (stem and leaves)
    const pathElements = svg?.querySelectorAll('path');
    const hasPrimaryColor = Array.from(pathElements || []).some(
      path => path.getAttribute('stroke') === COLORS.primary || path.getAttribute('fill') === COLORS.primary
    );
    expect(hasPrimaryColor).toBe(true);
  });

  it('uses accent color in plant animation elements', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // Check that accent color is used in the SVG (seed and flower)
    const circles = svg?.querySelectorAll('circle');
    const ellipses = svg?.querySelectorAll('ellipse');
    const hasAccentColor = 
      Array.from(circles || []).some(circle => circle.getAttribute('fill') === COLORS.accent) ||
      Array.from(ellipses || []).some(ellipse => ellipse.getAttribute('fill') === COLORS.accent);
    expect(hasAccentColor).toBe(true);
  });

  it('renders with responsive layout classes', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('lg:grid-cols-2');
  });

  it('renders with minimum viewport height', () => {
    const { container } = render(<HeroSection {...HERO_CONTENT} />);
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('min-h-screen');
  });
});
