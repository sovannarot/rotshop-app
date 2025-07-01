import { s as supabase } from '../../chunks/superbase_Cr59nk6P.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { userId, productId } = await request.json();
  const { error: updateError } = await supabase.rpc("remove_product_id", {
    user_id: userId,
    product_id: productId
  });
  if (updateError) {
    return new Response(JSON.stringify({ error: updateError.message }), {
      status: 500
    });
  }
  return new Response(JSON.stringify({ success: true, product: "updated" }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
