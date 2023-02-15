import { RxHamburgerMenu } from "react-icons/rx";
import { Socials } from "../src/components/socials";
import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "../src/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Create T3 App</title>
          <meta name="description" content="" />
          <title>Welcome to my site!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
