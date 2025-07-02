import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BsMIc5ZB.mjs';
import { c as checkAuth } from '../../chunks/auth_BU6KHo0h.mjs';
import { s as supabase } from '../../chunks/superbase_Cr59nk6P.mjs';
import { L as Likecom } from '../../chunks/Likecom_VUkUegbM.mjs';
import { i as items } from '../../chunks/CardPost_Bajy2JFA.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const { lang } = Astro2.params;
  const session = await checkAuth(Astro2);
  const { data, error } = await supabase.from("likelist").select("product").eq("userid", session.userId).single();
  if (error) {
    console.log("DB Error", error);
  }
  const numberArray = data?.product.map(Number) || [];
  const filter = items.filter((item) => numberArray.includes(item.id));
  const accessToken = Astro2.cookies.get("accessToken")?.value;
  if (!accessToken) {
    return Astro2.redirect(`/${lang}/signin`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "LikeList" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-screen h-auto flexrowc"> <h2 class="text-2xl w-[300px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "2ksmotxu", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "LikeList Products" : "\u1791\u17C6\u1793\u17B7\u1789\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780"} </h2> </div> ${renderComponent($$result2, "Likecom", Likecom, { "filter": filter, "lang": lang, "numberArray": numberArray, "userId": session.userId, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Likecom", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Checkout.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Checkout.astro";
const $$url = "/[lang]/Checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
