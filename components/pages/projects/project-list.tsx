import CardProject from "@/components/card-project";
import ProjectLoading from "@/components/loading/project-loading";
import { Project } from "@/constants/projects";
import { motion } from "framer-motion";
import React from "react";

type IProps = {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
};

const ProjectList = ({ projects, isLoading, isError }: IProps) => {
  if (isLoading) {
    return <ProjectLoading />;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load projects. Please try again later.</p>;
  }

  if (projects.length === 0) {
    return (
      <p className="text-center text-neutral-500 dark:text-neutral-300">
        No projects available at the moment.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects?.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateX: 20, scale: 0.8 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CardProject project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
