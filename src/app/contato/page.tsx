"use client";

import { Mail, Phone, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContatoPage() {
	const { t } = useTranslation();

	return (
		<section className="py-20 space-y-8 max-w-xl">
			<h1 className="text-4xl font-bold tracking-tight">
				{t("contact_page.title")}
			</h1>

			<p className="text-[color:var(--muted-foreground)] text-lg leading-relaxed">
				{t("contact_page.description")}
			</p>

			<div className="flex flex-col gap-4 mt-8">
				<a
					href="mailto:jvmsf05@gmail.com"
					className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-200"
				>
					<Mail
						size={20}
						className="text-[color:var(--muted-foreground)] group-hover:text-orange-500 transition-colors"
					/>
					<span className="text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)] transition-colors">
						{t("contact_page.methods.email")}
					</span>
				</a>

				<a
					href="https://wa.me/5531997042924"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-200"
				>
					<Phone
						size={20}
						className="text-[color:var(--muted-foreground)] group-hover:text-orange-500 transition-colors"
					/>
					<span className="text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)] transition-colors">
						{t("contact_page.methods.whatsapp")}
					</span>
				</a>

				<a
					href="https://www.linkedin.com/in/joao-victor-martins-silva/"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-200"
				>
					<Linkedin
						size={20}
						className="text-[color:var(--muted-foreground)] group-hover:text-orange-500 transition-colors"
					/>
					<span className="text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)] transition-colors">
						{t("contact_page.methods.linkedin")}
					</span>
				</a>
			</div>
		</section>
	);
}
