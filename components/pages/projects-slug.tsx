/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Project } from "@/constants/projects";
import { getDataBySlug } from "@/services/firebase-service";
import { dbToStack } from "@/services/project-service";
import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import Back from "../back";
import { CornerUpRight } from "lucide-react";
import Image from "../image";

interface ProjectSlugProps {
  slug: string;
}

const ProjectsSlug = ({ slug }: ProjectSlugProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const result: any = await getDataBySlug("projects", slug);

        if (result) {
          setProject({
            ...result,
            techStack: result.techStack ? dbToStack(result.techStack) : [],
          });
        }
      } catch (error) {
        console.error("Error retrieving project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="mt-32 wrapper">
        <p>Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="mt-32 wrapper">
        <p>Project not found.</p>
        <Back />
      </div>
    );
  }

  return (
    <div className="mt-32 wrapper">
      <div className="mb-2">
        <Back />
      </div>

      <div>
        <div className="xs:mb-1 pb-4 border-b-2 border-dashed">
          <h1 className="font-medium text-2xl">{project.title}</h1>
          {project.description && (
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: project.description.replace(/\n/g, "<br>"),
              }}
            />
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:items-center md:justify-between mb-4">
          <div className="flex flex-col xs:flex-row xs:items-center xs:gap-4 mt-4 xs:mt-0">
            <div
              className={`${buttonVariants({
                variant: "ghost",
              })} w-fit px-0 hover:bg-transparent`}
            >
              <span className="block whitespace-nowrap text-base">Tech Stack</span>
              <CornerUpRight size={20} className="rotate-90 xs:rotate-0" />
            </div>
            <div className="flex gap-4 my-4">
              {project.techStack?.length > 0 ? (
                project.techStack.map((tech, index) => (
                  <div key={index} className="w-5 aspect-square">
                    {tech}
                  </div>
                ))
              ) : (
                <span>No tech stack available</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {project.github_url && (
              <Link href={project.github_url} className={buttonVariants({ variant: "outline" })}>
                <SiGithub size={20} />
                <span className="block text-sm font-medium font-inter text-secondary-gray dark:text-teal-500">
                  Source Code
                </span>
              </Link>
            )}

            {project.url && (
              <Link href={project.url} className={buttonVariants({ variant: "outline" })}>
                <BiLinkExternal size={20} />
                <span className="block text-sm font-medium font-inter text-secondary-gray dark:text-teal-500">
                  Link Preview
                </span>
              </Link>
            )}
          </div>
        </div>

        <div className="w-full aspect-video">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p>No image available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlug;
