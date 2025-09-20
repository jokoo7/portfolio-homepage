import { buttonVariants } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Heading } from '@/components/heading';
import MainHero from '@/components/main-hero';
import { Paragraph, paragraphVariants } from '@/components/paragraph';
import { Wrapper, WrapperContent } from '@/components/wrapper';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaTiktok } from 'react-icons/fa6';
import { IoArrowForward } from 'react-icons/io5';

export const SOCIALLINKS = [
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
        <WrapperContent className="flex flex-col gap-8 md:gap-10">
          <div className="aspect-square w-[100px] overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover grayscale-100"
            />
          </div>
          <Heading
            as="h2"
            className="text-h2-s md:text-h1-m lg:text-h1-l text-[#201d15] md:font-normal md:tracking-[-0.5px]"
          >
            I&apos;m Joko Santoso, <br className="md:hidden" /> a frontend
            developer with a basic backend foundation based in Riau, Indonesia.
          </Heading>
          <Paragraph>
            Combining frontend expertise with a basic backend foundation, I
            craft sleek, high-performance, and user-friendly web applications,
            ensuring seamless functionality and visual appeal across platforms.
          </Paragraph>
        </WrapperContent>
        <WrapperContent className="mt-16 flex w-full items-center gap-6 md:mt-10">
          {SOCIALLINKS.map((link, i) => (
            <Link
              href={link.path}
              key={i}
              className={buttonVariants({ size: 'icon' })}
            >
              {link.icon}
            </Link>
          ))}
        </WrapperContent>
      </MainHero>

      <Wrapper className="space-y-24">
        <WrapperContent className="space-y-10">
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="h2-responsive">
              Selected projects
            </Heading>
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
        </WrapperContent>

        <WrapperContent className="space-y-10">
          <div className="flex flex-col gap-4">
            <Heading as="h2" className="h2-responsive">
              My Articles
            </Heading>
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
        </WrapperContent>
      </Wrapper>
    </>
  );
}
