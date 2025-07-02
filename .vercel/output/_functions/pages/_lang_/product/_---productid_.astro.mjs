import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { s as skins, $ as $$Layout } from '../../../chunks/Layout_BsMIc5ZB.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                             */
import { Navigation } from 'swiper/modules';
import { i as items, C as Cardpost } from '../../../chunks/CardPost_Bajy2JFA.mjs';
import { c as checkAuth } from '../../../chunks/auth_BU6KHo0h.mjs';
import { s as supabase } from '../../../chunks/superbase_Cr59nk6P.mjs';
export { renderers } from '../../../renderers.mjs';

const ProductInfo = ({ lang, id, userId, limit }) => {
  const shareData = {
    title: "RotShop-App",
    text: "RotShop មានលក់ទំនិញនេះអាចចូលមើលបាន",
    url: `https://rotshop-app.vercel.app/${lang}/Product/${id}`
  };
  const shareFunction = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("error", err);
    }
  };
  const item = items.find(
    (item2) => item2.id === id || String(item2.id) === String(id)
  );
  if (!item) {
    return /* @__PURE__ */ jsxs("div", { className: "col-span-full h-[calc(100svh-428px)] text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer ", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://cdn.openart.ai/uploads/image_2ek9qc8b_1751036174788_raw.jpg",
          alt: "notfound",
          loading: "lazy",
          decoding: "async",
          className: "w-[25vw] rounded-3xl"
        }
      ),
      lang === "En" ? "Error Happened Try Again (404)" : "មានភាពមិនប្រក្រតី ព្យាយាមម្តងទៀត (404)"
    ] });
  }
  const [number, setNumber] = useState(0);
  const [buttonNumber, setButtonNumber] = useState(1);
  const [itemImg, SetItemImg] = useState(item.showImg[0]);
  const [volumePrice, setVolumePrice] = useState(item.volume[0].price);
  const [volumeStockColor, setVolumeStockColor] = useState(
    item.volume[0].color[0].StockAmount
  );
  const [showHide, setShowHide] = useState("Show");
  const [color, setColor] = useState(item.volume[0].color[0].En);
  const [colors, setColors] = useState(item.volume[0].color);
  useEffect(() => {
    setButtonNumber(1);
    setVolumeStockColor(colors.find((i) => i.En === color).StockAmount);
  }, [volumePrice, color]);
  const similarItems = items.filter(
    (e) => e.Category.includes(item.Special) && e.id !== item.id
  );
  const similarCard = similarItems.length > 0 ? similarItems.slice(0, 6).map((a, index) => /* @__PURE__ */ jsx(Cardpost, { item: a, mostSell: a.mostSell, lang }, index)) : /* @__PURE__ */ jsxs("div", { className: "col-span-full h-auto text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer ", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://cdn.openart.ai/uploads/image_2ek9qc8b_1751036174788_raw.jpg",
        alt: "notfound",
        loading: "lazy",
        decoding: "async",
        className: "w-[25vw] rounded-3xl"
      }
    ),
    lang === "En" ? "Don't Have Similar Product" : "គ្មានទំនិញដូចគ្នាទេ"
  ] });
  const fetchUser = async () => {
    if (limit < 7) {
      await fetch("/api/likelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          productId: id
        })
      });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-center h-auto w-[60vw] translate-x-[20vw] max-[500px]:translate-x-[5vw] max-[850px]:flex-col max-[500px]:w-[90vw] ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center h-auto w-[50%] flex-wrap gap-2 mt-2 max-[850px]:w-full", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: itemImg,
            loading: "lazy",
            decoding: "async",
            alt: "photo",
            className: "w-[25vw] max-[850px]:w-[40vw] max-[500px]:w-[60vw]"
          }
        ),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            slidesPerView: 4,
            loop: true,
            navigation: true,
            modules: [Navigation],
            className: "mySwiper w-[25vw] h-[88px] max-[850px]:w-full",
            children: (item.showImg || []).map((img, idx) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                loading: "lazy",
                decoding: "async",
                alt: `Product ${idx + 1}`,
                className: "h-full object-cover cursor-pointer " + (number === idx ? "border-1 border-blue-500 rounded" : ""),
                onClick: () => {
                  SetItemImg(item.showImg[idx]);
                  setNumber(idx);
                }
              }
            ) }, idx))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-auto w-[50%] flex justify-center items-start flex-col max-[850px]:w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full h-auto gap-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl w-[290px] text-start max-[850px]:text-[17px]", children: item.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-1 max-[500px]:gap-[2px]", children: [
            /* @__PURE__ */ jsx("button", { className: "max-[500px]:scale-75", onClick: fetchUser, children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "icon icon-tabler icon-tabler-heart bg-[#283542] rounded-[10px] px-1 py-2",
                width: "40px",
                height: "40px",
                viewBox: "0 0 24 24",
                stroke: "white",
                strokeWidth: "2",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                  /* @__PURE__ */ jsx("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("button", { onClick: shareFunction, className: "max-[500px]:scale-75", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "icon icon-tabler icon-tabler-share bg-[#283542] rounded-[10px] p-2 active:bg-[#56616d]",
                width: "40px",
                height: "40px",
                viewBox: "0 0 24 24",
                stroke: "white",
                strokeWidth: "2",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                  /* @__PURE__ */ jsx("circle", { cx: "6", cy: "12", r: "3" }),
                  /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "3" }),
                  /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "3" }),
                  /* @__PURE__ */ jsx("line", { x1: "8.7", y1: "10.7", x2: "15.3", y2: "7.3" }),
                  /* @__PURE__ */ jsx("line", { x1: "8.7", y1: "13.3", x2: "15.3", y2: "16.7" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full h-auto ", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "text-gray-400 text-xl underline max-[850px]:text-[15px]",
              href: "/" + lang + "/Brand/" + item.brand,
              children: lang == "En" ? "By " : "ដោយ​ " + item.brand
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "text-gray-400 text-xl underline flex justify-center items-center gap-1 max-[850px]:text-[15px]",
              href: "/" + lang + "/Category/" + item.Special,
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.2em",
                    height: "1.2em",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
                      }
                    )
                  }
                ),
                " ",
                item.Special
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-[30vw] h-auto flex flex-wrap justify-center items-center gap-1 m-1 border-gray-500 border-y-2 p-1 max-[850px]:w-full ", children: item.skin.map((skinItem, index) => /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex justify-center items-center gap-1 h-[30px] bg-[#283542] text-center text-white p-1 rounded-[10px]",
            href: "/" + lang + "/Skin/" + skinItem.replace(/\//g, "_").replace(/ /g, "+"),
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1.2em",
                  height: "1.2em",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentColor",
                      d: "M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6zm0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8z"
                    }
                  )
                }
              ),
              lang === "En" ? skinItem : (() => {
                const found = skins.find((e) => e.text === skinItem);
                return found ? found.Kh : skinItem;
              })()
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx("div", { className: "w-[30vw] max-[850px]:w-full flex justify-center items-center flex-col gap-1 mt-1 border-b-2 border-gray-500 pb-1 ", children: item.volume.map((vol, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-full rounded-2xl h-auto text-start p-[2px] border-1 border-gray-400 overflow-hidden whitespace-nowrap text-ellipsis hover:border-blue-500 active:border-2 active:border-blue-600",
            style: {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            },
            onClick: () => {
              setVolumePrice(vol.price);
              setColors(vol.color);
            },
            children: vol.text
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "w-full h-[50px] text-center flexrowc", children: [
          volumePrice?.Promotion !== 0 ? /* @__PURE__ */ jsxs("h2", { className: "font-bold text-4xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]", children: [
            volumePrice?.Promotion ? "$" + volumePrice?.Promotion : "",
            /* @__PURE__ */ jsx("span", { className: "text-[15px] max-[578px]:text-[10px] text-gray-500 line-through", children: volumePrice?.Normal ? "$" + volumePrice?.Normal : "" })
          ] }) : /* @__PURE__ */ jsxs("h2", { className: "font-bold text-4xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]", children: [
            volumePrice?.Normal ? volumePrice?.Normal + "$" : "",
            /* @__PURE__ */ jsx("span", { className: "text-[15px] max-[578px]:text-[10px] text-gray-500 line-through" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: buttonNumber == 1 ? "w-[50px] text-2xl rounded-[10%] aspect-square bg-[#283542] text-center text-white opacity-60" : "w-[50px] text-2xl rounded-[10%] aspect-square bg-[#283542] text-center text-white",
              onClick: () => buttonNumber !== 1 ? setButtonNumber((prev) => prev - 1) : null,
              children: "-"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl mx-5", children: buttonNumber }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: buttonNumber < volumeStockColor ? "w-[50px] text-2xl rounded-[10%] aspect-square bg-[#283542] text-center text-white" : "w-[50px] text-2xl rounded-[10%] aspect-square bg-[#283542] text-center text-white opacity-60",
              onClick: () => buttonNumber < volumeStockColor ? setButtonNumber((prev) => prev + 1) : null,
              children: "+"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "w-[20vw] h-[40px] bg-[#283542] rounded-3xl text-center flexrowc gap-1 text-blue-500 max-[630px]:w-[42vw]", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-shopping-cart",
              width: "1.4rem",
              height: "1.4rem",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: "2",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                /* @__PURE__ */ jsx("circle", { cx: "6", cy: "19", r: "2" }),
                /* @__PURE__ */ jsx("circle", { cx: "17", cy: "19", r: "2" }),
                /* @__PURE__ */ jsx("path", { d: "M17 17h-11v-14h-2" }),
                /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-1 7h-13" })
              ]
            }
          ),
          " ",
          lang == "En" ? "Add To Card" : "ដាក់ចូលកន្ត្រក់"
        ] }),
        /* @__PURE__ */ jsx(
          "select",
          {
            defaultValue: colors[0].En,
            className: "select w-[20vw] h-[40px] bg-[#283542] rounded-3xl text-center gap-1 text-blue-500 max-[630px]:w-[42vw] mt-2 khmer",
            onChange: (e) => {
              setColor(e.target.value);
            },
            children: colors.map((col, idx) => /* @__PURE__ */ jsx("option", { value: col.En, children: lang == "En" ? col.En : col.Kh }, idx))
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flexcols w-full h-auto p-1 mt-2 pt-2 border-t-2 border-gray-400", children: [
          item.Description?.map(
            (description) => description.map((des) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: showHide == "Show" ? "flex items-start justify-start gap-1 w-full h-[200px] bg-amber-600 overflow-hidden" : "flex items-start justify-start gap-1 w-full h-auto bg-amber-600 overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxs("h2", { className: "font-bold  text-black dark:text-white text-start text-[17px]", children: [
                    des.title,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsx("h2", { className: " text-black dark:text-white text-start text-[15px] ", children: des.text })
                ]
              }
            ))
          ),
          item.Description ? /* @__PURE__ */ jsx(
            "button",
            {
              className: "w-auto h-auto text-gray-500",
              onClick: () => setShowHide((prev) => prev == "Show" ? "Hide" : "Show"),
              children: showHide
            }
          ) : null
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "divider divider-error w-[70vw] text-2xl translate-x-[15vw] font-bold khmer", children: lang == "En" ? "Similar Products" : "ផលិតផលស្រដៀងគ្នា" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-2.5 translate-y-3.5", children: similarCard }),
    item.Description2 ? /* @__PURE__ */ jsxs("div", { className: "flex items-start flex-col justify-start gap-1 w-full h-[200px] dark:bg-amber-500 overflow-hidden mt-5 p-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold  text-black dark:text-white text-start text-[22px]", children: "Description" }),
      item.Description2?.map(
        (description) => description.map((des) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: showHide == "Show" ? "flex items-start justify-start gap-1 w-full h-[200px] bg-amber-600 overflow-hidden" : "flex items-start justify-start gap-1 w-full h-auto bg-amber-600 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "font-bold  text-black dark:text-white text-start text-[17px]", children: [
                des.title,
                ":"
              ] }),
              /* @__PURE__ */ jsx("h2", { className: " text-black dark:text-white text-start text-[15px] ", children: des.text })
            ]
          }
        ))
      )
    ] }) : null,
    /* @__PURE__ */ jsx("div", { className: "w-screen h-[20px]" })
  ] });
};

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang, ProductId } = Astro2.params;
  const session = await checkAuth(Astro2);
  const { data, error } = await supabase.from("likelist").select("product").eq("userid", session.userId).single();
  if (error) {
    console.log("DB Error", error);
  }
  const accessToken = Astro2.cookies.get("accessToken")?.value;
  if (!accessToken) {
    return Astro2.redirect(`/${lang}/signin`);
  }
  let limit = data?.product.length || 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": `Product/${ProductId}` }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "ProductInfo", ProductInfo, { "lang": lang, "id": ProductId, "client:visible": true, "userId": session.userId, "limit": limit, "client:component-hydration": "visible", "client:component-path": "@/components/ProductInfo", "client:component-export": "default" })}` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Product/[...ProductId].astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/Product/[...ProductId].astro";
const $$url = "/[lang]/Product/[...ProductId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
