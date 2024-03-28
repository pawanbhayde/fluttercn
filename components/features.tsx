import Image from "next/image";

const Features = () => {
  return (
    <div className="container relative pt-36">
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
        <div className=" col-span-6 flex flex-col items-center h-[400px] lg:col-span-12 rounded-lg border bg-background shadow-md  md:shadow-xl  xl:col-span-6">
          <div className="z-[1]">
            <Image
              src="/examples/authfea.png"
              width={400}
              height={200}
              alt="Mail"
              className="hidden dark:block"
            />
            <Image
              src="/examples/authfea-light.png"
              width={400}
              height={200}
              alt="Mail"
              className="block dark:hidden"
            />
          </div>
          <div className="p-4  w-full h-full z-[2]">
            <h1 className="font-semibold">Easy Auth Building</h1>
            <p className=" text-muted-foreground ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              fugiat quam perspiciatis accusamus temporibus debitis.
            </p>
          </div>
        </div>
        <div className="col-span-6 p-8 h-[400px] rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          gsgsgv
        </div>
        <div className="col-span-6 p-8 h-[400px] rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          gsgsgv
        </div>
        <div className="col-span-6 p-8 h-[400px] rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          gsgsgv
        </div>
        <div className="col-span-6 p-8 h-[400px] rounded-lg border bg-background shadow-md  md:shadow-xl xl:col-span-3">
          gsgsgv
        </div>
        <div className="col-span-6 p-8 h-[400px] lg:col-span-12 rounded-lg border bg-background shadow-md  md:shadow-xl  xl:col-span-6">
          Dfvvd
        </div>
      </div>
    </div>
  );
};

export default Features;
