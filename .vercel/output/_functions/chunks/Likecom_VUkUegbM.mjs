import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { C as Cardpost } from './CardPost_Bajy2JFA.mjs';

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
      lang === "En" ? "No products found Search Again (404)." : "រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-screen h-5" })
  ] });
};

export { Likecom as L };
