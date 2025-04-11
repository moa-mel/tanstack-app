import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { FaRegStar, FaCodeFork } from 'react-icons/fa6';
import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { a as p } from './projects-ByVhq4Ay.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import 'tiny-invariant';

const b = (e) => jsxs("a", { className: "px-6 py-4 rounded-md bg-green-50 shadow mb-5 block", href: e.url, children: [jsxs("div", { className: "flex justify-between mb-2", children: [jsx("span", { children: e.projectName }), jsxs("div", { className: "flex gap-3", children: [jsxs("span", { children: [e.stars, " ", jsx(FaRegStar, { className: "inline" })] }), jsxs("span", { children: [e.forks, " ", jsx(FaCodeFork, { className: "inline" })] })] })] }), jsx("div", { children: jsx("span", { className: "text-sm bg-blue-800 text-gray-50 px-1 py-0.5", children: e.language }) })] }), x = () => Promise.resolve().then(() => N), S = o("app_routes_projects_tsx--getProjects_createServerFn_handler", "/_server", (e, o) => a.__executeServer(e, o)), a = createServerFn({ method: "GET" }).handler(S, async () => (await fetch("https://api.github.com/users/enyichiaagu/repos?sort=updated&per_page=5", { headers: { "X-GitHub-Api-Version": "2022-11-28", accept: "application/vnd.github+json" } })).json()), n = createFileRoute("/projects")({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "projects" }], links: [{ rel: "stylesheet", href: p }] }), component: lazyRouteComponent(x, "component", () => n.ssr), loader: () => a() }), y = function() {
  const o = n.useLoaderData();
  return jsxs(Fragment, { children: [jsx("h2", { className: "text-2xl", children: "Projects" }), jsx("div", { className: "mt-2.5", children: o.map(({ full_name: s, html_url: c, language: i, stargazers_count: l, forks: p }, m) => jsx(b, { projectName: s, url: c, language: i, stars: l, forks: p }, m)) })] });
}, N = Object.freeze(Object.defineProperty({ __proto__: null, component: y }, Symbol.toStringTag, { value: "Module" }));

export { y as component };
//# sourceMappingURL=projects-BTg8JVrf.mjs.map
