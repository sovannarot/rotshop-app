import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { i as items, C as Cardpost } from './CardPost_Bajy2JFA.mjs';
import { s as sortProducts } from './utils_0Z2Fp4p7.mjs';

const SearchShow = ({ lang, type, bol }) => {
  const [sortValue, setSortValue] = useState("Name (A-Z)");
  const [itemfilter, SetItemFilter] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    let filtered = bol == "c" ? items.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase()) && item.Category.includes(type)
    ) : bol == "s" ? items.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase()) && item.skin.includes(type)
    ) : items.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase()) && item.brand === type
    );
    filtered = sortProducts(filtered, sortValue);
    SetItemFilter(filtered);
  }, [sortValue, search]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-3 w-[calc(100vw-100px)] h-[50px] productshow-root max-[480px]:flex-col max-[480px]:h-[100px]", children: [
      /* @__PURE__ */ jsx("form", { className: "form", onSubmit: (e) => e.preventDefault(), children: /* @__PURE__ */ jsxs("label", { htmlFor: "search", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "input",
            type: "text",
            required: "",
            placeholder: lang == "En" ? "Search Product" : "ស្វែងរកទំនិញ",
            id: "search",
            value: search,
            onChange: (e) => setSearch(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "fancy-bg" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "select-dropdown w-[130px] h-[30px] border-1 border-amber-300 rounded-[5px]", children: /* @__PURE__ */ jsxs(
        "select",
        {
          value: sortValue,
          onChange: (e) => setSortValue(e.target.value),
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ jsx("option", { value: "Name (A-Z)", children: lang == "En" ? "Name (A-Z)" : "ឈ្មោះ (A-Z)" }),
            /* @__PURE__ */ jsx("option", { value: "Name (Z-A)", children: lang == "En" ? "Name (Z-A)" : "ឈ្មោះ (Z-A)" }),
            /* @__PURE__ */ jsx("option", { value: "Price Up", children: lang == "En" ? "Price Up" : "កើនតម្លៃ" }),
            /* @__PURE__ */ jsx("option", { value: "Price Down", children: lang == "En" ? "Price Down" : "ចុះតម្លៃ" }),
            /* @__PURE__ */ jsx("option", { value: "Best Seller", children: lang == "En" ? "Best Seller" : "លក់ដាច់បំផុត" }),
            /* @__PURE__ */ jsx("option", { value: "Arrival", children: lang == "En" ? "Arrival" : "មកដល់ថ្មីៗ" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5", children: itemfilter && itemfilter.length > 0 ? itemfilter.map((product, index) => /* @__PURE__ */ jsx(
      Cardpost,
      {
        item: product,
        mostSell: product.mostSell,
        lang
      },
      index
    )) : /* @__PURE__ */ jsxs("div", { className: "col-span-full min-h-[120px] text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer", children: [
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
      lang === "En" ? (search === "" ? "" : search + " - ") + type + " - No products found Search Again (404)." : (search === "" ? "" : search + " - ") + type + " - រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-[40px]" })
  ] });
};

export { SearchShow as S };
