"use client";

import { useTranslation } from "react-i18next";

export default function SobrePage() {
	const { t } = useTranslation();
	const aboutBody = t("about_page.body", { returnObjects: true }) as string[];
	const principles = t("about_page.principles", {
		returnObjects: true,
	}) as string[];

	return (
		<section className="py-20 px-6 max-w-3xl space-y-10">
			<div className="space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
					{t("about_page.title")}
				</h1>

				<p className="text-lg text-[color:var(--muted-foreground)] leading-relaxed">
					{t("about_page.intro")}
				</p>
			</div>

			<div className="space-y-6 text-[color:var(--foreground)]/90 leading-relaxed">
				{aboutBody.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>

			<div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
				<h2 className="text-xl font-semibold mb-4">
					{t("about_page.principlesTitle")}
				</h2>

				<ul className="space-y-3 text-[color:var(--foreground)]/85">
					{principles.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
