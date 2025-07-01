import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_DNZrGGzZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BhJArJ66.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "where": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flexcolc w-[100vw] h-auto p-3 gap-2"> <h2 class="text-3xl text-success-content font-bold khmer mb-1"${addAttribute(renderTransition($$result2, "uwqnlevl", "", "title"), "data-astro-transition-scope")}>
អំពីពួកយើង
</h2><div class="avatar"> <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"> <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" loading="lazy" decoding="async"> </div> </div> <h2 class="text-xl text-success-content font-bold khmer mb-1">
ជំរាបសួរអតិថិជនជាទីគោរព ខ្ញុំបាទឈ្មោះ នន់ សុវណ្ណារ៉ូត
      សប្បាយចិត្តខ្លាំងណាស់ អ្នកកំពុងអានសារនេះ។ ខ្ញុំជាសហម្ចាស់នៃ RotShop-App
      និងខ្ញុំ
      ខ្ញុំពិតជារំភើបខ្លាំងណាស់ក្នុងការចែករំលែកជាមួយអ្នកអំពីថាតើយើងជានរណា។ យើងជា
      ក ក្រុមហ៊ុន​ស្ត្រី​មាន​មូលដ្ឋាន​នៅ​រាជធានី​ភ្នំពេញ។
      យើងខ្ញុំមានលក់ផលិតផលថែរក្សាស្បែកកូរ៉េ គ្រឿងសម្អាង ផលិតផលធ្វើឱ្យធ្មេញស
      គ្រឿងសម្អាង និងសម្រស់ផ្សេងៗទៀត គ្រឿងបន្លាស់ដែលអ្នកប្រហែលជាត្រូវការ។
      យើងក៏កំពុងស្វែងរកកិច្ចសហការផងដែរ។
      រួមបញ្ចូលម៉ាកយីហោខ្មែរនៅលើគេហទំព័ររបស់យើង
      ព្រោះវាមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់យើង
      ដើម្បីបង្ហាញការគាំទ្ររបស់យើងចំពោះអាជីវកម្មផ្សេងទៀត។
      ក្រុម​របស់​យើង​កំពុង​ធ្វើ​ការ​យ៉ាង​ខ្លាំង​ បន្តពង្រីកជម្រើសរបស់យើង
      និងផ្តល់សេវាកម្មប្រកបដោយភាពរួសរាយរាក់ទាក់ និងរហ័ស សម្រាប់អ្នក។
      យើងប្រាថ្នាចង់ក្លាយជាកន្លែងទុកចិត្តក្នុងបេះដូងរបស់អ្នក
      កន្លែងដែលអ្នកស្វែងរក រាល់ផលិតផលសម្រស់ដែលអ្នកត្រូវការ។
      យោបល់របស់អ្នកមានន័យគ្រប់យ៉ាងសម្រាប់ខ្ញុំ
      ប្រសិនបើអ្នកមានមតិយោបល់ណាមួយល្អឬអាក្រក់ទាំងអស់ត្រូវបានកោតសរសើរ។
      ទាក់ទងមកខ្ញុំ ដោយផ្ទាល់ SovannarotNun ។
</h2> </div> ` })}`;
}, "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/About.astro", "self");

const $$file = "C:/Users/ASUS/OneDrive/Desktop/rotshop-app/src/pages/[lang]/About.astro";
const $$url = "/[lang]/About";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
