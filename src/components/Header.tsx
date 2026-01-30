import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="border-b border-phosphor-dim">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					to="/"
					className="font-display text-lg tracking-widest text-glow hover:text-glow-lg transition-all"
				>
					PETER MORIHLADKO
				</Link>

				<nav>
					<ul className="flex gap-1 list-none m-0 p-0">
						<NavItem href="https://github.com/petermorihladko" label="GITHUB" />
						<NavItem
							href="https://linkedin.com/in/petermorihladko"
							label="LINKEDIN"
						/>
						<NavItem href="mailto:hello@morihladko.com" label="EMAIL" />
					</ul>
				</nav>
			</div>
		</header>
	);
}

function NavItem({ href, label }: { href: string; label: string }) {
	return (
		<li>
			<a
				href={href}
				className="block px-4 py-2 font-display text-xs tracking-wider border border-transparent hover:border-phosphor-dim hover:text-glow transition-all"
			>
				[ {label} ]
			</a>
		</li>
	);
}
