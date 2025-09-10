import { JSX } from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

type StackProps = {
  [key: string]: JSX.Element;
};

const iconSize = '100%';

export const PHP = <SiPhp size={iconSize} fill="#444444" />;
export const JavaScript = <SiJavascript size={iconSize} fill="#444444" />;
export const TypeScript = <SiTypescript size={iconSize} fill="#444444" />;
export const Nextjs = <SiNextdotjs size={iconSize} fill="#444444" />;
export const Reactjs = <SiReact size={iconSize} fill="#444444" />;
export const Laravel = <SiLaravel size={iconSize} fill="#444444" />;
export const TailwindCSS = <SiTailwindcss size={iconSize} fill="#444444" />;
export const Bootstrap = <BsFillBootstrapFill size={iconSize} fill="#444444" />;
export const Vite = <SiVite size={iconSize} fill="#444444" />;
export const PostgreSql = <BiLogoPostgresql size={iconSize} fill="#444444" />;
export const SASS = <SiSass size={iconSize} fill="#444444" />;
export const Firebase = <SiFirebase size={iconSize} fill="#444444" />;
export const FramerMotion = <SiFramer size={iconSize} fill="#444444" />;
export const Jest = <SiJest size={iconSize} fill="#444444" />;
export const Expressjs = <SiExpress size={iconSize} fill="#444444" />;
export const Redux = <SiRedux size={iconSize} fill="#444444" />;
export const ReactQuery = <SiReactquery size={iconSize} fill="#444444" />;
export const HTML = <SiHtml5 size={iconSize} fill="#444444" />;
export const CSS = <SiCss3 size={iconSize} fill="#444444" />;
export const Prisma = <SiPrisma size={iconSize} fill="#444444" />;
export const Nodejs = <SiNodedotjs size={iconSize} fill="#444444" />;
export const ReactRouter = <SiReactrouter size={iconSize} fill="#444444" />;
export const ReactHookForm = <SiReacthookform size={iconSize} fill="#444444" />;
export const Json = <SiJson size={iconSize} fill="#444444" />;

export const VsCode = <VscVscode size={iconSize} fill="#444444" />;
export const Github = <SiGithub size={iconSize} fill="#444444" />;
export const Postman = <SiPostman size={iconSize} fill="#444444" />;

export const SKILS: StackProps = {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  PHP,
  'Next.js': Nextjs,
  'React.js': Reactjs,
  Laravel,
  TailwindCSS,
  // Bootstrap,
  // Vite,
  // PostgreSql,
  // SASS,
  // Firebase,
  // "Framer Motion": FramerMotion,
  // Jest,
  Expressjs,
  // Redux,
  // "React Query": ReactQuery,
  // Prisma,
  'Node.js': Nodejs,
  // "React Router": ReactRouter,
  // "React Hook Form": ReactHookForm,
  // Json,
};

export const SKILS_PROJECTS = [
  PHP, // 0
  JavaScript, // 1
  TypeScript, // 2
  Nextjs, // 3
  Reactjs, // 4
  Laravel, // 5
  TailwindCSS, // 6
  Bootstrap, // 6
  Vite, // 7
  PostgreSql, // 8
  SASS, // 9
  Firebase, // 10
  FramerMotion, // 11
  Jest, // 12
  Expressjs, // 13
  Redux, // 14
  ReactQuery, // 15
  HTML, // 16
  CSS, // 17
  Prisma, // 18
  Nodejs, // 19
  ReactRouter, // 20
  ReactHookForm, // 21
  Json, // 22
];

export const SOFTWARE: StackProps = {
  Github,
  VsCode,
  Postman,
};
