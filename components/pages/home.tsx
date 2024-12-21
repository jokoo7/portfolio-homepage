"use client";

import Section from "../section";
import Link from "next/link";
import ArrowSvg from "../svg/arrow";

const HomePage = () => {
  return (
    <>
      <header>
        <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 py-20">
          <Section className="text-5xl sm:text-5xl font-medium w-full">
            <span>Hello, I&apos;m Joko Santoso.</span>
          </Section>
          <Section
            delay={0.2}
            className="text-lg sm:text-xl text-main-gray w-full xs:w-[80%] sm:w-full text-start sm:mt-14"
          >
            <span>
              I&apos;m an Fullstack Developer (Bridging User Interfaces & Backend Systems) who is
              currently based in Pekanbaru, Indonesia.
            </span>
          </Section>
        </div>
        <Section delay={0.4}>
          <ArrowSvg w="34" h="39" className="rotate-90" />
        </Section>
      </header>
      <Section delay={0.5} className="mt-20">
        <div className="relative w-full">
          <div className="xs:w-[80%]">
            <h1 className="text-3xl font-medium mb-3 xs:mb-2">Projects</h1>
            <span className="text-main-gray text-lg block sm:w-[90%] md:w-[70%]">
              Take a look below at some of my featured work for clients from the past few years.
            </span>
          </div>
          <Link href="/projects" className="absolute top-2 right-0 flex items-center gap-1">
            <span className="-mt-0.5">More</span> <ArrowSvg w="15" h="12" />
          </Link>
        </div>
      </Section>
      <Section delay={0.5} className="mt-8">
        <div className="w-full font-inter py-10 border-t border-b border-foreground flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="flex flex-col justify-between w-full md:w-[40%]">
            <div className="">
              <h4 className="uppercase text-base font-semibold mb-4">01 / nextnime</h4>
              <p className="mb-4 line-clamp-3">
                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and
                look development.
              </p>
              <span className="block text-sm text-main-gray">
                ReactJS, NextJS, TailwindCSS, Typscript
              </span>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 hover:underline">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
          <div className="w-full md:w-[60%]">
            <div className="w-full aspect-video bg-gray-800"></div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline md:hidden mt-6">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
        </div>

        <div className="w-full font-inter py-10 border-t border-b border-foreground flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="flex flex-col justify-between w-full md:w-[40%]">
            <div className="">
              <h4 className="uppercase text-base font-semibold mb-4">01 / nextnime</h4>
              <p className="mb-4 line-clamp-3">
                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and
                look development.
              </p>
              <span className="block text-sm text-main-gray">
                ReactJS, NextJS, TailwindCSS, Typscript
              </span>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 hover:underline">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
          <div className="w-full md:w-[60%]">
            <div className="w-full aspect-video bg-gray-800"></div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline md:hidden mt-6">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
