/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from "@/constants/projects";
import { SKILS_PROJECTS } from "@/constants/stacks";
import { JSX } from "react";
import { getDataBySlug, retriveData } from "./firebase-service";

export const dbToStack = (numbers: string[]): JSX.Element[] => {
  if (!Array.isArray(numbers)) {
    console.warn("Invalid techStack:", numbers);
    return [];
  }
  return numbers.map((number) => SKILS_PROJECTS[Number(number)]);
};

export const getProjects = async () => {
  const result: any = await retriveData("projects");
  if (Array.isArray(result)) {
    const updatedProjects = result.map((project) => ({
      ...project,
      techStack: project.techStack ? dbToStack(project.techStack) : [],
    })) as Project[];

    return updatedProjects;
  } else {
    console.error("Unexpected data format:", result);
  }
};

export const getBestProjects = async () => {
  const result: any = await retriveData("projects");

  if (Array.isArray(result)) {
    const updatedProjects = result
      .filter((project) => project.is_best)
      .map((project) => ({
        ...project,
        techStack: project.techStack ? dbToStack(project.techStack) : [],
      })) as Project[];

    return updatedProjects;
  } else {
    console.error("Unexpected data format:", result);
  }
};

export const getProjectDetail = async (slug: string) => {
  const result: any = await getDataBySlug("projects", slug);

  return {
    ...result,
    techStack: result.techStack ? dbToStack(result.techStack) : [],
  };
};
