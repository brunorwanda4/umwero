"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const goals = [
  {
    title: "Support Farmers",
    description:
      "Provide accessible digital tools that help farmers understand and manage crop health.",
    image: "/jpg/farmers.jpg",
  },
  {
    title: "Improve Food Security",
    description:
      "Reduce crop loss and increase agricultural productivity across Rwanda and Africa.",
    image: "/jpg/food.jpg",
  },
  {
    title: "Use Technology for Agriculture",
    description:
      "Leverage data, analysis, and intelligent systems to guide better farming practices.",
    image: "/jpg/technology.jpg",
  },
];
const VisionGoals = () => {
  const [active, setActive] = useState(0);

  const handleGoalClick = (index: number) => {
    setActive(index);
  };
  return (
    <main className=" flex gap-4">
      <div className=" space-y-8 w-1/3">
        {goals.map((goal, index) => (
          <div
            key={`${index}-${goal.title}`}
            className={cn(
              " cursor-pointer",
              active === index &&
                "border-secondary p-4 py-6 shadow-xl rounded-md border-l-6 ",
            )}
            onClick={() => handleGoalClick(index)}
          >
            <h3 className=" h3">{goal.title}</h3>
            <p className="p">{goal.description}</p>
          </div>
        ))}
      </div>
      {/*images*/}
      <div className=" w-2/3">
        <div className="bg-base-200 h-full rounded-xl p-8 pr-0 pb-0">
          <div className=" w-full h-full relative">
            <Image
              src={goals[active].image}
              alt={goals[active].title}
              fill
              className=" rounded-tl-md rounded-br-md  object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisionGoals;
