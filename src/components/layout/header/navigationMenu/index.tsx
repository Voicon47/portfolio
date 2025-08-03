"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { navigationItems } from "@/data/portfolio-data"
import { smoothScrollTo } from "@/lib/smooth-scroll"

interface NavigationMenuProps {
  className?: string
  onItemClick?: () => void
  isMobile?: boolean
}

export function NavigationMenu(props: NavigationMenuProps) {
  const { className, onItemClick, isMobile } = props
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onItemClick?.()

    if (href.startsWith("#")) {
      const element = document.querySelector(href) as HTMLElement
      if (element) {
        smoothScrollTo(element, 1000)
      }
    }
  }

  if (isMobile) {
    return (
      <motion.nav
        className={`flex flex-col space-y-4 p-4 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors block py-2"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    )
  }

  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {navigationItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <Link
            href={item.href}
            className="text-xl font-semibold leading-none  text-foreground transition-colors relative group cursor-can-hover"
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      ))}
    </nav>
  )
}