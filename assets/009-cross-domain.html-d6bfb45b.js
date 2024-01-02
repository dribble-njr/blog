import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as s}from"./app-7101ecc0.js";const l={},a=s(`<p>跨域是因为浏览器的同源策略，协议、域名、端口三者不一致即会造成跨域问题。</p><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><p>简单请求和非简单请求</p><h3 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求" aria-hidden="true">#</a> 简单请求</h3><p>请求方法：</p><ul><li>HEAD</li><li>GET</li><li>POST</li></ul><p>请求头：</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type</li></ul><p>对于简单请求，浏览器会在请求头信息增加一个 origin 字段，该字段用来说明本次请求来自哪个源：协议+端口+域名。</p><p>服务器根据这个值来决定是否同意这次请求，如果 origin 指定的源在允许范围内，服务器就返回如下响应头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Allow-Origin: http://api.bob.com 和 origin 一致
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器至少设置 Access-Control-Allow-Origin。</p><h3 id="非简单请求" tabindex="-1"><a class="header-anchor" href="#非简单请求" aria-hidden="true">#</a> 非简单请求</h3><p>需要进行 options 预检请求。</p><p>请求头</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Request-Method 必须
Access-Control-Request-Headers 逗号分隔符，指定请求会额外发送的头信息字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Allow-Origin: http://api.bob.com 和 origin 一致
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: FooBar
Access-Control-Max-Age: 1728000 本次预检的有效期，秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[a];function r(o,d){return i(),n("div",null,t)}const p=e(l,[["render",r],["__file","009-cross-domain.html.vue"]]);export{p as default};
