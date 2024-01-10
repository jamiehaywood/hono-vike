// https://vike.dev/onRenderClient
export { onRenderClient };

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageContext } from "vike/types";

async function onRenderClient(pageContext: PageContext) {
  const { Page } = pageContext;
  hydrateRoot(document.getElementById("root")!, <Page />);
}
