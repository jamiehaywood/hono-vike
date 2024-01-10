import { ReactElement, JSXElementConstructor } from "react";

declare global {
  namespace Vike {
    interface PageContext {
      // Define type of pageContext.user
      user?: {
        name: string;
        id: string;
        isAdmin: boolean;
      };
      // Define type of pageContext.pageProps
      pageProps?: PageProps;
      // Refine type of pageContext.Page (it's `unknown` by default)
      Page: (pageProps: any) => ReactElement<any, string | JSXElementConstructor<any>>;
    }
  }
}
type PageProps = {
  movies: {
    title: string;
    releaseDate: Date;
  }[];
};

// Tell TypeScript this file isn't an ambient module
export {};
