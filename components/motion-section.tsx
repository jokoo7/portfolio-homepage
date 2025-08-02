'use client'

import { motion } from 'motion/react'
import React from 'react'

export default function MotionSection(
  props: React.ComponentProps<typeof motion.section>,
) {
  return <motion.section {...props} />
}
