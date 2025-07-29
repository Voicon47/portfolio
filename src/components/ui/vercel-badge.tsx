"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface VercelBadgeProps {
  children: ReactNode
  variant?: "default" | "success" | "warning" | "error" | "primary" | "secondary"
  className?: string
}

export function VercelBadge({ children, variant = "default", className = "" }: VercelBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-success/10 border-success/20 text-success"
      case "warning":
        return "bg-warning/10 border-warning/20 text-warning"
      case "error":
        return "bg-error/10 border-error/20 text-error"
      case "primary":
        return "bg-primary/10 border-primary/20 text-primary"
      case "secondary":
        return "bg-secondary/10 border-secondary/20 text-secondary-foreground"
      default:
        return "bg-secondary border border-border text-secondary-foreground"
    }
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-all",
        getVariantStyles(),
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
