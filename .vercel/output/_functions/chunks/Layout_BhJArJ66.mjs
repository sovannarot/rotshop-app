import { c as createComponent, a as createAstro, b as renderTemplate, r as renderComponent, d as addAttribute, m as maybeRenderHead, f as renderHead, j as renderSlot } from './astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
/* empty css                         */
import { c as createSvgComponent, K as Kh, E as En, P as Product, a as Home, S as Shop, H as Heart, $ as $$ClientRouter } from './en_Cx-sbv3V.mjs';
/* empty css                         */
import 'clsx';

const categories = [
  {
    text: "Toners",
    img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740",
  },
  { text: "Hair Products", img: "" },
  { text: "Shower Must Have", img: "" },
  { text: "Moisturizers", img: "" },
  { text: "Lashes", img: "" },
  { text: "Teeth Whitening", img: "" },
  { text: "Hair Remover", img: "" },
  { text: "Pimple Patches", img: "" },
  { text: "Eye Care", img: "" },
  { text: "Sunscreens", img: "" },
  { text: "Makeup", img: "" },
  { text: "Travel Must Have", img: "" },
  { text: "Self-Care Must Have", img: "" },
  { text: "Cleansers", img: "" },
  { text: "Essenses/Serums", img: "" },
  { text: "Double Cleansing", img: "" },
  { text: "Masks", img: "" },
  { text: "Skincare Routine Set", img: "" },
  { text: "Makeup Remover", img: "" },
  { text: "Gift Box", img: "" },
];

const skins = [
  {
    text: "Brightening/Scars",
    img: "",
    id: 0,
    Kh: "ស្បែកភ្លឺ/កំចាត់ស្លាកស្នាម",
  },
  { text: "Broken Skin Barrier", img: "", id: 1, Kh: "ស្បែកមុខខូចរបាំងការពារ" },
  { text: "Exfoliating Products", img: "", id: 2, Kh: "ជម្រះកោសិកាចាស់ៗ" },
  { text: "Non-Comedogenic", img: "", id: 3, Kh: "គ្មានជាតិស្ទះរន្ធរោម" },
];

