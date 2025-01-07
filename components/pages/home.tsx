"use client";

import MotionSection from "../motion-section";
import Link from "next/link";
import ArrowSvg from "../svg/arrow";
import CardService from "../card-service";
import { BackgroundLines } from "../ui/background-lines";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Heading from "../heading";
import ProjectList from "./projects/project-list";
import { useQuery } from "@tanstack/react-query";
import { getBestProjects } from "@/services/project-service";

const HomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects-best"],
    queryFn: getBestProjects,
  });

  return (
    <>
      <BackgroundLines
        svgOptions={{ duration: 5 }}
        className="flex items-center justify-center w-full flex-col px-8"
      >
        <MotionSection>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
            Portfolio Website, <br /> Let&apos;s Connect
            <ArrowSvg w="30" h="35" className="rotate-90 my-5 mx-auto" />
          </h2>
        </MotionSection>
        <MotionSection delay={0.2}>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
            Hey there, I&apos;m Joko Santoso, a Frontend Developer (Bridging User Interfaces) who is
            currently based in Pekanbaru, Indonesia.
          </p>
        </MotionSection>
      </BackgroundLines>

      <MotionSection delay={0.5} className="wrapper mb-16">
        <Heading
          title="Explore My Best Projects"
          description="From interactive web applications to advanced AI integrations, each project is designed to
          deliver creative and innovative solutions. Dive into my work to see ideas come to life!"
        />

        {/* Projects List */}
        <div className="mt-10">
          <ProjectList projects={data ?? []} isLoading={isLoading} isError={isError} />
        </div>

        <div className="w-full flex justify-center mt-10">
          <Link href="/projects">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-background text-foreground flex items-center space-x-2  group transition-all hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowSvg w="15" h="12" className="group-hover:-rotate-45 transition-all" />
            </HoverBorderGradient>
          </Link>
        </div>
      </MotionSection>

      <MotionSection delay={0.5} className="wrapper">
        <Heading
          title="Professional Services Tailored for You"
          description="Offering a range of services from web development solutions. Each service is crafted to meet
            your unique needs, delivering results that exceed expectations. Let's bring your ideas
            to life together!"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 pb-16 border-b">
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
