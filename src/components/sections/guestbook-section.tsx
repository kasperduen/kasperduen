"use client"

import { useState } from "react"

interface GuestbookEntry {
  name: string
  message: string
  date: string
  website: string
}

const initialEntries: GuestbookEntry[] = [
  {
    name: "CyberSurfer99",
    message: "Awesome page dude!!! Love the background. Keep it up! =)",
    date: "Feb 20, 2026",
    website: "http://www.geocities.com/~cybersurfer99",
  },
  {
    name: "HTMLQueen",
    message: "Your ASCII art gallery is SO cool!! I bookmarked this page. How did you make the scrolling text? Email me plz!",
    date: "Feb 10, 2026",
    website: "http://www.angelfire.com/htmlqueen",
  },
  {
    name: "NetNinja2000",
    message: "Hey nice site!! Check out mine too. We should trade links! :-D",
    date: "Jan 28, 2026",
    website: "http://www.tripod.com/~netninja",
  },
  {
    name: "PixelPrincess",
    message: "Love your button collection!! Can I use the 'Made with Notepad' one on my page? Thx!! <3",
    date: "Jan 15, 2026",
    website: "",
  },
  {
    name: "WebWizard",
    message: "Great homepage! You should check out DHTML... it lets you make things fly across the screen! Visited from the Cool Homepages WebRing.",
    date: "Dec 30, 2025",
    website: "http://www.geocities.com/SiliconValley/webwizard",
  },
]

export function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newEntry: GuestbookEntry = {
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      website: website.trim(),
    }

    setEntries([newEntry, ...entries])
    setName("")
    setMessage("")
    setWebsite("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="bevel-raised bg-retro-silver p-3">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"*** Sign My Guestbook! ***"}
        </h2>
      </div>

      <p className="text-center font-sans text-retro-yellow">
        {"Please sign my guestbook and let me know you were here! Don't forget to leave your website URL so I can visit you back!"}
      </p>

      {/* Sign form */}
      <div className="bevel-sunken bg-retro-navy p-4">
        <h3 className="mb-3 font-serif text-lg font-bold text-retro-yellow">
          {"Sign the Guestbook:"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="gb-name" className="font-mono text-sm text-retro-cyan">
              {"Your Name:"}
            </label>
            <input
              id="gb-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bevel-sunken bg-retro-white px-2 py-1 font-sans text-retro-black"
              placeholder="e.g. CoolDude2026"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gb-website" className="font-mono text-sm text-retro-cyan">
              {"Your Homepage URL:"}
            </label>
            <input
              id="gb-website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="bevel-sunken bg-retro-white px-2 py-1 font-sans text-retro-black"
              placeholder="http://www.geocities.com/~yourname"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gb-message" className="font-mono text-sm text-retro-cyan">
              {"Your Message:"}
            </label>
            <textarea
              id="gb-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bevel-sunken bg-retro-white px-2 py-1 font-sans text-retro-black"
              placeholder="Say something nice! =)"
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="bevel-raised bg-retro-silver px-6 py-2 font-mono text-sm font-bold text-retro-black hover:bg-retro-gray hover:text-retro-white"
            >
              {"Sign Guestbook!"}
            </button>
            <button
              type="reset"
              onClick={() => { setName(""); setMessage(""); setWebsite("") }}
              className="bevel-raised bg-retro-silver px-6 py-2 font-mono text-sm text-retro-black hover:bg-retro-gray hover:text-retro-white"
            >
              {"Clear"}
            </button>
          </div>
          {submitted && (
            <p className="retro-blink font-mono text-sm text-retro-lime">
              {"*** Thank you for signing my guestbook!!! ***"}
            </p>
          )}
        </form>
      </div>

      <div className="retro-hr w-full" style={{ height: '4px' }} />

      {/* Entries */}
      <div className="flex flex-col gap-4">
        <h3 className="text-center font-serif text-lg font-bold text-retro-yellow">
          {"Guestbook Entries ({entries.length} total):"}
        </h3>
        {entries.map((entry, idx) => (
          <div key={idx} className="bevel-sunken bg-retro-navy p-3">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="font-mono font-bold text-retro-cyan">
                {entry.name}
              </span>
              <span className="font-mono text-xs text-retro-gray">
                {"wrote on"} {entry.date}{":"}
              </span>
            </div>
            <p className="mb-1 font-sans text-retro-white">
              {entry.message}
            </p>
            {entry.website && (
              <p className="font-mono text-xs">
                <span className="text-retro-silver">{"Homepage: "}</span>
                <a
                  href={entry.website}
                  className="text-retro-cyan underline hover:text-retro-yellow"
                >
                  {entry.website}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
