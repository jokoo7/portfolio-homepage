import { buttonVariants } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import MainHero from '@/components/main-hero';
import { Paragraph, paragraphVariants } from '@/components/paragraph';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { IoArrowForward } from 'react-icons/io5';

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
    image: '/project_1.avif',
    images: ['/project_1.avif'],
  },
  {
    id: 'project2',
    slug: 'motion-primitives',
    name: 'Internship project: social dining app design',
    description:
      'Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.',
    link: 'https://motion-primitives.com/',
    image: '/project_2.avif',
    images: ['/project_2.avif'],
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
            developer with a basic backend foundation based in Riau, Indonesia.
          </h1>
          <Paragraph>
            Combining frontend expertise with a basic backend foundation, I
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

      <div className="wrapper space-y-24">
        <div className="wrapper-content space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
              Selected projects
            </h2>
            <Paragraph className="max-w-[800px]">
              Explore my selected projects, highlighting my passion for crafting
              sleek, functional, and user-focused web applications.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.id} path={project.link}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.id}
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex items-center gap-1 text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <p
                      className={cn(
                        paragraphVariants({
                          variant: 'captionSemibold',
                        }),
                        'leading-0 whitespace-nowrap transition-all duration-500 md:opacity-0 md:group-hover:opacity-100'
                      )}
                    >
                      She the project
                    </p>
                    <IoArrowForward className="transition-all duration-500 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="wrapper-content space-y-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-black md:text-[45px] lg:text-[50px]">
              My Articles
            </h2>
            <Paragraph className="max-w-[800px]">
              Discover my collection of articles, where I share insights,
              experiences, and knowledge about web development, design, and
              technology.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.id} path={project.link}>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.id}
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex items-center gap-1 text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <p
                      className={cn(
                        paragraphVariants({
                          variant: 'captionSemibold',
                        }),
                        'leading-0 whitespace-nowrap transition-all duration-500 md:opacity-0 md:group-hover:opacity-100'
                      )}
                    >
                      She the project
                    </p>
                    <IoArrowForward className="transition-all duration-500 group-hover:translate-x-1 md:opacity-0 md:group-hover:opacity-100" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
