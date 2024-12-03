import{_ as o,c,a as s,d as a,b as p,e,o as l,r as i}from"./app-DYGx5q5I.js";const u={},r={href:"https://pixijs.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pixijs.download/release/docs/scene.Sprite.html",target:"_blank",rel:"noopener noreferrer"};function d(m,n){const t=i("ExternalLinkIcon");return l(),c("div",null,[s("p",null,[s("a",r,[n[0]||(n[0]=a("PixiJS")),p(t)]),n[1]||(n[1]=a(" 的核心是一个使用 WebGL（或 Canvas）显示图像或其他 ")),n[2]||(n[2]=s("strong",null,"2D",-1)),n[3]||(n[3]=a(" 可视化内容的呈现系统。"))]),n[7]||(n[7]=e(`<p>它提供了一个完整的场景图（要呈现的对象的层次结构），并提供交互支持以处理点击和触摸事件。</p><p>在现代 HTML5 世界中，它是 Flash 的天然替代品，但却能提供更好的性能和像素级的效果，超越了 Flash 所能达到的水平。</p><p>它非常适合网络游戏、教育内容、交互式广告、数据可视化......任何基于网络的、需要复杂图形的应用程序。</p><p>与 Cordova 和 Electron 等技术相结合，PixiJS 应用程序可以作为移动和桌面应用程序在浏览器之外发布。</p><h2 id="创建-pixi-应用" tabindex="-1"><a class="header-anchor" href="#创建-pixi-应用"><span>创建 pixi 应用</span></a></h2><p><code>Application</code> 是一个简化 PixiJS 工作的辅助类。 它能创建呈现器、创建舞台并启动一个用于更新的 ticker。</p><p><code>Application</code> 类还有一个 <code>init</code> 方法，它将使用给定的选项初始化应用程序。因为 PixiJS 使用了 WebGPU，因此该方法是异步的。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://pixijs.download/release/pixi.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello PixiJS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">640</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">360</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240719160224.png" alt="create pixi app" tabindex="0" loading="lazy"><figcaption>create pixi app</figcaption></figure><h2 id="创建-sprite" tabindex="-1"><a class="header-anchor" href="#创建-sprite"><span>创建 Sprite</span></a></h2><p>到目前为止，我们所做的只是准备工作。 我们还没有告诉 PixiJS 绘制任何东西。 让我们添加一张要显示的图片来解决这个问题。</p>`,11)),s("p",null,[n[5]||(n[5]=a("在 PixiJS 中绘制图像有多种方法，但最简单的方法是使用 ")),s("a",k,[n[4]||(n[4]=a("Sprite")),p(t)]),n[6]||(n[6]=a("。 Sprite 是一种容器类型，它封装了加载的图像资源，允许对其进行绘制、缩放、旋转等操作。"))]),n[8]||(n[8]=e(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// load the PNG asynchronously</span>
<span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;sample.png&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> sprite <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;sample.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/sample.png" alt="sample" tabindex="0" loading="lazy"><figcaption>sample</figcaption></figure><h2 id="将-sprite-添加至-stage" tabindex="-1"><a class="header-anchor" href="#将-sprite-添加至-stage"><span>将 Sprite 添加至 Stage</span></a></h2><p>最后，我们需要将 Sprite 添加到 Stage 上。Stage 只是一个容器，是场景图的根。Stage 容器的每个子容器都将在每一帧中进行渲染。将 Sprite 添加到 Stage 后，我们就告诉了 PixiJS 的渲染器我们要绘制它。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新-loop" tabindex="-1"><a class="header-anchor" href="#更新-loop"><span>更新 loop</span></a></h2><p>虽然可以将 PixiJS 用于静态内容，但对于大多数项目而言，都希望添加动画。</p><p>示例应用程序希望每秒在同一位置多次渲染同一个 Sprite。</p><p>要使图像移动，我们只需每帧更新一次属性即可。为此，我们要挂钩应用程序的 <code>ticker</code>。<code>ticker</code> 是一个 PixiJS 对象，每帧运行一个或多个回调。</p><p>只需调用 <code>app.ticker.add(...)</code>，给它传递一个回调函数，然后在该函数中更新场景。它将在每一帧中被调用，你可以移动、旋转等任何你想要的方式来驱动项目的动画。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Add a variable to count up the seconds our demo has been running</span>
<span class="token keyword">let</span> elapsed <span class="token operator">=</span> <span class="token number">0.0</span>
<span class="token comment">// Tell our application&#39;s ticker to run a new callback every frame, passing</span>
<span class="token comment">// in the amount of time that has passed since the last tick</span>
app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ticker</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Add the time to our total elapsed time</span>
  elapsed <span class="token operator">+=</span> ticker<span class="token punctuation">.</span>deltaTime
  <span class="token comment">// Update the sprite&#39;s X position based on the cosine of our elapsed time.  We divide</span>
  <span class="token comment">// by 50 to slow the animation down a bit...</span>
  sprite<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">100.0</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>elapsed <span class="token operator">/</span> <span class="token number">50.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100.0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-done" tabindex="-1"><a class="header-anchor" href="#all-done"><span>all done</span></a></h2><p>现在，我们已经创建了一个简单的应用程序，可以在浏览器中运行。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://pixijs.download/release/pixi.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// Create the application helper and add its render target to the page</span>
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">640</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">360</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span>

      <span class="token comment">// Create the sprite and add it to the stage</span>
      <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;sample.png&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> sprite <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;sample.png&#39;</span><span class="token punctuation">)</span>
      app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span>

      <span class="token comment">// Add a ticker callback to move the sprite back and forth</span>
      <span class="token keyword">let</span> elapsed <span class="token operator">=</span> <span class="token number">0.0</span>
      app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ticker</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        elapsed <span class="token operator">+=</span> ticker<span class="token punctuation">.</span>deltaTime
        sprite<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">100.0</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>elapsed <span class="token operator">/</span> <span class="token number">50.0</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100.0</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const v=o(u,[["render",d],["__file","01-quick-start.html.vue"]]),b=JSON.parse('{"path":"/frontend/framework/pixi/01-quick-start.html","title":"快速开始","lang":"zh-CN","frontmatter":{"title":"快速开始","date":"2024-07-19T00:00:00.000Z","icon":"STARTUP","category":["Pixi"],"tag":["basic-knowledge"],"description":"PixiJS 的核心是一个使用 WebGL（或 Canvas）显示图像或其他 2D 可视化内容的呈现系统。 它提供了一个完整的场景图（要呈现的对象的层次结构），并提供交互支持以处理点击和触摸事件。 在现代 HTML5 世界中，它是 Flash 的天然替代品，但却能提供更好的性能和像素级的效果，超越了 Flash 所能达到的水平。 它非常适合网络游戏、教...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/framework/pixi/01-quick-start.html"}],["meta",{"property":"og:title","content":"快速开始"}],["meta",{"property":"og:description","content":"PixiJS 的核心是一个使用 WebGL（或 Canvas）显示图像或其他 2D 可视化内容的呈现系统。 它提供了一个完整的场景图（要呈现的对象的层次结构），并提供交互支持以处理点击和触摸事件。 在现代 HTML5 世界中，它是 Flash 的天然替代品，但却能提供更好的性能和像素级的效果，超越了 Flash 所能达到的水平。 它非常适合网络游戏、教..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240719160224.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"快速开始"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"basic-knowledge"}],["meta",{"property":"article:published_time","content":"2024-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速开始\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240719160224.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/sample.png\\"],\\"datePublished\\":\\"2024-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 创建 pixi 应用","slug":"创建-pixi-应用","link":"#创建-pixi-应用","children":[]},{"level":2,"title":"2 创建 Sprite","slug":"创建-sprite","link":"#创建-sprite","children":[]},{"level":2,"title":"3 将 Sprite 添加至 Stage","slug":"将-sprite-添加至-stage","link":"#将-sprite-添加至-stage","children":[]},{"level":2,"title":"4 更新 loop","slug":"更新-loop","link":"#更新-loop","children":[]},{"level":2,"title":"5 all done","slug":"all-done","link":"#all-done","children":[]}],"git":{"createdTime":1721732945000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"frontend/framework/pixi/01-quick-start.md","localizedDate":"2024年7月19日","excerpt":"","autoDesc":true}');export{v as comp,b as data};