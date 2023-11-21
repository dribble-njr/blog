export default [
  {
    text: '基础知识',
    icon: 'jcy-knowledge-filled',
    collapsible: true,
    prefix: '/frontend/basic/',
    children: [
      {
        text: 'HTML',
        icon: 'html5',
        prefix: 'html/',
        collapsible: true,
        children: [
          '',
          '001-html-history',
          '002-quick-start',
          '003-doctype',
          '004-common-element',
          '005-advanced-element',
          '006-semantically-meaningful-tags',
        ]
      },
      {
        text: 'CSS',
        icon: 'css',
        prefix: 'css/',
        collapsible: true,
        children: [
          '',
          '001-quick-start',
          '002-selector',
          '003-box-model',
          '004-text-font',
          '005-cascade-inheritance',
          '006-background-border',
          '007-position',
          '008-float',
          '009-flex',
          '010-unit',
          '011-center'
        ]
      },
      {
        text: 'JavaScript',
        icon: 'javascript',
        collapsible: true,
        children: []
      }
    ]
  },
  {
    text: '前端框架和库',
    collapsible: true,
    prefix: '/frontend/framework/',
    children: ['vue', 'react', 'node']
  },
  {
    text: '前端工具和技术',
    collapsible: true,
    prefix: '/frontend/tool/',
    children: [
      {
        text: 'Webpack',
        collapsible: true,
        prefix: 'webpack/',
        icon: 'webpack',
        children: [
          '001-webpack-basic',
          '002-webpack-css',
          '003-webpack-assets',
          '004-webpack-plugin',
          '005-webpack-babel',
          '006-webpack-vue',
          '007-webpack-dev-server',
          '008-webpack-resolve',
          '009-webpack-env-split'
        ]
      },
      {
        text: 'Vite',
        collapsible: true,
        prefix: 'vite/',
        icon: 'lightning',
        children: ['001-hello-vite']
      }
    ]
  },
  {
    text: '浏览器',
    collapsible: true,
    icon: 'browser-',
    children: ['/frontend/browser']
  },
  {
    text: '前端性能优化',
    collapsible: true,
    children: ['/frontend/performance/']
  },
  {
    text: '前端最佳实践',
    collapsible: true,
    children: ['/frontend/best-practice/']
  },
  {
    text: '前端工程化',
    collapsible: true,
    children: ['/frontend/engineering/']
  }
]
