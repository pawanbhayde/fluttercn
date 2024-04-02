import {
  Key,
  Figma,
  Layout,
  Moon,
  PenTool,
  PieChart,
  Code,
  Users,
} from "react-feather";

const Features = () => {
  return (
    <div className="container relative pt-36 pb-36">
      <div className="pb-10 flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Features of <span className="text-blue-400">Fluttercn</span>
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>{" "}
          based beautifully designed components that you can copy and paste into
          your flutter apps. Accessible. Customizable. Open Source.
        </p>
      </div>
      <div className="!pt-0 grid grid-cols-1  gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
        <div className=" col-span-6   rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Key color="background" size="24" />
            </div>
            <h1 className="font-semibold">Easy Auth Building</h1>
            <p className=" text-muted-foreground ">
              Authentication made easy. Build it fast, focus on the rest.
            </p>
          </div>
        </div>
        <div className="col-span-6   rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Figma color="background" size="24" />
            </div>
            <h1 className="font-semibold">Classical design</h1>
            <p className=" text-muted-foreground ">
              Create stunning UIs with ease. Start with the Material Design
              theme from shadcn/ui, or make your own elegant theme.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <PenTool color="background" size="24" />
            </div>
            <h1 className="font-semibold">Customization</h1>
            <p className=" text-muted-foreground ">
              Our parts are strong and versatile at the same time. You are
              constantly in complete control of their appearance and behaviour.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Moon color="background" size="24" />
            </div>
            <h1 className="font-semibold">Light and Dark UI</h1>
            <p className=" text-muted-foreground ">
              Optimized for multiple color modes. Use light or dark, your
              choice.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <PieChart color="background" size="24" />
            </div>
            <h1 className="font-semibold">Facilitating accessibility</h1>
            <p className=" text-muted-foreground ">
              We are proponents of building for everybody. Because of this, we
              make accessibility a top priority for each new feature we release.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Layout color="background" size="24" />
            </div>
            <h1 className="font-semibold">Examples</h1>
            <p className=" text-muted-foreground ">
              Professionally Designed Ui Layout to junpstart your next project.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Code color="background" size="24" />
            </div>
            <h1 className="font-semibold">Developer Experience</h1>
            <p className=" text-muted-foreground ">
              Guaranteed to boost your productivity when building your app or
              website.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-foreground w-min rounded-lg mb-4">
              <Users color="background" size="24" />
            </div>
            <h1 className="font-semibold">Active Community</h1>
            <p className=" text-muted-foreground ">
              We are a team of active maintainers ready to help you whenever you
              need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
