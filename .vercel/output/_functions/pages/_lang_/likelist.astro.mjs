import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BhJArJ66.mjs';
import { c as checkAuth } from '../../chunks/auth_CE59TEAz.mjs';
import { s as supabase } from '../../chunks/superbase_Cr59nk6P.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { C as Cardpost, i as items } from '../../chunks/CardPost_Bajy2JFA.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const Likecom = ({ filter, lang, numberArray, userId }) => {
  const removeUser = async (id) => {
    await fetch("/api/remove-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        productId: id
      })
    });
    window.location.reload();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 gap-x-5 gap-y-7 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-7", children: filter.length > 0 ? filter.map((product, index) => /* @__PURE__ */ jsxs("div", { className: "flexcolc", children: [
      /* @__PURE__ */ jsx(
        Cardpost,
        {
          item: product,
          mostSell: product.mostSell,
          lang
        }
      ),
      " ",
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "khmer w-full h-auto rounded-2xl bg-emerald-500 p-2",
          onClick: () => {
            removeUser(numberArray[index]);
          },
          children: lang == "En" ? "Remove" : "ដកចេញ"
        }
      )
    ] }, index)) : /* @__PURE__ */ jsxs("div", { className: "col-span-full min-h-[120px] text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://cdn.openart.ai/uploads/image_2ek9qc8b_1751036174788_raw.jpg",
          alt: "notfound",
          className: "w-[25vw] rounded-3xl",
          loading: "lazy",
          decoding: "async"
        }
      ),
      lang === "En" ? "- No products found Search Again (404)." : "- រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-screen h-5" })
  ] });
};

const $$Astro = createAstro();
const $$LikeList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LikeList;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "Product" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-screen h-auto flexrowc"> <h2 class="text-2xl w-[300px] text-center mt-2 khmer"${addAttribute(renderTransition($$result2, "22gzlvs7", "", "title"), "data-astro-transition-scope")}> ${lang == "En" ? "LikeList Products" : "\u1791\u17C6\u1793\u17B7\u1789\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780"} </h2> </div> ${renderComponent($$result2, "Likecom", Likecom, { "filter": filter, "lang": lang, "numberArray": numberArray, "userId": session.userId, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Likecom", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/LikeList.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/LikeList.astro";
const $$url = "/[lang]/LikeList";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LikeList,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
