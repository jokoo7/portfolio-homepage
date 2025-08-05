type Blogs = {
  id: string
  slug: string
  title: string
  description: string
  image: string
  images: string[]
}

const BLOG_POSTS = [
  {
    id: 'blog-1',
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    date: '2025-07-08T14:35:02Z',
    image: '/blogs/01.png',
    images: ['/blogs/blog-01.png'],
  },
  {
    id: 'blog-2',
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    date: '2025-07-19T05:18:47Z',
    image: '/blogs/02.jpg',
    images: ['/blogs/blog-02.jpg'],
  },
  {
    id: 'blog-3',
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    date: '2025-07-27T21:54:30Z',
    image: '/blogs/03.jpg',
    images: ['/blogs/blog-01.png'],
  },
  {
    id: 'blog-4',
    slug: 'example-mdx-metadata',
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    date: '2025-07-03T10:07:55Z',
    image: '/blogs/04.jpg',
    images: ['/blogs/blog-02.jpg'],
  },
]

export { type Blogs, BLOG_POSTS }
