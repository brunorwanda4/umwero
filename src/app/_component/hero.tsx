import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="  flex flex-col-reverse md:flex-row">
      <div className=" md:w-1/2 flex flex-col gap-8 items-center pt-12">
        <h1 className=" h1">Smart Crop Health for Rwanda and Africa</h1>
        <p className=" text-xl">
          <span className=" text-secondary">UMWERO</span> is a smart agriculture
          platform that helps farmers detect plant diseases early, understand
          crop health, and receive nutrient and treatment recommendations to
          grow healthier crops.
        </p>
        <div className=" flex flex-row gap-4 justify-start w-full mt-8">
          <button type="button" className=" btn btn-secondary ">
            <Link href="#vision">Learn More</Link>
          </button>
          <button type="button" className=" btn btn-primary">
            <Link href="#vision">Join the Project</Link>
          </button>
        </div>
      </div>

      <div className="max-md:grid max-md:place-items-center">
        <div className=" relative size-100  ">
          <Image src="/png/phone.png" alt="Phone " fill />
        </div>
        <div className=" relative h-12 w-80 ">
          <Image
            src="/png/shadow.png"
            alt="Phone "
            fill
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
