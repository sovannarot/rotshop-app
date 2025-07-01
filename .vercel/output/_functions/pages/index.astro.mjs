import { c as createComponent, g as renderScript, f as renderHead, b as renderTemplate } from '../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><title>Redirecting...</title>${renderScript($$result, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/index.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="w-screen h-screen flexrowc"> <span class="loading loading-infinity loading-xl"></span> </body></html>`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
