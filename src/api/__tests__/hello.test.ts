import { it, expect, describe } from "vitest";
import { hello } from "../hello";
import { Hono } from "hono";

describe("hello", () => {
  it("returns 200 with text 'hello world' when no name query string is passed in URL", async () => {
    const app = new Hono();

    app.get("/hello", hello);

    const res = await app.request("/hello", {
      method: "GET",
    });

    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello World");
  });

  it("returns 200 with text 'hello foo' when name query string is passed in URL", async () => {
    const app = new Hono();

    app.get("/hello", hello);

    const res = await app.request("/hello?name=foo", {
      method: "GET",
    });

    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello foo");
  });
});
