"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const { t } = useTranslation();

	return (
		<section className="min-h-svh flex items-center py-16">
			<div className="max-w-6xl mx-auto px-6 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* TEXT */}
					<div className="space-y-8">
						{/* HELLO */}
						<p className="text-lg tracking-wide text-zinc-400 flex items-center gap-2">
							<span>{t("hello")}</span>
							<span className="text-orange-500 text-xl">•</span>
						</p>

						{/* NAME + LINE */}
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<span className="block h-[2px] w-10 md:w-16 bg-orange-500 shrink-0" />
								<h1 className="text-4xl md:text-6xl font-bold">
									{t("welcome")}
								</h1>
							</div>

							<h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
								{t("position")}
							</h2>
						</div>

						<p className="text-zinc-400 max-w-md whitespace-pre-line">
							{t("description")}
						</p>

						{/* ACTIONS */}
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contato"
								className="px-6 py-3 bg-orange-500 text-black font-medium text-center hover:opacity-90 transition"
							>
								{t("contact")}
							</Link>

							<Link
								href="/resume"
								className="px-6 py-3 border border-orange-500 text-orange-500 text-center hover:bg-orange-500 hover:text-black transition"
							>
								{t("resume")}
							</Link>
						</div>
					</div>

					{/* IMAGE */}
					<div className="relative flex justify-center mt-12 md:mt-0">
						<div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-8 border-orange-500/80" />

						<div className="relative z-10 w-[220px] h-[300px] md:w-[280px] md:h-[380px]">
							<Image
								src="/foto-perfil.jpg"
								alt="João Fernandes"
								fill
								priority
								className="object-cover rounded-2xl shadow-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
