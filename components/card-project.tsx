import Link from "next/link";
import ArrowSvg from "./svg/arrow";
import Image from "next/image";
import { Project } from "@/constants/projects";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <div className="w-full font-inter py-10 border-b flex flex-col md:flex-row gap-4 md:gap-10">
      <div className="order-2 sm:order-1 flex flex-col justify-between w-full md:w-[40%]">
        <div>
          <h4 className="text-xl font-medium mb-3 font-sans">{project.title}</h4>
          <p className="mb-4 line-clamp-3 text-[15px]">{project.description}</p>
          <div className="flex gap-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="w-5 aspect-square">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <Link href={project.link} className="flex items-center gap-2 hover:underline mt-8 sm:mt-0">
          <span className="-mt-0.5">More shots from this project</span>{" "}
          <ArrowSvg w="15" h="12" className="-rotate-45" />
        </Link>
      </div>
      <div className="order-1 sm:order-2 w-full md:w-[60%]">
        <div className="w-full aspect-video ">
          <Image
            src={project.image}
            alt={project.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
