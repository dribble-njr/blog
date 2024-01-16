import{_ as t,r as i,o as r,c,a as e,b as a,e as l,f as n}from"./app-9OnfYIHw.js";const o={},d=n('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用密码登录服务器并不安全，因此我们需要设置密钥登录。</p></div><h2 id="创建密钥对" tabindex="-1"><a class="header-anchor" href="#创建密钥对" aria-hidden="true">#</a> 创建密钥对</h2><p>登录阿里云控制台 -&gt; 云服务 ECS -&gt; 网络与安全 -&gt; 密钥对 -&gt; 创建密钥对。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step1-create-ssh.png" alt="step1-create-ssh" tabindex="0" loading="lazy"><figcaption>step1-create-ssh</figcaption></figure><p>创建成功之后，浏览器会自动下载一个 <code>.pem</code> 私钥文件，记住这个文件的位置，之后要用。</p><h2 id="绑定密钥对" tabindex="-1"><a class="header-anchor" href="#绑定密钥对" aria-hidden="true">#</a> 绑定密钥对</h2><p>选中刚才创建的密钥对，点击右侧<strong>绑定密钥对</strong>，将密钥对绑定到实例。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step2-bind-ssh.png" alt="step2-bind-ssh" tabindex="0" loading="lazy"><figcaption>step2-bind-ssh</figcaption></figure><h2 id="添加安全组规则" tabindex="-1"><a class="header-anchor" href="#添加安全组规则" aria-hidden="true">#</a> 添加安全组规则</h2><p>云服务 ECS -&gt; 网络与安全 -&gt; 安全组 -&gt; 入方向 -&gt; 手动添加。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step3-add-port.png" alt="step3-add-port" tabindex="0" loading="lazy"><figcaption>step3-add-port</figcaption></figure><p>执行完后重启实例。</p><h2 id="密钥验证并禁用密码登录" tabindex="-1"><a class="header-anchor" href="#密钥验证并禁用密码登录" aria-hidden="true">#</a> 密钥验证并禁用密码登录</h2>',13),p=e("li",null,[e("p",null,"安装 MobaXterm")],-1),u={href:"https://help.aliyun.com/document_detail/51798.html#title-7je-5ba-sm2",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">400</span> <span class="token punctuation">[</span>.pem私钥文件在本地机上的存储路径<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>.pem私钥文件在本地机上的存储路径<span class="token punctuation">]</span> root@<span class="token punctuation">[</span>公网IP地址<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),g=n(`<li><p>输入以下命令修改 config 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>按 <code>i</code> 进入编辑模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#禁用密码验证</span>
PasswordAuthentication no
<span class="token comment">#启用密钥验证</span>
PubkeyAuthentication <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 ssh 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),m=e("p",null,"接下来在阿里云控制台使用 Workbench 远程连接，可以发现密码登录已经被禁用了，只能使用密钥登录。",-1),b=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step4-pw-fail.png",alt:"step4-pw-fail",tabindex:"0",loading:"lazy"}),e("figcaption",null,"step4-pw-fail")],-1);function v(f,_){const s=i("ExternalLinkIcon");return r(),c("div",null,[d,e("ol",null,[p,e("li",null,[e("p",null,[a("在 MobaXterm 下输入命令（"),e("a",u,[a("参考阿里云官网文档"),l(s)]),a("）")]),h]),g]),m,b])}const x=t(o,[["render",v],["__file","001-set-the-ssh.html.vue"]]);export{x as default};