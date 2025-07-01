import { c as createComponent, a as createAstro, d as addAttribute, g as renderScript, b as renderTemplate, s as spreadAttributes, u as unescapeHTML } from './astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/node_modules/astro/components/ClientRouter.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Home = createSvgComponent({"meta":{"src":"/_astro/home.51QUPS5S.svg","width":18,"height":18,"format":"svg"},"attributes":{"width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"tabler-icon tabler-icon-home"},"children":"<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\"></path><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\"></path><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\"></path>"});

const Product = createSvgComponent({"meta":{"src":"/_astro/product.B5R_XHU2.svg","width":18,"height":18,"format":"svg"},"attributes":{"width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"tabler-icon tabler-icon-category"},"children":"<path d=\"M4 4h6v6h-6z\"></path><path d=\"M14 4h6v6h-6z\"></path><path d=\"M4 14h6v6h-6z\"></path><path d=\"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"></path>"});

const Heart = createSvgComponent({"meta":{"src":"/_astro/heart.RG1M1Itv.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"icon icon-tabler icon-tabler-heart","width":"1.4rem","height":"1.4rem","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\"></path>"});

const Shop = createSvgComponent({"meta":{"src":"/_astro/shop.Bn2kMJPu.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"icon icon-tabler icon-tabler-shopping-cart","width":"1.4rem","height":"1.4rem","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2","fill":"none","stroke-linecap":"round","stroke-linejoin":"round"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><circle cx=\"6\" cy=\"19\" r=\"2\"></circle><circle cx=\"17\" cy=\"19\" r=\"2\"></circle><path d=\"M17 17h-11v-14h-2\"></path><path d=\"M6 5l14 1l-1 7h-13\"></path>"});

const Kh = new Proxy({"src":"/_astro/kh.MOfQ8ne8.webp","width":794,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/assets/kh.webp";
							}
							
							return target[name];
						}
					});

const En = new Proxy({"src":"/_astro/en.Dp-Otl2e.webp","width":794,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/assets/en.webp";
							}
							
							return target[name];
						}
					});

export { $$ClientRouter as $, En as E, Heart as H, Kh as K, Product as P, Shop as S, Home as a, createSvgComponent as c };
