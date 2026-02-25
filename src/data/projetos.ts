export interface Projeto {
	slug: string;
	tituloKey: string;
	descricaoKey: string;
	stack: string[];
}

export const projetos: Projeto[] = [
	{
		slug: "sistema-financeiro",
		tituloKey: "projects_page.items.sistema_financeiro.title",
		descricaoKey: "projects_page.items.sistema_financeiro.description",
		stack: ["Next.js", "Laravel", "PostgreSQL"],
	},
	{
		slug: "dashboard-analytics",
		tituloKey: "projects_page.items.dashboard_analytics.title",
		descricaoKey: "projects_page.items.dashboard_analytics.description",
		stack: ["React", "Node.js", "Redis"],
	},
	{
		slug: "ecommerce-headless",
		tituloKey: "projects_page.items.ecommerce_headless.title",
		descricaoKey: "projects_page.items.ecommerce_headless.description",
		stack: ["Next.js", "Stripe", "Prisma"],
	},
];
