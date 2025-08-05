import React from 'react'

export default function Paragraph({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="font-segoe text-text-primary" {...props}>
      {children}
    </p>
  )
}
