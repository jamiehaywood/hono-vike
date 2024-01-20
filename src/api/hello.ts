import { Context, Next } from "hono";

export const hello = async (context: Context, next: Next) => {
  const name = context.req.query("name");

  return new Response(`Hello ${name ?? "World"}`);
};
