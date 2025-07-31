"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { NavigationMenu } from "../navigationMenu"
import { navigationItems, personalInfo } from "@/data/portfolio-data"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-border bg-background"
        >
          <NavigationMenu
            isMobile={true}
            onItemClick={onClose}
          />

          {/* Mobile Resume Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navigationItems.length * 0.1 }}
            className="px-4 pb-4"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-fit items-center gap-2 bg-transparent"
              asChild
            >
              <a href={personalInfo.resume} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}