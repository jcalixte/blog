import { pinia } from "@/store/store";
import { defineApp } from "iles";
import "@/assets/base.scss";

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia);
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fenix&family=Meow+Script&display=swap",
        },
      ],
    };
  },
});
