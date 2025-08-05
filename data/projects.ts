type Project = {
  id: string
  slug: string
  name: string
  description: string
  link: string
  image: string
  images: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'project1',
    slug: 'motion-primitives-pro',
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image: '/projects/project_01.png',
    images: ['/projects/project_01.png'],
  },
  {
    id: 'project2',
    slug: 'motion-primitives',
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/projects/project_02.jpg',
    images: ['/projects/project_02.jpg'],
  },
]

export { type Project, PROJECTS }
