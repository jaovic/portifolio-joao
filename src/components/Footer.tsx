export default function Footer() {
	return (
		<footer className="border-t border-zinc-800 mt-24">
			<div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex justify-between">
				<span>© {new Date().getFullYear()} Xão</span>

				<div className="flex gap-4">
					<a href="https://github.com" target="_blank">
						GitHub
					</a>
					<a href="https://linkedin.com" target="_blank">
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
