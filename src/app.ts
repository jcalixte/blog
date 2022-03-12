import { pinia } from "@/store/store";
import { defineApp } from "iles";
import "@/assets/base.scss";

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia);
  },
});
