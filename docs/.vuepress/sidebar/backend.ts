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
          '01-set-the-ssh',
          '02-build-git-server',
          '03-configure-bt',
          '04-automated-deployment',
          '05-install-docker'
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
        children: ['001-hello-database', '002-relation-model', '003-db-design', '004-advanced-db-model']
      },
      {
        text: 'MySQL',
        collapsible: true,
        icon: 'mysql',
        prefix: 'mysql/',
        children: ['01-install-mysql']
      },
      {
        text: 'SQL',
        collapsible: true,
        icon: 'sql',
        prefix: 'sql/',
        children: ['01-quick-start']
      }
    ]
  },
  {
    text: 'Node',
    collapsible: true,
    icon: 'nodejs',
    prefix: 'node/',
    children: [
      {
        text: 'Express',
        collapsible: true,
        icon: 'express',
        prefix: 'express/',
        children: ['01-overview-architecture', '02-express.js', '03-application.js']
      },
      {
        text: 'Module',
        collapsible: true,
        icon: 'npm',
        prefix: 'module/',
        children: ['001-finalhandler']
      }
    ]
  },
  {
    text: 'Java',
    collapsible: true,
    icon: 'java',
    prefix: 'java/',
    children: [
      {
        text: 'tool',
        collapsible: true,
        icon: 'tool-fill',
        prefix: 'tool/',
        children: ['01-maven']
      }
    ]
  },
  {
    text: '实践',
    collapsible: true,
    icon: 'practice',
    prefix: '/backend/practice/',
    children: ['001-integrate-turso-prisma']
  }
]
