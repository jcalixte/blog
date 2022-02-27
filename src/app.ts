import { defineApp } from "iles";
import { createPinia } from "pinia";

export default defineApp({
  enhanceApp({ app }) {
    app.use(createPinia());
  },
});
