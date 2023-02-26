import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'On the cloud',
  description: 'Personal frontend knowledge base',
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
