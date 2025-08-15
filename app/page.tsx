import { buttonVariants } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import MainHero from '@/components/main-hero';
import { Paragraph } from '@/components/paragraph';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaTiktok } from 'react-icons/fa6';

const SOCIALLINKS = [
  { path: '', label: 'Instagram', icon: <FaInstagram /> },
  { path: '', label: 'Tiktok', icon: <FaTiktok /> },
  { path: '', label: 'Github', icon: <FaGithub /> },
  { path: '', label: 'Linkedln', icon: <FaLinkedin /> },
];

const PROJECTS = [
  {
    id: 'project1',
    slug: 'nextnime',
    name: 'Redesign project: fitness tracker App Revamp',
    description:
      'Elevating the user experience of a renowned fitness tracker app through a strategic.',
    link: 'https://pro.motion-primitives.com/',
    image: '/project_01.png',
    images: ['/project_01.png'],
  },
  {
    id: 'project2',
    slug: 'motion-primitives',
    name: 'Internship project: social dining app design',
    description:
      'Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.',
    link: 'https://motion-primitives.com/',
    image: '/project_02.jpg',
    images: ['/project_02.jpg'],
  },
];

export default function Home() {
  return (
    <>
      <MainHero>
        <div className="wrapper-content flex flex-col gap-8 md:gap-10">
          <div className="aspect-square w-[100px] overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover grayscale-100"
            />
          </div>
          <h1 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] md:font-normal md:tracking-[-0.5px] md:text-[#201d15] lg:text-[55px]">
            I&apos;m Joko Santoso, <br className="md:hidden" /> a frontend
            developer web apps with a backend foundation based in Riau,
            Indonesia.
          </h1>
          <Paragraph>
            Combining frontend expertise with a solid backend foundation, I
            craft sleek, high-performance, and user-friendly web applications,
            ensuring seamless functionality and visual appeal across platforms.
          </Paragraph>
        </div>
        <div className="wrapper-content mt-16 flex w-full items-center gap-6 md:mt-10">
          {SOCIALLINKS.map((link, i) => (
            <Link
              href={link.path}
              key={i}
              className={buttonVariants({ size: 'icon' })}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </MainHero>
      <div className="wrapper">
        <div className="wrapper-content space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
              Selected projects
            </h2>
            <Paragraph>
              Explore my selected projects, highlighting my passion for crafting
              sleek, functional, and user-focused web applications.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.id}
                    width={2000}
                    height={2000}
                    className="h-full w-full object-fill object-center transition-all duration-500 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle path={project.link}>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
