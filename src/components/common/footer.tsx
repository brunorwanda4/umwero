"use client";
import Link from "next/link";
import { useCallback,  } from "react";
import { DEFAULT_SECTIONS } from "./navbar";
import Image from "next/image";

const Footer = () => {
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
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Link href={"/"} className="flex gap-2 items-center flex-col">
          <Image
            priority
            src="/logo.svg"
            alt="Umwero Logo"
            width={28}
            height={28}
          />
          <h1 className="text-2xl font-bold text-neutral-content">UMWERO</h1>
        </Link>
      </aside>
      <nav>
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

      </nav>
    </footer>
  );
};

export default Footer;
