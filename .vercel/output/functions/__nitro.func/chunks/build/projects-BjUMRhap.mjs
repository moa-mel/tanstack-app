import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { FaRegStar, FaCodeFork } from 'react-icons/fa6';
import { P as P$1 } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import '@tanstack/react-router';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const u = (r) => jsxs("a", { className: "px-6 py-4 rounded-md bg-green-50 shadow mb-5 block", href: r.url, children: [jsxs("div", { className: "flex justify-between mb-2", children: [jsx("span", { children: r.projectName }), jsxs("div", { className: "flex gap-3", children: [jsxs("span", { children: [r.stars, " ", jsx(FaRegStar, { className: "inline" })] }), jsxs("span", { children: [r.forks, " ", jsx(FaCodeFork, { className: "inline" })] })] })] }), jsx("div", { children: jsx("span", { className: "text-sm bg-blue-800 text-gray-50 px-1 py-0.5", children: r.language }) })] }), P = function() {
  const a = P$1.useLoaderData();
  return jsxs(Fragment, { children: [jsx("h2", { className: "text-2xl", children: "Projects" }), jsx("div", { className: "mt-2.5", children: a.map(({ full_name: s, html_url: n, language: i, stargazers_count: m, forks: o }, c) => jsx(u, { projectName: s, url: n, language: i, stars: m, forks: o }, c)) })] });
};

export { P as component };
//# sourceMappingURL=projects-BjUMRhap.mjs.map
