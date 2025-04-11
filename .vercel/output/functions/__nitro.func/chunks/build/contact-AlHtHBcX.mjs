import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { createServerFn } from '@tanstack/start-client-core';
import { a as ae } from '../nitro/nitro.mjs';
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
import '@tanstack/react-router';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const u = ae("app_routes_contact_tsx--submitForm_createServerFn_handler", "/_server"), g = createServerFn({ method: "POST" }).validator((m) => {
  const t = m.get("email"), a = m.get("message");
  if (!t || !a) throw new Error("Email and Message are required");
  return { email: t.toString(), message: a.toString() };
}).handler(u), E = function() {
  const [t, a] = useState(false);
  return jsxs(Fragment, { children: [jsx("p", { className: "text-2xl", children: "Contact Me" }), t && jsxs("div", { className: "bg-green-50 text-green-900 px-6 py-3 rounded w-md mt-5", children: [jsx(FaCheck, { className: "inline" }), " Email Sent Successfully"] }), jsxs("form", { method: "post", className: "mt-5", onSubmit: async (s) => {
    s.preventDefault();
    const o = s.currentTarget, n = new FormData(o);
    return await g({ data: n }), a(true), o.reset();
  }, children: [jsxs("div", { className: "mb-2", children: [jsx("label", { htmlFor: "email", children: "Email" }), jsx("br", {}), jsx("input", { type: "email", name: "email", id: "email", required: true, className: "border border-gray-400 w-md px-3 py-1.5" })] }), jsxs("div", { className: "mb-2", children: [jsx("label", { htmlFor: "message", children: "Message" }), jsx("br", {}), jsx("textarea", { name: "message", id: "message", placeholder: "Write me a message", required: true, className: "border border-gray-400 w-md px-3 py-1.5 h-50" })] }), jsx("button", { className: "bg-blue-900 text-gray-50 px-4 py-2 rounded", children: "Send" })] })] });
};

export { E as component };
//# sourceMappingURL=contact-AlHtHBcX.mjs.map
