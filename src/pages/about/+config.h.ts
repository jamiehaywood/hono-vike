import { Config } from "vike/types";

export default {
  meta: {
    Page: {
      env: {
        server: false,
        client: true,
      },
    },
  },
} satisfies Config;
