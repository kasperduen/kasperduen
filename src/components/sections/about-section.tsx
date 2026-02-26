export function AboutSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="bevel-raised bg-retro-silver p-3">
        <h2 className="text-center font-serif text-2xl font-bold text-retro-navy">
          {"*** All About Me ***"}
        </h2>
      </div>

      <div className="bevel-sunken bg-retro-navy p-4">
        <table className="retro-table w-full font-sans text-retro-white" role="presentation">
          <tbody>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white" style={{ width: '35%' }}>
                {"Name:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"kasperduen"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Location:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"Planet Earth, The Internet"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Occupation:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"Webmaster / Cyber Surfer"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Favorite Browser:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"Netscape Navigator 4.0"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Hobbies:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"Surfing the Web, HTML coding, Collecting GIFs"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Favorite Food:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"Pizza"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Favorite Movie:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"The Matrix"}
              </td>
            </tr>
            <tr>
              <td className="bevel-raised bg-retro-teal px-3 py-2 font-bold text-retro-white">
                {"Favorite Music:"}
              </td>
              <td className="bevel-sunken bg-retro-black px-3 py-2 text-retro-cyan">
                {"MIDI files from the Internet"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fun facts */}
      <div className="bevel-raised bg-retro-silver p-4">
        <h3 className="mb-3 font-serif text-lg font-bold text-retro-navy">
          {"Fun Facts About Me:"}
        </h3>
        <ul className="flex flex-col gap-2 font-sans text-retro-black">
          <li>{"* I wrote my first HTML page in Notepad"}</li>
          <li>{"* I have over 500 bookmarks in my Favorites folder"}</li>
          <li>{"* I can hear the dial-up modem sound in my sleep"}</li>
          <li>{"* My GeoCities neighborhood was SiliconValley/Park"}</li>
          <li>{"* I once waited 45 minutes for a JPEG to load and it was WORTH IT"}</li>
        </ul>
      </div>

      {/* Email me */}
      <div className="flex flex-col items-center gap-2">
        <div className="retro-hr w-full" style={{ height: '4px' }} />
        <div className="flex items-center gap-2">
          <img src="/images/email-icon.jpg" alt="Email icon" width={32} height={32} />
          <span className="retro-glow font-serif text-lg text-retro-cyan">
            {"Email me at: webmaster@geocities.com"}
          </span>
          <img src="/images/email-icon.jpg" alt="Email icon" width={32} height={32} />
        </div>
      </div>
    </section>
  )
}
