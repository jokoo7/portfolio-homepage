"use client";

import React from "react";
import MotionSection from "@/components/motion-section";
import Image from "next/image";
import { CloudDownload } from "lucide-react";
import MotionDiv from "../motion-div";

const AboutPage = () => {
  return (
    <>
      <section className="wrapper flex flex-col gap-10 sm:flex-row">
        <div>
          <MotionDiv>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Hi I&apos;m Joko Santoso, frontend & website developer.
            </h1>
          </MotionDiv>
          <MotionDiv delay={0.1}>
            <p className="mb-4 text-base md:text-lg text-main-gray">
              My work is primarily focused on creating engaging and dynamic web interfaces, leveraging
              modern technologies to deliver seamless user experiences. I enjoy exploring innovative
              design concepts and translating them into responsive, accessible, and visually appealing
              web applications.
            </p>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <p className="text-base md:text-lg text-main-gray">
              Currently, I&apos;m a front-end web developer based in Pakanbaru, Indonesia ⏤ freelancing
              and seeking opportunities to collaborate or contribute through internships.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.3} className="mt-8">
            <button className="flex items-center gap-3 text-main-gray hover:underline">
              <CloudDownload className="animate-bounce" />
              <span className="block -mt-1.5">Download CV</span>
            </button>
          </MotionDiv>
        </div>
        <MotionDiv delay={0.4} className="w-full sm:w-fit flex justify-center">
          <div className="w-full xs:w-72 sm:w-52 md:w-60 aspect-[3/4] h-fit border flex-shrink-0 overflow-hidden">
            <Image
              src="/images/me.jpg"
              width={100}
              height={100}
              alt="me"
              className="w-full h-full object-cover"
            />
          </div>
        </MotionDiv>
      </section>
      <MotionSection delay={0.5} className="mt-16">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-4 sm:gap-y-10 sm:gap-x-0 font-inter w-full md:w-[90%] pb-16 border-b">
          <p className="underline whitespace-nowrap">Main Skils</p>

          <p className="text-sm xs:col-span-3 text-main-gray leading-6">
            Html, Css, Javascript, Typscript, PHP, React, Next.js, Tailwindcss, Redux, Node.js,
            Express.js, MongoDB, PostgreSQL, Git, Npm, Firebase, Laravel, Composer, Prisma, Jest.
          </p>

          <p className="underline whitespace-nowrap">Main Software</p>

          <p className="text-sm xs:col-span-3 text-main-gray leading-6">VS Code, Github, Postman.</p>
        </div>
      </MotionSection>
    </>
  );
};

export default AboutPage;
