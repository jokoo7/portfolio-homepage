import React from 'react'
import CoverCard from './cover-card'
import Link from 'next/link'
import Paragraph from './paragraph'
import { formatDate } from '@/lib/utils'

export default function CardArticle(data: any) {
  return (
    <div className="space-y-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <CoverCard src={data.data.image} alt={data.data.id} />
      </div>
      <div className="px-1">
        <Link
          className="group font-segoe relative mb-1 inline-block font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          href={data.data.slug}
          target="_blank"
        >
          {data.data.name ?? data.data.title}
        </Link>
        <Paragraph className="text-sm">
          By Admin — {formatDate(data.data.date)}
        </Paragraph>
      </div>
    </div>
  )
}
