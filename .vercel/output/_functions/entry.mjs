import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DUltDTkr.mjs';
import { manifest } from './manifest_BxOKkZLK.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/register.astro.mjs');
const _page2 = () => import('./pages/api/auth/signin.astro.mjs');
const _page3 = () => import('./pages/api/auth/signout.astro.mjs');
const _page4 = () => import('./pages/api/likelist.astro.mjs');
const _page5 = () => import('./pages/api/remove-product.astro.mjs');
const _page6 = () => import('./pages/payment.astro.mjs');
const _page7 = () => import('./pages/_lang_/about.astro.mjs');
const _page8 = () => import('./pages/_lang_/blog.astro.mjs');
const _page9 = () => import('./pages/_lang_/brand.astro.mjs');
const _page10 = () => import('./pages/_lang_/brand/_---brand_.astro.mjs');
const _page11 = () => import('./pages/_lang_/category.astro.mjs');
const _page12 = () => import('./pages/_lang_/category/_---category_.astro.mjs');
const _page13 = () => import('./pages/_lang_/checkout.astro.mjs');
const _page14 = () => import('./pages/_lang_/dashboard.astro.mjs');
const _page15 = () => import('./pages/_lang_/dashboard/_---orderhistory_.astro.mjs');
const _page16 = () => import('./pages/_lang_/faq.astro.mjs');
const _page17 = () => import('./pages/_lang_/likelist.astro.mjs');
const _page18 = () => import('./pages/_lang_/payment/_---paymentid_.astro.mjs');
const _page19 = () => import('./pages/_lang_/product.astro.mjs');
const _page20 = () => import('./pages/_lang_/product/_---productid_.astro.mjs');
const _page21 = () => import('./pages/_lang_/promotion.astro.mjs');
const _page22 = () => import('./pages/_lang_/register.astro.mjs');
const _page23 = () => import('./pages/_lang_/signin.astro.mjs');
const _page24 = () => import('./pages/_lang_/skin.astro.mjs');
const _page25 = () => import('./pages/_lang_/skin/_---skin_.astro.mjs');
const _page26 = () => import('./pages/_lang_.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/register.ts", _page1],
    ["src/pages/api/auth/signin.ts", _page2],
    ["src/pages/api/auth/signout.ts", _page3],
    ["src/pages/api/likelist.ts", _page4],
    ["src/pages/api/remove-product.ts", _page5],
    ["src/pages/payment.astro", _page6],
    ["src/pages/[lang]/About.astro", _page7],
    ["src/pages/[lang]/Blog.astro", _page8],
    ["src/pages/[lang]/Brand.astro", _page9],
    ["src/pages/[lang]/Brand/[...Brand].astro", _page10],
    ["src/pages/[lang]/Category.astro", _page11],
    ["src/pages/[lang]/Category/[...Category].astro", _page12],
    ["src/pages/[lang]/Checkout.astro", _page13],
    ["src/pages/[lang]/dashboard.astro", _page14],
    ["src/pages/[lang]/dashboard/[...orderhistory].astro", _page15],
    ["src/pages/[lang]/Faq.astro", _page16],
    ["src/pages/[lang]/LikeList.astro", _page17],
    ["src/pages/[lang]/payment/[...paymentId].astro", _page18],
    ["src/pages/[lang]/Product.astro", _page19],
    ["src/pages/[lang]/Product/[...ProductId].astro", _page20],
    ["src/pages/[lang]/Promotion.astro", _page21],
    ["src/pages/[lang]/register.astro", _page22],
    ["src/pages/[lang]/signin.astro", _page23],
    ["src/pages/[lang]/Skin.astro", _page24],
    ["src/pages/[lang]/Skin/[...Skin].astro", _page25],
    ["src/pages/[lang]/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ae6189f4-ee6c-4be8-9cc6-d6b137d8b8d7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
