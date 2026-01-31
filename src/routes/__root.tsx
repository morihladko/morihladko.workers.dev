import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import Header from "../components/Header";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Peter Morihladko - Software Engineer",
			},
			{
				name: "description",
				content:
					"Peter Morihladko - Software Engineer. Experience in Python, TypeScript, React, and cloud infrastructure.",
			},
		],
		links: [
			{
				rel: "preload",
				href: appCss,
				as: "style",
			},
			{
				rel: "preload",
				href: "/fonts/DepartureMono-Regular.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootComponent,
});

// Critical CSS inlined to prevent render-blocking
const criticalCss = `
:root{--void-black:#0d0d0d;--phosphor-amber:#ffb000}
body{background:#0d0d0d;color:#ffb000;font-family:ui-monospace,monospace;margin:0;min-height:100vh}
`;

function RootComponent() {
	return (
		<html lang="en">
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: static critical CSS, not user input */}
				<style dangerouslySetInnerHTML={{ __html: criticalCss }} />
				<HeadContent />
			</head>
			<body className="min-h-screen bg-void text-phosphor antialiased">
				<Header />
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
