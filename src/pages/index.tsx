import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { string } from "zod";

import { Socials } from "../components/socials";

const fetchArticles = async () => {
  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `query {
      user(username:"kasp9023") {
         publication {
          posts {
            title
            slug
            dateAdded
            brief
          }
        } 
      }
    }`,
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  const response = await fetch("https://api.hashnode.com", options);
  const data: any = await response.json();

  console.log("data", data);
  return data;
};

const Home: NextPage = ({ posts }) => {
  console.log("posts", posts);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="flex w-full flex-col items-center justify-center px-4">
              <Image
                width="220"
                height="220"
                className="mb-4 h-64 w-64 rounded-full bg-slate-200 p-1 dark:bg-white"
                alt="avatar"
                src="/profile-picture.jpg"
              />
              <h1
                className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter text-black dark:text-white md:text-5xl"
                data-aos="zoom-y-out"
              >
                Kasper Due
              </h1>
              <h2 className="text-center text-sm font-bold text-black dark:text-white md:text-base">
                👩‍💻 Senior Software Engineer and Aspiring Runner 🏃
              </h2>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 mt-3 text-center text-base text-gray-600  dark:text-white"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  I build tools and apps that makes life easier for people. I am
                  currently part of{" "}
                  <a href="https://www.bankingcircle.com">Banking Circle</a>
                </p>
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    data: {
      user: {
        publication: { posts },
      },
    },
  }: any = await fetchArticles();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

export default Home;
