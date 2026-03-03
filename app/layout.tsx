import "../styles/globals.css";
import Script from "next/script";
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
				<Script
					src="/_vercel/insights/script.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
