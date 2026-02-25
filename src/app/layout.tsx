import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "JOAODEV — Full Stack Developer",
	description:
		"Full stack developer especializado em React, Node, NestJS e APIs bancárias",
	openGraph: {
		title: "JOAODEV",
		description:
			"Full stack developer especializado em React, Node, NestJS e APIs bancárias",
		url: "https://joaodev.com",
		siteName: "JOAODEV",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt">
			<body className="min-h-screen bg-white text-[color:var(--foreground)] dark:bg-black antialiased">
				<Providers>
					<div className="min-h-screen flex flex-col">
						<Header />
						<main className="flex-1">
							<Container>{children}</Container>
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
