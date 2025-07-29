"use client"

import { cn } from "@/lib/utils"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface VercelCardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
  hoverable?: boolean
  onClick?: () => void
}

export function VercelCard({
  children,
  className = "",
  interactive = false,
  hoverable = true,
  onClick,
}: VercelCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const hoverVariants = hoverable
    ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }
    : {}

  return (
    <motion.div
      variants={cardVariants}
      whileHover={hoverVariants}
      whileTap={interactive ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={cn(
        "bg-card border border-border rounded-xl shadow-md transition-all duration-200",
        interactive && "cursor-pointer hover:border-primary hover:shadow-lg",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export function VercelCardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-4", className)}>{children}</div>
}

export function VercelCardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("px-6 pb-6", className)}>{children}</div>
}

export function VercelCardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-lg font-semibold text-foreground mb-2", className)}>{children}</h3>
}

export function VercelCardDescription({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm text-muted-foreground leading-relaxed", className)}>{children}</p>
}
