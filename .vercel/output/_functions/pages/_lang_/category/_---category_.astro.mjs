import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { S as SearchShow } from '../../../chunks/SearchShow_Ds5BQ1EM.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_BhJArJ66.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang, Category } = Astro2.params;
  const type = Category?.replace(/_/g, "/").replace(/\+/g, " ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": `Category/${Category}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-2xl w-[300px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "cfoxsgrj", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "All Products Of Type " + type : "\u1791\u17C6\u1793\u17B7\u1789\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u1793\u17C3\u1794\u17D2\u179A\u1797\u17C1\u1791 " + type} </h2> ${renderComponent($$result2, "SearchShow", SearchShow, { "lang": lang, "type": type, "bol": "c", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/components/SearchShow", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Category/[...Category].astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Category/[...Category].astro";
const $$url = "/[lang]/Category/[...Category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
