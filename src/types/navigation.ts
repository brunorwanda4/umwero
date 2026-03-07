/**
 * Navigation type definitions for scroll-spy navbar feature
 */

/**
 * Represents a navigation section with its identifier, display label, and anchor href
 */
export interface NavSection {
  id: string;
  label: string;
  href: string;
}

/**
 * Configuration options for the useScrollSpy hook
 */
export interface UseScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
  rootMargin?: string;
}

/**
 * Return value from the useScrollSpy hook
 */
export interface UseScrollSpyReturn {
  activeSection: string | null;
}
