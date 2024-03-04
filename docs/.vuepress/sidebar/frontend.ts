export default [
  {
    text: '基础知识',
    icon: 'basic',
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
          '007-media-tag',
          '008-canvas-svg',
          '009-src-vs-href'
        ]
      },
      {
        text: 'CSS',
        icon: 'css3',
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
          '011-center',
          '012-grid',
          '013-BFC',
          '014-responsive-design-intro',
          '015-responsive-design',
          '016-how-to-responsive'
        ]
      },
      {
        text: 'JavaScript',
        icon: 'js',
        collapsible: true,
        children: []
      }
    ]
  },
  {
    text: '框架和库',
    collapsible: true,
    icon: 'framework',
    prefix: '/frontend/framework/',
    children: [
      {
        text: 'React',
        collapsible: true,
        prefix: 'react/',
        icon: 'react',
        children: ['01-useState', '02-useEffect']
      },
      {
        text: 'Vue',
        collapsible: true,
        prefix: 'vue/',
        icon: 'vue',
        children: []
      },
      {
        text: 'Node',
        collapsible: true,
        prefix: 'node/',
        icon: 'nodejs',
        children: []
      }
    ]
  },
  {
    text: '工程化',
    collapsible: true,
    icon: 'jiejiangongcheng',
    prefix: '/frontend/engineering/',
    children: [
      {
        text: '基础概念',
        collapsible: true,
        icon: 'basic',
        prefix: 'basic/',
        children: [
          '001-modularization',
          '002-package-manager',
          '003-tool',
          '004-project-standards',
          '005-yeoman'
        ]
      },
      {
        text: '打包工具',
        collapsible: true,
        icon: 'auto-set-up',
        prefix: 'build-tool/',
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
            icon: 'vite',
            children: ['001-hello-vite']
          },
          {
            text: 'Rspack',
            collapsible: true,
            prefix: 'rspack/',
            icon: 'r-mark',
            children: ['001-hello-rspack']
          }
        ]
      },
      {
        text: '服务端渲染',
        collapsible: true,
        icon: '7',
        prefix: 'ssr/',
        children: [
          '005-qwik',
          '006-react-server-component',
          '007-hydration-is-pure-overhead'
        ]
      }
    ]
  },
  {
    text: '实践',
    collapsible: true,
    icon: 'practice',
    prefix: '/frontend/practice/',
    children: [
      '001-sortable',
      '002-annotation',
      '003-file-upload',
      '004-global-upload',
      '005-postcss-px-to-viewport',
      '006-animation-svg',
      '007-offline-export-in-highcharts'
    ]
  },
  {
    text: '浏览器',
    collapsible: true,
    icon: 'gugeliulanqi',
    prefix: '/frontend/browser/',
    children: ['/frontend/browser/']
  }
]
