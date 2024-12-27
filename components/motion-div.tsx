"uce client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type IProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
} & HTMLMotionProps<"div">;

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const MotionDiv = ({ children, delay = 0, className, ...props }: IProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut", delay }}
      style={{ position: "relative" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
