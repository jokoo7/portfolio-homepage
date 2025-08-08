import React from 'react'

export default function Heading({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="text-t-primary text-2xl font-bold" {...props}>
      {children}
    </h1>
  )
}
