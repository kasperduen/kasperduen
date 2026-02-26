import Image from "next/image"

export function HomeSection() {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="bevel-raised bg-retro-silver p-4">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"Hello and Welcome!!!"}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
        {/* Profile area */}
        <div className="bevel-raised flex flex-col items-center gap-2 bg-retro-silver p-4">
          <div
            className="bevel-sunken flex items-center justify-center bg-retro-navy"
            style={{ width: 150, height: 150 }}
          >
            <span className="text-center font-mono text-sm text-retro-cyan">
              {"[Your Photo"}
              <br />
              {"Here]"}
            </span>
          </div>
          <p className="font-mono text-xs text-retro-black">
            {"^ That's me! ^"}
          </p>
        </div>

        {/* Welcome text */}
        <div className="bevel-sunken flex-1 bg-retro-navy p-4">
          <p className="mb-3 font-sans text-lg text-retro-yellow">
            {"Howdy, stranger! Welcome to my little corner of cyberspace!"}
          </p>
          <p className="mb-3 font-sans text-retro-white">
            {"This is my personal homepage where I share all the cool stuff I find "}
            {"on the Information Superhighway. I've been building this site since "}
            {"I got my first 28.8k modem and I'm still adding new stuff every day!"}
          </p>
          <p className="mb-3 font-sans text-retro-white">
            {"Feel free to look around. Don't forget to sign my "}
            <span className="retro-link cursor-pointer font-bold text-retro-cyan underline">
              {"Guestbook"}
            </span>
            {" before you leave!"}
          </p>
          <p className="font-sans text-retro-lime">
            {"This page was last updated on: February 26, 2026"}
          </p>
        </div>
      </div>

      {/* Under construction banner */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/under-construction.jpg"
          alt="Under construction"
          width={120}
          height={48}
          className="bevel-raised"
        />
        <span className="retro-blink font-serif text-xl font-bold text-retro-yellow">
          {"UNDER CONSTRUCTION!!!"}
        </span>
        <Image
          src="/images/under-construction.jpg"
          alt="Under construction"
          width={120}
          height={48}
          className="bevel-raised"
        />
      </div>

      {/* Web rings */}
      <div className="bevel-raised bg-retro-silver p-3">
        <p className="text-center font-mono text-xs text-retro-black">
          {"This site is a proud member of the"}
          <br />
          <span className="font-bold text-retro-navy">
            {"Cool Homepages Web Ring"}
          </span>
          <br />
          {"[ "}
          <span className="cursor-pointer font-bold text-retro-teal underline">
            {"Prev"}
          </span>
          {" | "}
          <span className="cursor-pointer font-bold text-retro-teal underline">
            {"Random"}
          </span>
          {" | "}
          <span className="cursor-pointer font-bold text-retro-teal underline">
            {"Next"}
          </span>
          {" ]"}
        </p>
      </div>
    </section>
  )
}
