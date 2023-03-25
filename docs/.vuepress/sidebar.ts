import { backend, computerScience, frontend, project } from './sidebar/index'

import { sidebar } from 'vuepress-theme-hope'

export const Sidebar = sidebar({
  '/backend/': backend,
  '/computer-science/': computerScience,
  '/frontend/': frontend,
  '/project/': project,
  '/': ['']
})
