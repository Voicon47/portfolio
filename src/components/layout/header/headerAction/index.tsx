"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, Download } from "lucide-react"
import { personalInfo } from "@/data/portfolio-data"

interface HeaderActionsProps {
  isMobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

export function HeaderActions({ isMobileMenuOpen, onMobileMenuToggle }: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-primary/10 transition-all duration-300"
          asChild
        >
          <a href={personalInfo.resume} download>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Download className="h-4 w-4" />
            </motion.div>
            Resume
          </a>
        </Button>
      </motion.div>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={onMobileMenuToggle}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}