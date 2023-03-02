import{_ as o,W as d,X as r,Y as n,Z as s,a0 as e,a1 as t,a2 as i,C as c}from"./framework-ea1f725f.js";const p="/blog/assets/step1-add-site-a9c09ca6.png",u="/blog/assets/step2-nginx-conf-73ff3ca9.png",v="/blog/assets/step3-code-runner-c5c15f92.png",m="/blog/assets/step4-complete-5034bee0.png",b={},h=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>服务器：centos 7.9</p><p>本地电脑：Windows 10</p></div><h2 id="服务器端" tabindex="-1"><a class="header-anchor" href="#服务器端" aria-hidden="true">#</a> 服务器端</h2><h3 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx" aria-hidden="true">#</a> 配置 nginx</h3>',3),g=n("figure",null,[n("img",{src:p,alt:"添加站点",tabindex:"0",loading:"lazy"}),n("figcaption",null,"添加站点")],-1),k=n("code",null,"root",-1),f=i('<figure><img src="'+u+`" alt="配置nginx" tabindex="0" loading="lazy"><figcaption>配置nginx</figcaption></figure><p>先测试下 nginx 有没有配置成功，本地打包文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后将生成的 <code>dist</code> 文件里的内容复制到刚才设置的项目根目录下。</p><p>接着输入 <code>http://xxx.xxx.xxx.xxx:端口号</code>，就能访问成功了。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>地址得用 http 协议，因为我们还没有配置 ssl 证书。</p></div><h3 id="配置-git-仓库" tabindex="-1"><a class="header-anchor" href="#配置-git-仓库" aria-hidden="true">#</a> 配置 git 仓库</h3>`,7),_=n("code",null,"vuepress.git",-1),x=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/git
<span class="token function">mkdir</span> vuepress.git
<span class="token builtin class-name">cd</span> vuepress.git
<span class="token function">git</span> init <span class="token parameter variable">--bare</span> vuepress.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-hooks" tabindex="-1"><a class="header-anchor" href="#配置-hooks" aria-hidden="true">#</a> 配置 hooks</h3><p>先切换到 root 用户（<code>ctrl + d</code>），在 home 文件夹下创建一个临时存放 dist 文件夹的地方。</p><blockquote><p>我这里选择存放到 home 文件夹下，但是 git 用户是没有权限的，因此切换到 root 用户，也可以存放到其他文件夹。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home
<span class="token function">mkdir</span> tmp
<span class="token builtin class-name">cd</span> tmp
<span class="token function">mkdir</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着将文件的所有权换成 git：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> git:git <span class="token parameter variable">-R</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，有一个关键的地方，要将 <code>/www/wwwroot</code> 的所有权换成 git：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> git:git /www/wwwroot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>做好这些准备之后，就可以开始配置 <code>hooks</code> 了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/git/vuepress.git/hooks
<span class="token comment"># 通过 copy 新建 post-update 文件</span>
<span class="token function">cp</span> post-update.sample post-update
<span class="token function">vim</span> post-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着将下面代码复制进去：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;auto deploy start ===================================&quot;</span>
<span class="token builtin class-name">unset</span> GIT_DIR

<span class="token comment"># 项目文件夹</span>
<span class="token assign-left variable">PUBLIC_WWW</span><span class="token operator">=</span>/www/wwwroot/vuepress
<span class="token comment"># git 仓库文件夹</span>
<span class="token assign-left variable">GIT_REPO</span><span class="token operator">=</span>/home/git/vuepress.git
<span class="token comment"># 临时文件夹</span>
<span class="token assign-left variable">TMP_GIT_CLONE</span><span class="token operator">=</span>/home/tmp/vuepress

