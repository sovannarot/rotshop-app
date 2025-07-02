import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BsMIc5ZB.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Payment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Payment;
  let lang = "En";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Product" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-3xl w-[300px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "y2eunumk", "", "title"), "data-astro-transition-scope")}> ${"PAYMENT" } </h2> </div> ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/payment.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/payment.astro";
const $$url = "/payment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Payment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
