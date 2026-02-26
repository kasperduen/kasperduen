"use client"

import { useState } from "react"
import { RetroHeader } from "@/components/retro-header"
import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { BlogSection } from "@/components/sections/blog-section"
import { LinksSection } from "@/components/sections/links-section"
import { CoolSection } from "@/components/sections/cool-section"
import { GuestbookSection } from "@/components/sections/guestbook-section"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")

  function renderSection() {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection />
      case "blog":
        return <BlogSection />
      case "links":
        return <LinksSection />
      case "cool":
        return <CoolSection />
      case "guestbook":
        return <GuestbookSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-4 px-4 py-2">
      <RetroHeader />
      <RetroNav activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main content area with classic beveled frame */}
      <main className="bevel-sunken flex-1 bg-retro-navy p-4">
        <div className="bevel-raised bg-retro-navy p-4">
          {renderSection()}
        </div>
      </main>

      <RetroFooter />
    </div>
  )
}
