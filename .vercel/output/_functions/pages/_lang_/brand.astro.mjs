import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BsMIc5ZB.mjs';
import { b as brands } from '../../chunks/brands_doB5W6_z.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Brand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Brand;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Brand" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-3xl w-auto text-center mt-2"${addAttribute(renderTransition($$result2, "e4skcp7z", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "Explore All Brands" : "\u1798\u17BE\u179B\u1794\u17D2\u179A\u17C1\u1793\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <div class="flexrowc w-[calc(100vw-100px)] p-3 m-3 flex-wrap gap-x-3 gap-y-1"> ${brands.map((item) => renderTemplate`<a class="flex justify-around items-center w-[124px] h-[145px] m-3 p-3 flex-col"${addAttribute(
    "/" + lang + "/Brand/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <img class=" h-[80px] aspect-square rounded-[50%] " loading="lazy" decoding="async"${addAttribute(
    item.img ? item.img : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500",
    "src"
  )}${addAttribute(item.text, "alt")}> <h2 class="text-center text-blue-500 font-bold text-[15px]"> ${item.text} </h2> </a>`)} </div> <div class="w-full h-[40px]"></div> </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Brand.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Brand.astro";
const $$url = "/[lang]/Brand";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Brand,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
