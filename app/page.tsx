"use client";

import {
  Css,
  Github,
  Html,
  Javascript,
  Mui,
  NextJs,
  React,
  Redux,
  Tailwind,
  Typescript,
} from "./icons";
import { Particles } from "./components/Particles";
import { ILogo } from "@/lib/types";
import ScrollingEffect from "./components/ScrollingEffect";
import Navigation from "./components/template/Navigation/Navigation";
import Logos from "./components/Logos";

const logos: ILogo[] = [
  {
    name: "HTML",
    icon: <Html className="inline w-10" />,
  },
  {
    name: "Css",
    icon: <Css className="inline w-10" />,
  },
  {
    name: "JS",
    icon: <Javascript className="inline w-10" />,
  },
  {
    name: "React",
    icon: <React className="inline w-10" />,
  },
  {
    name: "Redux",
    icon: <Redux className="inline w-10" />,
  },
  {
    name: "MUI",
    icon: <Mui className="inline w-10" />,
  },
  {
    name: "TS",
    icon: <Typescript className="inline w-10" />,
  },
  {
    name: "NextJS",
    icon: <NextJs className="inline w-10" />,
  },
  {
    name: "Tailwind",
    icon: <Tailwind className="inline w-10" />,
  },
  {
    name: "git",
    icon: <Github className="inline w-10" />,
  },
];

export default function Home() {
  return (
    <div className="h-500vh overflow-hidden">
      <div className="flex flex-col fixed top-0 left-0 bottom-0 right-0 justify-center items-center transition-all duration-1000">
        <Navigation />
        <div className="container flex flex-col items-center justify-center flex-grow gap-4 overflow-hidden lg:max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-xl text-zinc-500">Hey I&apos;m Oleksii</h2>
          </div>
          <div className="fixed inset-0 bg-gradient-to-tl dark:from-black from-white dark:via-zinc-700/30 via-zinc-700/30 dark:to-black to-white z-0" />
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
          <ScrollingEffect baseVelocity={-1}>
            <h1 className="z-10 mr-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
              I&apos;m a strongly motivated Junior Frontend Developer, actively
              seeking opportunities to apply coding skills.
            </h1>
          </ScrollingEffect>
          <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
          <div className="overflow-hidden text-center lg:max-w-6xl">
            <ScrollingEffect baseVelocity={5}>
              <Logos logos={logos} className="mr-10 animate-fade-in" />
            </ScrollingEffect>
          </div>
        </div>
      </div>
    </div>
  );
}
