'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="aspect-square w-14 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
          <Image
            src="/me.jpg"
            alt="profile"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white"
          >
            Joko Santoso
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Web Developer
          </TextEffect>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <ThemeSwitch />
      </div>
    </header>
  )
}
