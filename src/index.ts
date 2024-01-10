import { Hono } from "hono";
import { handleSsr } from "./ssr";

const app = new Hono();

app.get("/api/hello", (c) => c.json("Hello World!"));

app.use("*", handleSsr);

export default app;
