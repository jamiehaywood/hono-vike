import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    devServer({
      entry: "src/index.ts",
    }),
    vike(),
  ],
});
