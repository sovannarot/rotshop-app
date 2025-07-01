import type { APIRoute } from "astro";
import { supabase } from "@/lib/superbase";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = import.meta.env.JWT_SECRET;
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const phone = formData.get("phone")?.toString();
  if (!username || !phone || !password) {
    return new Response("Missing required fields", { status: 400 });
  }
  // Check if user already exists
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("phone", phone)
    .maybeSingle();

  if (existingUser) {
    return new Response("Phone already registered", { status: 409 });
  }

  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create user
  const { data: user, error } = await supabase
    .from("users")
    .insert({ username, phone, password: hashedPassword })
    .select("id")
    .single();

  if (error || !user) {
    return new Response("Registration failed", { status: 500 });
  }

  // ✅ Generate tokens immediately
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
