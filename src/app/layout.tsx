import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { Footer } from "@/components/layout/footer"
import { Header } from "../components/layout/header"
import Particles from "@/components/others/Particles"
import ElasticCursor from "@/components/others/ElasticCursor"
import Preloader from "@/components/others/preloader"
import CardPortfolio from "@/components/others/cardPortfolio"

Header


export const metadata: Metadata = {
  title: "Perry Dinh - Full-Stack Developer & Traveler",
  description:
    "Passionate full-stack developer with experience creating scalable web applications and intuitive user experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "UI/UX Designer", "Web Development"],
  authors: [{ name: "Perry Dinh" }],
  creator: "Perry Dinh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://perrydinh.id.vn",
    title: "Perry Dinh - Full-Stack Developer & Designer",
    description:
      "Passionate full-stack developer with 6+ years of experience creating scalable web applications and intuitive user experiences.",
    siteName: "Perry Dinh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perry Dinh - Full-Stack Developer & Designer",
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
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <div className="flex min-h-screen flex-col">
              <Header />
              <CardPortfolio />
              <ElasticCursor />
              <main className="flex-1">{children}</main>
              {/* <Footer /> */}
            </div>
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  )
}
