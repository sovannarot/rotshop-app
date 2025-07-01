import type { APIRoute } from "astro";
import { supabase } from "@/lib/superbase";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { userId, productId } = body;
  const { data, error } = await supabase.rpc("insert_or_append_product", {
    user_id: userId,
    product_id: productId,
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
  return new Response(JSON.stringify({ data }), {
    status: 200,
  });
};
