"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/media-query";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

interface ProblemCardProps {
  image: string;
  title: string;
  description: string;
  index?: number;
  height?: number;
  className?: string;
  handleOpen?: (id?: string) => void;
  id?: string;
}

const ProblemCard = ({
  image,
  title,
  description,
  index,
  className,
  height = 340,
  handleOpen,
  id,
}: ProblemCardProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const cardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  // Animation logic
  const open = contextSafe(() => {
    gsap.to(imageWrapperRef.current, {
      height: isMobile ? "20%" : "45%",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(infoRef.current, {
      height: isMobile ? "80%" : "55%",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const close = contextSafe(() => {
    gsap.to(imageWrapperRef.current, {
      height: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(infoRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  });

  const toggle = contextSafe(() => {
    const isOpen = gsap.getProperty(infoRef.current, "opacity") === 1;
    isOpen ? close() : open();
  });

  const h = isMobile ? 300 : height;

  return (
    <div
      ref={cardRef}
      onMouseEnter={!isMobile ? open : undefined}
      onMouseLeave={!isMobile ? close : undefined}
      onClick={isMobile ? toggle : undefined}
      className={cn(
        "group relative overflow-hidden cursor-pointer rounded-(--radius-box) bg-card text-card-foreground shadow-sm transition-all",
        className,
      )}
      style={{ height: h }}
    >
      {/* Image Section */}
      <div
        ref={imageWrapperRef}
        className="relative w-full h-full overflow-hidden"
      >
        <div className=" relative w-full h-full ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Overlay Title - Always visible at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent/30  p-4 text-white">
          <div className="flex justify-between items-center">
            {/*TODO: onClick open dialog*/}
            <span
              onClick={() => handleOpen?.(id)}
              className="font-bold text-lg leading-tight"
            >
              {title}
            </span>
            {index !== undefined && (
              <span className="text-xs opacity-70 font-mono">
                {index < 10 ? `0${index}` : index}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Info Section (Revealed on hover) */}
      <div
        ref={infoRef}
        className="opacity-0 h-0 overflow-hidden bg-accent text-background p-4 flex flex-col justify-between"
      >
        <p className="text-accent-content text-sm line-clamp-4">
          {description}
        </p>

        <button
          onClick={() => handleOpen?.(id)}
          type="button"
          className={cn("btn btn-secondary")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
