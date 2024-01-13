const e=JSON.parse('{"key":"v-5558a50a","path":"/frontend/basic/javascript/0006%E3%80%81%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.html","title":"执行上下文","lang":"zh-CN","frontmatter":{"title":"执行上下文","date":"2022-04-21T00:00:00.000Z","category":["JavaScript"],"tag":["执行机制"],"description":"执行上下文 执行上下文（Execution Context）是 JavaScript 代码执行时所在的环境，一共有三种不同的执行上下文： 全局执行上下文（Global Execution Context, GEC）：最基本的执行上下文，在一开始就会进行初始化：创建全局上下文，将 this 指向这个对象；一个 JavaScript 程序只有一个 GEC；...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/frontend/basic/javascript/0006%E3%80%81%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.html"}],["meta",{"property":"og:title","content":"执行上下文"}],["meta",{"property":"og:description","content":"执行上下文 执行上下文（Execution Context）是 JavaScript 代码执行时所在的环境，一共有三种不同的执行上下文： 全局执行上下文（Global Execution Context, GEC）：最基本的执行上下文，在一开始就会进行初始化：创建全局上下文，将 this 指向这个对象；一个 JavaScript 程序只有一个 GEC；..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dribble-njr.github.io/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T10:47:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"执行上下文"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"执行机制"}],["meta",{"property":"article:published_time","content":"2022-04-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T10:47:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"执行上下文\\",\\"image\\":[\\"https://dribble-njr.github.io/blog/\\"],\\"datePublished\\":\\"2022-04-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T10:47:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"执行上下文","slug":"执行上下文","link":"#执行上下文","children":[]},{"level":2,"title":"执行上下文栈","slug":"执行上下文栈","link":"#执行上下文栈","children":[]},{"level":2,"title":"ES3 中的执行上下文","slug":"es3-中的执行上下文","link":"#es3-中的执行上下文","children":[{"level":3,"title":"变量对象（variable object, VO）","slug":"变量对象-variable-object-vo","link":"#变量对象-variable-object-vo","children":[]},{"level":3,"title":"活动对象（activation object, AO）","slug":"活动对象-activation-object-ao","link":"#活动对象-activation-object-ao","children":[]},{"level":3,"title":"作用域链（scope chain）","slug":"作用域链-scope-chain","link":"#作用域链-scope-chain","children":[]},{"level":3,"title":"this","slug":"this","link":"#this","children":[]}]},{"level":2,"title":"ES5 中的执行上下文","slug":"es5-中的执行上下文","link":"#es5-中的执行上下文","children":[]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[{"level":3,"title":"面试题一","slug":"面试题一","link":"#面试题一","children":[]},{"level":3,"title":"面试题二","slug":"面试题二","link":"#面试题二","children":[]},{"level":3,"title":"面试题三","slug":"面试题三","link":"#面试题三","children":[]},{"level":3,"title":"面试题四","slug":"面试题四","link":"#面试题四","children":[]},{"level":3,"title":"面试题五","slug":"面试题五","link":"#面试题五","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1677733227000,"updatedTime":1679741260000,"contributors":[{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":1},{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1405},"filePathRelative":"frontend/basic/javascript/0006、执行上下文.md","localizedDate":"2022年4月21日","excerpt":"","autoDesc":true}');export{e as data};
