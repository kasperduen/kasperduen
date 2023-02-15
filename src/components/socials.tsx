"use client";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaStrava } from "react-icons/fa";

export function Social({
  children,
  href,
  alt,
}: {
  href: string;
  children: React.ReactNode;
  alt: string;
}) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noreferrer"
      aria-label={alt}
      className="rounded-md bg-transparent p-2 text-2xl text-gray-700 transition-all hover:bg-slate-200 dark:text-white dark:hover:bg-slate-600"
    >
      {children}
    </a>
  );
}
export function TextSocial({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noreferrer"
      className="rounded-md bg-transparent p-2 text-xl text-black transition-all hover:bg-slate-200 dark:text-white dark:hover:bg-slate-600"
    >
      {children}
    </a>
  );
}

export function Socials() {
  return (
    <div className="flex">
      <Social href="https://github.com/kasperduen" alt="github account">
        <AiFillGithub />
      </Social>
      <Social
        href="https://www.strava.com/athletes/25682473"
        alt="strava account"
      >
        <FaStrava />
      </Social>
      <Social
        href="https://www.linkedin.com/in/kasperdue/"
        alt="linkedin account"
      >
        <AiFillLinkedin />
      </Social>
      <Social
        href="https://www.instagram.com/kaspervdue/"
        alt="instagram account"
      >
        <AiFillInstagram />
      </Social>
      <TextSocial href="https://blog.kasperdue.com/">Blog</TextSocial>
    </div>
  );
}
