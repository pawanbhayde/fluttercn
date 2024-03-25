import Link from "next/link";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  return (
    <nav className="sticky lg:px-32 h-16 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center">
      <div className="flex  items-center  gap-6 max-w-screen-2xl ">
        <div className="logo flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="16"
              className=""
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="16"
              className=""
            ></line>
          </svg>
          <h1 className="text-lg text-">Fluttercn</h1>
        </div>
        <div className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Docs
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Components
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Themes
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Example
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Blocks
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
      </div>
      <div className="flex ">
        <Input type="text" placeholder="Search documentation..." />
        <Button variant="ghost" size="default">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-4 w-4" />
          </Link>
        </Button>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Button variant="ghost" size="default">
            <Icons.twitter className="h-3 w-3 fill-current" />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
