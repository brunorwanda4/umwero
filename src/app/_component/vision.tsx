import React from "react";
import VisionGoals from "./vision-goals";

export default function Vision() {
  return (
    <section id="vision" className=" min-h-screen pt-20 space-y-16">
      <div className=" flex flex-col gap-2">
        <h2 className="h1">Our Vision</h2>
        <p className=" max-w-xl p">
          To empower farmers in Rwanda and across Africa with intelligent tools
          that help them grow healthier crops, protect their harvests, and
          strengthen food security through accessible technology.
        </p>
      </div>
      <VisionGoals />
    </section>
  );
}
