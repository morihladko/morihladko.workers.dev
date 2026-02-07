import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main className="max-w-6xl mx-auto px-6 py-12">
			{/* Bento Grid Container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-phosphor-dim">
				<HeroCell />
				<StatsCell />
				<SkillsCell />
				<TechStackCell />
				<VideoCell />
				<ExperienceCell />
			</div>

			<footer className="mt-px bg-void border-t border-phosphor-dim pt-6 text-center">
				<p className="text-xs font-display text-phosphor-dim tracking-wider">
					{"// SYS.COPYRIGHT © 2026 PETER MORIHLADKO"}
				</p>
			</footer>
		</main>
	);
}

/* ===== BENTO CELL COMPONENT ===== */

interface BentoCellProps {
	children: React.ReactNode;
	className?: string;
	span?: "1" | "2" | "3" | "row";
}

function BentoCell({ children, className, span = "1" }: BentoCellProps) {
	const spanClasses = {
		"1": "",
		"2": "md:col-span-2",
		"3": "lg:col-span-3",
		row: "md:col-span-2 lg:col-span-3",
	};

	return (
		<div
			className={cn(
				"bg-void p-6 relative bracket-corners bracket-corners-dim",
				spanClasses[span],
				className,
			)}
		>
			{children}
		</div>
	);
}

/* ===== SECTION HEADER ===== */

function SectionHeader({ children }: { children: string }) {
	return (
		<h2 className="font-display text-xs tracking-wider text-phosphor-dim mb-4 flex items-center gap-2">
			<span className="text-phosphor">{"//"}</span>
			<span>{children}</span>
		</h2>
	);
}

/* ===== HERO CELL ===== */

function HeroCell() {
	return (
		<BentoCell span="2" className="py-12">
			{/* Crosshair accent */}
			<span className="absolute top-4 left-4 text-phosphor-dim text-xs font-display">
				+
			</span>
			<span className="absolute top-4 right-4 text-phosphor-dim text-xs font-display">
				01.PROFILE
			</span>

			<h1 className="font-display text-4xl md:text-5xl text-glow-lg mb-4 tracking-wider">
				PETER MORIHLADKO
			</h1>
			<p className="text-phosphor-dim text-lg max-w-xl leading-relaxed">
				Software Developer. Remote-first. Based in Czechia. Building robust systems, exploring new technologies, crafting code AI can learn from.
			</p>

			{/* Status indicator */}
			<div className="mt-8 flex items-center gap-3 text-xs font-display">
				<span className="w-2 h-2 bg-phosphor box-glow animate-pulse" />
				<span className="text-phosphor-dim">STATUS: Open for collaboration</span>
				<span className="painted-emoji bg-phosphor ml-4">🌐</span>
				<span className="text-phosphor-dim">LOC: Prague</span>
				<span className="text-phosphor-dim ml-4">AVAILABILITY: Globally</span>
			</div>
		</BentoCell>
	);
}

/* ===== STATS CELL ===== */

function StatsCell() {
	return (
		<BentoCell>
			<SectionHeader>TELEMETRY</SectionHeader>

			<div className="grid grid-cols-2 gap-3">
				<StatBlock label="YRS EXP" value="17+" />
				<StatBlock label="STACK" value="FULL" />
				<StatBlock label="LANGS" value="5+" />
				<StatBlock label="STATUS" value="OPEN" highlight />
			</div>
		</BentoCell>
	);
}

function StatBlock({
	label,
	value,
	highlight,
}: {
	label: string;
	value: string;
	highlight?: boolean;
}) {
	return (
		<div
			className={cn(
				"border border-phosphor-dim p-3 text-center",
				highlight && "border-phosphor box-glow",
			)}
		>
			<div
				className={cn(
					"font-display text-xl",
					highlight ? "text-glow-md" : "text-glow",
				)}
			>
				{value}
			</div>
			<div className="text-[10px] text-phosphor-dim font-display mt-1 tracking-wider">
				{label}
			</div>
		</div>
	);
}

/* ===== SKILLS CELL ===== */

function SkillsCell() {
	const skills = [
		{ name: "PYTHON", level: 90 },
		{ name: "TYPESCRIPT", level: 80 },
		{ name: "FRONTEND", level: 75 },
		{ name: "BACKEND", level: 85 },
		{ name: "INFRA", level: 65 },
	];

	return (
		<BentoCell>
			<SectionHeader>CORE SYSTEMS</SectionHeader>

			<div className="space-y-3">
				{skills.map((skill) => (
					<SkillBar key={skill.name} {...skill} />
				))}
			</div>
		</BentoCell>
	);
}

function SkillBar({ name, level }: { name: string; level: number }) {
	const segments = 10;
	const filledSegments = Math.round((level / 100) * segments);

	return (
		<div className="space-y-1">
			<div className="flex justify-between text-xs font-display">
				<span>{name}</span>
				<span className="text-phosphor-dim">{level}%</span>
			</div>
			<div className="flex gap-0.5">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
					<div
						key={`seg-${i}`}
						className={cn(
							"h-2 flex-1 transition-all",
							i < filledSegments
								? "bg-phosphor box-glow"
								: "bg-phosphor-dim/20",
						)}
					/>
				))}
			</div>
		</div>
	);
}

