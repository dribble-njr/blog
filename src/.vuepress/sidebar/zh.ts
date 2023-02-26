import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  // '/': [
  //   '',
  //   {
  //     text: 'HTML',
  //     icon: 'creative',
  //     prefix: 'html/',
  //     link: 'html/',
  //     children: 'structure'
  //   },
  //   {
  //     text: 'CSS',
  //     icon: 'note',
  //     prefix: 'css/',
  //     children: 'structure'
  //   },
  //   'intro',
  //   'slides'
  // ]
  '/html/': [
    {
      text: 'HTML',
      collapsible: false,
      children: [
        '0001、DOCTYPE.md',
        '0002、src和href的区别.md',
        '0003、HTML5新特性.md',
        '0004、语义化标签.md',
        '0005、script标签中defer和async的区别.md',
        '0006、视频和音频.md',
        '0008、WebStorage.md',
        '0009、Canvas和SVG.md'
      ]
    }
  ],
  '/css/': [
    {
      text: 'CSS',
      collapsible: false,
      children: [
        '0001、盒子模型.md',
        '0002、flex.md',
        '0003、postcss-px-to-viewport.md',
        '0004、定位.md',
        '0005、居中.md',
        '0006、CSS3新属性.md',
        '0007、样式单位.md',
        '0008、BFC.md',
        '0010、选择器.md'
      ]
    }
  ],
  '/javascript/': [
    {
      text: 'JavaScript',
      collapsible: false,
      children: [
        '0001、深入理解对象属性.md',
        '0002、创建对象.md',
        '0003、继承.md',
        '0004、类.md',
        '0005、字符串操作中slice、substring的区别.md',
        '0006、执行上下文.md',
        '0007、this指向.md',
        '0008、手写call-apply-bind.md',
        '0009、var-let-const.md',
        '0010、判断数据类型.md',
        '0011、判断对象值相等.md',
        '0012、AJAX.md',
        '0013、Symbol与BigInt.md',
        '0014、浅拷贝与深拷贝.md',
        '0015、new的原理.md',
        '0016、类数组对象.md'
      ]
    }
  ],
  '/leetcode/': [
    {
      text: 'LeetCode',
      collapsible: false,
      children: [
        '0001、二叉树.md',
        '0002、二叉搜索树.md',
        '0003、动态规划.md',
        '0004、链表.md'
      ]
    }
  ],
  '/library/Vue/': [
    {
      text: 'Vue',
      collapsible: false,
      children: [
        '01、父子组件通信.md',
        '02、provide-inject.md',
        '03、插槽.md',
        '04、动态组件和异步组件.md',
        '05、组件的v-model.md',
        '06、Mixin.md',
        '07、组合式API基础.md',
        '08、组合式函数.md'
      ]
    }
  ],
  '/library/React/': [
    {
      text: 'React',
      collapsible: false,
      children: []
    }
  ],
  '/client/': [
    {
      text: '浏览器',
      collapsible: false,
      children: [
        '0008、浏览器概述.md',
        // "0001、输入URL浏览器干了什么.md",
        '0002、浏览器是怎么渲染的.md',
        '0003、V8引擎.md',
        '0004、内存管理.md',
        '0005、HTTP概述.md',
        '0006、GET和POST区别.md',
        '0007、HTTP性能演变.md',
        '0009、HTTP缓存.md',
        '0010、HTTPS略解.md',
        '0011、TCP三次握手与四次挥手.md',
        '0012、网络模型.md',
        '0013、TCP与UDP.md',
        '0014、跨域.md'
      ]
    }
  ],
  '/engineering/': [
    {
      text: 'Server',
      collapsible: false,
      children: [
        '0001、设置 ssh 密钥登录.md',
        '0002、搭建 git 私服.md',
        '0003、配置宝塔面板.md',
        '0004、自动部署.md',
        '0005、webpack基础打包.md',
        '0006、webpack打包CSS.md',
        '0007、webpack打包资源.md',
        '0008、webpack插件.md',
        '0009、webpack-babel.md',
        '0010、webpack-vue.md',
        '0011、webpack-server.md',
        '0012、webpack-resolve.md',
        '0013、webpack环境分离.md',
        '0014、vite初体验.md',
        '0015、模块化.md'
      ]
    }
  ]
})
