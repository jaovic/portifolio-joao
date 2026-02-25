"use client";

import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContatoPage() {
	return (
		<section className="py-20 space-y-8 max-w-xl">
			<h1 className="text-4xl font-bold tracking-tight">Contato</h1>

			<p className="text-zinc-400 text-lg leading-relaxed">
				Quer falar sobre um projeto, vaga ou ideia? Me chama direto.
			</p>

			<div className="flex flex-col gap-4 mt-8">
				<a
					href="mailto:jvmsf05@gmail.com"
					className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-200"
				>
					<Mail
						size={20}
						className="text-zinc-400 group-hover:text-orange-400 transition-colors"
					/>
					<span className="text-zinc-300 group-hover:text-white transition-colors">
						Email
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
						className="text-zinc-400 group-hover:text-orange-400 transition-colors"
					/>
					<span className="text-zinc-300 group-hover:text-white transition-colors">
						WhatsApp
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
						className="text-zinc-400 group-hover:text-orange-400 transition-colors"
					/>
					<span className="text-zinc-300 group-hover:text-white transition-colors">
						LinkedIn
					</span>
				</a>
			</div>
		</section>
	);
}
