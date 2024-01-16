import{_ as e,o as i,c as t,f as a}from"./app-9OnfYIHw.js";const l={},n=a('<h2 id="数据库系统" tabindex="-1"><a class="header-anchor" href="#数据库系统" aria-hidden="true">#</a> 数据库系统</h2><p>数据库：由「数据库管理系统（database management system, DBMS）」管理的数据的集合。</p><p>具有以下功能：</p><ol><li>使用特殊的「数据定义语言」定义数据库，并说明数据的逻辑结构；</li><li>使用合适的「查询语言」为用户提供查询和更新数据的能力；</li><li>支持超大数据量；</li><li>具有持久性；</li><li>不允许一个用户的操作影响另一个用户（独立性）、不允许对数据的不完整操作（原子性）。</li></ol><p>目前一般是关系型数据库和非关系型数据库。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>数据组织成表的形式呈现给用户，这种形式称为关系。</p></div><p>数据库问题的复杂性在于：「信息集成」，即如何把包含多个相关数据库中的信息连接在一起成为一整个数据库。</p><p>目前解决该问题的方法一般是：</p><ul><li>「数据仓库」：通过合适的转换技术，将来自多个遗留数据库的信息周期性的复制到中央数据库；</li><li>「协调器」或「中间件」：支持各类数据库数据的整合模型，实现整合模型和实际数据库模型间的信息转换。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一般可以使用 Node 实现中间件。</p></div>',10),s=[n];function c(o,p){return i(),t("div",null,s)}const d=e(l,[["render",c],["__file","001-hello-database.html.vue"]]);export{d as default};