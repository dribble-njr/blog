import{_ as p,W as i,X as d,Y as n,Z as s,a0 as a,a1 as l,a2 as c,C as e}from"./framework-ea1f725f.js";const r={},u=c(`<p>在网页开发中，背景和边框是常用的 CSS 属性，可以帮助我们美化网页的外观和布局。</p><h2 id="背景属性" tabindex="-1"><a class="header-anchor" href="#背景属性" aria-hidden="true">#</a> 背景属性</h2><p>CSS 中的 <code>background</code> 属性可以为元素设置背景颜色、图片、渐变色、重复模式等。下面是一些常见的 CSS 背景属性。</p><h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color" aria-hidden="true">#</a> <code>background-color</code></h3><p><code>background-color</code> 属性用于设置元素的背景颜色。它可以接受各种颜色值，例如颜色名称、十六进制颜色码、RGB 颜色等。例如，我们可以使用以下代码为一个段落元素设置背景颜色：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #F0F0F0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> <code>background-image</code></h3><p><code>background-image</code> 属性用于设置元素的背景图片。它可以接受一个图片的 URL 地址作为值。例如，我们可以使用以下代码为一个 <code>div</code> 元素设置背景图片：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;background.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat" aria-hidden="true">#</a> <code>background-repeat</code></h3><p><code>background-repeat</code> 属性用于设置背景图片的重复方式。</p><p>默认情况下，背景图片会在水平和垂直方向上重复。</p><p>但是我们可以使用 <code>background-repeat</code> 属性来指定只在水平方向上或垂直方向上重复，或者不重复。有以下取值：</p><ul><li><code>no-repeat</code> — 不重复。</li><li><code>repeat-x</code> — 水平重复。</li><li><code>repeat-y</code> — 垂直重复。</li><li><code>repeat</code> — 在两个方向重复。</li></ul><p>例如，以下代码可以使背景图片只在水平方向上重复：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;background.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size" aria-hidden="true">#</a> <code>background-size</code></h3><p><code>background-size</code> 属性用于设置背景图片的大小。它可以接受像素值和百分比值调整图片的大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;background.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过 <code>cover</code> 和 <code>contain</code> 关键字：</p><ul><li><code>cover</code> — 浏览器将使图像足够大，使它完全覆盖了盒子区，同时仍然保持其高宽比。在这种情况下，有些图像可能会跳出盒子外。</li><li><code>contain</code> — 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在图像的任何一边或顶部和底部出现间隙。</li></ul><p>例如，以下代码可以将背景图片缩放到与元素相同的大小：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;background.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> <code>background-position</code></h3><p><code>background-position</code> 属性允许您选择背景图像显示在其应用到的盒子中的位置。它使用的坐标系中，框的左上角是 <code>(0,0)</code>，框沿着水平 (<code>x</code>) 和垂直 (<code>y</code>) 轴定位。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认的背景位置值是 <code>(0,0)</code>。</p></div><p>最常见的背景位置值有两个单独的值——一个水平值后面跟着一个垂直值。</p><p>你可以使用像 <code>top</code> 和 <code>right</code> 这样的关键字:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>star.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> top center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用长度值和百分比：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>star.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> 20px 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以混合使用关键字，长度值以及百分比，例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>star.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> top 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，您还可以使用 4-value 语法来指示到盒子的某些边的距离——在本例中，长度单位是与其前面的值的偏移量。所以在下面的 CSS 中，我们将背景从顶部调整 <code>20px</code>，从右侧调整 <code>10px</code>:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>star.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> top 20px right 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> <code>background</code></h3><p>简写属性，通常使用语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>background = 
  &lt;&#39;background-color&#39;&gt;            ||
  &lt;bg-image&gt;                      ||
  &lt;bg-position&gt; [ / &lt;bg-size&gt; ]?  ||
  &lt;repeat-style&gt;                  ||
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/background",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="边框属性" tabindex="-1"><a class="header-anchor" href="#边框属性" aria-hidden="true">#</a> 边框属性</h2><p>CSS 中的边框属性可以为元素设置边框样式、边框宽度、边框颜色等。</p><p>下面是一些常见的 CSS 边框属性。这些边框属性是设置元素四个边框颜色的快捷属性。</p><h3 id="border-style" tabindex="-1"><a class="header-anchor" href="#border-style" aria-hidden="true">#</a> <code>border-style</code></h3><p><code>border-style</code> 属性用于设置元素的边框样式。它可以接受 <code>solid</code>、<code>dashed</code>、<code>dotted</code>、<code>double</code>、<code>groove</code>、<code>ridge</code>、<code>inset</code>、<code>outset</code> 和 <code>none</code> 等值。例如，以下代码可以为一个 <code>div</code> 元素设置虚线边框：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border-width" tabindex="-1"><a class="header-anchor" href="#border-width" aria-hidden="true">#</a> <code>border-width</code></h3><p><code>border-width</code> 属性用于设置元素的边框宽度。它可以接受像素值、百分比值等单位。例如，以下代码可以为一个 <code>div</code> 元素设置边框宽度为 2 个像素：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border-color" tabindex="-1"><a class="header-anchor" href="#border-color" aria-hidden="true">#</a> <code>border-color</code></h3><p><code>border-color</code> 属性用于设置元素四个边框颜色。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> <code>border</code></h3><p>上述三个属性的简写属性，基本语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border = 
  &lt;line-width&gt;  ||
  &lt;line-style&gt;  ||
  &lt;color&gt;       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("border简写属性"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"div"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(h,x){const o=e("ExternalLinkIcon"),t=e("CodeDemo");return i(),d("div",null,[u,n("p",null,[s("详见 "),n("a",k,[s("MDN background"),a(o)]),s("。")]),v,a(t,{id:"code-demo-164",type:"normal",title:"border",code:"eJyrVsooyc1RslKySckss0vKL0pJLXq+ruFp28ynG+c9a1huow8Sj8lT0lFKLi4GqgNyFapj8hQUIGqtFAwLKhSK83MyUxSSchKTs61j8mqBymsBUUMibw=="},{default:l(()=>[b,g]),_:1})])}const f=p(r,[["render",m],["__file","006-background-border.html.vue"]]);export{f as default};
