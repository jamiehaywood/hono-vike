// https://vike.dev/onRenderHtml
export { onRenderHtml };

import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { OnRenderHtmlAsync, PageContextServer } from "vike/types";

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;
  const viewHtml = dangerouslySkipEscape(renderToString(<Page />));

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="root">${viewHtml}</div>
      </body>
    </html>`;
};
