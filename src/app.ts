import { pinia } from "@/store/store"
import { defineApp } from "iles"
import "@/assets/base.scss"

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Display&family=Meow+Script&family=Oxygen+Mono&display=swap",
        },
      ],
    }
  },
})
