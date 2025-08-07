import MotionMain from '@/components/motion-main'
import MotionSection from '@/components/motion-section'
import { Button, buttonVariants } from '@/components/button'
import Heading from '@/components/heading'
import { Magnetic } from '@/components/magnetic'
import Paragraph from '@/components/paragraph'
import { BLOG_POSTS } from '@/data/blogs'
import { EMAIL, SOCIAL_LINKS } from '@/data/contacts'
import { PROJECTS } from '@/data/projects'
import { SKILLS } from '@/data/skills'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { TextEffect } from '@/components/text-effect'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card'
import CoverCard from '@/components/cover-card'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Home() {
  return (
    <MotionMain
      className="mb-20 space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-24 shrink-0 overflow-hidden rounded-full p-0.5 ring-1 ring-zinc-300">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={200}
              height={200}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <TextEffect
              as="p"
              preset="blur"
              per="char"
              className="font-source-sans-3 block text-4xl font-bold sm:text-5xl"
              delay={0.3}
            >
              Joko Santoso
            </TextEffect>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-zinc-700 sm:text-lg dark:text-zinc-300"
              delay={0.5}
            >
              Digital Craftsman ( Developer )
            </TextEffect>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>About me</Heading>
          <Paragraph>
            I specialize in building modern, performant, and user-centric web
            applications using JavaScript, TypeScript, and powerful frontend
            frameworks.
          </Paragraph>
          <Paragraph>
            With several years of experience in web development, I thrive on
            solving complex problems and turning ideas into intuitive digital
            experiences.
          </Paragraph>
          <Paragraph>
            I believe that great software is for everyone. I strive to write
            accessible, inclusive code that empowers all users, regardless of
            ability.
          </Paragraph>
          <Paragraph>
            I'm currently based in Riau, Indonesia. Open to freelance work,
            collaborative projects, and meaningful tech opportunities.
          </Paragraph>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Bio</Heading>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-4">
              <Paragraph className="font-medium text-zinc-700 dark:text-zinc-300">
                2003
              </Paragraph>
              <Paragraph>Born in Riau, Indonesia.</Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <Paragraph className="font-medium text-zinc-700 dark:text-zinc-300">
                2024 to present
              </Paragraph>
              <Paragraph>Working as a freelancer</Paragraph>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Skill and Tools</Heading>
          <div className="flex flex-wrap gap-4">
            {SKILLS.map((skill) => (
              <Magnetic
                key={skill.label}
                springOptions={{ bounce: 0 }}
                intensity={0.5}
              >
                <Button>
                  {skill.label}
                  {skill.icon}
                </Button>
              </Magnetic>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Selected Projects</Heading>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CoverCard src={project.image} alt={project.id} />
                </CardHeader>
                <CardContent>
                  <CardTitle path={project.link}>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex w-full justify-center">
            <Button>
              See more <ArrowRight />
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Articles</Heading>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BLOG_POSTS.map((blog) => (
              <Card key={blog.id}>
                <CardHeader>
                  <CoverCard src={blog.image} alt={blog.id} />
                </CardHeader>
                <CardContent>
                  <CardTitle path={blog.slug}>{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex w-full justify-center">
            <Button>
              See more <ArrowRight />
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>I 💕</Heading>
          <Paragraph>
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine
            Learning
          </Paragraph>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Connect</Heading>

          <Paragraph className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="underline dark:text-zinc-300"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </Paragraph>
          <div className="flex flex-wrap items-center justify-start gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.link as string}
                className={buttonVariants()}
              >
                {link.label}
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </MotionMain>
  )
}
