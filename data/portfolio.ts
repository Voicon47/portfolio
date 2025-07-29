import type { Project, SkillCategory, PersonalInfo, NavigationItem } from "@/types"

export const personalInfo: PersonalInfo = {
  name: "Alex Johnson",
  title: "Full-Stack Developer & UI/UX Designer",
  bio: "Passionate full-stack developer with 6+ years of experience creating scalable web applications and intuitive user experiences. I specialize in React, Node.js, and modern web technologies, with a keen eye for design and performance optimization.",
  location: "San Francisco, CA",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    website: "https://alexjohnson.dev",
  },
  avatar: "/placeholder.svg?height=400&width=400",
  resume: "/resume.pdf",
}

export const navigationItems: NavigationItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
]

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Globe",
    skills: [
      { name: "React", level: 95, category: {} as SkillCategory },
      { name: "Next.js", level: 90, category: {} as SkillCategory },
      { name: "TypeScript", level: 88, category: {} as SkillCategory },
      { name: "Tailwind CSS", level: 92, category: {} as SkillCategory },
      { name: "Framer Motion", level: 85, category: {} as SkillCategory },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Database",
    skills: [
      { name: "Node.js", level: 90, category: {} as SkillCategory },
      { name: "Python", level: 85, category: {} as SkillCategory },
      { name: "PostgreSQL", level: 88, category: {} as SkillCategory },
      { name: "MongoDB", level: 82, category: {} as SkillCategory },
      { name: "GraphQL", level: 80, category: {} as SkillCategory },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "Code",
    skills: [
      { name: "Git", level: 95, category: {} as SkillCategory },
      { name: "Docker", level: 85, category: {} as SkillCategory },
      { name: "AWS", level: 80, category: {} as SkillCategory },
      { name: "Vercel", level: 90, category: {} as SkillCategory },
      { name: "Jest", level: 88, category: {} as SkillCategory },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 90, category: {} as SkillCategory },
      { name: "Adobe XD", level: 85, category: {} as SkillCategory },
      { name: "Photoshop", level: 80, category: {} as SkillCategory },
      { name: "UI/UX Design", level: 88, category: {} as SkillCategory },
      { name: "Prototyping", level: 85, category: {} as SkillCategory },
    ],
  },
]

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    longDescription:
      "Built a comprehensive e-commerce solution using Next.js and Stripe, featuring real-time inventory tracking, advanced search functionality, user authentication, order management, and responsive design. The platform handles thousands of products and processes payments securely.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    category: "web",
    featured: true,
    completedAt: "2024-01-15",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    longDescription:
      "Developed a comprehensive task management solution with real-time collaboration, drag-and-drop functionality, team workspaces, time tracking, and detailed analytics. Built with React and Socket.io for seamless real-time updates.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI", "Express"],
    githubUrl: "https://github.com/alexjohnson/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Task+Management+App",
    category: "web",
    featured: true,
    completedAt: "2023-11-20",
  },
  {
    id: "weather-dashboard",
    title: "Weather Analytics Dashboard",
    description: "Interactive weather dashboard with data visualization and location-based forecasts.",
    longDescription:
      "Created an advanced weather analytics platform featuring interactive charts, historical data analysis, location-based forecasts, and customizable widgets. Integrated with multiple weather APIs for comprehensive data coverage.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    liveUrl: "https://weather-analytics.vercel.app",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Weather+Dashboard",
    category: "web",
    featured: true,
    completedAt: "2023-09-10",
  },
  {
    id: "mobile-fitness-app",
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile app for fitness tracking with social features and AI recommendations.",
    longDescription:
      "Developed a comprehensive fitness tracking application with workout planning, progress tracking, social challenges, and AI-powered recommendations. Features offline sync, wearable device integration, and detailed analytics.",
    technologies: ["React Native", "Expo", "Firebase", "TensorFlow", "Redux", "Node.js"],
    githubUrl: "https://github.com/alexjohnson/fitness-app",
    liveUrl: "https://apps.apple.com/fitness-tracker",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Fitness+App",
    category: "mobile",
    featured: false,
    completedAt: "2023-07-05",
  },
]
