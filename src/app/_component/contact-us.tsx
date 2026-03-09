import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";

export default function ContactUs() {
  return (
    <section id="contact-us" className="min-h-screen space-y-12 pt-20">
      <div className=" space-y-12 ">
        <h1 className="h2 text-center">Invitation for Ideas and Support</h1>
        <div className=" flex gap-8">
          <div className="">
            <p className="p max-w-xl">
              If you have any ideas, suggestions, or feedback that could help
              improve this project, we would be happy to hear from you. New
              perspectives and collaboration can help us make UMWERO more useful
              and impactful for farmers.
              <br />
              <br />
              Whether you are a farmer, researcher, developer, or simply someone
              interested in agriculture and technology, your thoughts and
              support can help us move this vision forward.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

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
