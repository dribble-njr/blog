import{_ as e,c as a,e as r,o as i}from"./app-4ZRF3vam.js";const p={};function n(o,t){return i(),a("div",null,t[0]||(t[0]=[r('<h2 id="契约式设计" tabindex="-1"><a class="header-anchor" href="#契约式设计"><span>契约式设计</span></a></h2><p>文档化及对主张进行检验是契约式设计（缩写为 DBC）的核心。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>前置条件</p><p>为调用这个例程，必须为真的是什么？例程的需求。一个例程永远不应该在前置条件被违反的时候被调用。传递良好的数据是调用者的责任。</p><p>后置条件</p><p>例程保证要做的是什么？例程完成时世界的状态。例程有后置条件这个事实，意味着能得出这样的结论——不允许无限循环。</p><p>类的不变式</p><p>从调用者的角度来看，类会确保该条件始终为真。在例程的内部处理期间，可以不遵守不变式，但是当例程退出并将控制权返回给调用者时，不变式必须为真。（注意，一个类不能给参与不变式的任何数据成员不受限制的写访问权限。）</p></div><h2 id="通过契约进行设计" tabindex="-1"><a class="header-anchor" href="#通过契约进行设计"><span>通过契约进行设计</span></a></h2><p>如果你订的契约是可以接受任何东西，并且承诺要回报整个世界，那么你就有很多代码要写！</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>是不是这就是需要解耦？</p></div>',6)]))}const l=e(p,[["render",n],["__file","04-pragmatic-paranoid.html.vue"]]),m=JSON.parse('{"path":"/reading/pragmatic-programmer/04-pragmatic-paranoid.html","title":"务实的偏执","lang":"zh-CN","frontmatter":{"title":"务实的偏执","date":"2024-04-08T00:00:00.000Z","icon":"contract","category":["READING"],"tag":["pragmatic"],"description":"契约式设计 文档化及对主张进行检验是契约式设计（缩写为 DBC）的核心。 提示 前置条件 为调用这个例程，必须为真的是什么？例程的需求。一个例程永远不应该在前置条件被违反的时候被调用。传递良好的数据是调用者的责任。 后置条件 例程保证要做的是什么？例程完成时世界的状态。例程有后置条件这个事实，意味着能得出这样的结论——不允许无限循环。 类的不变式 从调...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/reading/pragmatic-programmer/04-pragmatic-paranoid.html"}],["meta",{"property":"og:title","content":"务实的偏执"}],["meta",{"property":"og:description","content":"契约式设计 文档化及对主张进行检验是契约式设计（缩写为 DBC）的核心。 提示 前置条件 为调用这个例程，必须为真的是什么？例程的需求。一个例程永远不应该在前置条件被违反的时候被调用。传递良好的数据是调用者的责任。 后置条件 例程保证要做的是什么？例程完成时世界的状态。例程有后置条件这个事实，意味着能得出这样的结论——不允许无限循环。 类的不变式 从调..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"pragmatic"}],["meta",{"property":"article:published_time","content":"2024-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"务实的偏执\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 契约式设计","slug":"契约式设计","link":"#契约式设计","children":[]},{"level":2,"title":"2 通过契约进行设计","slug":"通过契约进行设计","link":"#通过契约进行设计","children":[]}],"git":{"createdTime":1712567279000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":1.05,"words":316},"filePathRelative":"reading/pragmatic-programmer/04-pragmatic-paranoid.md","localizedDate":"2024年4月8日","excerpt":"","autoDesc":true}');export{l as comp,m as data};