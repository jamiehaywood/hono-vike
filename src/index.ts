import { Hono } from "hono";
import { handleSsr } from "./ssr";
import apiRoutes from "./api/routes";

const app = new Hono();

app.route("/api", apiRoutes);

app.use("*", handleSsr);

export default app;
