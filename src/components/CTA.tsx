import Link from "next/link";

export default function CTA() {
	return (
		<div className="flex gap-4">
			<Link
				href="/projetos"
				className="px-6 py-3 bg-white text-black font-medium"
			>
				Ver projetos
			</Link>

			<Link
				href="/contato"
				className="px-6 py-3 border border-zinc-700 text-zinc-300"
			>
				Falar comigo
			</Link>
		</div>
	);
}
