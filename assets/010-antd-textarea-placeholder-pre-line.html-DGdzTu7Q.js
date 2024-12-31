import{_ as a,c as t,e,o as s}from"./app-BZZpzZsg.js";const p={};function i(c,n){return s(),t("div",null,n[0]||(n[0]=[e(`<p><code>placeholder</code> 内容有时需要支持换行，查了网上一些例子，结果都无法实现。</p><h2 id="错误-demo" tabindex="-1"><a class="header-anchor" href="#错误-demo"><span>错误 demo</span></a></h2><h3 id="直接使用-n" tabindex="-1"><a class="header-anchor" href="#直接使用-n"><span>直接使用 <code>\\n</code></span></a></h3><p>会被当成字符渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input.TextArea</span></span>
  <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>多个关键词请使用逗号分隔\\nShift+Enter换行，Enter搜索<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408181616.png" alt="直接使用 " tabindex="0" loading="lazy"><figcaption>直接使用 <code>\\n</code></figcaption></figure><h3 id="使用-ascii-码" tabindex="-1"><a class="header-anchor" href="#使用-ascii-码"><span>使用 ASCII 码</span></a></h3><p>若使用 <code>ASCII</code> 码会被处理成空格。</p><ul><li><code>&amp;#10;</code>——换行符 <code>\\n</code></li><li><code>&amp;#13;</code>——回车 <code>\\r</code></li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input.TextArea</span></span>
  <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>多个关键词请使用逗号分隔<span class="token entity" title="\r">&amp;#13;</span>Shift+Enter换行，Enter搜索<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408182209.png" alt="使用 ASCII 码" tabindex="0" loading="lazy"><figcaption>使用 ASCII 码</figcaption></figure><h2 id="正确做法-——-使用-jsx" tabindex="-1"><a class="header-anchor" href="#正确做法-——-使用-jsx"><span>正确做法 —— 使用 JSX</span></a></h2><p>此时应该使用 <code>\\n</code> 实现换行。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 JSX 中，要在字符串中插入 ASCII 字符，你需要直接使用对应的字符或者使用其 Unicode 表示方式，因为 HTML entities 在 JSX 中不会被解析。</p></div><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input.TextArea</span></span>
  <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
  <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">多个关键词请使用逗号分隔\\nShift+Enter换行，Enter搜索</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408182716.png" alt="JSX" tabindex="0" loading="lazy"><figcaption>JSX</figcaption></figure>`,16)]))}const o=a(p,[["render",i],["__file","010-antd-textarea-placeholder-pre-line.html.vue"]]),l=JSON.parse('{"path":"/frontend/practice/010-antd-textarea-placeholder-pre-line.html","title":"placeholder 支持换行展示","lang":"zh-CN","frontmatter":{"title":"placeholder 支持换行展示","date":"2024-04-08T00:00:00.000Z","icon":"pre-line","category":["practice"],"tag":["frontend","antd"],"description":"placeholder 内容有时需要支持换行，查了网上一些例子，结果都无法实现。 错误 demo 直接使用 \\\\n 会被当成字符渲染。 直接使用 直接使用 \\\\n 使用 ASCII 码 若使用 ASCII 码会被处理成空格。 &#10;——换行符 \\\\n &#13;——回车 \\\\r 使用 ASCII 码使用 ASCII 码 正确做法 —— 使用 JSX 此时应...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/practice/010-antd-textarea-placeholder-pre-line.html"}],["meta",{"property":"og:title","content":"placeholder 支持换行展示"}],["meta",{"property":"og:description","content":"placeholder 内容有时需要支持换行，查了网上一些例子，结果都无法实现。 错误 demo 直接使用 \\\\n 会被当成字符渲染。 直接使用 直接使用 \\\\n 使用 ASCII 码 若使用 ASCII 码会被处理成空格。 &#10;——换行符 \\\\n &#13;——回车 \\\\r 使用 ASCII 码使用 ASCII 码 正确做法 —— 使用 JSX 此时应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408181616.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"placeholder 支持换行展示"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:tag","content":"antd"}],["meta",{"property":"article:published_time","content":"2024-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"placeholder 支持换行展示\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408181616.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408182209.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240408182716.png\\"],\\"datePublished\\":\\"2024-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 错误 demo","slug":"错误-demo","link":"#错误-demo","children":[{"level":3,"title":"1.1 直接使用 \\\\n","slug":"直接使用-n","link":"#直接使用-n","children":[]},{"level":3,"title":"1.2 使用 ASCII 码","slug":"使用-ascii-码","link":"#使用-ascii-码","children":[]}]},{"level":2,"title":"2 正确做法 —— 使用 JSX","slug":"正确做法-——-使用-jsx","link":"#正确做法-——-使用-jsx","children":[]}],"git":{"createdTime":1712572170000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"frontend/practice/010-antd-textarea-placeholder-pre-line.md","localizedDate":"2024年4月8日","excerpt":"","autoDesc":true}');export{o as comp,l as data};