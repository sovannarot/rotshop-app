import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { S as SearchShow } from '../../../chunks/SearchShow_Ds5BQ1EM.mjs';
import { s as skins, $ as $$Layout } from '../../../chunks/Layout_BsMIc5ZB.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang, Skin } = Astro2.params;
  const type = Skin?.replace(/_/g, "/").replace(/\+/g, " ");
  const kh = skins.find((item) => item.text === type)?.Kh;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": `Skin/${Skin}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-2xl w-[300px] text-center mt-2 khmer"> ${lang == "En" ? "All Products For " + type : "\u1791\u17C6\u1793\u17B7\u1789\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB " + kh} </h2> ${renderComponent($$result2, "SearchShow", SearchShow, { "lang": lang, "type": type, "bol": "s", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/SearchShow", "client:component-export": "default" })} </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Skin/[...Skin].astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Skin/[...Skin].astro";
const $$url = "/[lang]/Skin/[...Skin]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
