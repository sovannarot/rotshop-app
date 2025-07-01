export { renderers } from '../../../renderers.mjs';

const POST = ({ redirect }) => {
  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `accessToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`
  );
  return new Response("Logged out", {
    headers
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
