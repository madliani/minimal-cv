import sitemapIntegration from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

/** @type {import("astro").AstroUserConfig} */
export default defineConfig({
    integrations: [sitemapIntegration()],
    site: "https://madliani-cv.vercel.app/"
})
