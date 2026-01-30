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

function RootComponent() {
	return (
		<html lang="en">
			<head>
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
