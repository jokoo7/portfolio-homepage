import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { highlight } from 'sugar-high';
import { headingVariants } from '../heading';
import { paragraphVariants } from '../paragraph';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

export const sharedMDXComponents = {
  h1: (props: HeadingProps) => (
    <h1
      className={cn(headingVariants({ as: 'h1' }), 'h1-responsive mt-8 mb-4')}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className={cn(headingVariants({ as: 'h2' }), 'h2-responsive mt-6 mb-3')}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className={cn(headingVariants({ as: 'h3' }), 'h3-responsive mt-4 mb-2')}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className={cn(headingVariants({ as: 'h4' }), 'h4-responsive mt-3 mb-2')}
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className={cn(
        paragraphVariants({ variant: 'default' }),
        'mb-4 leading-snug'
      )}
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="mb-4 list-disc space-y-1 pl-5" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="rounded px-1.5 py-0.5 font-mono text-sm"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 p-4 text-gray-100 dark:bg-black"
      {...props}
    >
      {children}
    </pre>
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="min-w-full border-collapse border border-gray-300 dark:border-zinc-700"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-gray-100 dark:bg-zinc-800" {...props} />
  ),
  tbody: (props: ComponentPropsWithoutRef<'tbody'>) => (
    <tbody
      className="divide-y divide-gray-200 dark:divide-zinc-700"
      {...props}
    />
  ),
  tr: (props: ComponentPropsWithoutRef<'tr'>) => (
    <tr
      className="transition-colors hover:bg-gray-50 dark:hover:bg-zinc-800/50"
      {...props}
    />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 dark:border-zinc-700 dark:text-white"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td
      className={cn(
        paragraphVariants({ variant: 'default' }),
        'border border-gray-300 px-4 py-2'
      )}
      {...props}
    />
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="my-4 ml-[0.075em] border-l-4 border-gray-300 pl-4 text-gray-700 italic dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-gray-300 dark:border-zinc-700" {...props} />
  ),
};

// Type untuk export
export type SharedMDXComponents = typeof sharedMDXComponents;
