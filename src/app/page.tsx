import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ContactUs from "./_component/contact-us";
import Hero from "./_component/hero";
import HowItWork from "./_component/how-it-works";
import Impact from "./_component/impact";
import Problem from "./_component/problem";
import Solution from "./_component/solution";
import Vision from "./_component/vision";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col px-20 relative">
      <Navbar />
      <Hero />
      <Vision />
      <div className="-mx-20 pt-20">
        <Problem />
      </div>
      <Solution />
      <HowItWork />
      <Impact />
      <ContactUs />
      <div className="-mx-20 pt-20">
        <Footer />
      </div>
    </main>
  );
}
