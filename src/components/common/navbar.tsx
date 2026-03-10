"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/types/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { BsX } from "react-icons/bs";

export const DEFAULT_SECTIONS: NavSection[] = [
  { id: "vision", label: "Vision", href: "#vision" },
  { id: "problem", label: "Problem", href: "#problem" },
  { id: "solution", label: "Solution", href: "#solution" },
  { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
  { id: "impact", label: "Impact", href: "#impact" },
];

interface NavbarProps {
  sections?: NavSection[];
}

const Navbar = ({ sections = DEFAULT_SECTIONS }: NavbarProps) => {
  // Extract section IDs for useScrollSpy - memoized to prevent unnecessary recalculations
  const sectionIds = useMemo(
    () => sections.map((section) => section.id),
    [sections],
  );

  // Track active section using scroll spy hook
  const { activeSection } = useScrollSpy({ sectionIds });

  // Smooth scroll handler - memoized to prevent unnecessary re-renders
  const handleSmoothScroll = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md py-2 px-4 lg:px-20 -mx-4 lg:-mx-20">
      <div className="mx-auto flex items-center justify-between ">
        <Link href={"/"} className=" gap-2 items-center lg:hidden flex">
          <Image
            priority
            src="/logo.svg"
            alt="Umwero Logo"
            width={28}
            height={28}
          />
          <h1 className="text-2xl font-bold text-accent">UMWERO</h1>
        </Link>
        {/* Desktop navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
        <Link href={"/"} className="flex gap-2 items-center">
          <Image
            priority
            src="/logo.svg"
            alt="Umwero Logo"
            width={28}
            height={28}
          />
          <h1 className="text-2xl font-bold text-accent">UMWERO</h1>
        </Link>
          <ul className="flex gap-2">
            {sections.map((section, index) => (
              <li key={`${section.label}-${index}`}>
                <NavLink
                  section={section}
                  isActive={activeSection === section.id}
                  onClick={handleSmoothScroll}
                />
              </li>
            ))}
          </ul>
        </nav>
          <Link href={"#contact-us"} className="btn btn-primary lg:block hidden">
            Join the Project
          </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden btn btn-ghost btn-cicle"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
        <CiMenuBurger size={20}/>
        </button>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-base-100 backdrop-blur-sm shadow h-screen w-full">
          <div className="flex items-center justify-between p-4 max-w-5xl mx-auto bg-base-100">
            <Link href={"/"} className="flex gap-2 items-center" onClick={() =>closeMobileMenu()}>
              <Image
                priority
                src="/logo.svg"
                alt="Umwero Logo"
                width={28}
                height={28}
              />
              <h1 className="text-2xl font-bold text-accent">UMWERO</h1>
            </Link>
            <button
              type="button"
              className="btn btn-ghost"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
             <BsX size={20} />
            </button>
          </div>
          <nav className="p-4 space-y-4 bg-base-100">
            {sections.map((section) => (
              <button
                key={section.id}
                className="w-full text-left btn btn-ghost text-start justify-start"
                onClick={() => {
                  handleSmoothScroll(section.id);
                  closeMobileMenu();
                }}
                type="button"
              >
                {section.label}
              </button>
            ))}
            <Link
              href={"#contact-us"}
              className="btn btn-primary w-full"
              onClick={closeMobileMenu}
            >
              Join the Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);

interface NavLinkProps {
  section: NavSection;
  isActive: boolean;
  onClick: (sectionId: string) => void;
}

function NavLink({ section, isActive, onClick }: NavLinkProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  // GSAP hover animations
  useGSAP(() => {
    if (isActive && lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 1, transformOrigin: "left center" });
    } else {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
    }
  }, [isActive]);

  const handleEnter = () => {
    if (!isActive && lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "left center",
      });
    }
  };

  const handleLeave = () => {
    if (!isActive && lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.in",
        transformOrigin: "right center",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(section.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClick(section.id);
    }
  };

  return (
    <Link
      href={section.href}
      className={cn(
        "space-y-1 flex-col flex btn btn-ghost hover:text-secondary relative hover:bg-none ",
        isActive && "text-secondary",
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-current={isActive ? "true" : undefined}
    >
      <span>{section.label}</span>
      <div
        ref={lineRef}
        className={cn("h-0.5 w-full bg-secondary")}
        style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
      />
      {/*{isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          transition={{ duration: 0.3 }}
        />
      )}*/}
    </Link>
  );
}
