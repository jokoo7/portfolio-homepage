"use client";

import Section from "../section";
import Link from "next/link";
import ArrowSvg from "../svg/arrow";
import Image from "next/image";
import { FolderOpenDot } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <header className="max-w-4xl mx-auto">
        <div className="w-full flex flex-col justify-between gap-4 sm:gap-0 py-6">
          <Section className="text-5xl xs:text-6xl sm:text-7xl font-bold w-full flex flex-col">
            <span>Websites&</span>
            <span>Branding.</span>
          </Section>
          <Section delay={0.2} className="text-lg xs:text-xl text-main-gray w-full sm:mt-6">
            <span className="block w-full text-start">
              Hey there, I&apos;m Joko Santoso, a Frontend Developer (Bridging User Interfaces) who is
              currently based in Pekanbaru, Indonesia.
            </span>
          </Section>
        </div>
        <Section delay={0.4}>
          <ArrowSvg w="30" h="35" className="rotate-90" />
        </Section>
      </header>
      <Section delay={0.5} className="mt-20">
        <div className="relative w-full border-b border-b-foreground pb-6">
          <div className="">
            <div className="flex gap-2 items-center mb-3">
              <FolderOpenDot strokeWidth={2.5} size={30} />
              <h1 className="text-3xl font-semibold font-inter">Projects</h1>
            </div>
            <span className="text-main-gray font-inter text-lg block">
              Take a look below at some of my featured work for clients from the past few years.
            </span>
          </div>
        </div>
      </Section>
      <Section delay={0.5} className="">
        <div className="w-full font-inter py-10 border-b border-foreground flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="flex flex-col justify-between w-full md:w-[40%]">
            <div className="">
              <h4 className="uppercase text-lg font-semibold mb-3 font-sans">01 / nextnime</h4>
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
            <div className="w-full aspect-video ">
              <Image
                src="https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100"
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline md:hidden mt-6">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
        </div>

        <div className="w-full font-inter py-10  border-b border-foreground flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="flex flex-col justify-between w-full md:w-[40%]">
            <div className="">
              <h4 className="uppercase text-lg font-semibold mb-3 font-sans">01 / nextnime</h4>
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
            <div className="w-full aspect-video">
              <Image
                src="https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100"
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline md:hidden mt-6">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
        </div>

        <Link
          href="/projects"
          className="w-fit flex items-center gap-2 px-6 h-10 mt-10 mx-auto rounded-full bg-foreground text-background group transition-all hover:scale-105"
        >
          <span className="-mt-0.5">View All Projects</span>{" "}
          <ArrowSvg
            w="15"
            h="12"
            current="#f3f3f3"
            swapCurrent="#181717"
            className="group-hover:-rotate-45 transition-all"
          />
        </Link>
      </Section>
      {/* <div className="space-y-2 my-8">
        <section
          data-animated="true"
          data-direction="left"
          data-speed="fast"
          className="w-full h-fit py-4 bg-foreground text-background scroller"
        >
          <div className="w-fit whitespace-nowrap flex gap-20">
            <span className="block text-5xl sm:text-6xl italic font-bold whitespace-nowrap slider">
              Crafting intuitive and visually appealing user interfaces for seamless digital experiences.
            </span>
            <span className="block text-5xl sm:text-6xl italic font-bold whitespace-nowrap slider">
              Crafting intuitive and visually appealing user interfaces for seamless digital experiences.
            </span>
          </div>
        </section>
        <section
          data-animated="true"
          data-direction="right"
          data-speed="slow"
          className="w-full h-fit py-4 bg-foreground text-background scroller"
        >
          <div className="w-fit whitespace-nowrap flex gap-20">
            <span className="block text-5xl sm:text-6xl font-bold whitespace-nowrap slider">
              Crafting intuitive and visually appealing user interfaces for seamless digital experiences.
            </span>
            <span className="block text-5xl sm:text-6xl font-bold whitespace-nowrap slider">
              Crafting intuitive and visually appealing user interfaces for seamless digital experiences.
            </span>
          </div>
        </section>
      </div> */}
      <Section delay={0.5} className="">
        <div className="my-20">
          <h1 className="text-6xl xs:text-7xl font-inter font-bold text-center">Lest&apos;s talk</h1>
          <button className="w-fit mx-auto bg-foreground text-background px-6 h-14 rounded-full flex gap-2 items-center my-8">
            <span className="-mt-0.5">sannbusiness16@gmail.com</span>{" "}
            <ArrowSvg w="15" h="15" current="#f3f3f3" swapCurrent="#181717" className="-rotate-45" />
          </button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
