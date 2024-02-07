import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import orderedHeader from 'vuepress-plugin-ordered-header'
import excerptPlugin from './plugin/index.js'
import theme from './theme.ts'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  description: 'Personal frontend knowledge base',
  theme,

  alias: {
    '@theme-hope/modules/navbar/components/NavbarBrand': path.resolve(
      __dirname,
      './components/NavLogo.vue'
    )
  },

  plugins: [orderedHeader],

  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  }

  // Enable it with pwa
  // shouldPrefetch: false,
})
