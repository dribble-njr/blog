import { navbar } from 'vuepress-theme-hope'

const isProduction = process.env.NODE_ENV === 'production'

export const Navbar = navbar([
  { text: '主页', link: '/', icon: 'home' },
  { text: '前端指南', link: '/frontend/', icon: 'Web' },
  { text: '计算机基础', link: '/computer-science/', icon: 'computer' },
  { text: '后端指北', link: '/backend/', icon: 'server' },
  { text: '项目', link: '/project/', icon: 'project' },
  { text: '读书笔记', link: '/reading/', icon: 'biji' },
  ...(!isProduction
    ? [{ text: '求生之路', link: '/survival/', icon: 'road' }]
    : []),
  { text: 'TimeLine', link: '/timeline/', icon: 'timeline' }
])
