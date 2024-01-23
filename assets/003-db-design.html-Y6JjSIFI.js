import{_ as t,o as e,c as d,f as n}from"./app-7mSAa0ob.js";const l={},a=n(`<p>关系数据库有一个成熟的理论——依赖。它涉及到如何构建一个良好的关系型数据库模式，以及当一个模式存在缺陷时应该如何改进。</p><h2 id="函数依赖" tabindex="-1"><a class="header-anchor" href="#函数依赖" aria-hidden="true">#</a> 函数依赖</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p><strong>函数依赖</strong>：设 <code>R</code> 是一个关系模式，<code>X</code> 和 <code>Y</code> 是 <code>R</code> 的属性集，如果对于 <code>R</code> 的任意两个元组 <code>t1</code> 和 <code>t2</code>，如果 <code>t1</code> 和 <code>t2</code> 在 <code>X</code> 上的分量相等，则 <code>t1</code> 和 <code>t2</code> 在 <code>Y</code> 上的分量也相等，那么我们说 <code>Y</code> 函数依赖于 <code>X</code>，记作 <code>X -&gt; Y</code>。</p><p>以关系 <code>Movies1</code> 为例。</p><table><thead><tr><th style="text-align:center;">title</th><th style="text-align:center;">year</th><th style="text-align:center;">length</th><th style="text-align:center;">genre</th><th style="text-align:center;">studioName</th><th style="text-align:center;">starName</th></tr></thead><tbody><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">175</td><td style="text-align:center;">Crime</td><td style="text-align:center;">Paramount</td><td style="text-align:center;">Marlon Brando</td></tr><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">175</td><td style="text-align:center;">Crime</td><td style="text-align:center;">Paramount</td><td style="text-align:center;">Al Pacino</td></tr><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">175</td><td style="text-align:center;">Crime</td><td style="text-align:center;">Paramount</td><td style="text-align:center;">James Caan</td></tr></tbody></table><p><code>Movies1</code> 包含了更多的属性，这种模式设计并不是很好。</p><p>该关系有如下 FD：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>title year --&gt; length genre studioName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 FD 的含义是：如果两个元组在 <code>title</code> 和 <code>year</code> 上的分量相等，则它们在 <code>length</code>、<code>genre</code> 和 <code>studioName</code> 上的分量也相等。</p><p>因此，希望给定 <code>title</code> 和 <code>year</code> 就能确定一部电影，进而确定 <code>length</code>、<code>genre</code> 和 <code>studioName</code>。</p><p>另外，可以看到下面的 FD，是错误的，它不是一个函数依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>title year --&gt; starName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给定一个 <code>title</code> 和 <code>year</code>，可能有多个 <code>starName</code>，因此 <code>starName</code> 不是函数依赖于 <code>title</code> 和 <code>year</code>。</p><h3 id="关系的键" tabindex="-1"><a class="header-anchor" href="#关系的键" aria-hidden="true">#</a> 关系的键</h3><p><strong>键</strong>：如下面条件满足，则认为一个或多个属性集 <code>{A1, A2, ..., An}</code> 是关系 R 的键。</p><ul><li>这些属性函数决定关系的所有其他属性；</li><li>在 <code>{A1, A2, ..., An}</code> 的真子集中，没有一个函数能决定 R 的所有其他属性。</li></ul><p>当键只包括一个单独的属性 A 时，称 A 而不是 <code>{A}</code> 是键。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一般使用 id 确定唯一主键。</p></div><h2 id="关系数据库模式设计" tabindex="-1"><a class="header-anchor" href="#关系数据库模式设计" aria-hidden="true">#</a> 关系数据库模式设计</h2><p>不仔细选择关系数据库模式会带来冗余和相应的异常，关系 <code>Movies1</code> 为例。</p><p>电影 <code>The Godfather</code> 的长度和流派对参演的每个影星都重复了一次，这些信息的重复是冗余的。</p><h3 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h3><p>当试图在一个关系中包含过多的信息时，产生的问题称为冗余，冗余数据会导致以下三种异常：</p><ul><li>冗余，信息没有必要在多个元组中重复。</li><li>更新异常，如果信息在多个元组中重复，那么更新数据库时就必须在多个地方进行更新，否则会导致不一致。</li><li>删除异常，如果从影星集删除 <code>Al Pacino</code>，则数据库中将不在包含这部电影的影星，关系 <code>Movies1</code> 中关于 <code>Al Pacino</code> 的元组就会消失，而且他包含的其他信息如片长 175 分钟等也会在数据库中消失。</li></ul><h3 id="分解关系" tabindex="-1"><a class="header-anchor" href="#分解关系" aria-hidden="true">#</a> 分解关系</h3><p>一般用分解关系的办法消除异常。关系 <code>R</code> 的分解涉及分离 <code>R</code> 的属性，以构造两个新的关系模式。</p><p>将关系 <code>Movies1</code> 分解成 关系 <code>Movies2</code> 和关系 <code>Movies3</code>。</p><ul><li><code>Movies2</code> 包含了除 <code>starName</code> 外的其他所有属性。</li><li><code>Movies3</code> 包含了属性 <code>title</code>、<code>years</code> 和 <code>starName</code>。</li></ul><p><strong><code>Movies2</code></strong></p><table><thead><tr><th style="text-align:center;">title</th><th style="text-align:center;">year</th><th style="text-align:center;">length</th><th style="text-align:center;">genre</th><th style="text-align:center;">studioName</th></tr></thead><tbody><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">175</td><td style="text-align:center;">Crime</td><td style="text-align:center;">Paramount</td></tr></tbody></table><p><strong><code>Movies3</code></strong></p><table><thead><tr><th style="text-align:center;">title</th><th style="text-align:center;">year</th><th style="text-align:center;">starName</th></tr></thead><tbody><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">Marlon Brando</td></tr><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">Al Pacino</td></tr><tr><td style="text-align:center;">The Godfather</td><td style="text-align:center;">1972</td><td style="text-align:center;">James Caan</td></tr></tbody></table><p>上述所说三种异常都被解决了：</p><ul><li>冗余被消除了，关系 <code>Movies2</code> 中电影的片长只出现了一次。</li><li>更新异常的风险被消除了，因为关系 <code>Movies2</code> 中的每个电影只出现一次，所以只需要在一个地方更新。</li><li>删除异常的风险也被消除了，因为关系 <code>Movies3</code> 中的每个影星只出现一次，所以只需要在一个地方删除。</li></ul><h2 id="设计范式" tabindex="-1"><a class="header-anchor" href="#设计范式" aria-hidden="true">#</a> 设计范式</h2><h3 id="第一范式" tabindex="-1"><a class="header-anchor" href="#第一范式" aria-hidden="true">#</a> 第一范式</h3><p>第一范式（first normal form, 1NF）只简单地要求每个元组的每个属性都是不可分的（属性具有原子性）。</p><p>第一范式需要根据系统的实际需求决定。比如某些数据库系统中需要用到「地址」这个属性，本来直接将「地址」属性设计成一个数据库表的字段就行。</p><p>但如果系统经常会访问「地址」属性中的「城市」部分，那么就需要将「地址」这个属性重新拆分为省份、城市、详细地址等多个部分进行存储，这样在对地址中某一部分操作的时候将非常方便。</p><p>这样设计才算满足了数据库的第一范式。</p><table><thead><tr><th style="text-align:center;">编号</th><th style="text-align:center;">姓名</th><th style="text-align:center;">性别</th><th style="text-align:center;">年龄</th><th style="text-align:center;">联系电话</th><th style="text-align:center;">省份</th><th style="text-align:center;">城市</th><th>详细地址</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">张三</td><td style="text-align:center;">男</td><td style="text-align:center;">20</td><td style="text-align:center;">1234567</td><td style="text-align:center;">湖北</td><td style="text-align:center;">武汉</td><td>123 号</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">李四</td><td style="text-align:center;">女</td><td style="text-align:center;">18</td><td style="text-align:center;">1234568</td><td style="text-align:center;">湖北</td><td style="text-align:center;">武汉</td><td>456 号</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">王五</td><td style="text-align:center;">男</td><td style="text-align:center;">22</td><td style="text-align:center;">1234569</td><td style="text-align:center;">湖北</td><td style="text-align:center;">武汉</td><td>789 号</td></tr></tbody></table><h3 id="第二范式" tabindex="-1"><a class="header-anchor" href="#第二范式" aria-hidden="true">#</a> 第二范式</h3><p>第二范式（second normal form, 2NF）要求关系模式必须是 1NF，并且每个非主属性完全函数依赖于任何一个候选键。<strong>也就是说在一个数据库表中，一个表中只能保存一种数据，不可以把多种数据保存在同一张数据库表中。</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>候选键（candidate key）：由关系的一个或多个属性组成，候选键都具备键的特征，都有资格成为主键。</p></div><p>比如要设计一个订单信息表，因为订单中可能会有多种商品，所以要将订单编号和商品编号作为数据库表的联合主键。</p><table><thead><tr><th style="text-align:center;">订单编号</th><th style="text-align:center;">商品编号</th><th style="text-align:center;">商品名称</th><th style="text-align:center;">商品价格</th><th style="text-align:center;">商品数量</th><th style="text-align:center;">单位</th><th style="text-align:center;">客户</th><th style="text-align:center;">所属单位</th><th>联系方式</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;">1</td><td style="text-align:center;">苹果</td><td style="text-align:center;">5</td><td style="text-align:center;">10</td><td style="text-align:center;">斤</td><td style="text-align:center;">张三</td><td style="text-align:center;">单位 1</td><td>1234567</td></tr><tr><td style="text-align:center;">002</td><td style="text-align:center;">2</td><td style="text-align:center;">香蕉</td><td style="text-align:center;">3</td><td style="text-align:center;">20</td><td style="text-align:center;">斤</td><td style="text-align:center;">张三</td><td style="text-align:center;">单位 1</td><td>1234567</td></tr><tr><td style="text-align:center;">003</td><td style="text-align:center;">3</td><td style="text-align:center;">苹果</td><td style="text-align:center;">5</td><td style="text-align:center;">10</td><td style="text-align:center;">斤</td><td style="text-align:center;">李四</td><td style="text-align:center;">单位 2</td><td>1234568</td></tr></tbody></table><p>这样就产生一个问题：这个表中是以订单编号和商品编号作为联合主键。这样在该表中商品名称、单位、商品价格等信息不与该表的主键相关，而仅仅是与商品编号相关。所以在这里违反了第二范式的设计原则。</p><p>而如果把这个订单信息表进行拆分，把商品信息分离到另一个表中，把订单项目表也分离到另一个表中，就非常完美了。如下所示。</p><p><strong>订单信息表</strong></p><table><thead><tr><th style="text-align:center;">订单编号</th><th style="text-align:center;">客户</th><th style="text-align:center;">所属单位</th><th>联系方式</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;">张三</td><td style="text-align:center;">单位 1</td><td>1234567</td></tr><tr><td style="text-align:center;">002</td><td style="text-align:center;">张三</td><td style="text-align:center;">单位 1</td><td>1234567</td></tr><tr><td style="text-align:center;">003</td><td style="text-align:center;">李四</td><td style="text-align:center;">单位 2</td><td>1234568</td></tr></tbody></table><p><strong>商品信息表</strong></p><table><thead><tr><th style="text-align:center;">商品编号</th><th style="text-align:center;">商品名称</th><th style="text-align:center;">商品价格</th><th style="text-align:center;">单位</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">苹果</td><td style="text-align:center;">5</td><td style="text-align:center;">斤</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">香蕉</td><td style="text-align:center;">3</td><td style="text-align:center;">斤</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">苹果</td><td style="text-align:center;">5</td><td style="text-align:center;">斤</td></tr></tbody></table><p><strong>订单项目表</strong></p><table><thead><tr><th style="text-align:center;">订单编号</th><th style="text-align:center;">商品编号</th><th style="text-align:center;">商品数量</th></tr></thead><tbody><tr><td style="text-align:center;">001</td><td style="text-align:center;">1</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">002</td><td style="text-align:center;">2</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">003</td><td style="text-align:center;">3</td><td style="text-align:center;">10</td></tr></tbody></table><h3 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式" aria-hidden="true">#</a> 第三范式</h3><p>第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。</p><p>上述表中存在一个问题：订单信息表中的客户和联系方式与订单编号直接相关，而与主键无关。所以这里违反了第三范式的设计原则。</p><p>所以需要将订单信息表进行拆分，把客户信息分离到另一个表中，把订单信息表也分离到另一个表中，就非常完美了。如下所示。</p><p><strong>客户信息表</strong></p><table><thead><tr><th style="text-align:center;">客户编号</th><th style="text-align:center;">客户</th><th>联系方式</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">张三</td><td>1234567</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">李四</td><td>1234568</td></tr></tbody></table>`,61),r=[a];function c(i,s){return e(),d("div",null,r)}const h=t(l,[["render",c],["__file","003-db-design.html.vue"]]);export{h as default};
