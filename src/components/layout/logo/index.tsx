"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { personalInfo } from "@/data/portfolio-data"

// Animation variants
const logoContainerVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 }
}

const logoImageVariants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  }
}

const logoTextVariants = {
  initial: {
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1
  }
}

export function AnimatedLogo() {
  return (
    <motion.div
      variants={logoContainerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2,
        staggerChildren: 0.3,
        delayChildren: 0.3
      }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2"
    >
      <Link
        href="/"
        className="flex items-center space-x-2"
      >
        {/* Animated Logo Image */}
        <motion.img
          variants={logoImageVariants}
          transition={{
            duration: 1.8,
            ease: "easeOut",
            rotate: {
              duration: 2.0,
              ease: "easeInOut"
            }
          }}
          src={personalInfo.logo}
          alt="Logo"
          className="h-20 w-20"
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: {
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
        />

        {/* Animated Logo Text */}
        <motion.span
          variants={logoTextVariants}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5
          }}
          className="text-xl font-semibold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text leading-tight hover:underline hover:underline-offset-4 decoration-[3px]"
        >
          {personalInfo.name.split(" ")[0]}
          {/* <br />
          {personalInfo.name.split(" ")[1]} */}
        </motion.span>
      </Link>
    </motion.div>
  )
}