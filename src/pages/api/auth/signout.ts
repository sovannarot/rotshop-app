// src/pages/api/logout.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = ({ redirect }) => {
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `accessToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`
  );
  return new Response("Logged out", {
    headers,
  });
};
