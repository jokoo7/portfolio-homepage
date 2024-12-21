"use client";

import { useTheme } from "next-themes";
import Section from "../section";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  const { theme } = useTheme();
  const [fillColor, setFillColor] = useState("#181717"); // Warna default

  useEffect(() => {
    setFillColor(theme === "light" ? "#181717" : "#f3f3f3");
  }, [theme]);

  return (
    <>
      <header>
        <div className="w-full flex flex-col xs:flex-row justify-between gap-4 xs:gap-0 py-20">
          <Section className="text-5xl sm:text-6xl font-semibold w-full">
            <span>Hello, I&apos;m Joko Santoso.</span>
          </Section>
          <Section delay={0.2} className="text-lg sm:text-2xl text-main-gray w-full text-start xs:mt-20">
            <span>
              I&apos;m an Fullstack Developer (Bridging User Interfaces & Backend Systems) who is
              currently based in Pekanbaru, Indonesia.
            </span>
          </Section>
        </div>
        <Section delay={0.4}>
          <svg
            width="34"
            height="39"
            viewBox="0 0 34 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z"
              fill={fillColor}
            />
          </svg>
        </Section>
      </header>
      <Section delay={0.5} className="mt-20">
        <div className="relative w-full">
          <div className="xs:w-[80%]">
            <h1 className="text-3xl font-medium mb-3 xs:mb-2">Projects</h1>
            <span className="text-main-gray">
              Take a look below at some of my featured work for clients from the past few years.
            </span>
          </div>
          <Link href="/projects" className="absolute top-2 right-0 flex items-center gap-1">
            <span className="-mt-0.5">More</span> <MoveRight size={20} strokeWidth={2} />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
