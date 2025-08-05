'use client'

import { TextEffect } from '@/components/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'
import MotionSection from './motion-section'
import { BriefcaseBusiness, NotebookPen } from 'lucide-react'
import { buttonVariants } from './button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/projects', label: 'Projects', icon: <BriefcaseBusiness /> },
  { href: '/blogs', label: 'Blogs', icon: <NotebookPen /> },
]

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function Header() {
  return (
    <header className="mb-16 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="group block aspect-square w-16 shrink-0 cursor-pointer overflow-hidden rounded-full"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div>
          <Link
            href="/"
            className="font-playfair block text-2xl font-bold text-black dark:text-white"
          >
            Joko Santoso
          </Link>
          <TextEffect as="p" preset="fade" per="char" delay={0.5}>
            Web Developer
          </TextEffect>
        </div>
      </div>
      <MotionSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-4">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={cn(buttonVariants())}>
              {link.icon}
              {link.label}
            </Link>
          ))}
          {/* <ThemeSwitch /> */}
        </div>
      </MotionSection>
    </header>
  )
}
