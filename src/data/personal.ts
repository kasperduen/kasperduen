/**
 * Central personal data used across the site.
 * Aligned with kasperdue.com and public profiles.
 */

export const personal = {
  /** Full name */
  name: "Kasper Due",
  /** Professional title */
  title: "Senior Software Engineer",
  /** Short tagline (e.g. for navbar) */
  tagline: "Aspiring Runner",
  /** Location for display */
  location: "Copenhagen, Denmark",
  /** Contact - use mailto or link */
  email: "mail@kasperdue.com",
  /** Site metadata */
  site: {
    title: "Kasper Due",
    description:
      "Personal site and blog of Kasper Due — Senior Software Engineer. Writing about frontend, React, and building on the web.",
    url: "https://kasperdue.com",
  },
  /** Social and external links */
  links: {
    github: "https://github.com/kasperduen",
    linkedin: "https://www.linkedin.com/in/kasperdue/",
    instagram: "https://www.instagram.com/kaspervdue/",
    strava: "https://www.strava.com/athletes/25682473",
    blog: "https://kasp9023.hashnode.dev/",
    blogSite: "https://blog.kasperdue.com",
  },
} as const;

export type Personal = typeof personal;
