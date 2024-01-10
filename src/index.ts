import { Hono } from "hono";
import { handleSsr } from "./ssr";

const app = new Hono();

app.get("/api/hello", (c, next) => c.json("Hello World!"));

app.use(handleSsr);
