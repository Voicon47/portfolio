"use client"

import { motion } from "framer-motion"
import { VercelCard, VercelCardContent, VercelCardHeader, VercelCardTitle } from "@/components/ui/vercel-card"
import { Globe, Database, Code, Palette } from "lucide-react"
import type { SkillCategory } from "@/types"

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
}

const iconMap = {
  Globe,
  Database,
  Code,
  Palette,
}

function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-text-start))] to-[hsl(var(--gradient-text-end))] bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiencies across different domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VercelCard className="h-full">
                  <VercelCardHeader>
                    <VercelCardTitle className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-secondary border border-border">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {category.name}
                    </VercelCardTitle>
                  </VercelCardHeader>

                  <VercelCardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </VercelCardContent>
                </VercelCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
