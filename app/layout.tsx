import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "../src/components/navbar";
import { personal } from "../src/data/personal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{personal.site.title}</title>
          <meta name="description" content={personal.site.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
