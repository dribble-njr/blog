export default [
  {
    text: 'Pro Git',
    icon: 'git',
    collapsible: true,
    prefix: '/reading/pro-git',
    children: [
      '01-getting-started',
      '02-git-basics',
      '03-git-branch',
      '04-git-server'
    ]
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
        children: ['', '01-command-pattern', '02-factory-pattern']
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
      '04-pragmatic-paranoid'
    ]
  }
]
