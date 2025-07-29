"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface VercelButtonProps {
  children: ReactNode
  variant?: "default" | "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function VercelButton({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
  disabled = false,
}: VercelButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "vercel-button-primary"
      case "secondary":
        return "bg-[rgb(var(--vercel-accents-1))] border-[rgb(var(--vercel-border))] text-[rgb(var(--vercel-fg))] hover:bg-[rgb(var(--vercel-accents-2))]"
      case "ghost":
        return "bg-transparent border-transparent text-[rgb(var(--vercel-accents-5))] hover:bg-[rgb(var(--vercel-accents-1))] hover:text-[rgb(var(--vercel-fg))]"
      default:
        return "vercel-button"
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-sm"
      case "lg":
        return "px-6 py-3 text-base"
      default:
        return "px-4 py-2 text-sm"
    }
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all ${getVariantStyles()} ${getSizeStyles()} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </motion.button>
  )
}
