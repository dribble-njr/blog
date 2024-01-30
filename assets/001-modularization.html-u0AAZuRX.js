const e=JSON.parse('{"key":"v-548690fc","path":"/frontend/engineering/basic/001-modularization.html","title":"模块化","lang":"zh-CN","frontmatter":{"title":"模块化","date":"2022-08-10T00:00:00.000Z","category":["工程化"],"tag":["模块化","ESM","CJS","AMD","CMD"],"description":"早期 JavaScript 仅仅作为一个脚本语言，所需的代码通常不会很大。然而随着前端和 JavaScript 的发展，逐渐暴露出两个问题： 全局污染：不同文件中的函数会相互污染；; 依赖混乱：各文件中的函数依赖非常混乱。; 模块化就是为了解决上述问题，最终目的是为了将程序拆分为可按需导入的单独模块。在模块中编写属于自己的逻辑代码，拥有自己的作用域，能...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/engineering/basic/001-modularization.html"}],["meta",{"property":"og:title","content":"模块化"}],["meta",{"property":"og:description","content":"早期 JavaScript 仅仅作为一个脚本语言，所需的代码通常不会很大。然而随着前端和 JavaScript 的发展，逐渐暴露出两个问题： 全局污染：不同文件中的函数会相互污染；; 依赖混乱：各文件中的函数依赖非常混乱。; 模块化就是为了解决上述问题，最终目的是为了将程序拆分为可按需导入的单独模块。在模块中编写属于自己的逻辑代码，拥有自己的作用域，能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T08:28:24.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"模块化"}],["meta",{"property":"article:tag","content":"ESM"}],["meta",{"property":"article:tag","content":"CJS"}],["meta",{"property":"article:tag","content":"AMD"}],["meta",{"property":"article:tag","content":"CMD"}],["meta",{"property":"article:published_time","content":"2022-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T08:28:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T08:28:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 早期模块化方案","slug":"早期模块化方案","link":"#早期模块化方案","children":[{"level":3,"title":"1.1 Window","slug":"window","link":"#window","children":[]}]},{"level":2,"title":"2 IIFE","slug":"iife","link":"#iife","children":[]},{"level":2,"title":"3 CommonJS","slug":"commonjs","link":"#commonjs","children":[{"level":3,"title":"3.1 exports 和 module.exports","slug":"exports-和-module-exports","link":"#exports-和-module-exports","children":[]},{"level":3,"title":"3.2 require","slug":"require","link":"#require","children":[]},{"level":3,"title":"3.3 模块编译","slug":"模块编译","link":"#模块编译","children":[]},{"level":3,"title":"3.4 其他","slug":"其他","link":"#其他","children":[]},{"level":3,"title":"3.5 缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"4 AMD/CMD","slug":"amd-cmd","link":"#amd-cmd","children":[{"level":3,"title":"4.1 AMD","slug":"amd","link":"#amd","children":[]},{"level":3,"title":"4.2 CMD","slug":"cmd","link":"#cmd","children":[]}]},{"level":2,"title":"5 ESM","slug":"esm","link":"#esm","children":[{"level":3,"title":"5.1 兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"5.2 导出","slug":"导出","link":"#导出","children":[]},{"level":3,"title":"5.3 导入","slug":"导入","link":"#导入","children":[]},{"level":3,"title":"5.4 import()","slug":"import","link":"#import","children":[]},{"level":3,"title":"5.5 ESM VS CommonJS","slug":"esm-vs-commonjs","link":"#esm-vs-commonjs","children":[]}]},{"level":2,"title":"6 总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1704616104000,"updatedTime":1704616104000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":13.68,"words":4104},"filePathRelative":"frontend/engineering/basic/001-modularization.md","localizedDate":"2022年8月10日","excerpt":"","autoDesc":true}');export{e as data};