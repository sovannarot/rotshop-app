import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute } from '../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { f as fixedData, $ as $$Layout, s as skins } from '../chunks/Layout_BhJArJ66.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                       */
/* empty css                                 */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { b as brands } from '../chunks/brands_doB5W6_z.mjs';
import { i as items, C as Cardpost } from '../chunks/CardPost_Bajy2JFA.mjs';
export { renderers } from '../renderers.mjs';

function SwiperPage() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Swiper,
    {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 6e4 / fixedData.Swiper?.length,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true,
        dynamicBullets: true
      },
      navigation: true,
      modules: [Autoplay, Pagination, Navigation],
      className: "mySwiper w-[67vw] max-[500px]:w-[90vw] aspect-[3/1] my-[5px] rounded-[10px]",
      children: fixedData.Swiper.map((swiper) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: swiper, loading: "lazy", decoding: "async" }) }))
    }
  ) });
}

const homeShow = [
  {
    title: { En: "🛒 MID YEAR SALE 📢", Kh: "លក់ពាក់កណ្តាលឆ្នាំ" },
    type: "midyearsale",
    text: "category",
  },
  {
    title: { En: "🛒 MID MONTH SALE 📢", Kh: "" },
    type: "midmonthsale",
    text: "category",
  },
];

const $$Astro$1 = createAstro();
const $$TabProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TabProduct;
  const { title, type, lang, text } = Astro2.props;
  const filteredItems = text == "category" ? items.filter((item) => item.Category.includes(type)) : text == "skin" ? items.filter((item) => item.skin.includes(type)) : text == "brand" ? items.filter((item) => item.brand == type) : null;
  return renderTemplate`${maybeRenderHead()}<div class="h-auto w-[75vw] flexcolc"> <div class="flex items-center w-full my-4"> <hr class="flex-grow border-t border-black"> <span class="mx-4 font-bold text-xl text-black text-[18px] max-[400px]:text-[15px] dark:text-white"> ${title.Kh ? lang == "En" ? title.En : title.Kh : title.En} </span> <hr class="flex-grow border-t border-black"> </div> <div class="grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2"> ${filteredItems?.slice(0, 12).map((product) => renderTemplate`${renderComponent($$result, "CardPost", Cardpost, { "item": product, "mostSell": product.mostSell, "lang": lang })}`)} </div> ${text == "category" ? renderTemplate`<a class="w-[132px] h-[36px] bg-[#283542] flexrowc text-center rounded-[10px] translate-y-[20px] text-white"${addAttribute(
    "/" + lang + "/Category/" + type.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <h2 class="text-[15px] font-bold"> ${lang == "En" ? "View All" : "\u1798\u17BE\u179B\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg> </a>` : text == "skin" ? renderTemplate`<a class="w-[132px] h-[36px] bg-[#283542] flexrowc text-center rounded-[10px] translate-y-[20px] text-white"${addAttribute(
    "/" + lang + "/Skin/" + type.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <h2 class="text-[15px] font-bold"> ${lang == "En" ? "View All" : "\u1798\u17BE\u179B\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg> </a>` : text == "brand" ? renderTemplate`<a class="w-[132px] h-[36px] bg-[#283542] flexrowc text-center rounded-[10px] translate-y-[20px] text-white"${addAttribute(
    "/" + lang + "/Brand/" + type.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <h2 class="text-[15px] font-bold"> ${lang == "En" ? "View All" : "\u1798\u17BE\u179B\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg> </a>` : null} <div class="w-full h-[30px]"></div> </div>`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/components/TabProduct.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SwiperPage", SwiperPage, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/swiper", "client:component-export": "default" })} ${maybeRenderHead()}<div class="flexcolc w-full h-auto"> ${homeShow.map((product) => renderTemplate`${renderComponent($$result2, "TabProduct", $$TabProduct, { "title": product.title, "type": product.type, "lang": lang, "text": product.text })}`)} </div><div> <div class="flex items-center w-full my-4"> <hr class="flex-grow border-t border-black"> <span class="mx-4 font-bold text-xl text-black text-[18px] max-[400px]:text-[15px] dark:text-white"> ${lang == "En" ? "Skins Type" : "\u1794\u17D2\u179A\u1797\u17C1\u1791\u1793\u17C3\u179F\u17D2\u1794\u17C2\u1780"} </span> <hr class="flex-grow border-t border-black"> </div> <div class="flexrowc w-full flex-wrap gap-2 h-auto"> ${skins.slice(0, 4).map((item) => renderTemplate`<a class="flexrowa w-auto h-auto flex-col mt-2.5"${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <img class="w-[20vw] aspect-square rounded-[15px] " loading="lazy" decoding="async"${addAttribute(
    item.img ? item.img : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500",
    "src"
  )}> <h2 class="text-center text-blue-500 font-bold text-[13px] max-[500px]:text-[2vw]"> ${lang == "En" ? item.text : item.Kh} </h2> </a>`)} </div> <div class="w-[100vw] h-[50px] flexrowc"> <a class="w-[132px] flexrowc h-[36px] bg-[#283542] text-center rounded-[10px] text-white"${addAttribute("/" + lang + "/Skin", "href")}> <h2 class="text-[15px] font-bold"> ${lang == "En" ? "View All" : "\u1798\u17BE\u179B\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg> </a> </div> </div> <div> <div class="flex items-center w-full"> <hr class="flex-grow border-t border-black"> <span class="mx-3 font-bold text-xl text-black text-[18px] max-[400px]:text-[15px] dark:text-white"> ${lang == "En" ? "Explore Our Brand" : "\u1798\u17BE\u179B\u1794\u17D2\u179A\u17C1\u1793\u179A\u1794\u179F\u17CB\u1799\u17BE\u1784\u179B\u1780\u17CB"} </span> <hr class="flex-grow border-t border-black"> </div> <div class="flexrowc w-full flex-wrap gap-2 h-auto"> ${brands.slice(0, 10).map((item) => renderTemplate`<a class="flexrowa w-auto h-auto flex-col border-[1px] border-gray-300"${addAttribute(
    "/" + lang + "/Brand/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )}> <img class="max-w-[123px] aspect-video " loading="lazy" decoding="async"${addAttribute(
    item.img ? item.img : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500",
    "src"
  )}> </a>`)} </div> <div class="w-[100vw] h-[50px] flexrowc flex-wrap"> <a class="w-[132px] h-[36px] bg-[#283542] flexrowc text-center rounded-[10px] text-white"${addAttribute("/" + lang + "/Brand", "href")}> <h2 class="text-[15px] font-bold"> ${lang == "En" ? "View All" : "\u1798\u17BE\u179B\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB"} </h2> <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg> </a> </div> </div> <div class="w-full h-[50px]"><h1 class="text-white"></h1></div> ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
