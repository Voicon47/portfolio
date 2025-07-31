export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
  category: "web" | "mobile" | "desktop" | "api"
  featured: boolean
  completedAt: string
}

export interface Skill {
  name: string
  level: number
  category: SkillCategory
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  skills: Skill[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface PersonalInfo {
  name: string
  title: string
  logo: string
  bio: string
  location: string
  email: string
  phone: string
  social: {
    github: string
    linkedin: string
    twitter: string
    website: string
  }
  avatar: string
  resume: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  external?: boolean
}
