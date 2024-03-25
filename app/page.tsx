import { ExamplesNav } from "@/components/example-nav";
import Navbar from "@/components/header";
import Hero from "@/components/hero";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Page = () => {
  return (
    <div className="container relative">
      <Hero />
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
    </div>
  );
};

export default Page;
