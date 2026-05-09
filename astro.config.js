import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"

/** @type {import("astro").AstroUserConfig} */
export default defineConfig({
    integrations: [mdx()],
    site: "https://madliani-cv.vercel.app/"
})
