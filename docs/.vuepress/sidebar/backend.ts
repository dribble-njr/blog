export default [
  {
    text: 'Linux',
    collapsible: true,
    icon: 'linux',
    prefix: '/backend/linux/',
    children: [
      {
        text: '基础概念',
        collapsible: true,
        icon: 'jichusheshi',
        prefix: 'basic/',
        children: []
      },
      {
        text: '实践',
        collapsible: true,
        icon: 'codelibrary-fill',
        prefix: 'practice/',
        children: [
          '001-set-the-ssh',
          '002-build-git-server',
          '003-configure-bt',
          '004-automated-deployment'
        ]
      }
    ]
  },
  {
    text: '数据库',
    collapsible: true,
    children: ['/backend/database']
  }
]
