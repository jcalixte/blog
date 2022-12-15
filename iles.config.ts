import { defineConfig } from "iles"
import prism from "@islands/prism"
import pwa from "@islands/pwa"

export default defineConfig({
  siteUrl: "https://juliencalixte.eu",
  modules: [
    "@islands/headings",
    prism(),
    pwa({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Julien Calixte",
        short_name: "julienc",
        description: "Julien Calixte's blog",
        theme_color: "#fda7df",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
})
