import { ExamplesNav } from "@/components/example-nav";
import Hero from "@/components/hero";
import Features from "@/components/features";

const Page = () => {
  return (
    <div className="container relative">
      <Hero />
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
      <Features />
    </div>
  );
};

export default Page;
