"use client"

interface RetroNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "home", label: "Home", icon: "\u{1F3E0}" },
  { id: "about", label: "About Me", icon: "\u{1F464}" },
  { id: "blog", label: "Blog", icon: "\u{1F4DD}" },
  { id: "links", label: "Cool Links", icon: "\u{1F517}" },
  { id: "cool", label: "Cool Stuff", icon: "\u{2B50}" },
  { id: "guestbook", label: "Guestbook", icon: "\u{1F4D6}" },
]

export function RetroNav({ activeSection, onNavigate }: RetroNavProps) {
  return (
    <nav
      className="bevel-raised bg-retro-silver p-2"
      aria-label="Main navigation"
    >
      <ul className="flex flex-wrap items-center justify-center gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className={`bevel-raised px-4 py-2 font-mono text-sm font-bold transition-none ${
                activeSection === item.id
                  ? "bevel-sunken bg-retro-teal text-retro-white"
                  : "bg-retro-silver text-retro-black hover:bg-retro-gray hover:text-retro-white"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="mr-1" aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
