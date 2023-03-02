import{_ as n,W as s,X as e,a2 as a}from"./framework-ea1f725f.js";const i={},l=a(`<p>实现一个 mini-vue-cli，首先需要用到命令行工具 commander.js</p><p>npm init -y</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> mini-vue-cli
</span><span class="token prefix unchanged"> </span><span class="token line"> |- node_modules
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package-lock.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package.json
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> |- index.html
</span><span class="token prefix inserted">+</span><span class="token line"> |- /src
</span><span class="token prefix inserted">+</span><span class="token line">   |- /js
</span><span class="token prefix inserted">+</span><span class="token line">     |- format.js
</span><span class="token prefix inserted">+</span><span class="token line">     |- math.js  
</span><span class="token prefix inserted">+</span><span class="token line">   |- index.js
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function p(d,t){return s(),e("div",null,c)}const o=n(i,[["render",p],["__file","001-init-project.html.vue"]]);export{o as default};
