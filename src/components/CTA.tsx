"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CTA() {
	const { t } = useTranslation();

	return (
		<div className="flex gap-4">
			<Link
				href="/projetos"
				className="px-6 py-3 bg-white text-black font-medium"
			>
				{t("cta.viewProjects")}
			</Link>

			<Link
				href="/contato"
				className="px-6 py-3 border border-zinc-700 text-zinc-300"
			>
				{t("cta.talkToMe")}
			</Link>
		</div>
	);
}
