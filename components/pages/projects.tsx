"use client";

import MotionSection from "../motion-section";
import { Hammer } from "lucide-react";
import Heading from "../heading";
import CardProject from "../card-project";
import { getProjects } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <>
      <MotionSection delay={0.5}>
        <Heading
          title="Projects"
          description="Showcasing my passion for technology, design, and problem-solving through code."
        >
          <Hammer strokeWidth={2.5} size={24} />
        </Heading>
        {getProjects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </MotionSection>
    </>
  );
};

export default ProjectsPage;
