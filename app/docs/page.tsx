import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Page = () => {
  return (
    <div className="container flex relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="flex-2 flex flex-col gap-3 mx-auto w-full min-w-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Introduction</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <p>
          This is NOT a component library. It's a collection of re-usable
          components that you can copy and paste into your apps.
        </p>
        <p>What do you mean by not a component library?</p>
        <p>
          I mean you do not install it as a dependency. It is not available or
          distributed via npm.
        </p>
        <p>
          Pick the components you need. Copy and paste the code into your
          project and customize to your needs. The code is yours.
        </p>
        <p><i>Use this as a reference to build your own component libraries.</i></p>
      </div>
      <div className="flex-1 bg-neutral-900"></div>
    </div>
  );
};

export default Page;
