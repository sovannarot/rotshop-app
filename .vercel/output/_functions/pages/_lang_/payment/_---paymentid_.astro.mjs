import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BhJArJ66.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/payment/[...paymentId].astro", void 0);

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/payment/[...paymentId].astro";
const $$url = "/[lang]/payment/[...paymentId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
