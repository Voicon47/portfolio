"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { personalInfo, navigationItems } from "@/data/portfolio-data"
import { smoothScrollTo } from "@/lib/smooth-scroll" // Import the new utility

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo(document.body, 1000) // Scroll to top of body with 1000ms duration
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">{personalInfo.name}</span>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {personalInfo.title} passionate about creating exceptional digital experiences and solving complex
              problems with elegant solutions.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
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
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>
              © {new Date().getFullYear()} {personalInfo.name}. Made with
            </span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js & Vercel</span>
          </div>

          <Button variant="ghost" size="sm" onClick={scrollToTop} className="flex items-center gap-2">
            <ArrowUp className="h-4 w-4" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
