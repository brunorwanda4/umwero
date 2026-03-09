import Image from "next/image";

export default function ContactUs() {
  return (
    <section id="contact-us" className="min-h-screen">
      <div className=" items-center justify-center flex flex-col  ">
        <div className=" relative h-80 w-100">
          <Image
            src="/png/hand-greeting.png"
            alt="hand-greeting image"
            fill
            className=" object-contain"
          />
        </div>
        <article className=" text-center gap-4 flex flex-col">
          <h2 className="h1">Thank You for Visiting</h2>
          <p className=" max-w-2xl p">
            Thank you for taking the time to learn about UMWERO. We truly
            appreciate your interest in our vision of supporting farmers and
            improving agriculture in Rwanda and across Africa. <br /> Your visit
            means a lot to us because innovation grows stronger when people
            share ideas and work together.
          </p>
        </article>
      </div>
    </section>
  );
}
