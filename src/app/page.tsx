"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/sections/hero-section" // Changed to default import
import SkillsSection from "@/components/sections/skills-section" // Changed to default import
import ProjectsSection from "@/components/sections/projects-section" // Changed to default import
import ContactSection from "@/components/sections/contact-section" // Changed to default import
import { personalInfo, skillCategories, projects } from "@/data/portfolio-data"
import Introduction from "@/components/sections/introduction"

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[rgb(var(--vercel-bg))]"
    >
      <Introduction personalInfo={personalInfo} />
      {/* <HeroSection personalInfo={personalInfo} /> */}
      <ProjectsSection projects={projects} />
      {/* <SkillsSection skillCategories={skillCategories} />
      <ContactSection personalInfo={personalInfo} /> */}
    </motion.div>
  )
}
