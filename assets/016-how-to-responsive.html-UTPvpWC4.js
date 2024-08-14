import{_ as l,r as p,o as c,c as u,a as n,b as a,d as s,w as e,e as i}from"./app-uX7BgAKY.js";const r={},d=n("h2",{id:"设置响应式断点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置响应式断点"},[n("span",null,"设置响应式断点")])],-1),m={href:"https://tailwindcss.com/docs/responsive-design",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"tailwind",-1),k=i(`<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1536px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="">Bootstrap</a> 断点如下：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用百分比确定布局元素的大小或创建-css-网格布局" tabindex="-1"><a class="header-anchor" href="#用百分比确定布局元素的大小或创建-css-网格布局"><span>用百分比确定布局元素的大小或创建 CSS 网格布局</span></a></h2><p>布局容器的数量取决于设计，但大多数网站都将重点放在以下元素上：</p><ul><li>Wrapper or Container</li><li>Header</li><li>Content</li><li>Sidebar</li><li>Footer</li></ul><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240304183547.png" alt="Common layout" tabindex="0" loading="lazy"><figcaption>Common layout</figcaption></figure>`,7),b=i(`<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">#wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 95%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#footer</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Small devices (landscape phones, 576px and up) */</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Medium devices (tablets, 768px and up) */</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">#wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">#content</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 70%<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Large devices (desktops, 992px and up) */</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Extra large devices (large desktops, 1200px and up) */</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">#wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=n("code",null,"float",-1),g=n("code",null,"flex",-1),_=n("code",null,"box-sizing",-1),y=n("h2",{id:"响应式图片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#响应式图片"},[n("span",null,"响应式图片")])],-1),w=n("h2",{id:"响应式文字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#响应式文字"},[n("span",null,"响应式文字")])],-1),f=n("p",null,"响应式网页设计的重点在于布局块、元素和媒体的响应性。文字往往是事后才考虑的问题。",-1),x=n("p",null,"但要实现真正的响应式设计，还应该根据屏幕尺寸适当调整字体大小。",-1),E=n("p",null,[s("最简单的方法是为字体大小设置一个静态值，如 "),n("code",null,"22px"),s("，并在每个媒体查询中进行调整。")],-1),C=n("figure",null,[n("img",{src:"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240304184534.png",alt:"Font size vs view size scatter points",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Font size vs view size scatter points")],-1),B={class:"hint-container tip"},S=n("p",{class:"hint-container-title"},"提示",-1),j=n("p",null,[s("一般设置 "),n("code",null,"html"),s(" 字体大小，并使用 "),n("code",null,"rem"),s(" 单位，或使用插件转换为「视口」单位。")],-1),z=n("p",null,"相关阅读：",-1);function A(T,F){const o=p("ExternalLinkIcon"),t=p("RouteLink");return c(),u("div",null,[d,n("p",null,[n("a",m,[v,a(o)]),s(" 典型的断点如下：")]),k,n("p",null,[s("根据 "),a(t,{to:"/frontend/basic/css/015-responsive-design.html#%E5%A7%8B%E7%BB%88%E5%9D%9A%E6%8C%81%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%BC%98%E5%85%88%E7%9A%84%E8%AE%BE%E8%AE%A1%E7%90%86%E5%BF%B5"},{default:e(()=>[s("移动优先原则")]),_:1}),s("，你可以像这样设计主要布局元素的样式（针对手机的基本样式不使用媒体查询）：")]),b,n("p",null,[s("在基于百分比的方法中，"),a(t,{to:"/frontend/basic/css/008-float.html"},{default:e(()=>[h]),_:1}),s(" 属性控制元素显示在屏幕的左侧或右侧。")]),n("p",null,[s("如果要完成响应式设计，还需要熟悉 CSS 的 "),a(t,{to:"/frontend/basic/css/009-flex.html"},{default:e(()=>[g]),_:1}),s(" 布局及其它属性，如 "),a(t,{to:"/frontend/basic/css/003-box-model.html#box-sizing"},{default:e(()=>[_]),_:1}),s("。")]),y,n("p",null,[s("见 "),a(t,{to:"/frontend/basic/css/015-responsive-design.html#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9B%BE%E7%89%87"},{default:e(()=>[s("响应式图片")]),_:1}),s("。")]),w,f,x,E,C,n("div",B,[S,j,z,n("ul",null,[n("li",null,[a(t,{to:"/frontend/basic/css/010-unit.html"},{default:e(()=>[s("样式单位")]),_:1})]),n("li",null,[a(t,{to:"/frontend/practice/005-postcss-px-to-viewport.html"},{default:e(()=>[s("postcss-px-to-viewport")]),_:1})])])])])}const Z=l(r,[["render",A],["__file","016-how-to-responsive.html.vue"]]),L=JSON.parse('{"path":"/frontend/basic/css/016-how-to-responsive.html","title":"怎样实现响应式网页布局","lang":"zh-CN","frontmatter":{"title":"怎样实现响应式网页布局","date":"2024-03-04T00:00:00.000Z","icon":"tool","category":["CSS"],"tag":["布局"],"description":"设置响应式断点 tailwind 典型的断点如下： Bootstrap 断点如下： 用百分比确定布局元素的大小或创建 CSS 网格布局 布局容器的数量取决于设计，但大多数网站都将重点放在以下元素上： Wrapper or Container Header Content Sidebar Footer Common layoutCommon layout...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/css/016-how-to-responsive.html"}],["meta",{"property":"og:title","content":"怎样实现响应式网页布局"}],["meta",{"property":"og:description","content":"设置响应式断点 tailwind 典型的断点如下： Bootstrap 断点如下： 用百分比确定布局元素的大小或创建 CSS 网格布局 布局容器的数量取决于设计，但大多数网站都将重点放在以下元素上： Wrapper or Container Header Content Sidebar Footer Common layoutCommon layout..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240304183547.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-04T10:51:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"怎样实现响应式网页布局"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"布局"}],["meta",{"property":"article:published_time","content":"2024-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-04T10:51:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"怎样实现响应式网页布局\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240304183547.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240304184534.png\\"],\\"datePublished\\":\\"2024-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-04T10:51:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 设置响应式断点","slug":"设置响应式断点","link":"#设置响应式断点","children":[]},{"level":2,"title":"2 用百分比确定布局元素的大小或创建 CSS 网格布局","slug":"用百分比确定布局元素的大小或创建-css-网格布局","link":"#用百分比确定布局元素的大小或创建-css-网格布局","children":[]},{"level":2,"title":"3 响应式图片","slug":"响应式图片","link":"#响应式图片","children":[]},{"level":2,"title":"4 响应式文字","slug":"响应式文字","link":"#响应式文字","children":[]}],"git":{"createdTime":1709549480000,"updatedTime":1709549480000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"frontend/basic/css/016-how-to-responsive.md","localizedDate":"2024年3月4日","excerpt":"","autoDesc":true}');export{Z as comp,L as data};
