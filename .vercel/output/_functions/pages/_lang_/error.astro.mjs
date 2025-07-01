import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BhJArJ66.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Error = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="col-span-full min-h-[120px] text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer"> <img src="https://cdn.openart.ai/uploads/image_2ek9qc8b_1751036174788_raw.jpg" alt="notfound" class="w-[25vw] rounded-3xl"> ${lang === "En" ? " - Error Happened Try Again (404)." : " - \u1798\u17B6\u1793\u1797\u17B6\u1796\u1798\u17B7\u1793\u1794\u17D2\u179A\u1780\u17D2\u179A\u178F\u17B8 \u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F (404)"} </div>` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/error.astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/error.astro";
const $$url = "/[lang]/error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
