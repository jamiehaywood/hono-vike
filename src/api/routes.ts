import { MiddlewareHandler, Hono, Context } from "hono";
import { METHODS } from "hono/dist/types/router";
import { hello } from "./hello";

const app = new Hono();

const routes: Routes[] = [
  {
    path: "/hello",
    method: "get",
    middlewares: [hello],
  },
  {
    path: "/foo",
    method: "get",
    middlewares: [async (c: Context) => c.json({ foo: "foo" })],
  },
];

// biome-ignore lint/complexity/noForEach: clearer than for loop
routes.forEach((route) => {
  app[route.method](route.path, ...route.middlewares);
});

// catch all unhandled /api/* requests and returns bad request
app.use("*", async (c: Context) => c.json({ error: "bad request" }, 400));

type Methods = (typeof METHODS)[number];

interface Routes {
  path: string;
  method: Pick<Hono, Methods> extends string ? Pick<Hono, Methods> : Methods;
  middlewares: MiddlewareHandler[];
}

export default app;
