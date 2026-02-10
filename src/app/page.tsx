"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const { t } = useTranslation();

	return (
		<section className="h-screen flex items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
				<div className="flex flex-col justify-center space-y-8">
					<h1 className="text-4xl md:text-6xl font-bold">{t("welcome")}</h1>

					<p className="text-zinc-400 whitespace-pre-line max-w-md">
						{t("description")}
					</p>

					<div className="flex gap-4">
						<Link
							href="/contato"
							className="px-6 py-3 bg-orange-500 text-black font-medium"
						>
							{t("contact")}
						</Link>
					</div>
				</div>

				<div className="relative flex items-center justify-center">
					<div className="absolute w-[380px] h-[380px] rounded-full border-8 border-orange-500/80" />

					<div className="relative z-10 w-[280px] h-[380px]">
						<Image
							src="/foto-perfil.jpg"
							alt="João Fernandes"
							width={280}
							height={380}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
