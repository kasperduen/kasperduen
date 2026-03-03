import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { personal } from "../src/data/personal";

export const metadata = {
  title: personal.site.title,
  description: personal.site.description,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
