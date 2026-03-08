"use client";
import { motion } from "framer-motion";
import Carousel from "@/components/common/carousel";

const ProblemImages = () => {
  const images = [...Array(4)].map((_, i) => ({
    image: `/jpg/problem-${i + 1}.jpg`,
  }));

  return (
    <div>
      {/* Carousel */}
      <div className="max-w-[1280px] mx-auto w-full">
        <Carousel projects={images} />
      </div>
    </div>
  );
};

export default ProblemImages;
