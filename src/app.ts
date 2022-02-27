import { pinia } from "@/store/store";
import { defineApp } from "iles";

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia);
  },
});
