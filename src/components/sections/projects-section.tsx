"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  VercelCard,
  VercelCardContent,
  VercelCardHeader,
  VercelCardTitle,
  VercelCardDescription,
} from "@/components/ui/vercel-card"
import { VercelBadge } from "@/components/ui/vercel-badge"
import { Github, ExternalLink, X } from "lucide-react"
import type { Project } from "@/types"
import { useState } from "react"
import { cn } from "@/lib/utils"


interface ProjectsSectionProps {
  projects: Project[]
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "api", label: "APIs" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-text-start))] to-[hsl(var(--gradient-text-end))] bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions built with
            modern technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "flex items-center gap-2",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground",
              )}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} layout className="group">
                <VercelCard interactive className="h-full overflow-hidden" onClick={() => setSelectedProject(project)}>
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={project.imageUrl || "../placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      {project.featured && <VercelBadge variant="success">Featured</VercelBadge>}
                    </div>
                  </div>

                  <VercelCardHeader>
                    <VercelCardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </VercelCardTitle>
                    <VercelCardDescription>{project.description}</VercelCardDescription>
                  </VercelCardHeader>

                  <VercelCardContent>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <VercelBadge key={tech} variant="primary">
                          {tech}
                        </VercelBadge>
                      ))}
                      {project.technologies.length > 4 && (
                        <VercelBadge variant="default">+{project.technologies.length - 4} more</VercelBadge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </VercelCardContent>
                </VercelCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <VercelCard className="p-8 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src={selectedProject.imageUrl || "/placeholder.svg"}
                        alt={selectedProject.title}
                        width={600}
                        height={400}
                        className="rounded-lg border border-border"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.longDescription}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <VercelBadge key={tech} variant="primary">
                                {tech}
                              </VercelBadge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button className="bg-primary text-primary-foreground" asChild>
                            <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              View Live
                            </a>
                          </Button>
                          <Button variant="outline" className="bg-transparent" asChild>
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </VercelCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
