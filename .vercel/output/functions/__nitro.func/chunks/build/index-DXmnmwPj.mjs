import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const s = () => jsxs("div", { className: "bg-blue-900 text-gray-50 py-10 px-15 flex gap-15 rounded-2xl items-center", children: [jsx("div", { children: jsx("img", { src: "https://avatars.githubusercontent.com/u/58449038?v=4", alt: "Profile Picture", className: "h-50 rounded-full" }) }), jsxs("div", { children: [jsx("span", { className: "text-3xl mb-3 block", children: "Ola Akano" }), jsx("p", { className: "mb-5", children: "Incredible and creative genius software engineer bio" }), jsxs("div", { className: "text-2xl flex gap-3", children: [jsx("a", { href: "#", children: jsx(FaGithub, {}) }), jsx("a", { href: "#", children: jsx(FaXTwitter, {}) }), jsx("a", { href: "#", children: jsx(FaLinkedinIn, {}) })] })] })] }), l = ({ children: i }) => jsx("span", { className: "px-4 py-2 text-blue-800 bg-blue-50 rounded", children: i }), o = function() {
  return jsxs(Fragment, { children: [jsx(s, {}), jsxs("div", { className: "mt-10", children: [jsx("h2", { className: "text-2xl", children: "Languages" }), jsxs("div", { className: "mt-2.5 flex gap-3", children: [jsx(l, { children: "HTML" }), jsx(l, { children: "CSS" }), jsx(l, { children: "JavaScript" }), jsx(l, { children: "TypeScript" })] })] }), jsxs("div", { className: "mt-10", children: [jsx("h2", { className: "text-2xl", children: "Tools" }), jsxs("div", { className: "mt-2.5 flex gap-3", children: [jsx(l, { children: "React" }), jsx(l, { children: "GraphQL" }), jsx(l, { children: "Node.js" }), jsx(l, { children: "Socket.io" }), jsx(l, { children: "Next.js/Remix" })] })] })] });
};

export { o as component };
//# sourceMappingURL=index-DXmnmwPj.mjs.map
