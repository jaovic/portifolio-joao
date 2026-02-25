"use client";

export default function SobrePage() {
	return (
		<section className="py-20 px-6 max-w-3xl space-y-10">
			<div className="space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
					Sobre Mim
				</h1>

				<p className="text-lg text-[color:var(--muted-foreground)] leading-relaxed">
					Sou desenvolvedor full stack com foco em arquitetura sólida,
					manutenibilidade e performance. Gosto de construir sistemas que
					aguentem escala e continuem simples de evoluir.
				</p>
			</div>

			<div className="space-y-6 text-[color:var(--foreground)]/90 leading-relaxed">
				<p>
					Atuo principalmente com back-end, mas tenho forte entendimento de
					front-end e experiência do usuário. Meu objetivo é reduzir
					complexidade desnecessária e criar soluções pragmáticas que entreguem
					valor real para o negócio.
				</p>

				<p>
					Busco equilíbrio entre simplicidade e profundidade técnica, aplicando
					abstrações quando realmente agregam clareza, escalabilidade e
					manutenção no longo prazo.
				</p>
			</div>

			<div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
				<h2 className="text-xl font-semibold mb-4">Princípios</h2>

				<ul className="space-y-3 text-[color:var(--foreground)]/85">
					<li>Código claro e pragmático</li>
					<li>Performance como prioridade</li>
					<li>Foco na experiência do usuário</li>
				</ul>
			</div>
		</section>
	);
}
