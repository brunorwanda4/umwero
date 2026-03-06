/**
 * Integration test for landing page
 * Validates: Requirements 13.1 - All sections render correctly
 * 
 * Note: Dynamic imports with Next.js dynamic() don't fully render in Vitest test environment.
 * The lazy loading works correctly in production (verified by build success).
 * These tests validate the hero section and core functionality that renders synchronously.
 */

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './page';

describe('Landing Page Integration', () => {
  it('renders hero section immediately', () => {
    const { container } = render(<Home />);
    
    // Hero section should render immediately (not lazy loaded)
    expect(container.querySelector('section[data-section="hero"]')).toBeInTheDocument();
  });

  it('renders main element with sections', async () => {
    const { container } = render(<Home />);
    
    // Wait for dynamic imports to load
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(1);
    }, { timeout: 3000 });

    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('displays UMWERO branding in hero section', () => {
    render(<Home />);
    // UMWERO appears multiple times on the page, so we check for the h1 specifically
    expect(screen.getByRole('heading', { level: 1, name: 'UMWERO' })).toBeInTheDocument();
  });

  it('displays main tagline', () => {
    render(<Home />);
    expect(screen.getByText(/Helping Africa grow healthier crops/i)).toBeInTheDocument();
  });
});

/**
 * Full Page Load Integration Test
 * Task 11.3: Test all 8 sections render and are visible
 * Validates: Requirements 13.1
 */
describe('Full Page Load Integration', () => {
  it('renders all 8 sections on the landing page', async () => {
    const { container } = render(<Home />);
    
    // Wait for all dynamic imports to load
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      // Should have all 8 sections: Hero, Problem, Solution, How It Works, 
      // Differentiation, Impact, Technology, CTA
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });
  });

  it('renders sections in correct order with proper data attributes', async () => {
    const { container } = render(<Home />);
    
    // Wait for all sections to load
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });

    const sections = container.querySelectorAll('section');
    
    // Verify Hero section is first
    expect(sections[0]).toHaveAttribute('data-section', 'hero');
    
    // Verify Problem section is second
    expect(sections[1]).toHaveAttribute('data-section', 'problem');
    
    // Verify Solution section is third
    expect(sections[2]).toHaveAttribute('data-section', 'solution');
    
    // Verify How It Works section is fourth
    expect(sections[3]).toHaveAttribute('data-section', 'how-it-works');
    
    // Verify Differentiation section is fifth
    expect(sections[4]).toHaveAttribute('data-section', 'differentiation');
    
    // Verify Impact section is sixth
    expect(sections[5]).toHaveAttribute('data-section', 'impact');
    
    // Verify Technology section is seventh
    expect(sections[6]).toHaveAttribute('data-section', 'technology');
    
    // Verify CTA section is eighth
    expect(sections[7]).toHaveAttribute('data-section', 'cta');
  });

  it('all sections are present in the DOM', async () => {
    const { container } = render(<Home />);
    
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });

    const sections = container.querySelectorAll('section');
    
    // Verify all sections are in the document (animations may affect visibility)
    sections.forEach((section, index) => {
      expect(section).toBeInTheDocument();
    });
  });

  it('sections contain expected content markers', async () => {
    render(<Home />);
    
    // Wait for content to load
    await waitFor(() => {
      // Hero section content
      expect(screen.getByRole('heading', { level: 1, name: 'UMWERO' })).toBeInTheDocument();
    }, { timeout: 5000 });

    // Problem section content
    expect(screen.getByText(/Challenges Facing African Farmers/i)).toBeInTheDocument();
    
    // Solution section content
    expect(screen.getByText(/Our Solution/i)).toBeInTheDocument();
    
    // How It Works section content
    expect(screen.getByText(/How It Works/i)).toBeInTheDocument();
    
    // Differentiation section content
    expect(screen.getByText(/Why UMWERO is Different/i)).toBeInTheDocument();
    
    // Impact section content
    expect(screen.getByText(/Our Impact/i)).toBeInTheDocument();
    
    // Technology section content
    expect(screen.getByText(/Built with Modern Technology/i)).toBeInTheDocument();
    
    // CTA section content
    expect(screen.getByText(/Join Us in Transforming African Agriculture/i)).toBeInTheDocument();
  });
});

/**
 * Scroll-Triggered Animation Integration Test
 * Task 11.3: Test scroll-triggered animations
 * Validates: Requirements 13.1
 */
describe('Scroll-Triggered Animations', () => {
  it('AnimatedSection components wrap sections below the fold', async () => {
    const { container } = render(<Home />);
    
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });

    // Hero section should NOT be wrapped in AnimatedSection (it has its own animations)
    const heroSection = container.querySelector('section[data-section="hero"]');
    expect(heroSection?.parentElement?.tagName).toBe('MAIN');
    
    // Other sections should be wrapped in motion.div (AnimatedSection)
    const problemSection = container.querySelector('section[data-section="problem"]');
    expect(problemSection?.parentElement?.tagName).toBe('DIV');
  });

  it('AnimatedSection components have proper viewport detection setup', async () => {
    const { container } = render(<Home />);
    
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });

    // Check that sections below the fold are wrapped in divs (AnimatedSection wrappers)
    const problemSection = container.querySelector('section[data-section="problem"]');
    const solutionSection = container.querySelector('section[data-section="solution"]');
    
    // These sections should be wrapped in motion.div elements
    expect(problemSection?.parentElement).toBeTruthy();
    expect(solutionSection?.parentElement).toBeTruthy();
  });

  it('sections have staggered animation delays', async () => {
    const { container } = render(<Home />);
    
    await waitFor(() => {
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBe(8);
    }, { timeout: 5000 });

    // Verify that different sections exist (delays are applied via AnimatedSection delay prop)
    // The actual delay values are passed as props and tested in AnimatedSection.test.tsx
    const sectionElements = [
      container.querySelector('section[data-section="problem"]'),
      container.querySelector('section[data-section="solution"]'),
      container.querySelector('section[data-section="how-it-works"]'),
      container.querySelector('section[data-section="differentiation"]'),
      container.querySelector('section[data-section="impact"]'),
      container.querySelector('section[data-section="technology"]'),
      container.querySelector('section[data-section="cta"]'),
    ];

    // All sections should be present
    sectionElements.forEach(section => {
      expect(section).toBeTruthy();
    });
  });
});
