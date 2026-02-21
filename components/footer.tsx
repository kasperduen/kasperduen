import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kasperduen",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kasperdue/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kaspervdue/",
    icon: Instagram,
  },
];

function StravaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="connect" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">03.</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Connect
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
            Whether you want to talk engineering, leadership, or running
            routes - I'd love to connect.
          </p>

          {/* Social icons */}
          <div className="mb-16 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            {/* Strava - custom icon */}
            <a
              href="https://www.strava.com/athletes/25682473"
              target="_blank"
              rel="noreferrer"
              aria-label="Strava"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
            >
              <StravaIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              Built by Kasper Due
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
