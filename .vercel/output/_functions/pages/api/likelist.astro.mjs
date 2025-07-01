import { s as supabase } from '../../chunks/superbase_Cr59nk6P.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  const { userId, productId } = body;
  const { data, error } = await supabase.rpc("insert_or_append_product", {
    user_id: userId,
    product_id: productId
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400
    });
  }
  return new Response(JSON.stringify({ data }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
