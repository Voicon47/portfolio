import type { Project, SkillCategory, PersonalInfo, NavigationItem } from "@/types"

export const personalInfo: PersonalInfo = {
  name: "Perry Dinh",
  title: "Full-Stack Developer & UI/UX Designer",
  logo: " /images/logo.svg",
  bio: "Passionate Full-Stack Developer with over 1 year of hands-on experience in building scalable web applications and delivering seamless, intuitive user experiences. Proficient in React, Node.js, and modern web technologies, with a strong focus on performance optimization, clean code, and user-centric design.",
  location: "Viet Nam, VN",
  email: "perrydinh169@gmail.com",
  phone: "(+84) 905100937",
  social: {
    github: "https://github.com/Voicon47",
    linkedin: "https://www.linkedin.com/in/perry-dinh-192598234/",
    twitter: "https://twitter.com/perrydinh",
    website: "https://perrydinh.id.vn",
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
      { name: "AWS", level: 40, category: {} as SkillCategory },
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
    id: "animateM",
    title: "Shop animation animateM",
    description: "Discover and implement stunning animations for your React projects. Boost user experience with smooth, eye-catching transitions and effects.",
    longDescription:
      "Developed a modern e-commerce animation showcase using Next.js, focused on delivering smooth UI/UX transitions and micro-interactions. Deployed on AWS for scalability and performance, the project highlights advanced animation techniques tailored for online shopping experiences.",
    technologies: ["Next.js", "Framer Motion", "AWS", "Tailwind CSS"],
    githubUrl: "https://github.com/Voicon47/animateM",
    liveUrl: "https://animatem.perrydinh.id.vn/",
    imageUrl: "/images/animateM.png",
    category: "web",
    featured: true,
    completedAt: "2023-09-10",
  },
  {
    id: "omnihome-iot",
    title: "OmniHome – Smart Dormitory IoT System",
    description: "OmniHome is an IoT-based software solution for monitoring, controlling, and managing smart devices in a dormitory.",
    longDescription:
      "Built using React.js (frontend), Node.js (backend), and ESP32 (hardware integration), the system provides real-time automation, energy tracking, and device alerts. It features a user-friendly interface for students and administrators, enabling efficient management of dormitory resources.",
    technologies: ["React.js", "Node.js", "ESP32", "MongoDB", "Tailwind CSS", "Express", "Redis"],
    githubUrl: "https://github.com/Voicon47/smart-home-front-end",
    liveUrl: "https://smart-home-front-end-phi.vercel.app",
    imageUrl: "/images/smart-home.png",
    category: "web",
    featured: true,
    completedAt: "2024-01-15",
  },
  {
    id: "study-online",
    title: "Study Online",
    description: "Create a flexible and efficient learning environment that meets the diverse needs of learners in the digital age",
    longDescription:
      "Built using React.js (frontend), Node.js (backend), Redis,...It offers a variety of well-structured courses with clear learning paths. Learners can choose what to study based on their own goals and schedule",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI", "Express"],
    githubUrl: "https://github.com/Voicon47/Study-Online",
    liveUrl: "https://smart-home.vercel.app",
    imageUrl: "/images/study-online.jpg",
    category: "web",
    featured: true,
    completedAt: "2023-11-20",
  },

]

export const stats = [
  { label: "Projects", value: "50+" },
  { label: "Years", value: "6+" },
  { label: "Clients", value: "25+" },
  { label: "Satisfaction", value: "100%" },
]

export const contactInfo = {
  email: "alex.johnson@example.com",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
  location: "San Francisco, CA",
}
