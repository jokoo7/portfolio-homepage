import MotionMain from '@/components/motion-main'
import MotionSection from '@/components/motion-section'
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

export const PROJECTS = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    img: '/projects/project_01.png',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    img: '/projects/project_02.jpg',
    id: 'project2',
  },
]

export const BLOG_POSTS = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    img: '/blogs/blog-01.png',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    img: '/blogs/blog-02.jpg',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    img: '/blogs/blog-01.png',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    img: '/blogs/blog-02.jpg',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
  {
    label: 'Tiktok',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'

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
          <h1 className="font-medium text-black dark:text-white">About me</h1>
          <p>
            I specialize in building modern, performant, and user-centric web
            applications using JavaScript, TypeScript, and powerful frontend
            frameworks.
          </p>
          <p>
            With several years of experience in web development, I thrive on
            solving complex problems and turning ideas into intuitive digital
            experiences.
          </p>
          <p>
            I believe that great software is for everyone. I strive to write
            accessible, inclusive code that empowers all users, regardless of
            ability.
          </p>
          <p>
            I'm currently based in Riau, Indonesia. Open to freelance work,
            collaborative projects, and meaningful tech opportunities.
          </p>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">Bio</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-4">
              <span className="block font-medium text-black dark:text-white">
                2003
              </span>
              <p>Born in Riau, Indonesia.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="block font-medium text-black dark:text-white">
                2024 to present
              </span>
              <p>Working as a freelancer</p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">Projects</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <Image
                    src={project.img}
                    alt={project.id}
                    width={200}
                    height={100}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">Blogs</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BLOG_POSTS.map((blog) => (
              <div key={blog.uid} className="space-y-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <Image
                    src={blog.img}
                    alt={blog.uid}
                    width={200}
                    height={100}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 underline-offset-2 hover:underline dark:text-zinc-50"
                    href={blog.link}
                    target="_blank"
                  >
                    {blog.title}
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">I 💕</h1>
          <p>
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine
            Learning
          </p>
        </div>
      </MotionSection>

      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">Connect</h1>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="underline dark:text-zinc-300"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.link as string}
                className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
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
