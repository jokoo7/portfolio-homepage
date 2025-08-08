import Link from 'next/link'
import * as React from 'react'
import Paragraph from './paragraph'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>
}

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
      {children}
    </div>
  )
}

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-1">{children}</div>
}

const CardTitle = ({
  children,
  path,
}: {
  children: React.ReactNode
  path: string
}) => {
  return (
    <Link
      className="group relative inline-block text-lg text-zinc-900 hover:underline dark:text-zinc-100"
      href={path}
      target="_blank"
    >
      {children}
    </Link>
  )
}

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <Paragraph>{children}</Paragraph>
}

export { Card, CardHeader, CardContent, CardTitle, CardDescription }
