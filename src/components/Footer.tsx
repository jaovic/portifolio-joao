"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="border-t border-zinc-800 mt-24">
			<div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex justify-between">
				<span>{t("footer.rights", { year: new Date().getFullYear() })}</span>

				<div className="flex gap-4">
					<a href="https://github.com/jaovic" target="_blank">
						{t("footer.github")}
					</a>
					<a
						href="https://linkedin.com/in/joao-victor-martins-silva/"
						target="_blank"
					>
						{t("footer.linkedin")}
					</a>
				</div>
			</div>
		</footer>
	);
}
