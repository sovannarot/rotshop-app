import { supabase } from "@/lib/superbase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { userId, productId } = await request.json();
  const { error: updateError } = await supabase.rpc("remove_product_id", {
    user_id: userId,
    product_id: productId,
  });

  if (updateError) {
    return new Response(JSON.stringify({ error: updateError.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ success: true, product: "updated" }), {
    status: 200,
  });
};
