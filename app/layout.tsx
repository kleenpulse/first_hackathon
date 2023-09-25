import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Get Linked",
	description: "Get Linked Hackathon",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body>{children}</body>
		</html>
	);
}
