import React from 'react'

export default function Heading({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="font-playfair text-2xl font-bold text-black dark:text-white"
      {...props}
    >
      {children}
    </h1>
  )
}
