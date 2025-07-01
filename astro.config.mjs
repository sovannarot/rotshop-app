// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    maxDuration: 120,
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    isr: {
      expiration: 60 * 60 * 5,
    },
  }),
});
