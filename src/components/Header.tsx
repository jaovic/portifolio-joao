"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
	const { t, i18n } = useTranslation();
	const pathname = usePathname();
	const { theme, toggleTheme } = useTheme();
	const [open, setOpen] = useState(false);

	function changeLanguage(lang: "pt" | "en" | "es") {
		i18n.changeLanguage(lang);
	}

	function isActive(path: string) {
		if (path === "/" && pathname === "/") return true;
		if (path === "/") return false;
		return pathname.startsWith(path);
	}

	function closeMenu() {
		setOpen(false);
	}

	const navBase =
		"relative text-lg text-zinc-400 transition-colors duration-200 hover:text-orange-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

	const navActive = "text-orange-500 after:w-full after:bg-orange-500";

	const langBase =
		"relative text-xs uppercase tracking-widest transition-colors duration-200 hover:text-orange-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

	const langActive = "text-orange-500 after:w-full";

	const iconButton =
		"p-2 border border-zinc-700 rounded-full transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 active:scale-95";

	return (
		<header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950 text-white">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="font-bold tracking-widest text-sm text-zinc-400 hover:text-orange-500 transition-colors"
				>
					{t("title")}
				</Link>

				{/* DESKTOP */}
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="/"
						className={`${navBase} ${isActive("/") ? navActive : ""}`}
					>
						{t("home")}
					</Link>

					<Link
						href="/projetos"
						className={`${navBase} ${isActive("/projetos") ? navActive : ""}`}
					>
						{t("projects")}
					</Link>

					<Link
						href="/sobre"
						className={`${navBase} ${isActive("/sobre") ? navActive : ""}`}
					>
						{t("about")}
					</Link>

					<Link
						href="/contato"
						className={`${navBase} ${isActive("/contato") ? navActive : ""}`}
					>
						{t("contact")}
					</Link>

					<div className="flex gap-4 ml-6">
						{(["pt", "en", "es"] as const).map((lang) => (
							<button
								key={lang}
								onClick={() => changeLanguage(lang)}
								className={`${langBase} ${
									i18n.language === lang ? langActive : "text-zinc-500"
								}`}
							>
								{lang}
							</button>
						))}
					</div>

					<button onClick={toggleTheme} className={`${iconButton} ml-4`}>
						{theme === "dark" ? (
							<Sun size={16} className="text-orange-400 transition-colors" />
						) : (
							<Moon size={16} className="transition-colors" />
						)}
					</button>
				</nav>

				{/* MOBILE ACTIONS */}
				<div className="md:hidden flex items-center gap-3">
					<button onClick={toggleTheme} className={iconButton}>
						{theme === "dark" ? (
							<Sun size={18} className="text-orange-400" />
						) : (
							<Moon size={18} />
						)}
					</button>

					<button
						onClick={() => setOpen(true)}
						className="p-2 border border-zinc-700 rounded-lg transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 active:scale-95"
					>
						<Menu size={20} />
					</button>
				</div>
			</div>

			{/* OVERLAY */}
			<div
				className={`fixed inset-0 z-40 bg-black/80 transition-opacity duration-300 ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={() => setOpen(false)}
			/>

			{/* MOBILE MENU */}
			<div
				className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm
				bg-zinc-950 shadow-2xl border-l border-zinc-800
				transform transition-transform duration-300 ease-out
				${open ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="flex justify-end p-6">
					<button
						onClick={() => setOpen(false)}
						className="transition-transform duration-200 hover:scale-110"
					>
						<X size={28} />
					</button>
				</div>

				<nav className="flex flex-col items-center gap-8 mt-10">
					<Link href="/" onClick={closeMenu} className={navBase}>
						{t("home")}
					</Link>
					<Link href="/projetos" onClick={closeMenu} className={navBase}>
						{t("projects")}
					</Link>
					<Link href="/sobre" onClick={closeMenu} className={navBase}>
						{t("about")}
					</Link>
					<Link href="/contato" onClick={closeMenu} className={navBase}>
						{t("contact")}
					</Link>

					<div className="flex gap-6 mt-10">
						{(["pt", "en", "es"] as const).map((lang) => (
							<button
								key={lang}
								onClick={() => changeLanguage(lang)}
								className={`${langBase} ${
									i18n.language === lang ? langActive : "text-zinc-500"
								}`}
							>
								{lang}
							</button>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
