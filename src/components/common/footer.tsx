"use client";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { BsInstagram } from "react-icons/bs";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { DEFAULT_SECTIONS } from "./navbar";

const Footer = () => {
  const sectionIds = useMemo(
    () => DEFAULT_SECTIONS.map((section) => section.id),
    [DEFAULT_SECTIONS],
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
    <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        {DEFAULT_SECTIONS.map((section) => {
          return (
            <Link
              href={section.href}
              key={section.href}
              onClick={() => handleSmoothScroll(section.id)}
              className="link link-hover"
            >
              {section.label}
            </Link>
          );
        })}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href={""}>
            <BsInstagram />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
