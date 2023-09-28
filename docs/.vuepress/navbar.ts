import { navbar } from 'vuepress-theme-hope'

export const Navbar = navbar([
  { text: '主页', link: '/', icon: 'home' },
  { text: '前端指南', link: '/frontend/', icon: 'Web' },
  { text: '计算机基础', link: '/computer-science/', icon: 'computer' },
  { text: '后端指北', link: '/backend/', icon: 'server' },
  { text: '项目', link: '/project/', icon: 'project1' },
  { text: '读书笔记', link: '/reading/', icon: 'biji' },
  { text: 'TimeLine', link: '/timeline/', icon: 'timeline' }
])
