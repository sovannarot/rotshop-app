import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { P as ProductShow } from '../../chunks/ProductShow_DIIehQGV.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BsMIc5ZB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Promotion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Promotion;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Promotion" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-3xl w-[300px] text-center mt-2"${addAttribute(renderTransition($$result2, "sp2ecapj", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "Promotions" : "\u1791\u17C6\u1793\u17B7\u1789\u1794\u17D2\u179A\u1798\u17BC\u179B\u179F\u17B7\u1793"} </h2> ${renderComponent($$result2, "ProductShow", ProductShow, { "lang": lang, "promotion": true, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/ProductShow", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Promotion.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Promotion.astro";
const $$url = "/[lang]/Promotion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Promotion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
