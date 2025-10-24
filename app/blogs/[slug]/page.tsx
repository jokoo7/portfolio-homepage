import { sharedMDXComponents } from '@/components/mdx/shared-components';
import { Wrapper, WrapperContent } from '@/components/wrapper';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return (
      <Wrapper>
        <WrapperContent>
          <article>
            <header className="mb-8">
              <h1 className="mb-2 text-4xl font-bold">{post.meta.title}</h1>
              <p className="text-gray-600 dark:text-zinc-400">
                {post.meta.date} • {post.meta.author}
              </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                components={sharedMDXComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [],
                  },
                }}
              />
            </div>
          </article>
        </WrapperContent>
      </Wrapper>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}
