import pluginJS from "@eslint/js"
import pluginAstro from "eslint-plugin-astro"
import pluginPerfect from "eslint-plugin-perfectionist"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import typescript from "typescript-eslint"

/**
 * @type {import("eslint/config").Config}
 */
export default defineConfig([
    {
        extends: [
            pluginJS.configs.recommended,
            typescript.configs.eslintRecommended,
            typescript.configs.strict,
            typescript.configs.stylistic,
            pluginPerfect.configs["recommended-alphabetical"],
            pluginAstro.configs.recommended
        ],
        files: ["**/*.{astro,js,ts}"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                allowReserved: false,
                ecmaFeatures: { globalReturn: false, impliedStrict: true }
            },
            sourceType: "module"
        },
        plugins: {
            astro: pluginAstro,
            javascript: pluginJS,
            typescript: typescript.plugin
        },
        rules: { "n/no-missing-import": "off" }
    },
    globalIgnores(["dist/", "coverage/", "html/", "node_modules/"])
])
