"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useMemo, useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/types/navigation";

const DEFAULT_SECTIONS: NavSection[] = [
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

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md  py-2 flex justify-between -mx-20 px-20">
      <nav
        className="flex gap-8 items-center flex-row"
        aria-label="Main navigation"
      >
        <Link href={"/"} className=" flex gap-2 items-center">
          <Image
            priority
            src="/logo.png"
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
      <div>
        <Link href={"/"} className="btn btn-primary ">
          Join the Project
        </Link>
      </div>
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
      className="space-y-1 flex-col flex btn btn-ghost hover:text-secondary relative hover:bg-none "
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-current={isActive ? "true" : undefined}
    >
      <span>{section.label}</span>
      <div
        ref={lineRef}
        className={cn("h-0.5 w-full bg-secondary", isActive && "bg-secondary")}
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
