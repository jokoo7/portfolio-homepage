/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MotionSection from "../motion-section";
import CardProject from "../card-project";
import { useEffect, useState } from "react";
import { retriveData } from "@/services/firebase-service";
import { dbToStack } from "@/services/project-service";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProjects() {
      setLoading(true);
      try {
        const result: any = await retriveData("projects");
        const updatedProjects = result.map((project: any) => ({
          ...project,
          techStack: project.techStack ? dbToStack(project.techStack) : [],
        }));

        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error retrieving projects:", error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return (
    <>
      <MotionSection delay={0.5} className="mt-32">
        <div className="px-8">
          <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Explore My Best Projects
          </h4>

          <p className="text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            From interactive web applications to advanced AI integrations, each project is designed to
            deliver creative and innovative solutions. Dive into my work to see ideas come to life!
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {projects.map((project, index) => (
                <CardProject key={index} project={project} />
              ))}
            </>
          )}
        </div>
      </MotionSection>
    </>
  );
};

export default ProjectsPage;
