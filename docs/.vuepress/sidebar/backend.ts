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
        icon: 'basic',
        prefix: 'basic/',
        children: []
      },
      {
        text: '实践',
        collapsible: true,
        icon: 'practice',
        prefix: 'practice/',
        children: [
          '001-set-the-ssh',
          '002-build-git-server',
          '003-configure-bt',
          '004-automated-deployment',
          '005-install-docker'
        ]
      }
    ]
  },
  {
    text: '数据库',
    collapsible: true,
    icon: 'database',
    prefix: 'database/',
    children: [
      {
        text: '基础知识',
        collapsible: true,
        icon: 'basic',
        prefix: 'basic/',
        children: ['001-hello-database']
      },
      {
        text: 'MySQL',
        collapsible: true,
        icon: 'mysql',
        prefix: 'mysql/',
        children: ['001-install-mysql']
      }
    ]
  }
]