const Promotion = createSvgComponent({"meta":{"src":"/_astro/promotion.KhcpgBak.svg","width":18,"height":18,"format":"svg"},"attributes":{"width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"tabler-icon tabler-icon-shopping-bag-discount"},"children":"<path d=\"M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.416 2.7\"></path><path d=\"M9 11v-5a3 3 0 0 1 6 0v5\"></path><path d=\"M16 21l5 -5\"></path><path d=\"M21 21v.01\"></path><path d=\"M16 16v.01\"></path>"});

const Skin = createSvgComponent({"meta":{"src":"/_astro/skin.EPxqkAiL.svg","width":18,"height":18,"format":"svg"},"attributes":{"width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"tabler-icon tabler-icon-tags"},"children":"<path d=\"M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z\"></path><path d=\"M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592\"></path><path d=\"M7 10h-.01\"></path>"});

const Blog = createSvgComponent({"meta":{"src":"/_astro/blog.D0CCQusN.svg","width":18,"height":18,"format":"svg"},"attributes":{"width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"tabler-icon tabler-icon-news"},"children":"<path d=\"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11\"></path><path d=\"M8 8l4 0\"></path><path d=\"M8 12l4 0\"></path><path d=\"M8 16l4 0\"></path>"});

const Logo = new Proxy({"src":"/_astro/img1.CwKxgWUq.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/assets/img1.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang, where } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="navbar bg-base-100 shadow-sm max-[1000px]:justify-around" data-astro-cid-3ef6ksr2> <div class="w-[10%] flexrowc h-auto" data-astro-cid-3ef6ksr2> <a class="btn btn-ghost text-xl" data-astro-cid-3ef6ksr2>RotShop</a> </div> <div class="navbar-center" data-astro-cid-3ef6ksr2> <ul class="menu menu-horizontal px-1 max-[1000px]:hidden" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2>", "", "</a> </li> <li data-astro-cid-3ef6ksr2> <a", " data-astro-cid-3ef6ksr2>", "", "</a> </li> <li data-astro-cid-3ef6ksr2> <details data-astro-cid-3ef6ksr2> <summary data-astro-cid-3ef6ksr2>", "", '</summary> <ul class="p-2 w-[180px] max-h-[165px] overflow-y-auto overflow-x-hidden relative z-50" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2>", "</a> </li> ", " </ul> </details> </li><li data-astro-cid-3ef6ksr2> <a", " data-astro-cid-3ef6ksr2>", "", "</a> </li><li data-astro-cid-3ef6ksr2> <details data-astro-cid-3ef6ksr2> <summary data-astro-cid-3ef6ksr2>", "", '</summary> <ul class="p-2 h-auto overflow-y-auto overflow-x-hidden relative z-50 w-fit" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2>", "</a> </li> ", " </ul> </details> </li> <li data-astro-cid-3ef6ksr2> <a", " data-astro-cid-3ef6ksr2> ", " ", '</a> </li> </ul> </div> <div class="navbar-end gap-1" data-astro-cid-3ef6ksr2> <a class="w-[40px] mx-2"', " data-astro-cid-3ef6ksr2> <img", ' loading="lazy" decoding="async" data-astro-cid-3ef6ksr2> </a> <a', ' class="btn btn-circle max-[1000px]:hidden" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24" fill="none" stroke="#1c2f30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user" data-astro-cid-3ef6ksr2><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" data-astro-cid-3ef6ksr2></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" data-astro-cid-3ef6ksr2></path></svg> </a> <a class="btn btn-circle max-[420px]:hidden"', " data-astro-cid-3ef6ksr2> ", ' </a> <button class="btn btn-circle max-[575px]:hidden" data-astro-cid-3ef6ksr2> ', ` </button> <label class="btn btn-circle swap swap-rotate min-[1000px]:hidden" data-astro-cid-3ef6ksr2> <!-- this hidden checkbox controls the state --> <input type="checkbox" id="sidebar-toggle" onchange="const sidebar = document.getElementById('sidebar');
    if (this.checked) {
      sidebar.classList.add('open');
      sidebar.classList.remove('close');
    } else {
      sidebar.classList.remove('open');
      sidebar.classList.add('close');
    }" data-astro-cid-3ef6ksr2> <!-- hamburger icon --> <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" data-astro-cid-3ef6ksr2> <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" data-astro-cid-3ef6ksr2></path> </svg> <!-- close icon --> <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" data-astro-cid-3ef6ksr2> <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" data-astro-cid-3ef6ksr2></polygon> </svg> </label> <div class="dropdown dropdown-end max-[1000px]:hidden" data-astro-cid-3ef6ksr2> <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar" data-astro-cid-3ef6ksr2> <div class="w-10 rounded-full" data-astro-cid-3ef6ksr2> <img alt="Tailwind CSS Navbar component"`, ' loading="lazy" decoding="async" data-astro-cid-3ef6ksr2> </div> </div> </div> <div class="w-[40vw] max-[600px]:w-[60vw] max-[350px]:w-[100vw] h-[100svh] absolute close bg-white min-[1000px]:hidden" id="sidebar" data-astro-cid-3ef6ksr2> <div class="w-[40vw] max-[350px]:w-[100vw] max-[600px]:w-[60vw] h-[100svh] flexcols" data-astro-cid-3ef6ksr2> <div class="w-full h-[100px] flexrowa gap-2 pl-2.5 darkmode" data-astro-cid-3ef6ksr2> <div class="avatar" data-astro-cid-3ef6ksr2> <div class="w-[7vw] max-[350px]:w-[10vw] rounded" data-astro-cid-3ef6ksr2> <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" alt="Tailwind-CSS-Avatar-component" loading="lazy" decoding="async" data-astro-cid-3ef6ksr2> </div> </div> <h1 class="text-[3vw] text-center font-bold" data-astro-cid-3ef6ksr2>RotShop App</h1> <button class="w-[5vw] h-[5vw] max-[350px]:w-[8vw] max-[350px]:h-[8vw] flexrowc" type="button" style="background-color: white; color: rgb(28, 47, 48); border-radius: 5px; border: 2px solid rgb(224, 224, 224);  align-items: center; justify-content: center;" id="togglebutton" data-astro-cid-3ef6ksr2><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem;" data-astro-cid-3ef6ksr2><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-astro-cid-3ef6ksr2></path></svg></button> </div> <div class="w-[calc(100%-3vw)] h-[1px] bg-gray-400 translate-y-[-1vw]" data-astro-cid-3ef6ksr2></div> <ul class="menu bg-base-200 rounded-box w-full" data-astro-cid-3ef6ksr2> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2> ", "", "", ' </a> </li> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2> ", "", "", ' </a> </li> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2> ", "", "", ' </a> </li> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a', ' href="/Category" data-astro-cid-3ef6ksr2> ', "", "", ' </a> </li> <ul class="p-2 w-full max-h-[165px] overflow-y-auto overflow-x-hidden text-ellipsis" data-astro-cid-3ef6ksr2> ', ' </ul> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a onclick="skin != skin"', " data-astro-cid-3ef6ksr2> ", "", "", ' </a> </li> <ul class="p-2 w-full max-h-[165px] overflow-y-auto overflow-x-hidden text-ellipsis" data-astro-cid-3ef6ksr2> ', ' </ul> <li class="h-[42px]" data-astro-cid-3ef6ksr2> <a', " data-astro-cid-3ef6ksr2> ", "", "", ' </a> </li> </ul> </div> </div> <div id="sidebar-overlay" class="w-[60vw] max-[600px]:w-[40vw] h-[calc(100vh+64px)] absolute translate-y-[-64px] max-[350px]:w-0" data-astro-cid-3ef6ksr2></div>  <script>\n      // This script runs in the browser\n      if (typeof window !== "undefined") {\n        const sidebarToggle = document.getElementById("sidebar-toggle");\n        const buttonToggle = document.getElementById("togglebutton");\n        const sidebar = document.getElementById("sidebar");\n        const overlay = document.getElementById("sidebar-overlay");\n        function updateSidebar() {\n          if (sidebarToggle.checked) {\n            overlay.classList.add("active");\n          } else {\n            overlay.classList.remove("active");\n          }\n        }\n\n        sidebarToggle?.addEventListener("change", updateSidebar);\n\n        overlay?.addEventListener("click", () => {\n          sidebarToggle.checked = false;\n          sidebar.classList.remove("open");\n          sidebar.classList.add("close");\n          overlay.classList.remove("active");\n        });\n        buttonToggle?.addEventListener("click", () => {\n          updateSidebar;\n          sidebarToggle.checked = false;\n          sidebar.classList.remove("open");\n          sidebar.classList.add("close");\n          overlay.classList.remove("active");\n        });\n      }\n    <\/script> </div> </div>'])), maybeRenderHead(), addAttribute("/" + lang + "/", "href"), renderComponent($$result, "Home", Home, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Home" : "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798", addAttribute("/" + lang + "/Product", "href"), renderComponent($$result, "Product", Product, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Products" : "\u17A2\u17B8\u179C\u17C9\u17B6\u1793\u17CB", renderComponent($$result, "Product", Product, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Category" : "\u1794\u17D2\u179A\u1797\u17C1\u1791", addAttribute("/" + lang + "/Category", "href"), lang == "En" ? "All" : "\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB", categories.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Category/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.text} </a> </li>`), addAttribute("/" + lang + "/Promotion", "href"), renderComponent($$result, "Promotion", Promotion, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Promotions" : "\u1794\u1789\u17D2\u1785\u17BB\u17C7\u178F\u1798\u17D2\u179B\u17C3", renderComponent($$result, "Skin", Skin, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Shop By Skin Concern" : "\u1791\u17B7\u1789\u178F\u17B6\u1798\u1794\u17D2\u179A\u1797\u17C1\u1791\u179F\u17D2\u1794\u17C2\u1780", addAttribute("/" + lang + "/Skin/", "href"), lang == "En" ? "All" : "\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB", lang == "En" ? skins.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.text} </a> </li>`) : skins.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.Kh} </a> </li>`), addAttribute("/" + lang + "/Blog", "href"), renderComponent($$result, "Blog", Blog, { "data-astro-cid-3ef6ksr2": true }), lang == "En" ? "Blog" : "\u1794\u17D2\u179B\u17BB\u1780", addAttribute(lang == "En" ? `/Kh/${where}` : `/En/${where}`, "href"), addAttribute(lang == "En" ? Kh.src : En.src, "src"), addAttribute("/" + lang + "/dashboard", "href"), addAttribute("/" + lang + "/LikeList", "href"), renderComponent($$result, "Heart", Heart, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Shop", Shop, { "data-astro-cid-3ef6ksr2": true }), addAttribute(Logo.src, "src"), addAttribute("/" + lang + "/", "href"), renderComponent($$result, "Home", Home, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Home" : "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798", addAttribute("/" + lang + "/Product", "href"), renderComponent($$result, "Product", Product, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Products" : "\u17A2\u17B8\u179C\u17C9\u17B6\u1793\u17CB", addAttribute("/" + lang + "/Promotion", "href"), renderComponent($$result, "Promotion", Promotion, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Promotions" : "\u1794\u1789\u17D2\u1785\u17BB\u17C7\u178F\u1798\u17D2\u179B\u17C3", addAttribute("/" + lang + "/Category", "href"), renderComponent($$result, "Product", Product, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Category" : "\u1794\u17D2\u179A\u1797\u17C1\u1791", categories.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Category/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.text} </a> </li>`), addAttribute("/" + lang + "/Skin", "href"), renderComponent($$result, "Product", Product, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Shop By Skin Concern" : "\u1794\u17D2\u179A\u1797\u17C1\u1791\u179F\u17D2\u1794\u17C2\u1780", lang == "En" ? skins.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.text} </a> </li>`) : skins.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(
    "/" + lang + "/Skin/" + item.text.replace(/\//g, "_").replace(/ /g, "+"),
    "href"
  )} data-astro-cid-3ef6ksr2> ${item.Kh} </a> </li>`), addAttribute("/" + lang + "/Blog", "href"), renderComponent($$result, "Blog", Blog, { "data-astro-cid-3ef6ksr2": true }), " ", lang == "En" ? "Blog" : "\u1794\u17D2\u179B\u17BB\u1780");
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/components/Header.astro", void 0);

const langdata = {
  En: {
    Footer: {
      a: [
        { url: "/Product/", name: "All Products" },
        { url: "/Faq/", name: "FAQ" },
        { url: "/About/", name: "About Us" },
        { url: "/Blog/", name: "Blogs" },
        { url: "/privacy-policy/", name: "Privacy-Policy" },
      ],
    },
  },
  Kh: {
    Footer: {
      a: [
        { url: "/Product/", name: "ផលិតផលទាំងអស់" },
        { url: "/Faq/", name: "សំណួរទូទៅ" },
        { url: "/About/", name: "អំពីពួកយើង" },
        { url: "/Blog/", name: "ប្លុក" },
        { url: "/privacy-policy/", name: "គោលការណ៍និងសុវត្ថិភាព​" },
      ],
    },
  },
};

const fixedData = {
  Footer: {
    facebook: "https://www.facebook.com/sovannarotnundev",
    instagram: "https://www.instagram.com/rot_nun/",
    telegram: "https://t.me/SovannarotNun",
    gmail: "sovannarot7@gmail.com",
    phone: ["0973311880", "098903973", "011228030"],
    googlemap: "https://maps.app.goo.gl/dkFYSrfsvFHKdzMu6",
  },
  BlogCard: [
    {
      img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
      text: "Hello my new productdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgb",
      author: "Sovannnorto",
      url: "",
    },
    {
      img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
      text: "Hello my new productdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgb",
      author: "Sovannnorto",
      url: "",
    },
    {
      img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
      text: "Hello my new productdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgbroductdvfdvdfvdfbdvdvbdgb",
      author: "Sovannnorto",
      url: "",
    },
  ],
  Swiper: [
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe5b0ee5f-695d-49c7-ab18-e01f5447ab36.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F5a14e88b-3f68-4bac-8715-7bab6b1792e1.webp&w=1920&q=100",
    "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F0c71c17d-2629-4d44-99de-5dee9668d0f8.webp&w=1920&q=100",
  ],
};

const weAccept = new Proxy({"src":"/_astro/we-accept.CWpiy8V3.webp","width":122,"height":34,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/assets/we-accept.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.props;
  const svgStyle = {
    border: "1px solid white",
    borderRadius: "2px",
    cursor: "pointer",
    padding: "2px 1px"
  };
  return renderTemplate`${maybeRenderHead()}<div class="w-[100vw] h-[300px] bg-accent dark:bg-success-content flex justify-around items-center flex-col" data-astro-cid-sz7xmlte> <div class="flexrowc w-full gap-1 mt-1" data-astro-cid-sz7xmlte> <img${addAttribute(Logo.src, "src")} class="w-[50px] rounded-2xl min-[400px]:hidden" loading="lazy" decoding="async" data-astro-cid-sz7xmlte><div class="badge badge-success min-[400px]:hidden" data-astro-cid-sz7xmlte>RotShop-App</div> </div> <div class="w-[100vw] h-[200px] bg-accent dark:bg-success-content flexrowa px-3" data-astro-cid-sz7xmlte> <img${addAttribute(Logo.src, "src")} loading="lazy" decoding="async" class="w-[60px] rounded-2xl max-[400px]:hidden" data-astro-cid-sz7xmlte> <div id="more" class="flex flex-col justify-center items-start" data-astro-cid-sz7xmlte> <h1 class="text-white text-2xl" data-astro-cid-sz7xmlte> ${lang == "En" ? "Mores" : "\u1785\u17C6\u178E\u17BB\u1785\u1794\u1793\u17D2\u1790\u17C2\u1798"} </h1> ${lang == "En" ? langdata.En.Footer.a.map((a) => renderTemplate`<a${addAttribute("/" + lang + a.url, "href")} data-astro-cid-sz7xmlte>${a.name}</a>`) : langdata.Kh.Footer.a.map((a) => renderTemplate`<a${addAttribute("/" + lang + a.url, "href")} data-astro-cid-sz7xmlte>${a.name}</a>`)} </div> <div id="follow" class="flex flex-col items-start justify-center h-auto w-auto translate-y-[-18px] max-[500px]:hidden" data-astro-cid-sz7xmlte> <h1 class="text-white text-2xl" data-astro-cid-sz7xmlte> ${lang == "En" ? "Follows Us" : "\u178F\u17B6\u1798\u178A\u17B6\u1793\u1799\u17BE\u1784:"} </h1> <a${addAttribute(fixedData.Footer.facebook, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" data-astro-cid-sz7xmlte></path> </svg> <h1 data-astro-cid-sz7xmlte>Facebook</h1> </div> </a> <a${addAttribute(fixedData.Footer.instagram, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <rect x="4" y="4" width="16" height="16" rx="4" data-astro-cid-sz7xmlte></rect> <circle cx="12" cy="12" r="3" data-astro-cid-sz7xmlte></circle> <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" data-astro-cid-sz7xmlte></line> </svg> <h1 data-astro-cid-sz7xmlte>Instagram</h1> </div> </a> <a${addAttribute(fixedData.Footer.telegram, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" data-astro-cid-sz7xmlte></path> </svg> <h1 data-astro-cid-sz7xmlte>Telegram</h1> </div> </a> </div> <div id="contact" class="flex flex-col justify-center items-start" data-astro-cid-sz7xmlte> <h1 class="text-white text-2xl" data-astro-cid-sz7xmlte> ${lang == "En" ? "Contacts Us" : "\u1791\u17B6\u1780\u17CB\u1791\u1784\u178F\u17B6\u1798:"} </h1> ${fixedData.Footer.phone.map((phone) => renderTemplate`<a${addAttribute("tel:" + phone, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" data-astro-cid-sz7xmlte></path> </svg> <h1 data-astro-cid-sz7xmlte>${phone}</h1> </div> </a>`)} <a${addAttribute("mailto:" + fixedData.Footer.gmail, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <rect x="3" y="5" width="18" height="14" rx="2" data-astro-cid-sz7xmlte></rect> <polyline points="3 7 12 13 21 7" data-astro-cid-sz7xmlte></polyline> </svg> <h1 data-astro-cid-sz7xmlte>Gmail</h1> </div> </a> <a${addAttribute(fixedData.Footer.googlemap, "href")} data-astro-cid-sz7xmlte> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${addAttribute(svgStyle, "style")} data-astro-cid-sz7xmlte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-sz7xmlte></path> <circle cx="12" cy="11" r="3" data-astro-cid-sz7xmlte></circle> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" data-astro-cid-sz7xmlte></path> </svg> <h1 data-astro-cid-sz7xmlte>Google Map</h1> </div> </a> </div> </div> <div class="w-[calc(100vw-60px)] h-[100px] border-t-2 flex justify-center items-center flex-col gap-2" data-astro-cid-sz7xmlte> <div class="w-full flex justify-center gap-[50px] items-center h-auto rowtocol" data-astro-cid-sz7xmlte> <h1 class="max-[465px]:text-[3.2vw]" data-astro-cid-sz7xmlte> ${lang == "En" ? "Copyright \xA9 2026 by Ecommerce Shop All right reserved." : "\u179A\u1780\u17D2\u179F\u17B6\u179F\u17B7\u1791\u17D2\u1792 \xA9 2025 \u178A\u17C4\u1799 Ecommerce Shop \u179A\u1780\u17D2\u179F\u17B6\u179F\u17B7\u1791\u17D2\u1792\u17B7\u1782\u17D2\u179A\u1794\u17CB\u1799\u17C9\u17B6\u1784"} </h1> <div class="flex justify-center items-center gap-2" data-astro-cid-sz7xmlte> <h1 data-astro-cid-sz7xmlte>${lang == "En" ? "Accept Payment:" : "\u1791\u1791\u17BD\u179B\u1780\u17B6\u179A\u1791\u17BC\u179A\u1791\u17B6\u178F\u17CB:"}</h1> <img width="70" height="30"${addAttribute(weAccept.src, "src")} loading="lazy" decoding="async" data-astro-cid-sz7xmlte> </div> </div> <div class="flex justify-center items-center gap-3" data-astro-cid-sz7xmlte> <h1 data-astro-cid-sz7xmlte>${lang == "En" ? "Powered By:" : "\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u178A\u17C4\u1799:"}</h1> <a href="https://sovannarot.github.io/learn" data-astro-cid-sz7xmlte>Sovannarot</a> </div> </div> </div> `;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Dock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dock;
  const { lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="dock min-[1000px]:hidden khmer text-[7px]" id="dock-bar"> <a class="button"${addAttribute("/" + lang, "href")}> ${renderComponent($$result, "Home", Home, {})} <span class="dock-label">${lang == "En" ? "Home" : "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798"}</span> </a> <a${addAttribute("/" + lang + "/Product", "href")} class="button"> ${renderComponent($$result, "Product", Product, {})} <span class="dock-label">${lang == "En" ? "Products" : "\u17A2\u17B8\u179C\u17C9\u17B6\u1793\u17CB"}</span> </a> <a class="min-[575px]:hidden button"${addAttribute("/" + lang + "/Cart", "href")}> ${renderComponent($$result, "Shop", Shop, {})} <span class="dock-label">${lang == "En" ? "Cart" : "\u1780\u1793\u17D2\u178F\u17D2\u179A\u1780\u17CB"}</span> </a> <a class="min-[420px]:hidden button"${addAttribute("/" + lang + "/LikeList", "href")}> ${renderComponent($$result, "Heart", Heart, {})} <span class="dock-label">${lang == "En" ? "WishList" : "\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F"} </span> </a> <a${addAttribute("/" + lang + "/dashboard", "href")} class="button"> <div class="scale-[1.2]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24" fill="none" stroke="#1c2f30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg> </div> <span class="dock-label">${lang == "En" ? "Dashboard" : "\u1795\u17D2\u1791\u17B6\u17C6\u1784\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784"}</span> </a> </div>`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/components/Dock.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { lang, where } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="overflow-x-hidden" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://yt3.googleusercontent.com/ytc/AIdro_kPc2_0vRrL-9xtSdnKyX1B09rE2n7NsKaxR3sOKuJU5xs=s900-c-k-c0x00ffffff-no-rj"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>RotShop App</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Koulen&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="overflow-x-hidden" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "lang": lang, "where": where, "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "lang": lang, "data-astro-cid-sckkx6r4": true })} <div class="w-full h-[64px] min-[1000px]:hidden" data-astro-cid-sckkx6r4></div> ${renderComponent($$result, "Dock", $$Dock, { "lang": lang, "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Logo as L, categories as c, fixedData as f, skins as s };
