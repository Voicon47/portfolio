export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  github: string
  linkedin: string
  profileImage: string
}

export interface Skill {
  name: string
  category: SkillCategory
}

export interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  imageUrl: string
  featured: boolean
}

export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  location: string
}
