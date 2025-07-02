import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { P as ProductShow } from '../../chunks/ProductShow_DIIehQGV.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BsMIc5ZB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Product;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Product" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-3xl w-[300px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "t2zzeuqd", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "ALL PRODUCTS" : "\u1791\u17C6\u1793\u17B7\u1789\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> ${renderComponent($$result2, "ProductShow", ProductShow, { "lang": lang, "promotion": false, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/ProductShow", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Product.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Product.astro";
const $$url = "/[lang]/Product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
