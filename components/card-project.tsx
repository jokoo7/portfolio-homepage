import Link from "next/link";
import ArrowSvg from "./svg/arrow";
import Image from "next/image";
import { Project } from "@/constants/projects";

const CardProject = ({ project }: { project: Project }) => {
  return (
    <div className="w-full font-inter flex flex-col gap-4 rounded-md relative border p-4 overflow-hidden">
      <div className="w-full">
        <div className="w-full aspect-video rounded-sm overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <h4 className="text-xl font-medium font-sans mb-2">{project.title}</h4>
          <p className="text-sm line-clamp-2  max-w-2xl mx-auto">{project.description}</p>
          <div className="flex gap-4 my-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="w-5 aspect-square">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <Link href={project.url} className="flex items-center gap-2 hover:underline mt-2 text-sm">
          <span className="-mt-0.5">More shots from this project</span>{" "}
          <ArrowSvg w="15" h="12" className="-rotate-45" />
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </div>
  );
};

export default CardProject;
