// /componentes/AnimatedSection.jsx
"use client"

import { motion } from "framer-motion"

export default function AnimatedSection({
  children,
  delay = 0,
  y = 40,
  ...rest
}) {
  return (
    <motion.section
      {...rest}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}
