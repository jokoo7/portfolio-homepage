/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import { ComponentPropsWithoutRef, useState } from 'react';
import { highlight } from 'sugar-high';

type Props = ComponentPropsWithoutRef<'pre'>;

export const CopyCode = (props: Props) => {
  const child = props.children as any;

  // Ambil string kode dari child <code> atau langsung string
  const codeString =
    typeof child === 'string' ? child : child?.props?.children || '';

  // Highlight syntax pakai sugar-high
  const codeHTML = highlight(codeString);
  const [copied, setCopied] = useState(false);

  // Fungsi copy ke clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="group relative">
      <pre>
        <code
          className="rounded px-1.5 py-0.5 font-mono text-sm"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
        />
      </pre>

      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'absolute top-2 right-2 z-10 cursor-pointer rounded-md border border-zinc-700 bg-zinc-800 p-2',
          'opacity-100 transition-all duration-200',
          'hover:bg-zinc-700 focus:opacity-100 focus:ring-2 focus:ring-zinc-500 focus:outline-none active:bg-zinc-600',
          copied && 'opacity-100'
        )}
        aria-label={copied ? 'Code copied' : 'Copy code'}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-zinc-400" />
        )}
      </button>
    </div>
  );
};
