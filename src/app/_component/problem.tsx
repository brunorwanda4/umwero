import Carousel from "@/components/common/carousel";
import KeyProblem from "../../components/problems/key-problems";

export default function Problem() {
  const images = [...Array(4)].map((_, i) => ({
    image: `/jpg/problem-${i + 1}.jpg`,
  }));
  return (
    <section
      id="problem"
      className=" bg-linear-to-b from-70% to-30%   from-accent p-accent px-20 py-10 pt-20 space-y-18"
    >
      <div className=" flex gap-8 items-center">
        <div className=" w-1/2 text-lg">
          <h2 className="h1">The Problem</h2>
          <br />
          <p className="  ">
            Farmers across Rwanda and many parts of Africa face serious
            challenges that affect crop health, productivity, and food security.
          </p>
          <br />
          <p className="">
            Agriculture supports millions of families, but many farmers still
            lack access to the knowledge and tools needed to protect their
            crops. Diseases, poor soil nutrients, and limited access to
            agricultural experts often lead to reduced harvests and financial
            losses.
            <br />
            <br />
            Without early detection and proper guidance, small problems in crops
            can quickly become major losses for farmers.
          </p>
        </div>
        <Carousel projects={images} className=" w-1/2 h-full" />
      </div>
      <KeyProblem />
    </section>
  );
}
