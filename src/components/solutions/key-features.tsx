"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { features } from "./features";

gsap.registerPlugin(ScrollTrigger);

const KeyFeatures = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null); // full component (title + paragraph + stories)
  const containerRef = useRef<HTMLDivElement | null>(null); // only stories container
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const completionDetectedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!sections.length) return;

      const totalSections = sections.length;

      // Set initial state
      gsap.set(sections, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        y: "100%",
        scale: 1,
        zIndex: 1,
      });

      // Show first section
      gsap.set(sections[0], {
        opacity: 1,
        y: "0%",
        zIndex: totalSections,
      });

      // Create scroll trigger for the stories only
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () =>
          `bottom+=${containerRef.current?.querySelector("p")?.offsetHeight || 200} top`,
        // 👆 End when the paragraph is fully scrolled through
        scrub: true,
        pin: true, // Pin only during the paragraph scroll
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (completionDetectedRef.current) return;

          const sections = sectionRefs.current.filter(
            Boolean,
          ) as HTMLDivElement[];
          const totalSections = sections.length;

          const progress = self.progress;
          const sectionProgress = progress * (totalSections - 1);
          const currentSectionIndex = Math.floor(sectionProgress);
          const nextSectionIndex = Math.min(
            currentSectionIndex + 1,
            totalSections - 1,
          );
          const localProgress = sectionProgress - currentSectionIndex;

          sections.forEach((section, index) => {
            if (index < currentSectionIndex) {
              gsap.to(section, {
                opacity: 0,
                y: "-30%",
                scale: 0.9,
                zIndex: totalSections - index,
                duration: 0.1,
              });
            } else if (index === currentSectionIndex) {
              const fadeOutStart = 0.8;
              const fadeOutProgress = Math.max(
                0,
                (localProgress - fadeOutStart) / (1 - fadeOutStart),
              );

              gsap.to(section, {
                opacity: 1 - fadeOutProgress,
                y: `${-fadeOutProgress * 20}%`,
                scale: 1 - fadeOutProgress * 0.1,
                zIndex: totalSections - index,
                duration: 0.1,
              });
            } else if (index === nextSectionIndex) {
              gsap.to(section, {
                opacity: 100,
                y: `${100 - localProgress * 100}%`,
                scale: 1,
                zIndex: totalSections - index + 1,
                duration: 0.1,
              });
            } else {
              gsap.to(section, {
                opacity: 0,
                y: "100%",
                scale: 1,
                zIndex: 1,
                duration: 0.1,
              });
            }
          });
        },
      });
    },
    { scope: wrapperRef },
  );

  useEffect(() => {
    return () => {
      scrollTriggerRef.current?.kill();
      scrollTweenRef.current?.kill();
    };
  }, []);

  return (
    <main className="">
      <h2 className="h1">Our Solution</h2>
      <div ref={wrapperRef} className=" space-y-8 mt-2">
        <div className=" flex flex-col gap-2">
          <p className=" max-w-xl p">
            UMWERO provides smart tools that help farmers protect and improve
            their crops through better information and guidance.
          </p>
        </div>
        <div
          ref={containerRef}
          className="relative h-[80vh] rounded-2xl overflow-hidden"
        >
          {features.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={`${index}-${item.title}`}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className={cn(
                  "absolute inset-0 flex md:flex-row flex-col w-full bg-base-200 rounded-(--radius-box) overflow-hidden",
                  isEven ? "bg-neutral text-neutral-content" : "",
                )}
              >
                <div className="w-full flex h-full">
                  <div className="p-4 md:w-1/2">
                    <h2 className="h2">{item.title}</h2>
                    <div className="mt-6">
                      <p
                        className={cn(
                          "text-xl",
                          isEven ? "text-neutral-content" : "",
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-2/3 relative">
                    <div
                      className={cn(
                        "bg-gradient-to-r absolute z-20 w-1/10 top-0 h-full",
                        isEven ? "from-neutral" : "from-base-200",
                      )}
                    />
                    <div className=" h-full w-full relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className=" object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default KeyFeatures;
