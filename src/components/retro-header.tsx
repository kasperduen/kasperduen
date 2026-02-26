"use client"

import { useEffect, useState } from "react"

export function RetroHeader() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const base = 13847
    const daysSinceEpoch = Math.floor(Date.now() / 86400000)
    setVisitorCount(base + daysSinceEpoch)
  }, [])

  return (
    <header className="flex flex-col items-center gap-4 py-6">
      {/* Top decorative line */}
      <div className="retro-hr w-full" style={{ height: '4px' }} />

      {/* Title with rainbow effect */}
      <h1
        className="retro-rainbow text-center font-serif text-4xl font-bold md:text-5xl"
        style={{ letterSpacing: '2px' }}
      >
        {"~*~ Welcome to My Homepage ~*~"}
      </h1>

      {/* Subtitle */}
      <p className="text-center font-mono text-lg text-retro-cyan">
        {">>> The coolest place on the World Wide Web! <<<"}
      </p>

      {/* Marquee banner */}
      <div
        className="bevel-sunken w-full overflow-hidden bg-retro-black py-2"
        role="marquee"
        aria-label="Scrolling welcome message"
      >
        <div className="retro-scroll whitespace-nowrap font-mono text-lg text-retro-lime">
          {"*** Welcome to my personal corner of the Internet! *** This site is ALWAYS under construction *** Sign my guestbook! *** You are visitor #"}
          {visitorCount}
          {" *** Best viewed with Netscape Navigator 4.0 at 800x600 resolution ***"}
        </div>
      </div>

      {/* Visitor counter */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm text-retro-silver">
          {"You are visitor number:"}
        </span>
        <span
          className="bevel-sunken bg-retro-black px-3 py-1 font-mono text-lg tracking-widest text-retro-lime"
        >
          {visitorCount.toString().padStart(7, "0")}
        </span>
      </div>

      <div className="retro-hr w-full" style={{ height: '4px' }} />
    </header>
  )
}
