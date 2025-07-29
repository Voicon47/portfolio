"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, Code, Download } from "lucide-react"
import { navigationItems, personalInfo } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"
import { smoothScrollTo } from "@/lib/smooth-scroll" // Import the new utility

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backgroundColor: "rgba(var(--background), 0.8)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    },
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">{personalInfo.name.split(" ")[0]}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault() // Prevent default anchor jump
                    if (item.href.startsWith("#")) {
                      const element = document.querySelector(item.href) as HTMLElement
                      if (element) {
                        smoothScrollTo(element, 1000) // Use custom smooth scroll with 1000ms duration
                      }
                    }
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 bg-transparent" asChild>
                <a href={personalInfo.resume} download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background"
            >
              <nav className="flex flex-col space-y-4 p-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault() // Prevent default anchor jump
                      setIsMobileMenuOpen(false)
                      if (item.href.startsWith("#")) {
                        const element = document.querySelector(item.href) as HTMLElement
                        if (element) {
                          smoothScrollTo(element, 1000) // Use custom smooth scroll with 1000ms duration
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="outline" size="sm" className="w-fit items-center gap-2 bg-transparent" asChild>
                  <a href={personalInfo.resume} download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
