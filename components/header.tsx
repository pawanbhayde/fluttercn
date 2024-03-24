import Link from "next/link";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/mode-toggle";
import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="px-40 flex justify-between items-center">
      <div className="flex items-center h-16 gap-6 max-w-screen-2xl ">
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
          href="/"
        >
          Github
        </Link>
      </div>
      <div className="flex gap-3">
        <Input type="text" placeholder="Search documentation..." />
        <Button variant="ghost" size="default">
          <Link href='https://github.com/pawanbhayde/fluttercn'><Github /></Link>
        </Button>
        <Button variant="ghost" size="default">
          <Twitter />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
