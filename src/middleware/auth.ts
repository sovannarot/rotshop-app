// src/middleware/auth.ts
import jwt from "jsonwebtoken";
const JWT_SECRET = import.meta.env.JWT_SECRET;

export async function checkAuth(Astro: any) {
  const token = Astro.cookies.get("accessToken")?.value;
  if (!token) return Astro.redirect("/login");

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    return payload; // you can use payload.userId
  } catch {
    return Astro.redirect("/login");
  }
}
