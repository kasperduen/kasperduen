"use client"

import { useState } from "react"

const asciiArt = [
  {
    title: "Cat",
    art: `  /\\_/\\  
 ( o.o ) 
  > ^ <
 /|   |\\
(_|   |_)`,
  },
  {
    title: "Fish",
    art: `    /\\
   {  \`---._
   {          \\
    ~~^~~^~~^~>
   {          /
   {  .---._/
    \\/`,
  },
  {
    title: "House",
    art: `     /\\
    /  \\
   /    \\
  /______\\
  |  __  |
  | |  | |
  | |  | |
  |_|__|_|`,
  },
]

const colorPickers = [
  { label: "Background", value: "#000080" },
  { label: "Text", value: "#ffff00" },
  { label: "Links", value: "#00ffff" },
]

export function CoolSection() {
  const [selectedAscii, setSelectedAscii] = useState(0)
  const [currentColorIdx, setCurrentColorIdx] = useState(0)
  const [colors, setColors] = useState(colorPickers)

  return (
    <section className="flex flex-col gap-6">
      <div className="bevel-raised bg-retro-silver p-3">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"*** Cool Stuff ***"}
        </h2>
      </div>

      {/* ASCII Art Gallery */}
      <div className="bevel-sunken bg-retro-navy p-4">
        <h3 className="mb-3 text-center font-serif text-xl font-bold text-retro-yellow">
          {"ASCII Art Gallery"}
        </h3>
        <div className="mb-3 flex justify-center gap-2">
          {asciiArt.map((art, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAscii(idx)}
              className={`bevel-raised px-3 py-1 font-mono text-sm ${
                selectedAscii === idx
                  ? "bg-retro-teal text-retro-white"
                  : "bg-retro-silver text-retro-black"
              }`}
            >
              {art.title}
            </button>
          ))}
        </div>
        <pre className="bevel-sunken overflow-x-auto bg-retro-black p-4 text-center font-mono text-retro-lime">
          {asciiArt[selectedAscii]?.art}
        </pre>
      </div>

      {/* Color Picker */}
      <div className="bevel-sunken bg-retro-navy p-4">
        <h3 className="mb-3 text-center font-serif text-xl font-bold text-retro-yellow">
          {"Web-Safe Color Picker"}
        </h3>
        <p className="mb-3 text-center font-sans text-sm text-retro-silver">
          {"Pick your favorite web-safe colors! (These looked the same on ALL monitors in 1996)"}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "#FF0000", "#FF6600", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF",
            "#FF00FF", "#FFFFFF", "#C0C0C0", "#808080", "#800000", "#808000",
            "#008000", "#008080", "#000080", "#800080", "#000000", "#FF9999",
            "#99FF99", "#9999FF", "#FFFF99", "#FF99FF", "#99FFFF", "#CC6600",
          ].map((color) => (
            <button
              key={color}
              className="bevel-raised"
              style={{
                width: 32,
                height: 32,
                backgroundColor: color,
              }}
              onClick={() => {
                setColors((prev) =>
                  prev.map((c, i) =>
                    i === currentColorIdx ? { ...c, value: color } : c
                  )
                )
              }}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4">
          {colors.map((c, idx) => (
            <button
              key={c.label}
              onClick={() => setCurrentColorIdx(idx)}
              className={`bevel-raised flex items-center gap-2 px-3 py-1 font-mono text-xs ${
                currentColorIdx === idx
                  ? "bg-retro-teal text-retro-white"
                  : "bg-retro-silver text-retro-black"
              }`}
            >
              <span
                className="bevel-sunken inline-block"
                style={{ width: 16, height: 16, backgroundColor: c.value }}
              />
              {c.label}
            </button>
          ))}
        </div>
        {/* Preview box */}
        <div
          className="bevel-sunken mt-3 p-4 text-center font-sans"
          style={{
            backgroundColor: colors[0]?.value,
            color: colors[1]?.value,
          }}
        >
          {"This is a preview of your color choices!"}
          <br />
          <span style={{ color: colors[2]?.value, textDecoration: "underline" }}>
            {"This is what links would look like"}
          </span>
        </div>
      </div>

      {/* Netscape buttons */}
      <div className="bevel-sunken bg-retro-navy p-4">
        <h3 className="mb-3 text-center font-serif text-xl font-bold text-retro-yellow">
          {"88x31 Button Collection"}
        </h3>
        <p className="mb-3 text-center font-sans text-sm text-retro-silver">
          {"Collect 'em all! Put them on YOUR homepage!"}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { text: "Made with Notepad", bg: "#c0c0c0", fg: "#000080" },
            { text: "Best viewed 800x600", bg: "#008080", fg: "#ffffff" },
            { text: "HTML 3.2", bg: "#000080", fg: "#ffff00" },
            { text: "Free Speech Online", bg: "#0000ff", fg: "#ffffff" },
            { text: "Netscape NOW!", bg: "#006600", fg: "#ffffff" },
            { text: "IE Free Zone", bg: "#ff0000", fg: "#ffffff" },
            { text: "This site is Y2K Ready", bg: "#ffff00", fg: "#000000" },
            { text: "GeoCities", bg: "#008000", fg: "#ffffff" },
            { text: "JavaScript", bg: "#808080", fg: "#ffff00" },
            { text: "Powered by HTML", bg: "#800080", fg: "#ffffff" },
          ].map((btn) => (
            <div
              key={btn.text}
              className="bevel-raised flex items-center justify-center font-mono text-[8px] font-bold leading-tight"
              style={{
                width: 88,
                height: 31,
                backgroundColor: btn.bg,
                color: btn.fg,
              }}
            >
              {btn.text}
            </div>
          ))}
        </div>
      </div>

      {/* Facts ticker */}
      <div className="bevel-raised bg-retro-silver p-3">
        <h3 className="mb-2 text-center font-serif text-lg font-bold text-retro-navy">
          {"Did You Know?"}
        </h3>
        <ul className="flex flex-col gap-1 font-sans text-sm text-retro-black">
          <li>{"* The first website was published on August 6, 1991"}</li>
          <li>{"* The average web page in 1996 was only 14KB"}</li>
          <li>{"* The <blink> tag was invented after a night at a bar"}</li>
          <li>{"* GeoCities had over 38 million pages at its peak"}</li>
          <li>{"* The dancing baby GIF was one of the first viral memes"}</li>
        </ul>
      </div>
    </section>
  )
}
