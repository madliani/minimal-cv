# Minimal Resume

> This is a fork of [minimal (commit 2e2cd80)](https://github.com/ekmas/minimal) by [Samuel Breznjak (nickname ekmas)](https://github.com/ekmas/).

Minimal is a minimalistic astro theme for blogs.

## Get started

[Create a new repo](https://github.com/madliani/minimal-resume/generate) from this template.

## Features

- Astro v4
- Responsive & SEO-friendly
- View Transitions API
- Content collections
- Expressive-code code blocks
- Shiki code syntax styling
- Icons by [Font Awesome 7](https://fontawesome.com/)

## Configure

- Go to `astro.config.mjs` and change site
- Go to `src/config.ts` and configure data for meta tags
- You can also customize colors of entire layout by changing colors in tailwind config.
- You can customize code blocks config by changing `expressiveCode` object in astro config. Visit [expressive-code docs](https://expressive-code.com/reference/configuration) for more info.
- To change code blocks theme, you'll have to update themes both in `themes` array and in `config.ts`

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## License

MIT
