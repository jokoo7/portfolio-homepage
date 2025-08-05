'use client'

import React from 'react'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from './ui/morphing-dialog'
import Image from 'next/image'
import { XIcon } from 'lucide-react'
import Paragraph from './ui/paragraph'
import Link from 'next/link'

function Cover({ src, alt }: { src: string; alt: string }) {
  if (!src) return null // Jangan render Image jika src kosong
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <Image
          alt={alt}
          src={src}
          width={1000}
          height={1000}
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Card(data: any) {
  return (
    <div className="space-y-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <Cover src={data.data.image} alt={data.data.id} />
      </div>
      <div className="px-1">
        <Link
          className="group relative inline-block font-sans font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          href={data.data.link ?? data.data.slug}
          target="_blank"
        >
          {data.data.name ?? data.data.title}
        </Link>
        <Paragraph>{data.data.description}</Paragraph>
      </div>
    </div>
  )
}
