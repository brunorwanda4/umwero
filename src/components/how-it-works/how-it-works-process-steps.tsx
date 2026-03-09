import Image from "next/image";
import { cn } from "@/lib/utils";
import { howItWorksSteps } from "./how-it-works-steps";

export default function HowItWorksProcessSteps() {
  return (
    <main className=" grid grid-cols-2 gap-12">
      {howItWorksSteps.map((step, index) => (
        <article
          key={`${index}-${step.title}`}
          className={cn(
            "flex flex-col gap-4",
            index % 2 === 0 && " flex-col-reverse",
          )}
        >
          <div className=" relative h-60 min-w-80  w-full">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className=" object-cover rounded-(--radius-box)"
            />
          </div>
          <div className="  flex flex-col gap-2">
            <h3 className=" h3">
              {index + 1}. {step.title}
            </h3>
            <p className=" p">{step.description}</p>
          </div>
        </article>
      ))}
      <div className=" relative w-full h-full">
        <Image
          src="/jpg/example.jpg"
          alt=""
          fill
          className=" object-cover rounded-(--radius-box)"
        />
      </div>
    </main>
  );
}
