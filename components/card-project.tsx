import Link from "next/link";
import ArrowSvg from "./svg/arrow";
import { Project } from "@/types/project-type";
import Image from "./image";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md relative group border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-950 lg:hover:scale-[102%] lg:hover:border-neutral-300 dark:lg:hover:border-teal-300 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="w-full aspect-video rounded-sm overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-full p-4 relative z-10">
        <div>
          <h4 className="text-xl font-medium font-sans mb-1">{project.title}</h4>
          <p className="text-sm line-clamp-2  max-w-2xl mx-auto text-secondary-gray">
            {project.description}
          </p>
          <div className="flex gap-4 my-3">
            {project.techStack.map((tech, index) => (
              <div key={index} className="w-5 aspect-square">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 hover:underline mt-2 text-sm"
        >
          <span className="-mt-0.5 text-secondary-gray">More shots from this project</span>{" "}
          <ArrowSvg w="15" h="12" className="-rotate-45" />
        </Link>
      </div>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </div>
  );
};

export default CardProject;
