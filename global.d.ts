declare global {
  namespace Vike {
    interface PageContext {
      // Define type of pageContext.user

      Page: (pageProps: unknown) => React.ReactNode;
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
