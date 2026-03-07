# Implementation Plan: Scroll-Spy Navbar

## Overview

This implementation plan breaks down the scroll-spy navbar feature into discrete coding tasks. The feature adds smooth scrolling navigation with automatic active section detection using the Intersection Observer API and Framer Motion animations. Implementation will be done in TypeScript with Next.js, integrating with the existing navbar component while preserving GSAP hover animations.

## Tasks

- [x] 1. Install dependencies and create type definitions
  - Install framer-motion if not already present: `npm install framer-motion`
  - Create `src/types/navigation.ts` with NavSection, UseScrollSpyOptions, and UseScrollSpyReturn interfaces
  - _Requirements: 5.1, 5.2, 6.1, 6.2, 6.3_

- [ ] 2. Implement useScrollSpy custom hook
  - [x] 2.1 Create useScrollSpy hook with Intersection Observer setup
    - Create `src/hooks/useScrollSpy.ts` file
    - Implement hook with sectionIds parameter and optional threshold/rootMargin
    - Set up Intersection Observer with 50% threshold (0.5)
    - Use rootMargin "0px 0px -50% 0px" to adjust effective viewport
    - Filter out null elements before observing to handle missing DOM elements
    - Implement topmost section selection logic when multiple sections are visible
    - Return activeSection state (string | null)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 5.1, 5.2, 8.5, 9.1_

  - [ ]* 2.2 Write property test for active section viewport reflection
    - **Property 2: Active Section Reflects Viewport**
    - **Validates: Requirements 2.2, 2.3**
    - Generate random scroll positions where a section is 50%+ visible
    - Assert useScrollSpy returns that section's ID
    - Tag: `Feature: scroll-spy-navbar, Property 2: Active section reflects viewport`

  - [ ]* 2.3 Write property test for topmost section priority
    - **Property 3: Topmost Section Priority**
    - **Validates: Requirements 2.4**
    - Generate scroll positions with multiple visible sections
    - Assert useScrollSpy returns the topmost section's ID
    - Tag: `Feature: scroll-spy-navbar, Property 3: Topmost section priority`

  - [x] 2.4 Add observer cleanup on unmount
    - Implement useEffect cleanup function to disconnect observer
    - Store observer instance in useRef
    - _Requirements: 5.3_

  - [ ]* 2.5 Write property test for observer cleanup
    - **Property 7: Observer Cleanup**
    - **Validates: Requirements 5.3**
    - Generate random section ID arrays
    - Mount and unmount component, assert observer disconnect is called
    - Tag: `Feature: scroll-spy-navbar, Property 7: Observer cleanup`

  - [ ]* 2.6 Write property test for missing element resilience
    - **Property 10: Missing Element Resilience**
    - **Validates: Requirements 8.5**
    - Generate section configurations with some non-existent IDs
    - Assert no errors thrown and missing IDs never returned as active
    - Tag: `Feature: scroll-spy-navbar, Property 10: Missing element resilience`

  - [ ]* 2.7 Write property test for state update efficiency
    - **Property 11: State Update Efficiency**
    - **Validates: Requirements 9.2**
    - Generate sequences of intersection events
    - Assert state updates occur at most once per actual change
    - Tag: `Feature: scroll-spy-navbar, Property 11: State update efficiency`

  - [ ]* 2.8 Write unit tests for useScrollSpy hook
    - Test returns null when no sections are visible
    - Test returns correct section ID when one section is 50% visible
    - Test handles empty sectionIds array
    - Test handles missing DOM elements gracefully
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 8.5_

- [ ] 3. Fix section ID inconsistencies
  - [x] 3.1 Update problem.tsx section ID
    - Change `id='Problem'` to `id='problem'` in `src/app/_component/problem.tsx`
    - _Requirements: 8.4_

  - [x] 3.2 Update how-it-works.tsx section ID
    - Change `id='how-it-work'` to `id='how-it-works'` in `src/app/_component/how-it-works.tsx`
    - _Requirements: 8.4_

