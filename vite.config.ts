import devServer, { defaultOptions } from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
    devServer({
      entry: "src/index.ts",
      // Pass requests to Vike to handle SSR & SSR HMR
      exclude: [
        /^\/src\/pages\/.*/,
        /^\/src\/renderer\/.*/,
        ...defaultOptions.exclude,
      ],
    }),
  ],
});
