import { JSX } from "react";

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
