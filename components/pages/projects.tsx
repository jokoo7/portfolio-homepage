/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MotionSection from "../motion-section";
import { Hammer } from "lucide-react";
import Heading from "../heading";
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

  console.log(projects);

  return (
    <>
      <MotionSection delay={0.5}>
        <Heading
          title="Projects"
          description="Showcasing my passion for technology, design, and problem-solving through code."
        >
          <Hammer strokeWidth={2.5} size={24} />
        </Heading>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {projects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </>
        )}
      </MotionSection>
    </>
  );
};

export default ProjectsPage;
