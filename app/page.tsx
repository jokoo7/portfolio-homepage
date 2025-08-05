import Card from '@/components/card'
import MotionMain from '@/components/motion-main'
import MotionSection from '@/components/motion-section'
import { Button, buttonVariants } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import Paragraph from '@/components/ui/paragraph'
import { BLOG_POSTS } from '@/data/blogs'
import { EMAIL, SOCIAL_LINKS } from '@/data/contacts'
import { PROJECTS } from '@/data/projects'
import { SKILLS } from '@/data/skills'
import Image from 'next/image'
import Link from 'next/link'

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
              <Paragraph className="font-sans font-medium text-zinc-700 dark:text-zinc-300">
                2003
              </Paragraph>
              <Paragraph>Born in Riau, Indonesia.</Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <Paragraph className="font-sans font-medium text-zinc-700 dark:text-zinc-300">
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
              <Button key={skill.label}>
                {skill.label}
                {skill.icon}
              </Button>
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
              <Card key={project.id} data={project} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <Heading>Blogs</Heading>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BLOG_POSTS.map((blog) => (
              <Card key={blog.id} data={blog} />
            ))}
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
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </MotionMain>
  )
}