<span class="token comment"># 移除临时文件夹</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${TMP_GIT_CLONE}</span>
<span class="token comment"># 克隆 git 仓库到临时文件夹</span>
<span class="token function">git</span> clone <span class="token variable">$GIT_REPO</span> <span class="token variable">$TMP_GIT_CLONE</span>
<span class="token comment"># 移除项目文件夹</span>
<span class="token comment"># 宝塔为了安全，为自动在项目文件夹下新增 .user.ini 文件</span>
<span class="token comment"># 需要先关闭这个文件的功能才能删除项目文件夹</span>
<span class="token builtin class-name">cd</span> <span class="token variable">\${PUBLIC_WWW}</span>
chattr <span class="token parameter variable">-i</span> .user.ini
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${PUBLIC_WWW}</span>
<span class="token comment"># 将临时文件夹复制到项目文件夹</span>
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${TMP_GIT_CLONE}</span> <span class="token variable">\${PUBLIC_WWW}</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;auto deploy end ====================================&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在服务器端的准备工作已经完成了，接下来看看本地电脑的配置。</p><h2 id="本地电脑" tabindex="-1"><a class="header-anchor" href="#本地电脑" aria-hidden="true">#</a> 本地电脑</h2><p>在本地项目根目录下新建 <code>deploy.sh</code> 脚本文件，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">yarn</span> build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 初始化 git 仓库，并提交修改</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 发布到 git 私服， -f 强制覆盖</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@119.23.65.118:/home/git/vuepress.git
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@119.23.65.118:/home/git/vuepress.git master

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),w={href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},E=i(`<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>vscode 终端中输入 <code>sh depoly.sh</code>，报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token builtin class-name">:</span> 无法将“sh”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。
请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>了解到 windows 上可以使用 git bash 执行 shell 脚本，但我可不想每次执行的时候都打开 git bash，当然得找如何在 vscode 中执行 shell 脚本的办法。</p><ol><li><p>首先得在 vscode 中安装 code runner，之前一直用它来调试力扣上的题，已经安装过了。</p></li><li><p>安装 git bash，这个不用说，安装 git 的时候就已经有了</p></li><li><p>配置 bash 环境，找到bash.exe的安装目录，将它的位置添加到系统的环境变量中。</p></li><li><p>配置 code runner：文件 -&gt; 首选项 -&gt; 设置 -&gt; 搜索 code runner</p><figure><img src="`+v+'" alt="配置 code runner" tabindex="0" loading="lazy"><figcaption>配置 code runner</figcaption></figure></li><li><p>打开终端，输入 <code>bash</code> 切换到 bash 环境，点击右上角的三角形即可运行。</p></li></ol><p>现在随便更新点内容，并执行 <code>deploy.sh</code> 脚本：</p><figure><img src="'+m+'" alt="成功" tabindex="0" loading="lazy"><figcaption>成功</figcaption></figure><p>再次访问 <code>http://xxx.xxx.xxx.xxx:端口号</code> 发现已经更新了。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',9),y={href:"http://chanwingwah.info/article/604eb2273c8ec67668f6fd41",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.imqianduan.com/git-svn/335.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://hjxlog.com/posts/20191130a1.html#7-%E9%85%8D%E7%BD%AENginx",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.cnblogs.com/yongdaimi/p/15247771.html",target:"_blank",rel:"noopener noreferrer"},L=n("blockquote",null,[n("p",null,"折腾了好久，因为实习的关系一直断断续续的研究，终于在这个周末抽了一天时间完成了。 现在就等域名备案了。")],-1);function T(B,D){const l=c("RouterLink"),a=c("ExternalLinkIcon");return d(),r("div",null,[h,n("p",null,[s("登录宝塔面板，可以参考"),e(l,{to:"/backend/server/0003%E3%80%81%E9%85%8D%E7%BD%AE%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.html"},{default:t(()=>[s("配置宝塔面板")]),_:1}),s("。点击左侧网站 -> 添加站点。")]),g,n("p",null,[s("新增之后，点击设置 -> 配置文件。这三项按自己的情况配置，在后面 "),e(l,{to:"/backend/server/004-automated-deployment.html#%E9%85%8D%E7%BD%AE-hooks"},{default:t(()=>[s("git hooks")]),_:1}),s(" 中会将 dist 文件推送到 "),k,s(" 配置项设置的文件夹下。")]),f,n("p",null,[s("在"),e(l,{to:"/backend/server/002-build-git-server.html"},{default:t(()=>[s("搭建 git 私服")]),_:1}),s("中已经搭建好了 git 私服，因此只需要初始化 "),_,s(" 仓库即可。")]),x,n("blockquote",null,[n("p",null,[s("了解更多 git 命令，可以查询"),n("a",w,[s("官方文档"),e(a)]),s("。")])]),E,n("p",null,[n("a",y,[s("只需三步， 部署Vuepress 并实现本地一行命令更新部署到服务器"),e(a)])]),n("p",null,[n("a",W,[s("使用git hooks(post-receive)实现简单的远程自动部署"),e(a)])]),n("p",null,[n("a",I,[s("将Hexo部署到阿里云轻量服务器（保姆级教程）"),e(a)])]),n("p",null,[n("a",C,[s("VSCode: Windows 下配置 VSCode运行shell"),e(a)])]),L])}const q=o(b,[["render",T],["__file","004-automated-deployment.html.vue"]]);export{q as default};
