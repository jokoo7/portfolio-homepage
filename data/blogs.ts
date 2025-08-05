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
    image: '/blogs/01.png',
    images: ['/blogs/blog-01.png'],
  },
  {
    id: 'blog-2',
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    image: '/blogs/02.jpg',
    images: ['/blogs/blog-02.jpg'],
  },
  {
    id: 'blog-3',
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    image: '/blogs/03.jpg',
    images: ['/blogs/blog-01.png'],
  },
  {
    id: 'blog-4',
    slug: 'example-mdx-metadata',
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    image: '/blogs/04.jpg',
    images: ['/blogs/blog-02.jpg'],
  },
]

export { type Blogs, BLOG_POSTS }
