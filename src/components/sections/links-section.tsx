const linkCategories = [
  {
    title: "Search Engines",
    color: "bg-retro-teal",
    links: [
      { name: "Yahoo!", url: "#", desc: "The best way to find stuff on the Web!" },
      { name: "AltaVista", url: "#", desc: "Advanced searching at its finest" },
      { name: "Lycos", url: "#", desc: "Go get it!" },
      { name: "WebCrawler", url: "#", desc: "Search the web easily" },
    ],
  },
  {
    title: "Cool Websites",
    color: "bg-retro-teal",
    links: [
      { name: "Space Jam", url: "#", desc: "The greatest movie website ever made" },
      { name: "The Hamster Dance", url: "#", desc: "dee da dee da dee da doh doh..." },
      { name: "Geocities", url: "#", desc: "Free web hosting! Build your own homepage!" },
      { name: "Angelfire", url: "#", desc: "Another great free homepage host" },
    ],
  },
  {
    title: "Web Building Resources",
    color: "bg-retro-teal",
    links: [
      { name: "WebMonkey", url: "#", desc: "Learn HTML and JavaScript" },
      { name: "GIF World", url: "#", desc: "Free animated GIFs for your website!" },
      { name: "The Counter.com", url: "#", desc: "Free hit counter for your page" },
      { name: "Tripod Homepage Builder", url: "#", desc: "Easy website creation" },
    ],
  },
  {
    title: "Fun & Games",
    color: "bg-retro-teal",
    links: [
      { name: "Neopets", url: "#", desc: "Virtual pet paradise!" },
      { name: "Miniclip", url: "#", desc: "Play games online!" },
      { name: "Newgrounds", url: "#", desc: "Flash animations and games" },
      { name: "eBaums World", url: "#", desc: "Funny videos and pictures" },
    ],
  },
]

export function LinksSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="bevel-raised bg-retro-silver p-3">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"*** My Favorite Links ***"}
        </h2>
      </div>

      <p className="text-center font-sans text-retro-yellow">
        {"Here are some of my favorite places on the World Wide Web. If you'd like to trade links, email me!"}
      </p>

      <div className="flex flex-col gap-6">
        {linkCategories.map((category, catIndex) => (
          <div key={catIndex} className="bevel-sunken bg-retro-navy p-4">
            <h3 className="mb-3 bevel-raised bg-retro-teal p-2 text-center font-serif text-lg font-bold text-retro-white">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="flex items-start gap-2 font-sans">
                  <span className="text-retro-yellow" aria-hidden="true">{">>>"}</span>
                  <div>
                    <a
                      href={link.url}
                      className="font-bold text-retro-cyan underline hover:text-retro-yellow"
                    >
                      {link.name}
                    </a>
                    <span className="text-retro-silver">{" - "}{link.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bevel-raised bg-retro-silver p-3">
        <p className="text-center font-mono text-sm text-retro-black">
          {"Link to my page! Use this HTML:"}
        </p>
        <div className="bevel-sunken mt-2 bg-retro-black p-2">
          <code className="font-mono text-xs text-retro-lime">
            {'<a href="http://www.geocities.com/~mypage">'}
            <br />
            {"  Visit My Awesome Homepage!"}
            <br />
            {"</a>"}
          </code>
        </div>
      </div>
    </section>
  )
}
