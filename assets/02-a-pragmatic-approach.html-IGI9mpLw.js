import{_ as e,o as a,c as l,e as i}from"./app-p5AaHvTh.js";const t={},r=i('<h2 id="优秀设计的精髓" tabindex="-1"><a class="header-anchor" href="#优秀设计的精髓"><span>优秀设计的精髓</span></a></h2><p>ETC 原则（Easier To Change）：</p><ul><li>解耦：隔离关注焦点，可以更容易地进行修改。</li><li>单一职责原则：一个需求的变化只会影响一个模块。</li><li>命名：良好的命名可以使代码更容易阅读。</li></ul><h2 id="dry——邪恶的重复" tabindex="-1"><a class="header-anchor" href="#dry——邪恶的重复"><span>DRY——邪恶的重复</span></a></h2><p>DRY（Don&#39;t Repeat Yourself）原则：</p><ul><li>代码中的重复。</li><li>文档中的重复。</li><li>数据中的重复。</li></ul><h2 id="正交性" tabindex="-1"><a class="header-anchor" href="#正交性"><span>正交性</span></a></h2><p>对于两个或多个事物，如果它们的行为不会相互影响，那么它们就是正交的。</p><p>象征着独立性和解耦。</p><ul><li>保持代码解耦。</li><li>避免全局数据。</li><li>避免相似的函数，每个函数都有不同的中心算法，可以使用「策略模式」进行优化。</li><li>编写单元测试。</li></ul><h2 id="可逆性" tabindex="-1"><a class="header-anchor" href="#可逆性"><span>可逆性</span></a></h2><ul><li>将第三方的 API 隐藏在自己的抽象层之后。</li><li>将代码分解为多个组件。</li></ul><h2 id="曳光弹" tabindex="-1"><a class="header-anchor" href="#曳光弹"><span>曳光弹</span></a></h2><p>先实现最小可行产品（MVP）。</p><h2 id="原型与便签" tabindex="-1"><a class="header-anchor" href="#原型与便签"><span>原型与便签</span></a></h2><p>你可以为下列事物做原型：</p><ul><li>架构</li><li>已存在的系统中的新功能</li><li>数据结构或外部数据的内容</li><li>第三方工具或组件</li><li>性能问题</li><li>用户界面设计</li></ul><p>当制作一个原型时，下面几个方面可以忽略：</p><ul><li>正确性：你可以在适当的地方使用替代数据。</li><li>完整性：原型只需要满足有限的功能，可能只有一个预先选好的输入数据片段及单个菜单选项。</li><li>健壮性：错误检查可以不完整，甚至完全没有都行。如果你偏离了预定的航线，原型机很可能烧毁在绚丽的烟火中——那又如何！</li><li>格式：原型代码可能并不需要太多注释和文档（尽管围绕从原型中获取的经验，可能会产生大量文档，但是相对而言，原型系统本身的文档要少得多）。</li></ul><p>制作架构原型：</p><ul><li>主要组件的职责是否恰当，有没有定义清晰？</li><li>主要组件之间的协作是否定义清晰？</li><li>耦合度最小化了吗？</li><li>你能确定重复的潜在来源吗？</li><li>接口的定义和约束能否接受？</li><li>在执行过程中是否每个模块都有访问所需数据的途径？在需要数据的时候，能访问到吗？</li></ul><h2 id="领域语言" tabindex="-1"><a class="header-anchor" href="#领域语言"><span>领域语言</span></a></h2><p>计算机的语言会影响你怎样思考问题，影响你怎样看待信息的传播。</p><p>每一门语言都有一个特性列表——比如这些时髦的术语：静态类型还是动态类型，早期绑定还是晚期绑定，函数式还是面向对象，继承模型，mixin，宏机制——所有这些对问题的解决方案，既可能提供建议也可能扰乱视听。</p><p>同样是设计解决方案，用 C++ 的方式和用 Haskell 的思想，得到的结果会大为不同，反之亦然。</p><h2 id="估算" tabindex="-1"><a class="header-anchor" href="#估算"><span>估算</span></a></h2><p>通过估算来避免意外。</p><p>估算项目进度，根据代码不断迭代项目进度表。（TODO 看板？）</p>',28),n=[r];function p(o,c){return a(),l("div",null,n)}const s=e(t,[["render",p],["__file","02-a-pragmatic-approach.html.vue"]]),d=JSON.parse(`{"path":"/reading/pragmatic-programmer/02-a-pragmatic-approach.html","title":"务实的方法","lang":"zh-CN","frontmatter":{"title":"务实的方法","date":"2024-02-19T00:00:00.000Z","icon":"approach","category":["READING"],"tag":["pragmatic"],"description":"优秀设计的精髓 ETC 原则（Easier To Change）： 解耦：隔离关注焦点，可以更容易地进行修改。 单一职责原则：一个需求的变化只会影响一个模块。 命名：良好的命名可以使代码更容易阅读。 DRY——邪恶的重复 DRY（Don't Repeat Yourself）原则： 代码中的重复。 文档中的重复。 数据中的重复。 正交性 对于两个或多个事...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/reading/pragmatic-programmer/02-a-pragmatic-approach.html"}],["meta",{"property":"og:title","content":"务实的方法"}],["meta",{"property":"og:description","content":"优秀设计的精髓 ETC 原则（Easier To Change）： 解耦：隔离关注焦点，可以更容易地进行修改。 单一职责原则：一个需求的变化只会影响一个模块。 命名：良好的命名可以使代码更容易阅读。 DRY——邪恶的重复 DRY（Don't Repeat Yourself）原则： 代码中的重复。 文档中的重复。 数据中的重复。 正交性 对于两个或多个事..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-19T14:34:11.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"pragmatic"}],["meta",{"property":"article:published_time","content":"2024-02-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-19T14:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"务实的方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-19T14:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 优秀设计的精髓","slug":"优秀设计的精髓","link":"#优秀设计的精髓","children":[]},{"level":2,"title":"2 DRY——邪恶的重复","slug":"dry——邪恶的重复","link":"#dry——邪恶的重复","children":[]},{"level":2,"title":"3 正交性","slug":"正交性","link":"#正交性","children":[]},{"level":2,"title":"4 可逆性","slug":"可逆性","link":"#可逆性","children":[]},{"level":2,"title":"5 曳光弹","slug":"曳光弹","link":"#曳光弹","children":[]},{"level":2,"title":"6 原型与便签","slug":"原型与便签","link":"#原型与便签","children":[]},{"level":2,"title":"7 领域语言","slug":"领域语言","link":"#领域语言","children":[]},{"level":2,"title":"8 估算","slug":"估算","link":"#估算","children":[]}],"git":{"createdTime":1708254871000,"updatedTime":1708353251000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"reading/pragmatic-programmer/02-a-pragmatic-approach.md","localizedDate":"2024年2月19日","excerpt":"","autoDesc":true}`);export{s as comp,d as data};