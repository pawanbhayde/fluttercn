import { ExamplesNav } from "@/components/example-nav";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Community from "@/components/community";

const Page = () => {
  return (
    <div className="container relative">
      <Hero />
      <Features />
      <Community />
    </div>
  );
};

export default Page;
