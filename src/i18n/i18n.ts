import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const title = "< JOAODEV.COM / >";

const resources = {
    en: {
        translation: {
            title,
            hello: "Hello",
            home: "Home",
            welcome: "Welcome to my portfolio",
            description: `Full stack developer with 4 years of experience, specialized in Vue.js, React, Next.js, Nest.js, and Node.js.

Throughout his career, he has worked on complex solutions for fintechs and the development of robust and secure banking APIs.

He has solid knowledge of frontend and backend development, integration with financial systems, and implementation of security practices.`,
            experience: "Experience",
            position: "Full Stack Developer",
            about: "About Me",
            projects: "Personal Projects",
            skills: "Skills",
            testimonials: "Testimonials",
            contact: "Contact",
            resume: "My Resume",
            profile_alt: "João Fernandes",
            contact_page: {
                title: "Contact",
                description:
                    "Want to talk about a project, a role, or an idea? Reach out directly.",
                methods: {
                    email: "Email",
                    whatsapp: "WhatsApp",
                    linkedin: "LinkedIn",
                },
            },
            about_page: {
                title: "About Me",
                intro:
                    "I'm a full stack developer focused on solid architecture, maintainability, and performance. I like building systems that scale and remain simple to evolve.",
                body: [
                    "I work mainly with back-end, but I have a strong understanding of front-end and user experience. My goal is to reduce unnecessary complexity and create pragmatic solutions that deliver real business value.",
                    "I seek a balance between simplicity and technical depth, applying abstractions only when they truly add clarity, scalability, and long-term maintainability.",
                ],
                principlesTitle: "Principles",
                principles: [
                    "Clear and pragmatic code",
                    "Performance as a priority",
                    "Focus on user experience",
                ],
            },
            projects_page: {
                title: "Projects",
                subtitle:
                    "A few systems I've built focusing on real impact, maintainability, and performance.",
                items: {
                    sistema_financeiro: {
                        title: "Financial System",
                        description:
                            "Platform for financial control focused on performance and data consistency.",
                    },
                    dashboard_analytics: {
                        title: "Analytics Dashboard",
                        description:
                            "Real-time dashboard with clear visualization and data-driven decisions.",
                    },
                    ecommerce_headless: {
                        title: "Headless E-commerce",
                        description:
                            "Headless architecture focused on SEO, speed, and scalability.",
                    },
                },
            },
            resume_page: {
                title: "Resume",
                subtitle: "Professional experience and work on high-complexity projects.",
                backHome: "← Back to Home",
                experiences: [
                    {
                        company: "Cactus Gaming",
                        role: "Back-end Developer",
                        period: "Dec 2025 – Present · Nova Lima/MG · Hybrid",
                        highlights: [
                            "Back-end application development with PHP (Laravel), MySQL, Kafka, and AWS.",
                            "Development of a whitelabel iGaming platform with flexible, scalable architecture.",
                        ],
                    },
                    {
                        company: "Petrus Software",
                        role: "Full Stack Developer",
                        period: "Sep 2025 – Dec 2025 · Nova Lima/MG · On-site",
                        highlights: [
                            "Full stack development with Node.js, PHP, Nuxt.js, Vue.js, and React.",
                            "Whitelabel iGaming platform using Nuxt.js.",
                            "Ticketing platform development with Next.js, including checkout with PIX and credit card.",
                        ],
                    },
                    {
                        company: "Pratique Fitness",
                        role: "Full Stack Developer",
                        period: "Apr 2025 – Sep 2025 · Remote",
                        highlights: [
                            "App onboarding focused on UX and retention.",
                            "B2B relationship platform with payment management and reporting.",
                            "Checkout implementation with payment gateway and sensitive data validation.",
                            "Financial system with approval hierarchy and dashboards.",
                        ],
                    },
                    {
                        company: "BP Tech Ltda",
                        role: "Full Stack Developer",
                        period: "Dec 2023 – Apr 2025 · Belo Horizonte/MG · Hybrid",
                        highlights: [
                            "Wallet distribution system with 100,000+ boletos.",
                            "Commission management and payments.",
                            "Integration with Itaú gateway (automatic debit).",
                            "Multi-quotations with AWS SQS and Lambda.",
                            "Maintenance and support of legacy systems.",
                        ],
                    },
                    {
                        company: "QESH | Open Finance",
                        role: "Back-end Node.js Developer",
                        period: "Jan 2022 – Apr 2023 · Nova Lima/MG · Hybrid",
                        highlights: [
                            "Microservices for TED and PIX validation and clearing.",
                            "Security implementation and input validation in e-commerce.",
                            "Participation in the development of an internal IAM system.",
                            "Clean Architecture, SOLID, unit and integration tests.",
                        ],
                    },
                ],
            },
            footer: {
                rights: "© {{year}}",
                github: "GitHub",
                linkedin: "LinkedIn",
            },
            cta: {
                viewProjects: "View projects",
                talkToMe: "Talk to me",
            },
        },
    },
    pt: {
        translation: {
            title,
            hello: "Olá",
            home: "Início",
            welcome: "Bem-vindo ao meu portfólio",
            description: `Desenvolvedor full stack com 4 anos de experiência, especializado em Vue.js, React, Next.js, Nest.js e Node.js.

Durante sua carreira, trabalhou em soluções complexas para fintechs e no desenvolvimento de APIs bancárias robustas e seguras.

Possui sólidos conhecimentos de desenvolvimento frontend e backend, integração com sistemas financeiros e implementação de práticas de segurança.`,
            experience: "Experiência",
            position: "Desenvolvedor Full Stack",
            about: "Sobre mim",
            projects: "Projetos",
            skills: "Habilidades",
            testimonials: "Depoimentos",
            contact: "Contato",
            resume: "Meu Currículo",
            profile_alt: "João Fernandes",
            contact_page: {
                title: "Contato",
                description:
                    "Quer falar sobre um projeto, vaga ou ideia? Me chama direto.",
                methods: {
                    email: "Email",
                    whatsapp: "WhatsApp",
                    linkedin: "LinkedIn",
                },
            },
            about_page: {
                title: "Sobre Mim",
                intro:
                    "Sou desenvolvedor full stack com foco em arquitetura sólida, manutenibilidade e performance. Gosto de construir sistemas que aguentem escala e continuem simples de evoluir.",
                body: [
                    "Atuo principalmente com back-end, mas tenho forte entendimento de front-end e experiência do usuário. Meu objetivo é reduzir complexidade desnecessária e criar soluções pragmáticas que entreguem valor real para o negócio.",
                    "Busco equilíbrio entre simplicidade e profundidade técnica, aplicando abstrações quando realmente agregam clareza, escalabilidade e manutenção no longo prazo.",
                ],
                principlesTitle: "Princípios",
                principles: [
                    "Código claro e pragmático",
                    "Performance como prioridade",
                    "Foco na experiência do usuário",
                ],
            },
            projects_page: {
                title: "Projetos",
                subtitle:
                    "Alguns sistemas que construí focando em impacto real, manutenibilidade e performance.",
                items: {
                    sistema_financeiro: {
                        title: "Sistema Financeiro",
                        description:
                            "Plataforma para controle financeiro com foco em performance e consistência de dados.",
                    },
                    dashboard_analytics: {
                        title: "Dashboard de Analytics",
                        description:
                            "Dashboard em tempo real com visualização clara e decisões orientadas a dados.",
                    },
                    ecommerce_headless: {
                        title: "E-commerce Headless",
                        description:
                            "Arquitetura headless focada em SEO, velocidade e escalabilidade.",
                    },
                },
            },
            resume_page: {
                title: "Currículo",
                subtitle:
                    "Experiência profissional e atuação em projetos de alta complexidade.",
                backHome: "← Voltar para Home",
                experiences: [
                    {
                        company: "Cactus Gaming",
                        role: "Desenvolvedor Back-end",
                        period: "Dez 2025 – Atual · Nova Lima/MG · Híbrido",
                        highlights: [
                            "Desenvolvimento de aplicações Back-end com PHP (Laravel), MySQL, Kafka e AWS.",
                            "Desenvolvimento de plataforma whitelabel de iGaming com arquitetura flexível e escalável.",
                        ],
                    },
                    {
                        company: "Petrus Software",
                        role: "Desenvolvedor Full Stack",
                        period: "Set 2025 – Dez 2025 · Nova Lima/MG · Presencial",
                        highlights: [
                            "Desenvolvimento full stack com Node.js, PHP, Nuxt.js, Vue.js e React.",
                            "Plataforma whitelabel de iGaming utilizando Nuxt.js.",
                            "Desenvolvimento de plataforma de ticketing com Next.js, incluindo checkout com PIX e cartão de crédito.",
                        ],
                    },
                    {
                        company: "Pratique Fitness",
                        role: "Desenvolvedor Full Stack",
                        period: "Abr 2025 – Set 2025 · Remoto",
                        highlights: [
                            "Onboarding do aplicativo com foco em UX e retenção.",
                            "Plataforma de relacionamento B2B com gestão de pagamentos e relatórios.",
                            "Implementação de checkout com gateway de pagamento e validação de dados sensíveis.",
                            "Sistema financeiro com hierarquia de aprovação e dashboards.",
                        ],
                    },
                    {
                        company: "BP Tech Ltda",
                        role: "Desenvolvedor Full Stack",
                        period: "Dez 2023 – Abr 2025 · Belo Horizonte/MG · Híbrido",
                        highlights: [
                            "Sistema de distribuição de carteira com +100.000 boletos.",
                            "Gestão e pagamento de comissões.",
                            "Integração com gateway Itaú (débito automático).",
                            "Multi-cotações com AWS SQS e Lambda.",
                            "Manutenção evolutiva e sustentação de sistemas legados.",
                        ],
                    },
                    {
                        company: "QESH | Open Finance",
                        role: "Desenvolvedor Back-end Node.js",
                        period: "Jan 2022 – Abr 2023 · Nova Lima/MG · Híbrido",
                        highlights: [
                            "Microsserviços para validação e compensação de TED e PIX.",
                            "Implementação de segurança e validação de inputs em e-commerce.",
                            "Participação no desenvolvimento de sistema IAM interno.",
                            "Clean Architecture, SOLID, testes unitários e integração.",
                        ],
                    },
                ],
            },
            footer: {
                rights: "© {{year}}",
                github: "GitHub",
                linkedin: "LinkedIn",
            },
            cta: {
                viewProjects: "Ver projetos",
                talkToMe: "Falar comigo",
            },
        },
    },
    es: {
        translation: {
            title,
            hello: "Hola",
            home: "Inicio",
            welcome: "Bienvenido a mi portafolio",
            description: `Desarrollador full stack con 4 años de experiencia, especializado en Vue.js, React, Next.js, Nest.js y Node.js.

A lo largo de su carrera, ha trabajado en soluciones complejas para fintechs y en el desarrollo de APIs bancarias robustas y seguras.

Cuenta con sólidos conocimientos en desarrollo frontend y backend, integración con sistemas financieros e implementación de prácticas de seguridad.`,
            experience: "Experiencia",
            position: "Desarrollador Full Stack",
            about: "Sobre mí",
            projects: "Proyectos",
            skills: "Habilidades",
            testimonials: "Testimonios",
            contact: "Contacto",
            resume: "Mi Currículum",
            profile_alt: "João Fernandes",
            contact_page: {
                title: "Contacto",
                description:
                    "¿Quieres hablar sobre un proyecto, una vacante o una idea? Escríbeme directamente.",
                methods: {
                    email: "Email",
                    whatsapp: "WhatsApp",
                    linkedin: "LinkedIn",
                },
            },
            about_page: {
                title: "Sobre mí",
                intro:
                    "Soy desarrollador full stack con foco en arquitectura sólida, mantenibilidad y rendimiento. Me gusta construir sistemas que escalen y sigan siendo simples de evolucionar.",
                body: [
                    "Trabajo principalmente con back-end, pero tengo un fuerte entendimiento de front-end y experiencia de usuario. Mi objetivo es reducir la complejidad innecesaria y crear soluciones pragmáticas que entreguen valor real al negocio.",
                    "Busco equilibrio entre simplicidad y profundidad técnica, aplicando abstracciones solo cuando realmente aportan claridad, escalabilidad y mantenimiento a largo plazo.",
                ],
                principlesTitle: "Principios",
                principles: [
                    "Código claro y pragmático",
                    "Rendimiento como prioridad",
                    "Enfoque en la experiencia del usuario",
                ],
            },
            projects_page: {
                title: "Proyectos",
                subtitle:
                    "Algunos sistemas que construí enfocándome en impacto real, mantenibilidad y rendimiento.",
                items: {
                    sistema_financeiro: {
                        title: "Sistema Financiero",
                        description:
                            "Plataforma para control financiero con foco en rendimiento y consistencia de datos.",
                    },
                    dashboard_analytics: {
                        title: "Dashboard de Analíticas",
                        description:
                            "Dashboard en tiempo real con visualización clara y decisiones basadas en datos.",
                    },
                    ecommerce_headless: {
                        title: "E-commerce Headless",
                        description:
                            "Arquitectura headless enfocada en SEO, velocidad y escalabilidad.",
                    },
                },
            },
            resume_page: {
                title: "Currículum",
                subtitle:
                    "Experiencia profesional y trabajo en proyectos de alta complejidad.",
                backHome: "← Volver al inicio",
                experiences: [
                    {
                        company: "Cactus Gaming",
                        role: "Desarrollador Back-end",
                        period: "Dic 2025 – Actual · Nova Lima/MG · Híbrido",
                        highlights: [
                            "Desarrollo de aplicaciones back-end con PHP (Laravel), MySQL, Kafka y AWS.",
                            "Desarrollo de plataforma whitelabel de iGaming con arquitectura flexible y escalable.",
                        ],
                    },
                    {
                        company: "Petrus Software",
                        role: "Desarrollador Full Stack",
                        period: "Sep 2025 – Dic 2025 · Nova Lima/MG · Presencial",
                        highlights: [
                            "Desarrollo full stack con Node.js, PHP, Nuxt.js, Vue.js y React.",
                            "Plataforma whitelabel de iGaming usando Nuxt.js.",
                            "Desarrollo de plataforma de ticketing con Next.js, incluyendo checkout con PIX y tarjeta de crédito.",
                        ],
                    },
                    {
                        company: "Pratique Fitness",
                        role: "Desarrollador Full Stack",
                        period: "Abr 2025 – Sep 2025 · Remoto",
                        highlights: [
                            "Onboarding de la aplicación con foco en UX y retención.",
                            "Plataforma de relacionamiento B2B con gestión de pagos e informes.",
                            "Implementación de checkout con pasarela de pago y validación de datos sensibles.",
                            "Sistema financiero con jerarquía de aprobación y dashboards.",
                        ],
                    },
                    {
                        company: "BP Tech Ltda",
                        role: "Desarrollador Full Stack",
                        period: "Dic 2023 – Abr 2025 · Belo Horizonte/MG · Híbrido",
                        highlights: [
                            "Sistema de distribución de cartera con +100.000 boletos.",
                            "Gestión y pago de comisiones.",
                            "Integración con gateway Itaú (débito automático).",
                            "Multi-cotizaciones con AWS SQS y Lambda.",
                            "Mantenimiento evolutivo y soporte de sistemas legados.",
                        ],
                    },
                    {
                        company: "QESH | Open Finance",
                        role: "Desarrollador Back-end Node.js",
                        period: "Ene 2022 – Abr 2023 · Nova Lima/MG · Híbrido",
                        highlights: [
                            "Microservicios para validación y compensación de TED y PIX.",
                            "Implementación de seguridad y validación de inputs en e-commerce.",
                            "Participación en el desarrollo de un sistema IAM interno.",
                            "Clean Architecture, SOLID, pruebas unitarias e integración.",
                        ],
                    },
                ],
            },
            footer: {
                rights: "© {{year}}",
                github: "GitHub",
                linkedin: "LinkedIn",
            },
            cta: {
                viewProjects: "Ver proyectos",
                talkToMe: "Hablar conmigo",
            },
        },
    },
};

function getInitialLanguage() {
    if (typeof window === "undefined") return "pt";

    const storedLang = localStorage.getItem("lang");
    if (storedLang) return storedLang;

    const browserLang = navigator.language.split("-")[0];
    if (["pt", "en", "es"].includes(browserLang)) return browserLang;

    return "pt";
}

i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false,
    },
});

i18n.on("languageChanged", (lang) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("lang", lang);
    }
});

export default i18n;
