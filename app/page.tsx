'use client'

import { motion } from 'motion/react'

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

export default function Home() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-4">
          <h1 className="font-medium text-black dark:text-white">About me</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            I specialize in building modern, performant, and user-centric web
            applications using JavaScript, TypeScript, and powerful frontend
            frameworks.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            With several years of experience in web development, I thrive on
            solving complex problems and turning ideas into intuitive digital
            experiences.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            I believe that great software is for everyone. I strive to write
            accessible, inclusive code that empowers all users, regardless of
            ability.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            I'm currently based in Riau, Indonesia. Open to freelance work,
            collaborative projects, and meaningful tech opportunities.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}
