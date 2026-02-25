"use client";

import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/ProjectCard";
import { projetos } from "@/data/projetos";

export default function ProjetosPage() {
	const { t } = useTranslation();

	return (
		<section className="py-16 space-y-12">
			<header className="space-y-2">
				<h1 className="text-4xl font-bold">{t("projects_page.title")}</h1>
				<p className="text-[color:var(--muted-foreground)] max-w-2xl">
					{t("projects_page.subtitle")}
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-2">
				{projetos.map((projeto) => (
					<ProjectCard key={projeto.slug} projeto={projeto} />
				))}
			</div>
		</section>
	);
}
