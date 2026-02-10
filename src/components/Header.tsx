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
		return pathname.startsWith(path) && path !== "/";
	}

	function closeMenu() {
		setOpen(false);
	}

	const navItem = "text-lg hover:text-orange-400 transition-colors";
	const navItemActive = "text-orange-500";

	return (
		<header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950 text-white">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="font-bold tracking-widest text-sm hover:text-orange-500"
				>
					{t("title")}
				</Link>

				{/* DESKTOP */}
				<nav className="hidden md:flex items-center gap-8 text-zinc-400">
					<Link href="/" className={isActive("/") ? navItemActive : ""}>
						{t("home")}
					</Link>
					<Link
						href="/projetos"
						className={isActive("/projetos") ? navItemActive : ""}
					>
						{t("projects")}
					</Link>
					<Link
						href="/sobre"
						className={isActive("/sobre") ? navItemActive : ""}
					>
						{t("about")}
					</Link>
					<Link
						href="/contato"
						className={isActive("/contato") ? navItemActive : ""}
					>
						{t("contact")}
					</Link>

					<div className="flex gap-2 ml-6">
						{(["pt", "en", "es"] as const).map((lang) => (
							<button
								key={lang}
								onClick={() => changeLanguage(lang)}
								className={`text-xs uppercase ${
									i18n.language === lang ? "text-orange-500" : "text-zinc-400"
								}`}
							>
								{lang}
							</button>
						))}
					</div>

					<button
						onClick={toggleTheme}
						className="ml-4 p-2 border border-zinc-700 rounded-full"
					>
						{theme === "dark" ? (
							<Sun size={16} className="text-orange-400" />
						) : (
							<Moon size={16} />
						)}
					</button>
				</nav>

				{/* MOBILE ACTIONS */}
				<div className="md:hidden flex items-center gap-3">
					<button
						onClick={toggleTheme}
						className="p-2 border border-zinc-700 rounded-full"
					>
						{theme === "dark" ? (
							<Sun size={18} className="text-orange-400" />
						) : (
							<Moon size={18} />
						)}
					</button>

					<button
						onClick={() => setOpen(true)}
						className="p-2 border border-zinc-700 rounded-lg"
					>
						<Menu size={20} />
					</button>
				</div>
			</div>

			{/* OVERLAY */}
			<div
				className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
					open
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={closeMenu}
			/>

			{/* MOBILE MENU */}
			<div
				className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm
				bg-zinc-950 text-white
				transform transition-transform duration-300 ease-out
				${open ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="flex justify-end p-6">
					<button onClick={closeMenu}>
						<X size={28} />
					</button>
				</div>

				<nav className="flex flex-col items-center gap-8 mt-10">
					<Link href="/" onClick={closeMenu} className={navItem}>
						{t("home")}
					</Link>
					<Link href="/projetos" onClick={closeMenu} className={navItem}>
						{t("projects")}
					</Link>
					<Link href="/sobre" onClick={closeMenu} className={navItem}>
						{t("about")}
					</Link>
					<Link href="/contato" onClick={closeMenu} className={navItem}>
						{t("contact")}
					</Link>

					<div className="flex gap-6 mt-10">
						{(["pt", "en", "es"] as const).map((lang) => (
							<button
								key={lang}
								onClick={() => changeLanguage(lang)}
								className={`uppercase tracking-widest ${
									i18n.language === lang ? "text-orange-500" : "text-zinc-400"
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
