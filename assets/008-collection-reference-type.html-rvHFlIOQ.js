import{_ as i,r as o,o as u,c as r,a as n,d as s,b as c,w as a,e as k}from"./app--sT6QG7j.js";const d={},m=k(`<h2 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span><code>Object</code></span></a></h2><p>创建方式：</p><ul><li>构造函数；</li><li>对象字面量。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Nicholas&#39;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">29</span>

<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">29</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对象字面量表示法中，属性名可以是字符串或数值，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token number">5</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>数值属性会自动转换为字符串。</p></div><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span><code>Array</code></span></a></h2><p>ECMAScript 数组的两个特点：</p><ul><li>每个槽位可以存储任意类型的数据。</li><li>数组长度是动态大小的，会随着数据添加而自动增长。</li></ul><p>创建方式：</p><ul><li>构造函数；</li><li>字面量；</li><li><code>Array.from()</code>；</li><li><code>Array.of()</code>。</li></ul>`,12),b=n("code",null,"from()",-1),v=n("code",null,"of()",-1),y=n("code",null,"from()",-1),f=n("code",null,"of()",-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 字符串会被拆分为单字符数组"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Matt'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// ["M", "a", "t", "t"]'),s(`

`),n("span",{class:"token comment"},"// 可以使用 from() 将集合和映射转换为一个新数组"),s(`
`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" s "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [[1, 2], [3, 4]]"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`

`),n("span",{class:"token comment"},"// Array.from() 对现有数组执行浅复制"),s(`
`),n("span",{class:"token keyword"},"const"),s(" a1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"const"),s(" a2 "),n("span",{class:"token operator"},"="),s(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("a1"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("a1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`
`),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),s("a1 "),n("span",{class:"token operator"},"==="),s(" a2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// false"),s(`

`),n("span",{class:"token comment"},"// 可以使用任何可迭代对象"),s(`
`),n("span",{class:"token keyword"},"const"),s(" iter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"["),s("Symbol"),n("span",{class:"token punctuation"},"."),s("iterator"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"yield"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"yield"),s(),n("span",{class:"token number"},"2"),s(`
    `),n("span",{class:"token keyword"},"yield"),s(),n("span",{class:"token number"},"3"),s(`
    `),n("span",{class:"token keyword"},"yield"),s(),n("span",{class:"token number"},"4"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("iter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`

`),n("span",{class:"token comment"},"// arguments 对象可以被轻松地转换为数组"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getArgsArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("arguments"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getArgsArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`

`),n("span",{class:"token comment"},"// from() 也能转换带有必要属性的自定义对象"),s(`
`),n("span",{class:"token keyword"},"const"),s(" arrayLikeObject "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token number"},"3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("arrayLikeObject"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1, 2, 3, 4]"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"of"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [undefined]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(_,A){const l=o("RouteLink"),p=o("Tabs");return u(),r("div",null,[m,n("p",null,[b,s(" 用于将 "),c(l,{to:"/frontend/basic/javascript/009-array-like-object.html"},{default:a(()=>[s("类数组对象")]),_:1}),s(" 转换为数组实例，而 "),v,s(" 用于将一组参数转换为数组实例。")]),c(p,{id:"74",data:[{id:"<code v-pre>from()</code>"},{id:"<code v-pre>of()</code>"}]},{title0:a(({value:t,isActive:e})=>[y]),title1:a(({value:t,isActive:e})=>[f]),tab0:a(({value:t,isActive:e})=>[g]),tab1:a(({value:t,isActive:e})=>[h]),_:1},8,["data"])])}const x=i(d,[["render",j],["__file","008-collection-reference-type.html.vue"]]),T=JSON.parse('{"path":"/frontend/basic/javascript/008-collection-reference-type.html","title":"集合引用类型","lang":"zh-CN","frontmatter":{"title":"集合引用类型","date":"2024-04-19T00:00:00.000Z","icon":"reference","category":["JavaScript"],"tag":["language advanced"],"description":"Object 创建方式： 构造函数； 对象字面量。 在对象字面量表示法中，属性名可以是字符串或数值，比如： 注意 数值属性会自动转换为字符串。 Array ECMAScript 数组的两个特点： 每个槽位可以存储任意类型的数据。 数组长度是动态大小的，会随着数据添加而自动增长。 创建方式： 构造函数； 字面量； Array.from()； Array....","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/javascript/008-collection-reference-type.html"}],["meta",{"property":"og:title","content":"集合引用类型"}],["meta",{"property":"og:description","content":"Object 创建方式： 构造函数； 对象字面量。 在对象字面量表示法中，属性名可以是字符串或数值，比如： 注意 数值属性会自动转换为字符串。 Array ECMAScript 数组的两个特点： 每个槽位可以存储任意类型的数据。 数组长度是动态大小的，会随着数据添加而自动增长。 创建方式： 构造函数； 字面量； Array.from()； Array...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T04:51:59.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"language advanced"}],["meta",{"property":"article:published_time","content":"2024-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-24T04:51:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合引用类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-24T04:51:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 Object","slug":"object","link":"#object","children":[]},{"level":2,"title":"2 Array","slug":"array","link":"#array","children":[]}],"git":{"createdTime":1713934319000,"updatedTime":1713934319000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"frontend/basic/javascript/008-collection-reference-type.md","localizedDate":"2024年4月19日","excerpt":"","autoDesc":true}');export{x as comp,T as data};
