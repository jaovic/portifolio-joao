"use client";

import Link from "next/link";

export default function ResumePage() {
	return (
		<section className="min-h-svh py-20 px-6">
			<div className="max-w-4xl mx-auto space-y-16">
				{/* HEADER */}
				<div className="space-y-4">
					<h1 className="text-4xl md:text-5xl font-bold">Currículo</h1>
					<p className="text-zinc-400">
						Experiência profissional e atuação em projetos de alta complexidade.
					</p>

					<Link href="/" className="text-orange-500 hover:underline">
						← Voltar para Home
					</Link>
				</div>

				{/* EXPERIENCE */}
				<div className="space-y-12">
					{/* Cactus Gaming */}
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold">Cactus Gaming</h2>
						<p className="text-orange-500 font-medium">
							Desenvolvedor Back-end
						</p>
						<p className="text-sm text-zinc-400">
							Dez 2025 – Atual · Nova Lima/MG · Híbrido
						</p>
						<ul className="list-disc pl-6 text-zinc-300 space-y-2">
							<li>
								Desenvolvimento de aplicações Back-end com PHP (Laravel), MySQL,
								Kafka e AWS.
							</li>
							<li>
								Desenvolvimento de plataforma whitelabel de iGaming com
								arquitetura flexível e escalável.
							</li>
						</ul>
					</div>

					{/* Petrus Software */}
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold">Petrus Software</h2>
						<p className="text-orange-500 font-medium">
							Desenvolvedor Full Stack
						</p>
						<p className="text-sm text-zinc-400">
							Set 2025 – Dez 2025 · Nova Lima/MG · Presencial
						</p>
						<ul className="list-disc pl-6 text-zinc-300 space-y-2">
							<li>
								Desenvolvimento full stack com Node.js, PHP, Nuxt.js, Vue.js e
								React.
							</li>
							<li>Plataforma whitelabel de iGaming utilizando Nuxt.js.</li>
							<li>
								Desenvolvimento de plataforma de ticketing com Next.js,
								incluindo checkout com PIX e cartão de crédito.
							</li>
						</ul>
					</div>

					{/* Pratique Fitness */}
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold">Pratique Fitness</h2>
						<p className="text-orange-500 font-medium">
							Desenvolvedor Full Stack
						</p>
						<p className="text-sm text-zinc-400">
							Abr 2025 – Set 2025 · Remoto
						</p>
						<ul className="list-disc pl-6 text-zinc-300 space-y-2">
							<li>Onboarding do aplicativo com foco em UX e retenção.</li>
							<li>
								Plataforma de relacionamento B2B com gestão de pagamentos e
								relatórios.
							</li>
							<li>
								Implementação de checkout com gateway de pagamento e validação
								de dados sensíveis.
							</li>
							<li>
								Sistema financeiro com hierarquia de aprovação e dashboards.
							</li>
						</ul>
					</div>

					{/* BP Tech */}
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold">BP Tech Ltda</h2>
						<p className="text-orange-500 font-medium">
							Desenvolvedor Full Stack
						</p>
						<p className="text-sm text-zinc-400">
							Dez 2023 – Abr 2025 · Belo Horizonte/MG · Híbrido
						</p>
						<ul className="list-disc pl-6 text-zinc-300 space-y-2">
							<li>Sistema de distribuição de carteira com +100.000 boletos.</li>
							<li>Gestão e pagamento de comissões.</li>
							<li>Integração com gateway Itaú (débito automático).</li>
							<li>Multi-cotações com AWS SQS e Lambda.</li>
							<li>Manutenção evolutiva e sustentação de sistemas legados.</li>
						</ul>
					</div>

					{/* QESH */}
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold">QESH | Open Finance</h2>
						<p className="text-orange-500 font-medium">
							Desenvolvedor Back-end Node.js
						</p>
						<p className="text-sm text-zinc-400">
							Jan 2022 – Abr 2023 · Nova Lima/MG · Híbrido
						</p>
						<ul className="list-disc pl-6 text-zinc-300 space-y-2">
							<li>Microsserviços para validação e compensação de TED e PIX.</li>
							<li>
								Implementação de segurança e validação de inputs em e-commerce.
							</li>
							<li>Participação no desenvolvimento de sistema IAM interno.</li>
							<li>Clean Architecture, SOLID, testes unitários e integração.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
