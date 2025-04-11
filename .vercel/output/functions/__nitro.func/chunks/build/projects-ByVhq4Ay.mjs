import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const p = "/_server/assets/app-Dl97qwoK.css", i = () => import('./projects-BTg8JVrf.mjs'), t = o("app_routes_projects_tsx--getProjects_createServerFn_handler", "/_server", (e, o) => r.__executeServer(e, o)), r = createServerFn({ method: "GET" }).handler(t, async () => (await fetch("https://api.github.com/users/enyichiaagu/repos?sort=updated&per_page=5", { headers: { "X-GitHub-Api-Version": "2022-11-28", accept: "application/vnd.github+json" } })).json()), l = createFileRoute("/projects")({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "projects" }], links: [{ rel: "stylesheet", href: p }] }), component: lazyRouteComponent(i, "component", () => l.ssr), loader: () => r() }), _ = Object.freeze(Object.defineProperty({ __proto__: null, getProjects_createServerFn_handler: t }, Symbol.toStringTag, { value: "Module" }));

export { p as a, _ as p };
//# sourceMappingURL=projects-ByVhq4Ay.mjs.map
