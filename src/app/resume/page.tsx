"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

type Experience = {
	company: string;
	role: string;
	period: string;
	highlights: string[];
};

export default function ResumePage() {
	const { t } = useTranslation();
	const experiences = t("resume_page.experiences", {
		returnObjects: true,
	}) as Experience[];

	return (
		<section className="min-h-svh py-20 px-6">
			<div className="max-w-4xl mx-auto space-y-16">
				{/* HEADER */}
				<div className="space-y-4">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						{t("resume_page.title")}
					</h1>

					<p className="text-[color:var(--muted-foreground)] text-lg">
						{t("resume_page.subtitle")}
					</p>

					<Link
						href="/"
						className="text-orange-500 hover:underline transition-colors"
					>
						{t("resume_page.backHome")}
					</Link>
				</div>

				{/* EXPERIENCE */}
				<div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-8 space-y-14">
					{experiences.map((experience) => (
						<div key={experience.company} className="space-y-3 relative">
							<div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-orange-500" />
							<h2 className="text-2xl font-semibold">{experience.company}</h2>
							<p className="text-orange-500 font-medium">{experience.role}</p>
							<p className="text-sm text-[color:var(--muted-foreground)]">
								{experience.period}
							</p>
							<ul className="list-disc pl-6 space-y-2 text-[color:var(--foreground)]/90">
								{experience.highlights.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
