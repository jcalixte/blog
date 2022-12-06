import { defineConfig } from "iles"
import prism from "@islands/prism"

export default defineConfig({
  siteUrl: "https://juliencalixte.eu",
  modules: ["@islands/headings", prism()],
})
