import a from 'nodemailer';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const m = a.createTransport({ host: "smtp.gmail.com", secure: true, port: 465, auth: { user: "olaitanmaryakano@gmail.com", pass: "bcbu mpjs iwas lokp" } }), n = async ({ email: e, message: r }) => await m.sendMail({ from: "olaitanmaryakano@gmail.com", to: "olaitanmaryakano@gmail.com", subject: `Message from ${e}, sent from Portfolio Website`, text: r, replyTo: e }), i = o("app_routes_contact_tsx--submitForm_createServerFn_handler", "/_server", (e, r) => c.__executeServer(e, r)), c = createServerFn({ method: "POST" }).validator((e) => {
  const r = e.get("email"), t = e.get("message");
  if (!r || !t) throw new Error("Email and Message are required");
  return { email: r.toString(), message: t.toString() };
}).handler(i, async (e) => await n(e.data));

export { i as submitForm_createServerFn_handler };
//# sourceMappingURL=contact-Ggm5HyTh.mjs.map
