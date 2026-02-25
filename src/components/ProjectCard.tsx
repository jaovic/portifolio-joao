"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Projeto } from "@/data/projetos";

interface Props {
	projeto: Projeto;
}

export default function ProjectCard({ projeto }: Props) {
	const { t } = useTranslation();

	return (
		<Link
			href={`/projetos/${projeto.slug}`}
			className="block border border-zinc-800 p-6 hover:border-zinc-600 transition"
		>
			<h3 className="text-xl font-semibold mb-2">{t(projeto.tituloKey)}</h3>

			<p className="text-zinc-400 mb-4">{t(projeto.descricaoKey)}</p>

			<div className="flex flex-wrap gap-2 text-xs text-zinc-500">
				{projeto.stack.map((tech) => (
					<span key={tech} className="border border-zinc-700 px-2 py-1">
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}
