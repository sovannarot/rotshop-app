import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, f as fixedData } from '../../chunks/Layout_BsMIc5ZB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center dark:text-green-400"> <h2 class="text-3xl w-[100px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "6dp6tgtp", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "Blogs" : "\u1794\u17D2\u179B\u17BB\u1780"} </h2> <div id="blogpost" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-3 gap-y-4 w-full max-w-7xl mx-auto mt-2 mb-5 px-2"> ${fixedData.BlogCard.map((card) => renderTemplate`<div class="h-auto w-full max-w-[220px] rounded-[10px] flex flex-col justify-start gap-y-1.5 mx-auto bg-white" style="box-shadow: 0 4px 16px 0 rgba(0,0,0,0.08);"> <img${addAttribute(card.img, "src")} class="w-full h-[120px] rounded-[10px] object-cover"${addAttribute(card.text, "alt")} loading="lazy" decoding="async"> <h1 class="w-full min-h-[48px] text-start text-[18px] font-bold px-2 pt-1 line-clamp-2 text-ellipsis"> ${card.text} </h1> <h2 class="w-full text-start text-[12px] ml-2 text-gray-500"> ${"By " + card.author} </h2> <a class="border border-cyan-300 w-[100px] h-[35px] ml-2 text-center flex items-center justify-center mb-2 rounded hover:bg-cyan-50 transition"${addAttribute(card.url, "href")}> ${lang == "En" ? "Read More" : "\u17A2\u17B6\u1793\u1794\u1793\u17D2\u1790\u17C2\u1798"} </a> </div>`)} </div> </div> <div class="w-full h-[55px]"></div> ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Blog.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Blog.astro";
const $$url = "/[lang]/Blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
