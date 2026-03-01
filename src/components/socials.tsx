"use client";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaStrava } from "react-icons/fa";
import { personal } from "../data/personal";

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
      <Social href={personal.links.github} alt="github account">
        <AiFillGithub />
      </Social>
      <Social href={personal.links.strava} alt="strava account">
        <FaStrava />
      </Social>
      <Social href={personal.links.linkedin} alt="linkedin account">
        <AiFillLinkedin />
      </Social>
      <Social href={personal.links.instagram} alt="instagram account">
        <AiFillInstagram />
      </Social>
      <TextSocial href={personal.links.blog}>Blog</TextSocial>
    </div>
  );
}
