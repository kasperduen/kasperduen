import Image from "next/image"

const blogPosts = [
  {
    date: "Feb 26, 2026",
    title: "New Page Layout!!!",
    isNew: true,
    content:
      "I finally figured out how to use HTML tables for layout! My page looks SO much better now. I spent all weekend working on it. The trick is to use nested tables inside tables. Thanks to the HTML tutorial on WebMonkey for teaching me!",
  },
  {
    date: "Feb 14, 2026",
    title: "Happy Valentines Day",
    isNew: false,
    content:
      "Happy Valentines Day everyone!! I made a special page with hearts and roses for my significant other but I'm too embarrassed to link it here LOL. Maybe next time...",
  },
  {
    date: "Jan 30, 2026",
    title: "Cool New Links Added",
    isNew: false,
    content:
      "I found some really AWESOME websites this week and added them to my links page! Check them out!! Also I got a new mouse pad with a picture of a dolphin on it. It's rad.",
  },
  {
    date: "Jan 15, 2026",
    title: "Site Redesign In Progress",
    isNew: false,
    content:
      "I'm working on a totally new look for this website. I downloaded some cool background tiles from a free GIF archive. Also trying to figure out JavaScript... wish me luck!!!",
  },
  {
    date: "Dec 25, 2025",
    title: "Merry Christmas!!!",
    isNew: false,
    content:
      "Merry Christmas and Happy Holidays to all my visitors!! I got a new scanner for Christmas so I'll be uploading more pictures soon! Also got 64MB of RAM installed... my computer is BLAZING fast now!!",
  },
]

export function BlogSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="bevel-raised bg-retro-silver p-3">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"*** My Web Log (Blog) ***"}
        </h2>
      </div>

      {blogPosts.map((post, index) => (
        <article key={index} className="bevel-sunken bg-retro-navy p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="bevel-raised bg-retro-teal px-2 py-1 font-mono text-xs text-retro-white">
              {post.date}
            </span>
            <h3 className="font-serif text-xl font-bold text-retro-yellow">
              {post.title}
            </h3>
            {post.isNew && (
              <Image
                src="/images/new-icon.jpg"
                alt="New post"
                width={32}
                height={16}
              />
            )}
          </div>
          <div className="retro-hr mb-3" style={{ height: '2px' }} />
          <p className="font-sans leading-relaxed text-retro-white">
            {post.content}
          </p>
        </article>
      ))}

      <div className="bevel-raised bg-retro-silver p-3">
        <p className="text-center font-mono text-sm text-retro-black">
          {"--- End of Blog Entries --- Check back soon for more updates! ---"}
        </p>
      </div>
    </section>
  )
}
