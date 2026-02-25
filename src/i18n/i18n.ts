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
            description: `Full stack developer with 4 years of experience, specialized in Vue.js, React, Nest.js, and Node.js.

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
        },
    },
    pt: {
        translation: {
            title,
            hello: "Olá",
            home: "Início",
            welcome: "Bem-vindo ao meu portfólio",
            description: `Desenvolvedor full stack com 4 anos de experiência, especializado em Vue.js, React, Nest.js e Node.js.

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
        },
    },
    es: {
        translation: {
            title,
            hello: "Hola",
            home: "Inicio",
            welcome: "Bienvenido a mi portafolio",
            description: `Desarrollador full stack con 4 años de experiencia, especializado en Vue.js, React, Nest.js y Node.js.

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