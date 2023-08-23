"use client"
import Navbar from "./components/navbar"
import { ThemeProvider } from 'next-themes'
import HeroSection from "./components/herosection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <HeroSection />
          <AboutSection />
          <ProjectsSection/>
          <ContactSection />
        </div>
      </ThemeProvider>
    </main>
  )
}
