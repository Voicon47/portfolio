"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import type { PersonalInfo } from "@/types"
import CardPortfolio from "../others/cardPortfolio"


interface HeroSectionProps {
  personalInfo: PersonalInfo
}

function Introduction({ personalInfo }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-[70%]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" relative z-0 mx-auto px-4 py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-[hsl(var(--gradient-text-start))] to-[hsl(var(--gradient-text-end))] bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
                {personalInfo.title}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          {/* <motion.div variants={itemVariants} className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                width={400}
                height={400}
                className="relative rounded-full border-4 border-border shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div> */}
        </div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Introduction
