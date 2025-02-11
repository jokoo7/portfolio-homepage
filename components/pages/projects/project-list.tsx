import CardProject from "@/components/card-project";
import { Project } from "@/types/project-type";
import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import React from "react";

type IProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: IProps) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col gap-1 text-red-400 items-center justify-center">
        <TriangleAlert size={20} className="" />
        <p className="text-center">No projects available at the moment</p>
      </div>
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
