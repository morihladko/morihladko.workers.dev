import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="border-b border-phosphor-dim">
			<div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
				<Link
					to="/"
					className="font-display text-lg tracking-widest text-glow hover:text-glow-lg transition-all"
				>
					PETER MORIHLADKO
				</Link>

				<nav>
					<ul className="flex flex-wrap gap-1 list-none m-0 p-0 [&>li:first-child>a]:pl-0">
						<NavItem href="https://github.com/morihladko" label="GITHUB" />
						<NavItem
							href="https://linkedin.com/in/morihladko"
							label="LINKEDIN"
						/>
						<NavItem href="https://twitter.com/morihladko" label="TWITTER" />
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
				className="block px-2 md:px-4 py-2 font-display text-xs tracking-wider border border-transparent hover:border-phosphor-dim hover:text-glow transition-all"
			>
				[ {label} ]
			</a>
		</li>
	);
}
