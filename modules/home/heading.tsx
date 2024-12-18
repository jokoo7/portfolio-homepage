"use client";

import Section from "@/components/section";
import { gabarito } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const HomeHeading = () => {
  return (
    <>
      <Section className="mb-[1000px]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mb-2">
          Hello, I&apos;m an{" "}
          <mark className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-violet-700">
            Fullstack Developer
          </mark>{" "}
          based in Indonesia!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
          <div className="border-t border-t-secondary-foreground/30">
            <h2
              className={`${gabarito.className} pt-2 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0`}
            >
              Joko Santoso
            </h2>
            <p className={`${gabarito.className} text-muted-foreground`}>
              Fullstack Engineer (Bridging User Interfaces & Backend Systems)
            </p>
          </div>
          <div className="flex-shrink-0 bg-transparent border-1 w-full sm:w-fit flex justify-center">
            <div className="border-2 border-white rounded-full">
              <Image
                src="/images/me.jpg"
                width={100}
                height={100}
                objectFit="cover"
                alt="profile"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomeHeading;
