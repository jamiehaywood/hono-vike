import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    vike(),
    devServer({
      entry: "src/index.ts",
    }),
  ],
});
