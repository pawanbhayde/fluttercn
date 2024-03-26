import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/example-nav";

import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { siteConfig } from "@/config/site";
import MailPage from "@/app/examples/mail/page";

const Hero = () => {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>
            First Open source component library for{" "}
            <span className="text-blue-400">Flutter</span>
          </PageHeaderHeading>
          <PageHeaderDescription>
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>{" "}
            based beautifully designed components that you can copy and paste
            into your flutter apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              <Button variant="outline" className="flex gap-2">
                <Icons.gitHub className="h-4 w-4" />
                Github
              </Button>
            </Link>
          </PageActions>
        </PageHeader>
        <ExamplesNav className="[&>a:first-child]:text-primary" />
        <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
          <Image
            src="/examples/mail-dark.png"
            width={1280}
            height={727}
            alt="Mail"
            className="hidden dark:block"
          />
          <Image
            src="/examples/mail-light.png"
            width={1280}
            height={727}
            alt="Mail"
            className="block dark:hidden"
          />
        </section>
        <section className="hidden md:block">
          <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
            <MailPage />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
