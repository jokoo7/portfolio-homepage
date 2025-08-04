'use client'

import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitch } from './theme-switch'
import MotionSection from './motion-section'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
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
            className="mb-0.5 block font-medium text-black dark:text-white"
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
            <Link
              key={index}
              href={link.href}
              className="group relative inline-flex shrink-0 items-center gap-[1px] text-zinc-900 underline-offset-2 transition-colors hover:underline dark:text-white"
            >
              {link.label}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </MotionSection>
    </header>
  )
}
