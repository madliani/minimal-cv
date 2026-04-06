import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black'
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080'
      }
    }),
    mdx()
  ],
  site: 'https://madliani.vercel.app/'
})
