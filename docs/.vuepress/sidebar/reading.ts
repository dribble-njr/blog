export default [
  {
    text: 'Pro Git',
    icon: 'git',
    collapsible: true,
    prefix: '/reading/pro-git',
    children: ['01-getting-started', '02-git-basics', '03-git-branch', '04-git-server', '06-change-commit']
  },
  {
    text: 'Patterns',
    icon: 'shejimoshi',
    collapsible: true,
    prefix: '/reading/patterns/',
    children: [
      {
        text: 'Vanilla',
        collapsible: true,
        prefix: 'vanilla/',
        icon: 'js',
        children: [
          '',
          '01-command-pattern',
          '02-factory-pattern',
          '03-flyweight-pattern',
          '04-mediator-pattern',
          '05-middleware-pattern',
          '06-mixin-pattern',
          '07-module-pattern',
          '08-observer-pattern',
          '09-prototype-pattern',
          '11-singleton-pattern'
        ]
      },
      {
        text: 'React',
        collapsible: true,
        prefix: 'react/',
        icon: 'react',
        children: ['01-provider-pattern']
      }
    ]
  },
  {
    text: '程序员修炼之道',
    icon: 'meditation',
    collapsible: true,
    prefix: '/reading/pragmatic-programmer/',
    children: [
      '01-a-pragmatic-philosophy',
      '02-a-pragmatic-approach',
      '03-basic-tool',
      '04-pragmatic-paranoid',
      '05-work-around',
      '06-concurrent',
      '07-when-coding',
      '08-before-start-project',
      '09-pragmatic-project'
    ]
  }
]
