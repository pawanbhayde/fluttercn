"use client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Index from "@/app/content/components/button.mdx";
import CodeSnippet from "@/components/codesnippet";
import { useState } from "react";

const Button = () => {
  const [code, setCode] = useState<string>('const greeting = "Hello, world!";');

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
              <BreadcrumbLink href="/docs/components/button">
                Button
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Index />
      </div>
    </div>
  );
};

export default Button;
