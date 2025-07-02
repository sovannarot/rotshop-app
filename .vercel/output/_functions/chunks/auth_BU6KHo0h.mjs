import jwt from 'jsonwebtoken';

const JWT_SECRET = "644253ca1ee8890319d9f9334849cc862021695ec0bbd526de1fb9d618d210bf3e1a9bad381835719fce67b8e31755ba3b08877f4b82c49c0548120e839d82dc";
async function checkAuth(Astro) {
  const token = Astro.cookies.get("accessToken")?.value;
  if (!token) return Astro.redirect("/Kh/signin");
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch {
    return Astro.redirect("/Kh/signin");
  }
}

export { checkAuth as c };
