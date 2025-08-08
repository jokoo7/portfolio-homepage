import React from 'react'

export default function Paragraph({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="text-t-secondary" {...props}>
      {children}
    </p>
  )
}
