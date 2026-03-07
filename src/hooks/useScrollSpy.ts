import { useEffect, useState, useRef } from 'react';
import type { UseScrollSpyOptions, UseScrollSpyReturn } from '@/types/navigation';

/**
 * Custom React hook that tracks which section is currently visible in the viewport
 * using the Intersection Observer API.
 * 
 * @param options - Configuration options for the scroll spy
 * @param options.sectionIds - Array of section element IDs to observe
 * @param options.threshold - Intersection threshold (default: 0.5 for 50% visibility)
 * @param options.rootMargin - Root margin for the observer (default: "0px 0px -50% 0px")
 * @returns Object containing the currently active section ID or null
 * 
 * @example
 * ```tsx
 * const { activeSection } = useScrollSpy({
 *   sectionIds: ['vision', 'problem', 'solution'],
 *   threshold: 0.5,
 *   rootMargin: "0px 0px -50% 0px"
 * });
 * ```
 */
export function useScrollSpy({
  sectionIds,
  threshold = 0.5,
  rootMargin = "0px 0px -50% 0px"
}: UseScrollSpyOptions): UseScrollSpyReturn {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for browser support
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Intersection Observer not supported');
      }
      return;
    }

    // Get all section elements, filtering out null values for missing DOM elements
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Warn in development if some sections are missing
    if (elements.length < sectionIds.length && process.env.NODE_ENV === 'development') {
      console.warn('Some section IDs were not found in the DOM');
    }

    // If no valid elements, return early
    if (elements.length === 0) {
      return;
    }

    // Track which sections are currently intersecting
    const intersectingEntries = new Map<string, IntersectionObserverEntry>();

    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Update the map of intersecting entries
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingEntries.set(entry.target.id, entry);
          } else {
            intersectingEntries.delete(entry.target.id);
          }
        });

        // Determine the active section
        if (intersectingEntries.size === 0) {
          // No sections are visible
          setActiveSection(null);
        } else if (intersectingEntries.size === 1) {
          // Only one section is visible
          const [sectionId] = intersectingEntries.keys();
          setActiveSection(sectionId);
        } else {
          // Multiple sections are visible - select the topmost one
          // The topmost section is the one with the smallest top position
          let topmostSection: string | null = null;
          let smallestTop = Infinity;

          intersectingEntries.forEach((entry, sectionId) => {
            const top = entry.boundingClientRect.top;
            if (top < smallestTop) {
              smallestTop = top;
              topmostSection = sectionId;
            }
          });

          setActiveSection(topmostSection);
        }
      },
      {
        threshold,
        rootMargin,
        root: null // Use viewport as root
      }
    );

    // Observe all valid elements
    elements.forEach(element => {
      observerRef.current?.observe(element);
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      intersectingEntries.clear();
    };
  }, [sectionIds, threshold, rootMargin]);

  return { activeSection };
}
