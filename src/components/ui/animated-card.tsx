"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  whileHover?: object
}

export function AnimatedCard({ children, className = "", whileHover }: AnimatedCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const defaultHover = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  }

  return (
    <motion.div variants={cardVariants} whileHover={whileHover || defaultHover} className="h-full">
      <Card className={`h-full transition-shadow duration-300 hover:shadow-xl ${className}`}>{children}</Card>
    </motion.div>
  )
}
