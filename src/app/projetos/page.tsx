import ProjectCard from "@/components/ProjectCard";
import { projetos } from "@/data/projetos";

export default function ProjetosPage() {
	return (
		<section className="py-16 space-y-12">
			<header className="space-y-2">
				<h1 className="text-4xl font-bold">Projetos</h1>
				<p className="text-zinc-400 max-w-2xl">
					Alguns sistemas que construí focando em impacto real, manutenibilidade
					e performance.
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
