import { renderPage } from "vike/server";
import { Context, Next } from "hono";

export async function handleSsr(c: Context, next: Next) {
  const pageContextInit = {
    urlOriginal: c.req.url,
  };

  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;

  if (!httpResponse) {
    await next();
  } else {
    const { body, statusCode: status, headers } = httpResponse;
    return new Response(body, { headers, status });
  }
}
