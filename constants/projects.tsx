import { JSX } from "react";
// import { JavaScript, Laravel, Nextjs, Reactjs, TypeScript } from "./stacks";

export type Project = {
  id: string;
  title: string;
  slug: string;
  github_url: string;
  description: string;
  techStack: JSX.Element[];
  url: string;
  image: string;
};

// export const getProjects: Project[] = [
//   {
//     title: "Nextnime App",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quia, quidem officiis ratione praesentium.",
//     image:
//       "https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100",
//     link: "https://www.example.com",
//     techStack: [Reactjs, Nextjs, Laravel, TypeScript, JavaScript],
//   },
//   {
//     title: "Nextnime App",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quia, quidem officiis ratione praesentium.",
//     image:
//       "https://www.codebayu.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodebayu%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcodebayu%2Fprojects%2Fnext-app-router-starter-kit&w=828&q=100",
//     link: "https://www.example.com",
//     techStack: [Reactjs, Nextjs, Laravel, TypeScript, JavaScript],
//   },
// ];
