
> "I want to implement a single-page 'Scroll-Spy' Navbar #navbar.tsx in #page.tsx.
> **Requirements:**
> 1. **Smooth Scrolling:** When a nav link is clicked (e.g., `#vision`), it should scroll smoothly to that section.
> 2. **Active State Tracking:** Use the **Intersection Observer API** to detect which section is currently in the viewport.
> 3. **Framer Motion Animation:** When a section becomes active, the navbar link should have a 'sliding pill' or underline background that moves smoothly from the previous link to the new one using Framer Motion's `layoutId`.
> 4. **Tailwind Styling:** Use Tailwind for the layout. The navbar should be `sticky` or `fixed` at the top.
> 5. **Structure:** Create a reusable `Navbar` component and a custom hook (like `useScrollSpy`) to manage the active section ID.
> 
> 
> Please provide the code for the Navbar and an example of how to wrap my sections (Vision, Problem, How It Works, Impact) so they are correctly 'observed'."
