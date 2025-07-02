import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, s as skins } from '../../chunks/Layout_BsMIc5ZB.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Skin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skin;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Skin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full justify-center items-center"> <h2 class="text-3xl w-auto text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "mqmiptom", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "All SkinType" : "\u1782\u17D2\u179A\u1794\u17CB\u17CB\u1794\u17D2\u179A\u1797\u17C1\u1791\u179F\u17D2\u1794\u17C2\u1780"} </h2> <div class="flex items-center w-[calc(100vw-100px)] p-3 m-3 flex-wrap gap-x-3 gap-y-3 h-auto justify-center"> ${skins.map((item) => renderTemplate`<a class="flex justify-around items-center w-auto h-auto flex-col mt-2.5"${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <img class="w-[15vw] aspect-square rounded-[15px] " loading="lazy" decoding="async"${addAttribute(
    item.img ? item.img : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500",
    "src"
  )}> <h2 class="text-center text-blue-500 font-bold text-[15px] max-[930px]:text-[1.7vw]"> ${lang == "En" ? item.text : item.Kh} </h2> </a>`)} </div> <div class="w-full h-[40px]"></div> </div> ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Skin.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Skin.astro";
const $$url = "/[lang]/Skin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Skin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
