"use client";

import Section from "../section";
import Link from "next/link";
import ArrowSvg from "../svg/arrow";
import Image from "next/image";
import { Hammer, Handshake } from "lucide-react";

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
        <div className="relative w-full border-b pb-6">
          <div className="">
            <div className="flex gap-2 items-center mb-3">
              <Hammer strokeWidth={2.5} size={24} />
              <h1 className="text-2xl font-medium font-inter">Projects</h1>
            </div>
            <span className="text-main-gray font-inter text-base block">
              Take a look below at some of my featured work for clients from the past few years.
            </span>
          </div>
        </div>
      </Section>
      <Section delay={0.5} className="">
        <div className="w-full font-inter py-10 border-b flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="order-2 sm:order-1 flex flex-col justify-between w-full md:w-[40%]">
            <div>
              <h4 className="text-xl font-medium mb-3 font-sans">Nextnime App</h4>
              <p className="mb-4 line-clamp-3 text-[15px]">
                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and
                look development.
              </p>
              <span className="block text-sm text-main-gray">
                ReactJS, NextJS, TailwindCSS, Typscript
              </span>
            </div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline mt-8 sm:mt-0">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
          <div className="order-1 sm:order-2 w-full md:w-[60%]">
            <div className="w-full aspect-video ">
              <Image
                src="https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100"
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full font-inter py-10 border-b flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="order-2 sm:order-1 flex flex-col justify-between w-full md:w-[40%]">
            <div>
              <h4 className="text-xl font-medium mb-3 font-sans">Nextnime App</h4>
              <p className="mb-4 line-clamp-3 text-[15px]">
                Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and
                look development.
              </p>
              <span className="block text-sm text-main-gray">
                ReactJS, NextJS, TailwindCSS, Typscript
              </span>
            </div>
            <Link href="/projects" className="flex items-center gap-2 hover:underline mt-8 sm:mt-0">
              <span className="-mt-0.5">More shots from this project</span>{" "}
              <ArrowSvg w="15" h="12" className="-rotate-45" />
            </Link>
          </div>
          <div className="order-1 sm:order-2 w-full md:w-[60%]">
            <div className="w-full aspect-video ">
              <Image
                src="https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100"
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <Link
          href="/projects"
          className="w-fit flex items-center gap-2 px-6 h-14 mt-10 mx-auto rounded-full bg-foreground text-background group transition-all hover:scale-105"
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
      <Section delay={0.5} className="mt-20">
        <div className="relative w-full border-b pb-6">
          <div className="">
            <div className="flex gap-2 items-center mb-3">
              <Handshake strokeWidth={2.5} size={24} />
              <h1 className="text-2xl font-medium font-inter">Services</h1>
            </div>
            <span className="text-main-gray font-inter text-base block">
              I can deliver the following services.
            </span>
          </div>
        </div>
      </Section>
      <div className="wrapper mt-6 grid gap-4 md:grid-cols-2">
        <div className="relative p-4 dark:border-neutral-700 md:p-6">
          <div className="mb-5 flex items-center justify-center px-6 py-4">
            <div className="h-36 w-52 overflow-hidden rounded-lg border dark:border-neutral-700">
              <div className="flex items-center justify-start gap-1 border-b bg-neutral-200 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900">
                <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
                <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
                <div className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"></div>
              </div>
              <div className="flex justify-center gap-2 bg-neutral-100 p-3 pb-0 dark:bg-neutral-950">
                <div>
                  <div
                    className="mb-2 border border-neutral-300 dark:border-neutral-700"
                    style={{ borderRadius: "4px", width: "40px", height: "40px" }}
                  ></div>
                  <div className="flex flex-col gap-1">
                    <div className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                    <div className="h-1 w-4 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                    <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                    <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                  <div className="flex gap-1">
                    <div className="h-1 w-4 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                    <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      <div
                        className="w-16 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "20px" }}
                      ></div>
                      <div
                        className="w-16 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "20px" }}
                      ></div>
                      <div
                        className="w-16 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "20px" }}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div
                        className="w-14 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "40px" }}
                      ></div>
                      <div
                        className="w-14 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "40px" }}
                      ></div>
                      <div
                        className="w-14 rounded border border-neutral-300 dark:border-neutral-700"
                        style={{ height: "40px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="right-3 top-3 mb-1 flex w-max items-center justify-center rounded-lg border border-neutral-200 bg-neutral-200 bg-opacity-40 px-2 text-xs text-neutral-500 dark:border-teal-200  dark:bg-teal-900 dark:text-teal-200 md:absolute">
              coding
            </span>
            <h3 className="text-xl font-medium">Website Development</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-inter">
              Create stunning, user-friendly fullstack web applications using modern technologies.
            </p>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
        </div>
      </div>
      {/* <Section delay={0.5} className="">
        <div className="my-20">
          <h1 className="text-6xl xs:text-7xl font-inter font-bold text-center">Lest&apos;s talk</h1>
          <button className="w-fit mx-auto bg-foreground text-background px-6 h-14 rounded-full flex gap-2 items-center my-8">
            <span className="-mt-0.5">sannbusiness16@gmail.com</span>{" "}
            <ArrowSvg w="15" h="15" current="#f3f3f3" swapCurrent="#181717" className="-rotate-45" />
          </button>
        </div>
      </Section> */}
      {/* <Section delay={0.5} className="mt-10 border-t">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 py-10 items-start justify-between">
          <div>
            <span className="text-xl block">I am thrilled to answer to</span>
            <div className="text-xl flex items-center gap-2">
              <span className="block">your next project</span>{" "}
              <ArrowSvg className="rotate-90 sm:-rotate-0" w="15" h="15" />
            </div>
          </div>
          <div className="space-y-4">
            <span className="block text-xl">sannbusiness16@gmail.com</span>
            <button className="w-fit bg-foreground text-background px-6 h-14 rounded-full flex gap-2 items-center">
              <span className="-mt-0.5">Let`s get in touch</span>{" "}
              <ArrowSvg w="15" h="15" current="#f3f3f3" swapCurrent="#181717" className="-rotate-45" />
            </button>
          </div>
        </div>
      </Section> */}
    </>
  );
};

export default HomePage;
