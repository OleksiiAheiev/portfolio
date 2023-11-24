"use client";

import Nav from "./components/Nav";
import {
  Css,
  Github,
  Html,
  Javascript,
  Moon,
  Mui,
  NextJs,
  React,
  Redux,
  Tailwind,
  Typescript,
} from "./icons";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { ILogo, IScrollingProps } from "@/lib/types";
import { Particles } from "./components/Particles";

function ScrollingEffect({ children, baseVelocity = 100 }: IScrollingProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    // проблема в overflow-hidden, в інших місцях криво працює, через це не працює ефект прозорості
    <div className="flex flex-wrap whitespace-nowrap">
      <motion.div
        className="flex text-4xl text-transparent bg-white cursor-default whitespace-nowrap text-edge-outline animate-title font-display sm:text-6xl md:text-7xl bg-clip-text"
        style={{ x }}
      >
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
      </motion.div>
    </div>
  );
}

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
    <div className="flex flex-col h-screen bg-gradient-to-t dark:from-black from-white dark:via-zinc-700/30 via-zinc-700/30 dark:to-black to-white">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="mb-7 text-center animate-fade-in">
          <h2 className="text-zinc-500 text-xl">Hey I&apos;m Oleksii</h2>
        </div>
        <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <div className="container max-w-5xl overflow-hidden">
          <ScrollingEffect baseVelocity={-1}>
            <span className="mr-10">
              I&apos;m a strongly motivated Junior Frontend Developer, actively
              seeking opportunities to apply coding skills.
            </span>
          </ScrollingEffect>
          <ScrollingEffect baseVelocity={5}>
            {logos.map((logo, index) => (
              <span
                key={index}
                className={index !== logos.length - 1 ? "mr-10" : ""}
              >
                {logo.icon}
              </span>
            ))}
          </ScrollingEffect>
        </div>
        <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
      </div>
    </div>
  );
}
