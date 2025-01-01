/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MotionSection from "../motion-section";
import Link from "next/link";
import ArrowSvg from "../svg/arrow";
import { Hammer, Handshake } from "lucide-react";
import CardProject from "../card-project";
import Heading from "../heading";
import CardService from "../card-service";
import { useEffect, useState } from "react";
import { retriveData } from "@/services/firebase-service";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const result: any = await retriveData("projects");
      setProjects(result);
    }
    getProjects();
  }, []);

  return (
    <>
      <header className="max-w-4xl mx-auto mb-10">
        <div className="w-full flex flex-col justify-between gap-4 sm:gap-0 pb-6">
          <MotionSection className="text-5xl font-inter xs:text-6xl font-bold w-full flex flex-col">
            <span className="block leading-[3.3rem] xs:leading-[3.8rem]">Portfolio Website⏤</span>
            <span className="block leading-[3.3rem] xs:leading-[3.8rem]">Let&apos;s Connect.</span>
          </MotionSection>
          <MotionSection delay={0.2} className="text-lg xs:text-xl text-main-gray w-full sm:mt-6">
            <span className="block w-full text-start">
              Hey there, I&apos;m Joko Santoso, a Frontend Developer (Bridging User Interfaces) who is
              currently based in Pekanbaru, Indonesia.
            </span>
          </MotionSection>
        </div>
        <MotionSection delay={0.4}>
          <ArrowSvg w="30" h="35" className="rotate-90" />
        </MotionSection>
      </header>

      <MotionSection delay={0.5} className="mb-16">
        <Heading
          title="Projects"
          description="Showcasing my passion for technology, design, and problem-solving through code."
        >
          <Hammer strokeWidth={2.5} size={24} />
        </Heading>

        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}

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
      </MotionSection>

      <MotionSection>
        <Heading title="Service" description="I can deliver the following services.">
          <Handshake strokeWidth={2.5} size={24} />
        </Heading>

        <div className="mt-6 grid gap-4 md:grid-cols-2 pb-16 border-b">
          <CardService
            label="coding"
            title="Website Development"
            description="Create stunning, user-friendly fullstack web applications using modern technologies."
          >
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
          </CardService>

          <CardService
            label="marketing"
            title="Search Engine Optimization"
            description="Improvement Search Engine Optimization and web performance."
          >
            <div className="flex h-40 flex-col items-center justify-start gap-1 px-6 text-neutral-500 dark:text-neutral-300">
              <p>Google</p>
              <div className="flex h-4 w-40 items-center rounded-full border border-neutral-300 px-3 py-2 text-[8px] dark:border-neutral-700">
                <span aria-label="What is SEO?" className="font-inter">
                  <span aria-hidden="true">Search Engine Optimization?</span>
                </span>
              </div>
            </div>
          </CardService>
        </div>
      </MotionSection>
    </>
  );
};

export default HomePage;
