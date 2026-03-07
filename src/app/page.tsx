import Navbar from "@/components/common/navbar";
import Hero from "./_component/hero";
import HowItWork from "./_component/how-it-works";
import Impact from "./_component/impact";
import Problem from "./_component/problem";
import Solution from "./_component/solution";
import Vision from "./_component/vision";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col ">
      <Navbar />
      <Hero />
      <div className=" h-20" />
      <Vision />
      <div className=" h-20" />
      <Problem />
      <div className=" h-20" />
      <Solution />
      <div className=" h-20" />
      <HowItWork />
      <div className=" h-20" />
      <Impact />
    </main>
  );
}
