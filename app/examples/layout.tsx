import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/example-nav";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className="hidden md:block">
            Check out some examples
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" className="flex gap-2">
                <Icons.gitHub className="h-4 w-4" />
                Github
              </Button>
            </Link>
          </PageActions>
        </PageHeader>
        <section>
          <ExamplesNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
