import { s as supabase } from '../../../chunks/superbase_Cr59nk6P.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

const JWT_SECRET = "644253ca1ee8890319d9f9334849cc862021695ec0bbd526de1fb9d618d210bf3e1a9bad381835719fce67b8e31755ba3b08877f4b82c49c0548120e839d82dc";
const POST = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const phone = formData.get("phone")?.toString();
  if (!username || !phone || !password) {
    return new Response("Missing required fields", { status: 400 });
  }
  const { data: existingUser } = await supabase.from("users").select("id").eq("phone", phone).maybeSingle();
  if (existingUser) {
    return new Response("Phone already registered", { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const { data: user, error } = await supabase.from("users").insert({ username, phone, password: hashedPassword }).select("id").single();
  if (error || !user) {
    return new Response("Registration failed", { status: 500 });
  }
  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "30d"
  });
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `accessToken=${accessToken}; Max-Age=2592000; Path=/; HttpOnly; Secure; SameSite=Strict`
  );
  return new Response("Registered and signed in", {
    status: 200,
    headers
  });
};
const GET = async ({ redirect }) => {
  new Response("Use POST to register", { status: 405 });
  return redirect("/Kh/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
