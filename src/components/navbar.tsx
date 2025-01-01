"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { fetchUser } from "../http";
import type { GithubUserResponse } from "../models/github-user-response";
import { Socials } from "./socials";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<GithubUserResponse>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchUser()
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);
  return (
    <>
      {isOpen ? (
        <div
          className={
            "fixed h-full  bg-slate-200 md:mt-0 md:block md:w-64 " +
            (true ? "block" : "hidden")
          }
        >
          <div className="mb-10 mt-12 flex w-full flex-col items-center justify-center px-4 pt-12">
            <Image
              width="120"
              height="120"
              className="mb-4 h-40 w-40 rounded-full bg-slate-200 p-1 dark:bg-white"
              alt="avatar"
              src={user?.avatar_url as string}
            />
            <h1
              className="leading-tighter text-md mb-4 font-extrabold tracking-tighter text-black dark:text-white md:text-2xl"
              data-aos="zoom-y-out"
            >
              Kasper Due
            </h1>
            <h3 className="mb-1 text-center text-sm text-black dark:text-white">
              👨🏻‍💻 Senior Software Engineer 👨🏻‍💻
            </h3>
            <h2 className="mb-4 text-center text-sm text-black dark:text-white">
              🏃 Aspiring Runner 🏃
            </h2>
            <Socials />
          </div>
        </div>
      ) : null}

      <div className={"fixed hidden h-full bg-slate-200 md:flex md:w-64"}>
        <div className="mb-10 mt-12 flex w-full flex-col items-center justify-center px-4 pt-12">
          <Image
            width="120"
            height="120"
            className="mb-4 h-40 w-40 rounded-full bg-slate-200 p-1 dark:bg-white"
            alt="avatar"
            src={user?.avatar_url as string}
          />
          <h1
            className="leading-tighter text-md mb-4 font-extrabold tracking-tighter text-black dark:text-white md:text-2xl"
            data-aos="zoom-y-out"
          >
            {user?.name}
          </h1>

          <h3 className="mb-1 text-center text-sm text-black dark:text-white">
            <span dangerouslySetInnerHTML={{ __html: user?.bio || "" }}></span>
          </h3>

          <Socials />
        </div>
      </div>

      <nav className="w-100 flex h-12 justify-end bg-slate-200 md:hidden">
        <button
          aria-label="Hamburger menu"
          className="mr-4 flex h-full w-12 items-center justify-center text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu />
        </button>
      </nav>
    </>
  );
};
