import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<header className="border-b border-phosphor-dim">
			<div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
				<Link
					to="/"
					className={`font-display text-lg tracking-widest transition-all ${
						isHomePage ? "invisible" : "text-glow hover:text-glow-lg"
					}`}
				>
					PETER MORIHLADKO
				</Link>

				<nav>
					<ul className="flex flex-wrap list-none m-0 p-0 -ml-1 md:-ml-4">
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
				className="block px-1 md:px-4 py-2 font-display text-xs tracking-wider border border-transparent hover:border-phosphor-dim hover:text-glow transition-all"
			>
				[ {label} ]
			</a>
		</li>
	);
}
