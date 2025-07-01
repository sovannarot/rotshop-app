import type { APIRoute } from "astro";
import { supabase } from "@/lib/superbase";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = import.meta.env.JWT_SECRET;
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString();
  const phone = formData.get("phone")?.toString();
  if (!phone || !password) {
    return new Response("Missing required fields", { status: 400 });
  }
  // Create user
  const { data: user } = await supabase
    .from("users")
    .select("id, password")
    .eq("phone", phone)
    .maybeSingle();
  if (!user || typeof user.password !== "string") {
    return new Response("Invalid credentials", { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "30d",
  });
  // ✅ Set cookies for auto-login
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `accessToken=${accessToken}; Max-Age=2592000; Path=/; HttpOnly; Secure; SameSite=Strict`
  );
  return new Response("Registered and signed in", {
    status: 200,
    headers,
  });
};
export const GET: APIRoute = async ({ redirect }) => {
  new Response("Use POST to register", { status: 405 });
  return redirect("/Kh/dashboard");
};
