export default function ContatoPage() {
	return (
		<section className="py-16 space-y-6 max-w-xl">
			<h1 className="text-4xl font-bold">Contato</h1>

			<p className="text-zinc-400">
				Quer falar sobre um projeto, vaga ou ideia? Me chama direto.
			</p>

			<div className="flex flex-col gap-3">
				<a href="mailto:seuemail@email.com">→ Email</a>
				<a href="https://wa.me/55999999999" target="_blank">
					→ WhatsApp
				</a>
				<a href="https://linkedin.com" target="_blank">
					→ LinkedIn
				</a>
			</div>
		</section>
	);
}
