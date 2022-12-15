import { defineConfig } from "iles"
import prism from "@islands/prism"
import pwa from "@islands/pwa"

export default defineConfig({
  siteUrl: "https://juliencalixte.eu",
  modules: ["@islands/headings", prism(), pwa()],
})