- [x] 4. Checkpoint - Verify hook and section IDs
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Enhance Navbar component with scroll-spy functionality
  - [x] 5.1 Integrate useScrollSpy hook into navbar
    - Import useScrollSpy hook in `src/components/common/navbar.tsx`
    - Define DEFAULT_SECTIONS array with all five sections (vision, problem, how-it-works, solution, impact)
    - Add sections prop to Navbar component (optional, defaults to DEFAULT_SECTIONS)
    - Call useScrollSpy with section IDs extracted from sections array
    - Store activeSection state from hook
    - _Requirements: 5.4, 5.5, 5.6, 8.1, 8.2, 8.3, 8.4_

  - [x] 5.2 Implement smooth scroll handler
    - Create handleSmoothScroll function that takes sectionId parameter
    - Use document.getElementById to find target element
    - Call scrollIntoView with behavior: 'smooth' and block: 'start'
    - Handle missing elements gracefully (check if element exists)
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ]* 5.3 Write property test for smooth scroll completion
    - **Property 1: Smooth Scroll Completion**
    - **Validates: Requirements 1.1, 1.2**
    - Generate random valid section IDs from configuration
    - Simulate click on navigation link
    - Assert target section is scrolled into view
    - Tag: `Feature: scroll-spy-navbar, Property 1: Smooth scroll completion`

  - [x] 5.4 Create NavLink component with Framer Motion active indicator
    - Import motion from framer-motion
    - Create NavLink component accepting section, isActive, and onClick props
    - Render as semantic anchor element with href
    - Prevent default anchor behavior in onClick handler
    - Call handleSmoothScroll when clicked
    - Conditionally render motion.div with layoutId="activeIndicator" when isActive is true
    - Style active indicator with background color or underline
    - Set transition duration to 300ms for active indicator animation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 5.5 Write property test for active indicator synchronization
    - **Property 4: Active Indicator Synchronization**
    - **Validates: Requirements 3.1, 3.4, 3.5**
    - Generate random active section states (including null)
    - Render navbar with active section
    - Assert active indicator appears only on correct link or not at all
    - Tag: `Feature: scroll-spy-navbar, Property 4: Active indicator synchronization`

  - [x] 5.6 Add accessibility attributes to navigation links
    - Set aria-current="true" on active navigation link
    - Wrap navbar in nav element with aria-label="Main navigation"
    - Ensure links are keyboard navigable (Tab key)
    - Handle Enter key press to trigger smooth scroll
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ]* 5.7 Write property test for accessibility attribute correctness
    - **Property 8: Accessibility Attribute Correctness**
    - **Validates: Requirements 7.2**
    - Generate random active section states
    - Render navbar and assert aria-current is set correctly on all links
    - Tag: `Feature: scroll-spy-navbar, Property 8: Accessibility attribute correctness`

  - [ ]* 5.8 Write property test for keyboard navigation equivalence
    - **Property 9: Keyboard Navigation Equivalence**
    - **Validates: Requirements 7.5**
    - Generate random section IDs
    - Simulate Enter key press vs mouse click
    - Assert both trigger same scroll behavior
    - Tag: `Feature: scroll-spy-navbar, Property 9: Keyboard navigation equivalence`

  - [x] 5.9 Apply Tailwind CSS styling for sticky positioning
    - Add sticky positioning classes: `sticky top-0 z-50`
    - Add background with backdrop blur for visibility
    - Maintain horizontal layout for navigation links
    - Preserve existing GSAP hover animations on links
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 5.10 Write property test for navbar visibility persistence
    - **Property 5: Navbar Visibility Persistence**
    - **Validates: Requirements 4.1, 4.3**
    - Generate random scroll positions
    - Assert navbar remains visible and positioned correctly
    - Tag: `Feature: scroll-spy-navbar, Property 5: Navbar visibility persistence`

  - [ ]* 5.11 Write property test for section configuration completeness
    - **Property 6: Section Configuration Completeness**
    - **Validates: Requirements 4.5, 8.2**
    - Generate random valid section configurations
    - Render navbar and assert exactly one link per section with correct label and href
    - Tag: `Feature: scroll-spy-navbar, Property 6: Section configuration completeness`

  - [ ]* 5.12 Write unit tests for Navbar component
    - Test renders all configured navigation links
    - Test renders default sections when no props provided
    - Test calls smooth scroll handler on link click
    - Test displays active indicator on active link only
    - Test does not display active indicator when activeSection is null
    - Test maintains existing logo and CTA button
    - Test prevents default anchor behavior
    - Test handles missing target element gracefully
    - _Requirements: 1.1, 1.2, 3.1, 3.4, 3.5, 4.5, 5.4, 5.5, 8.2_

  - [ ]* 5.13 Write accessibility unit tests
    - Test navigation links are keyboard accessible
    - Test active link has aria-current="true"
    - Test inactive links do not have aria-current="true"
    - Test nav element has appropriate aria-label
    - Test Enter key triggers smooth scroll
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 6. Add performance optimizations
  - [x] 6.1 Optimize component re-renders
    - Wrap Navbar component with React.memo
    - Use useMemo for sections array
    - Use useCallback for handleSmoothScroll function
    - _Requirements: 9.2, 9.3_

  - [x] 6.2 Ensure GPU-accelerated animations
    - Verify active indicator uses only transform and opacity properties
    - Confirm Framer Motion layoutId uses GPU acceleration
    - _Requirements: 9.4_

- [x] 7. Final checkpoint - Integration testing
  - Ensure all tests pass, ask the user if questions arise.

