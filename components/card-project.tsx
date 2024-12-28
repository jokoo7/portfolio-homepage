import Link from "next/link";
import React from "react";
import ArrowSvg from "./svg/arrow";
import Image from "next/image";

type IProps = {
  title: string;
  description: string;
  tech: string;
};

const CardProject = ({ title, description, tech }: IProps) => {
  return (
    <div className="w-full font-inter py-10 border-b flex flex-col md:flex-row gap-4 md:gap-10">
      <div className="order-2 sm:order-1 flex flex-col justify-between w-full md:w-[40%]">
        <div>
          <h4 className="text-xl font-medium mb-3 font-sans">01 / {title}</h4>
          <p className="mb-4 line-clamp-3 text-[15px]">{description}</p>
          <span className="block text-sm text-main-gray">{tech}</span>
        </div>
        <Link href="/projects" className="flex items-center gap-2 hover:underline mt-8 sm:mt-0">
          <span className="-mt-0.5">More shots from this project</span>{" "}
          <ArrowSvg w="15" h="12" className="-rotate-45" />
        </Link>
      </div>
      <div className="order-1 sm:order-2 w-full md:w-[60%]">
        <div className="w-full aspect-video ">
          <Image
            src="https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100"
            alt="image"
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
