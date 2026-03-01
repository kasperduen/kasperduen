"use client"

import { useState } from "react"
import { RetroHeader } from "./retro-header"
import { RetroNav } from "./retro-nav"
import { RetroFooter } from "./retro-footer"
import { HomeSection } from "./sections/home-section"
import { AboutSection } from "./sections/about-section"
import { BlogSection } from "./sections/blog-section"
import { LinksSection } from "./sections/links-section"
import { CoolSection } from "./sections/cool-section"
import { GuestbookSection } from "./sections/guestbook-section"

const sections: Record<string, () => JSX.Element> = {
  home: HomeSection,
  about: AboutSection,
  blog: BlogSection,
  links: LinksSection,
  cool: CoolSection,
  guestbook: GuestbookSection,
}

export default function RetroPage() {
  const [activeSection, setActiveSection] = useState("home")

  const ActiveComponent = sections[activeSection] ?? HomeSection

  return (
    <div className="min-h-screen bg-retro-navy">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <RetroHeader />
        <RetroNav activeSection={activeSection} onNavigate={setActiveSection} />
        <main className="py-6">
          <ActiveComponent />
        </main>
        <RetroFooter />
      </div>
    </div>
  )
}
