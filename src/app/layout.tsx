import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"


export const metadata: Metadata = {
  title: "Alex Johnson - Full-Stack Developer & Designer",
  description:
    "Passionate full-stack developer with 6+ years of experience creating scalable web applications and intuitive user experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "UI/UX Designer", "Web Development"],
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Full-Stack Developer & Designer",
    description:
      "Passionate full-stack developer with 6+ years of experience creating scalable web applications and intuitive user experiences.",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full-Stack Developer & Designer",
    description:
      "Passionate full-stack developer with 6+ years of experience creating scalable web applications and intuitive user experiences.",
    creator: "@alexjohnson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
