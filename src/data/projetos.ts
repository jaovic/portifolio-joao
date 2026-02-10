export interface Projeto {
    slug: string;
    titulo: string;
    descricao: string;
    stack: string[];
}

export const projetos: Projeto[] = [
    {
        slug: "sistema-financeiro",
        titulo: "Sistema Financeiro",
        descricao:
            "Plataforma para controle financeiro com foco em performance e consistência de dados.",
        stack: ["Next.js", "Laravel", "PostgreSQL"],
    },
    {
        slug: "dashboard-analytics",
        titulo: "Dashboard de Analytics",
        descricao:
            "Dashboard em tempo real com visualização clara e decisões orientadas a dados.",
        stack: ["React", "Node.js", "Redis"],
    },
    {
        slug: "ecommerce-headless",
        titulo: "E-commerce Headless",
        descricao:
            "Arquitetura headless focada em SEO, velocidade e escalabilidade.",
        stack: ["Next.js", "Stripe", "Prisma"],
    },
];
