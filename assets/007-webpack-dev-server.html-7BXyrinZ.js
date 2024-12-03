import{_ as o,c as l,a as n,d as s,b as t,e as p,o as i,r}from"./app-DYGx5q5I.js";const d={},c={href:"https://github.com/Stephen-wzw/webpack-demo",target:"_blank",rel:"noopener noreferrer"},u={href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"},v={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},k={href:"http://localhost:8888/api/moment%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"},b={href:"http://localhost:8888/api/moment%EF%BC%89%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%B8%8C%E6%9C%9B%E5%88%A0%E9%99%A4%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},m={href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"},h={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},g={href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"};function f(w,e){const a=r("ExternalLinkIcon");return i(),l("div",null,[n("blockquote",null,[n("p",null,[e[1]||(e[1]=s("项目地址：")),n("a",c,[e[0]||(e[0]=s("https://github.com/Stephen-wzw/webpack-demo")),t(a)])])]),e[33]||(e[33]=p(`<p>目前我们开发的项目，为了运行需要有两个操作：</p><ul><li>操作一：<code>npm run build</code>，编译相关的代码；</li><li>操作二：通过 <code>live server</code> 或者直接通过浏览器，打开 <code>index.html</code> 代码，查看效果。</li></ul><p>这个过程会影响我们的开发效率，我们希望当文件发生改变后，可以自动的完成编译并展示。为了完成自动编译，webpack 提供了几种可选的方式：</p><ul><li>webpack watch mode</li><li>webpack-dev-server</li></ul><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span><code>watch</code></span></a></h2><p>webpack 给我们提供了 <code>watch</code> 模式，在该模式下，webpack 依赖图中的所有文件，只要有一个发生了更新，那么代码将会被重新编译，不需要再手动执行 <code>npm run build</code> 了。</p><p>为了配置 <code>watch</code> 模式，可以直接在 <code>package.json</code> 中修改脚本命令：</p><p><strong>package.json</strong></p><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;scripts&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build&quot;: &quot;webpack&quot;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &quot;watch&quot;: &quot;webpack --watch&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时执行 <code>npm run watch</code>，webpack 会在配置中自动加上 <code>wathc: true</code> 的指令，这样以后所有的更新都会被检测到并重新编译。</p><h2 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server"><span><code>webpack-dev-server</code></span></a></h2><p>虽然 <code>watch</code> 方式可以很便捷的帮我们重新编译打包，但操作二自动刷新浏览器其实是 live server 帮我们完成的。为了在<strong>不使用</strong> live server 的情况下完成 live reloading （实时重新加载）的功能，需要使用 <code>webpack-dev-server</code>。</p><blockquote><p>开启 dev-server 后，<code>watch</code> 模式就不必要开启了。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>package.json</code> 中修改脚本命令：</p><p><strong>package.json</strong></p><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;scripts&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build&quot;: &quot;webpack&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;watch&quot;: &quot;webpack --watch&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &quot;serve&quot;: &quot;webpack serve&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npm run serve</code> 后，webpack 内部会找到 <code>webpack-dev-server</code> 来开启服务。</p><blockquote><p><code>webpack-dev-server</code> 在编译之后不会写入到任何输出文件，而是将打包的文件保留在内存中。</p></blockquote><h3 id="热模块替换-hmr" tabindex="-1"><a class="header-anchor" href="#热模块替换-hmr"><span>热模块替换（HMR）</span></a></h3><p>热模块更新（Hot Module Replacement），指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面。</p><p>HMR 通过以下几种方式，提升开发效率：</p><ul><li>不需重新加载整个页面，这样可以保留某些应用程序的状态不丢失；</li><li>只更新需要变化的内容，节省开发时间；</li><li>修改了 css、js 源代码，会立即在浏览器更新，相当于直接在浏览器的 devtools 中直接修改样式。</li></ul><p><code>webpack-dev-server</code> 内置支持 HMR，只需要开启即可。</p><blockquote><p>在不开启 HMR 的情况下，整个页面会重新刷新，使用的是 live reloading。</p></blockquote><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   ...
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   devServer: {
</span><span class="token prefix inserted">+</span><span class="token line">     hot: true
</span><span class="token prefix inserted">+</span><span class="token line">   }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在开启后，修改内容仍然是进行整个页面的重新刷新，因为你还没有告知 webpack 哪些模块需要热更新。现在修改 <code>index.js</code>。</p><p><strong>index.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ...
</span><span class="token prefix unchanged"> </span><span class="token line"> import { sum } from &quot;./js/math.js&quot;;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> if (module.hot) {
</span><span class="token prefix inserted">+</span><span class="token line">   module.hot.accept(&quot;./js/math.js&quot;, () =&gt; {
</span><span class="token prefix inserted">+</span><span class="token line">     console.log(&quot;模块更新了&quot;);
</span><span class="token prefix inserted">+</span><span class="token line">   })
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ...
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时再修改 <code>math.js</code>，浏览器就不会再重新刷新整个页面了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>webpack-dev-server<span class="token punctuation">]</span> App updated. Recompiling<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>webpack-dev-server<span class="token punctuation">]</span> App hot update<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>HMR<span class="token punctuation">]</span> Checking <span class="token keyword">for</span> updates on the server<span class="token punctuation">..</span>.
HMR111
模块更新了
<span class="token punctuation">[</span>HMR<span class="token punctuation">]</span> Updated modules:
<span class="token punctuation">[</span>HMR<span class="token punctuation">]</span>  - ./src/js/math.js
<span class="token punctuation">[</span>HMR<span class="token punctuation">]</span> App is up to date.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在真实开发中，难道每个文件都需要手动指定 HMR 吗？事实上不需要这么麻烦。</p><p>在 Vue 开发中，使用 <code>vue-loader</code> 就能支持 vue 组件的 HMR。React 开发中，有 React Hot Loader，实时调整 React 组件（目前 React 官方已经弃用了，改成使用 react-refresh）；</p><p>可以试试修改之前的 <code>App.vue</code> 组件，不需任何手动配置即可达到 HMR 的效果。</p><h3 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h3><h4 id="host" tabindex="-1"><a class="header-anchor" href="#host"><span><code>host</code></span></a></h4><p>可以设置主机地址，默认值为 localhost，还可以设置为 0.0.0.0。</p><p>localhost 和 0.0.0.0 的区别：</p><ul><li>localhost：本质上是一个域名，通常情况下会被解析成 127.0.0.1；</li><li>127.0.0.1：回环地址(Loop Back Address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收，正常的数据包经过应用层 - 传输层 - 网络层 - 数据链路层 - 物理层，而回环地址，是在网络层直接就被获取到了，是不会经过数据链路层和物理层的。比如我们监听 127.0.0.1 时，在同一个网段下的主机中，通过 ip 地址是不能访问的，只能本机访问；</li><li>0.0.0.0：监听 IPV4 上所有的地址，再根据端口找到不同的应用程序，比如我们监听 0.0.0.0 时，在同一个网段下的主机中，通过 ip 地址是可以访问的;</li></ul><h4 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span><code>port</code></span></a></h4><p>可以配置端口号。</p><h4 id="open" tabindex="-1"><a class="header-anchor" href="#open"><span><code>open</code></span></a></h4><p>默认值为 false，设置为 true 会自动打开浏览器，也可以设置 Chrome Google 等值。</p><h4 id="compress" tabindex="-1"><a class="header-anchor" href="#compress"><span><code>compress</code></span></a></h4><p>是否为静态文件开启 gzip 压缩，默认值为 false，可以设置为 true。</p><h4 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span><code>proxy</code></span></a></h4>`,47)),n("p",null,[e[4]||(e[4]=s("可以设置代理解决跨域访问的问题。比如一个 api 请求是 ")),n("a",u,[e[2]||(e[2]=s("http://localhost:8888")),t(a)]),e[5]||(e[5]=s("，但是本地客户端的域名是 ")),n("a",v,[e[3]||(e[3]=s("http://localhost:8000")),t(a)]),e[6]||(e[6]=s("，这时发送请求就会出现跨域的问题。"))]),e[34]||(e[34]=p(`<p>这时可以先将请求发送到一个代理服务器，代理服务器和 API 服务器没有跨域问题，就可以解决跨域问题。<code>proxy</code> 有如下设置：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8888&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[e[8]||(e[8]=n("code",null,"target",-1)),e[9]||(e[9]=s("：表示代理到的目标地址，比如 target: /api/moment 会被代理到 ")),n("a",k,[e[7]||(e[7]=s("http://localhost:8888/api/moment；")),t(a)])]),n("li",null,[e[11]||(e[11]=n("code",null,"pathRewrite",-1)),e[12]||(e[12]=s("：默认情况下，/api 也会被写入到 URL 中（")),n("a",b,[e[10]||(e[10]=s("http://localhost:8888/api/moment），如果希望删除，可以使用")),t(a)]),e[13]||(e[13]=s()),e[14]||(e[14]=n("code",null,"pathRewrite",-1)),e[15]||(e[15]=s("；"))]),e[16]||(e[16]=n("li",null,[n("code",null,"secure"),s("：默认（true）情况下不接收转发到 http 服务器上，如果希望支持 http，可以设置为 false；")],-1)),e[17]||(e[17]=n("li",null,[n("code",null,"changeOrigin"),s("：是否更新代理后请求的 headers 中 host 地址。")],-1))]),n("blockquote",null,[n("p",null,[e[21]||(e[21]=s("关于 ")),e[22]||(e[22]=n("code",null,"changeOrigin",-1)),e[23]||(e[23]=s("：因为我们真实的请求虽然是通过 ")),n("a",m,[e[18]||(e[18]=s("http://localhost:8888")),t(a)]),e[24]||(e[24]=s(" 来代理的，但是默认情况下 host 的值还会是 ")),n("a",h,[e[19]||(e[19]=s("http://localhost:8000")),t(a)]),e[25]||(e[25]=s("，如果我们需要修改为 ")),n("a",g,[e[20]||(e[20]=s("http://localhost:8888")),t(a)]),e[26]||(e[26]=s("，那么可以将 ")),e[27]||(e[27]=n("code",null,"changeOrigin",-1)),e[28]||(e[28]=s(" 设置为 true 即可。")),e[29]||(e[29]=n("br",null,null,-1)),e[30]||(e[30]=s(" 修改 host 的原因在于有些服务器可能为了防止爬虫，在服务器中做了关于 headers 的校验，因此一般将 ")),e[31]||(e[31]=n("code",null,"changeOrigin",-1)),e[32]||(e[32]=s(" 设置为 true。"))])]),e[35]||(e[35]=n("h2",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结"},[n("span",null,"总结")])],-1)),e[36]||(e[36]=n("p",null,[s("这个案例中搭建了本地开发服务器，有两种方式："),n("code",null,"watch"),s(" 和 "),n("code",null,"webpack-dev-server"),s("。"),n("code",null,"webpack-dev-server"),s(" 中自带 HMR，可以指定某个模块开启 HMR，以及 dev-server 中的一些其他配置。")],-1))])}const q=o(d,[["render",f],["__file","007-webpack-dev-server.html.vue"]]),y=JSON.parse('{"path":"/frontend/engineering/build-tool/webpack/007-webpack-dev-server.html","title":"webpack-server","lang":"zh-CN","frontmatter":{"title":"webpack-server","date":"2022-05-17T00:00:00.000Z","category":["工程化"],"tag":["项目打包","webpack"],"description":" 项目地址：https://github.com/Stephen-wzw/webpack-demo 目前我们开发的项目，为了运行需要有两个操作： 操作一：npm run build，编译相关的代码； 操作二：通过 live server 或者直接通过浏览器，打开 index.html 代码，查看效果。 这个过程会影响我们的开发效率，我们希望当文件发生改...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/engineering/build-tool/webpack/007-webpack-dev-server.html"}],["meta",{"property":"og:title","content":"webpack-server"}],["meta",{"property":"og:description","content":" 项目地址：https://github.com/Stephen-wzw/webpack-demo 目前我们开发的项目，为了运行需要有两个操作： 操作一：npm run build，编译相关的代码； 操作二：通过 live server 或者直接通过浏览器，打开 index.html 代码，查看效果。 这个过程会影响我们的开发效率，我们希望当文件发生改..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"项目打包"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:published_time","content":"2022-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack-server\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"2 webpack-dev-server","slug":"webpack-dev-server","link":"#webpack-dev-server","children":[{"level":3,"title":"2.1 热模块替换（HMR）","slug":"热模块替换-hmr","link":"#热模块替换-hmr","children":[]},{"level":3,"title":"2.2 其他配置","slug":"其他配置","link":"#其他配置","children":[{"level":4,"title":"2.2.1 host","slug":"host","link":"#host","children":[]},{"level":4,"title":"2.2.2 port","slug":"port","link":"#port","children":[]},{"level":4,"title":"2.2.3 open","slug":"open","link":"#open","children":[]},{"level":4,"title":"2.2.4 compress","slug":"compress","link":"#compress","children":[]},{"level":4,"title":"2.2.5 proxy","slug":"proxy","link":"#proxy","children":[]}]}]},{"level":2,"title":"3 总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1704616104000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":5.18,"words":1554},"filePathRelative":"frontend/engineering/build-tool/webpack/007-webpack-dev-server.md","localizedDate":"2022年5月17日","excerpt":"","autoDesc":true}');export{q as comp,y as data};