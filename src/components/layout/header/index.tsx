"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { AnimatedLogo } from "../logo"
import { NavigationMenu } from "./navigationMenu"
import { HeaderActions } from "./headerAction"
import { MobileMenu } from "./mobileMenu"

// Custom hook for scroll behavior
function useScrollEffect() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isScrolled
}

// Custom hook for mobile menu
function useMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}

// Header animation variants
const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

export function Header() {
  const isScrolled = useScrollEffect()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()

  const headerClasses = cn(
    " z-50 w-full transition-all duration-300",
    isScrolled
      ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border"
      : "bg-transparent"
  )

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={headerClasses}
    >
      <div className="container mx-auto px-4 py-5 ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <NavigationMenu />

          {/* Header Actions */}
          <HeaderActions
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuToggle={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      </div>
    </motion.header>
  )
}