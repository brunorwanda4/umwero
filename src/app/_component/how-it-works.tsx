import HowItWorksProcessSteps from "@/components/how-it-works/how-it-works-process-steps";

export default function HowItWork() {
  return (
    <section id="how-it-works" className=" min-h-screen pt-20 space-y-12">
      <div className=" flex flex-col gap-2">
        <h2 className="h1">How It Works</h2>
        <p className=" max-w-xl p">
          UMWERO helps farmers understand and protect their crops through a
          simple process that analyzes plant health and provides practical
          recommendations.
        </p>
      </div>
      <HowItWorksProcessSteps />
    </section>
  );
}
