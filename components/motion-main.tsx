'use client'

import { motion } from 'motion/react'
import React from 'react'

export default function MotionMain(
  props: React.ComponentProps<typeof motion.main>,
) {
  return <motion.main {...props} />
}