/* ===== TECH STACK CELL ===== */

function TechStackCell() {
	const stacks = [
		{ category: "LANG", items: "TypeScript, Python, SQL, C" },
		{ category: "FRONT", items: "React, Tanstack, Angular" },
		{ category: "BACK", items: "FastAPI, Flask, Node.js, Django" },
		{ category: "DATA", items: "PostgreSQL, Mongo, Redis" },
		{ category: "INFRA", items: "GCloud, Docker, Ansible, Linux" },
	];

	return (
		<BentoCell>
			<SectionHeader>TECH MATRIX</SectionHeader>

			<div className="space-y-2 text-sm">
				{stacks.map((stack) => (
					<div key={stack.category} className="flex gap-2">
						<span className="text-phosphor font-display text-xs w-12 shrink-0">
							{stack.category}
						</span>
						<span className="text-phosphor-dim">{stack.items}</span>
					</div>
				))}
			</div>
		</BentoCell>
	);
}

/* ===== VIDEO CELL ===== */

function VideoCell() {
	return (
		<BentoCell className="flex items-center justify-center p-0 overflow-hidden">
			<video
				className="w-full h-full object-cover sepia brightness-[0.8] hue-rotate-[10deg] saturate-[3]"
				autoPlay
				muted
				loop
				playsInline
			>
				<source src="/doom.webm" type="video/webm" />
				<source src="/doom.mp4" type="video/mp4" />
			</video>
		</BentoCell>
	);
}

/* ===== EXPERIENCE CELL ===== */

function ExperienceCell() {
	const experiences = [
		{
			title: "PYTHON BACKEND DEVELOPER",
			company: "MEME.COM",
			location: "PRAGUE / REMOTE",
			period: "2022-2025",
			highlights: [
				"Multi-chain indexers and analytics services for NFT/token data",
				"Flask/FastAPI backend on Google Cloud infrastructure",
				"PostgreSQL, Redis, Docker Swarm, Gitlab, Cloudflare stack",
			],
		},
		{
			title: "MOBILE APPLICATION DEVELOPER",
			company: "INTELINO",
			location: "CA / REMOTE",
			period: "2021-2022",
			highlights: [
				"React Native/Expo iOS app with TypeScript",
				"Bluetooth LE communication with robotic smart trains",
			],
		},
		{
			title: "FRONTEND / PYTHON DEVELOPER",
			company: "OZOBOT",
			location: "PRAGUE / HYBRID",
			period: "2017-2021",
			highlights: [
				"Angular web frontends for educational robotics",
				"GitHub CI/CD pipelines for Google Cloud deployments",
				"Python tools for Bluetooth LE robot communication",
			],
		},
		{
			title: "FRONTEND / BACKEND DEVELOPER",
			company: "ATTEQ SRO",
			location: "PRAGUE / HYBRID",
			period: "2007-2016",
			highlights: [
				"Full-stack PHP, Python, Django, JavaScript development",
				"High-traffic online magazines for Zoznam.sk network",
			],
		},
	];

	return (
		<BentoCell span="row">
			<SectionHeader>EXPERIENCE LOG</SectionHeader>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{experiences.map((exp, idx) => (
					<ExperienceEntry key={exp.company} {...exp} index={idx} />
				))}
			</div>
		</BentoCell>
	);
}

function ExperienceEntry({
	title,
	company,
	location,
	period,
	highlights,
	index,
}: {
	title: string;
	company: string;
	location: string;
	period: string;
	highlights: string[];
	index: number;
}) {
	return (
		<article className="border-l border-phosphor-dim pl-4 relative">
			{/* Timeline dot */}
			<span className="absolute -left-[3px] top-0 w-1.5 h-1.5 bg-phosphor box-glow" />

			{/* Index marker */}
			<span className="absolute -left-8 top-0 text-[10px] font-display text-phosphor-dim">
				{String(index + 1).padStart(2, "0")}
			</span>

			<header className="mb-2">
				<h3 className="font-display text-sm tracking-wider text-glow">
					{title}
				</h3>
				<p className="text-[10px] text-phosphor-dim font-display tracking-wider mt-1">
					{company} {"//"} {location} {"//"} {period}
				</p>
			</header>

			<ul className="space-y-1 text-sm text-phosphor-dim">
				{highlights.map((item) => (
					<li key={item} className="flex items-start gap-2">
						<span className="text-phosphor text-xs mt-0.5">{">"}</span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</article>
	);
}
