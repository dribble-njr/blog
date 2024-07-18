import{_ as e,o as l,c as t,e as a}from"./app-HJkWVb_a.js";const i={},s=a('<p>SQL (Structured Query Language:结构化查询语言) 是用于管理关系数据库管理系统。</p><p>SQL 通过一系列的语句和命令来执行数据定义、数据查询、数据操作和数据控制等功能,包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。</p><h2 id="sql-是什么" tabindex="-1"><a class="header-anchor" href="#sql-是什么"><span>SQL 是什么？</span></a></h2><ul><li>SQL 指结构化查询语言，全称是 Structured Query Language。</li><li>SQL 让您可以访问和处理数据库，包括数据插入、查询、更新和删除。</li><li>SQL 语言采用英语关键词，使其易读易写。</li><li>SQL 由国际标准化组织（ISO）和美国国家标准协会（ANSI）标准化。</li><li>SQL 提供了丰富的操作数据的功能，从简单的查询到复杂的数据库管理操作。</li></ul><h2 id="sql-能做什么" tabindex="-1"><a class="header-anchor" href="#sql-能做什么"><span>SQL 能做什么？</span></a></h2><ul><li>SQL 面向数据库执行查询</li><li>SQL 可从数据库取回数据</li><li>SQL 可在数据库中插入新的记录</li><li>SQL 可更新数据库中的数据</li><li>SQL 可从数据库删除记录</li><li>SQL 可创建新数据库</li><li>SQL 可在数据库中创建新表</li><li>SQL 可在数据库中创建存储过程</li><li>SQL 可在数据库中创建视图</li><li>SQL 可以设置表、存储过程和视图的权限</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>虽然 SQL 是一门 ANSI（American National Standards Institute 美国国家标准化组织）标准的计算机语言，但是仍然存在着多种不同版本的 SQL 语言。</p><p>然而，为了与 ANSI 标准相兼容，它们必须以相似的方式共同地来支持一些主要的命令（比如 SELECT、UPDATE、DELETE、INSERT、WHERE 等等）。</p></div><h2 id="sql-发展历史" tabindex="-1"><a class="header-anchor" href="#sql-发展历史"><span>SQL 发展历史</span></a></h2><p>以下是 SQL 发展历史的关键节点：</p><h3 id="_1970s-起源与早期发展" tabindex="-1"><a class="header-anchor" href="#_1970s-起源与早期发展"><span>1970s: 起源与早期发展</span></a></h3><ol><li>1970 年：埃德加·科德（Edgar F. Codd）发表了《A Relational Model of Data for Large Shared Data Banks》论文，提出了关系数据库的概念，为 SQL 的发展奠定了理论基础。</li><li>1973 年-1974 年：IBM 的研究人员 Donald D. Chamberlin 和 Raymond F. Boyce 在科德的理论基础上开发了一种名为 SEQUEL（Structured English Query Language）的语言，用于操作和管理 IBM 的 System R 关系数据库。</li><li>1976 年：SEQUEL 更名为 SQL（Structured Query Language）。</li></ol><h3 id="_1980s-标准化与商业化" tabindex="-1"><a class="header-anchor" href="#_1980s-标准化与商业化"><span>1980s: 标准化与商业化</span></a></h3><ol start="4"><li>1981 年：IBM 推出了商用关系数据库系统 SQL/DS（Database System）和 DB2（Database 2）。</li><li>1986 年：美国国家标准协会（ANSI）发布了第一个 SQL 标准 ANSI SQL-86（SQL-87）。</li><li>1987 年：国际标准化组织（ISO）也采纳了 ANSI SQL-86 作为国际标准。</li></ol><h3 id="_1990s-扩展与改进" tabindex="-1"><a class="header-anchor" href="#_1990s-扩展与改进"><span>1990s: 扩展与改进</span></a></h3><ol start="7"><li>1992 年：发布了 SQL-92（SQL2）标准，显著扩展了 SQL 语言的功能，包括对新数据类型、嵌套查询和连接的支持。</li><li>1999 年：发布了 SQL:1999（SQL3）标准，引入了对象关系数据库（ORDBMS）特性、递归查询、触发器和用户定义函数。</li></ol><h3 id="_2000s-持续演进与新特性" tabindex="-1"><a class="header-anchor" href="#_2000s-持续演进与新特性"><span>2000s: 持续演进与新特性</span></a></h3><ol start="9"><li>2003 年：发布了 SQL:2003 标准，引入了 XML 相关特性和窗口函数。</li><li>2006 年：发布了 SQL:2006 标准，主要增强了对 XML 的支持。</li><li>2008 年：发布了 SQL:2008 标准，进一步改进了语法和性能优化。</li></ol><h3 id="_2010s-新功能与大数据支持" tabindex="-1"><a class="header-anchor" href="#_2010s-新功能与大数据支持"><span>2010s: 新功能与大数据支持</span></a></h3><ol start="12"><li>2011 年：发布了 SQL:2011 标准，增加了对时间数据类型和时间旅行（temporal data）的支持。</li><li>2016 年：发布了 SQL:2016 标准，引入了 JSON 数据类型和相关操作函数，适应了 NoSQL 数据库和大数据处理需求。</li></ol><h3 id="_2020s-现代化与标准更新" tabindex="-1"><a class="header-anchor" href="#_2020s-现代化与标准更新"><span>2020s: 现代化与标准更新</span></a></h3><ol start="14"><li>2023 年：最新的 SQL 标准持续改进，增加了对更现代化的数据库需求和特性的支持。</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>SQL 从一种基于关系模型的查询语言发展成为现代数据库管理的核心语言，其标准在不断演进和扩展。</p><p>各大数据库管理系统（如 MySQL、PostgreSQL、SQLite、SQL Server、Oracle 等）在遵循 SQL 标准的基础上，加入了自身的扩展和优化，使 SQL 成为数据操作和管理的强大工具。</p><p>SQL 的发展不仅体现了技术的进步，也反映了数据管理需求的变化和增长。</p>',25),r=[s];function n(o,c){return l(),t("div",null,r)}const S=e(i,[["render",n],["__file","01-quick-start.html.vue"]]),h=JSON.parse('{"path":"/backend/database/sql/01-quick-start.html","title":"快速开始","lang":"zh-CN","frontmatter":{"title":"快速开始","date":"2024-07-17T00:00:00.000Z","icon":"STARTUP","category":["database"],"tag":["sql"],"description":"SQL (Structured Query Language:结构化查询语言) 是用于管理关系数据库管理系统。 SQL 通过一系列的语句和命令来执行数据定义、数据查询、数据操作和数据控制等功能,包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。 SQL 是什么？ SQL 指结构化查询语言，全称是 Structured Query ...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/backend/database/sql/01-quick-start.html"}],["meta",{"property":"og:title","content":"快速开始"}],["meta",{"property":"og:description","content":"SQL (Structured Query Language:结构化查询语言) 是用于管理关系数据库管理系统。 SQL 通过一系列的语句和命令来执行数据定义、数据查询、数据操作和数据控制等功能,包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。 SQL 是什么？ SQL 指结构化查询语言，全称是 Structured Query ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-18T03:15:15.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"sql"}],["meta",{"property":"article:published_time","content":"2024-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T03:15:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速开始\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-18T03:15:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 SQL 是什么？","slug":"sql-是什么","link":"#sql-是什么","children":[]},{"level":2,"title":"2 SQL 能做什么？","slug":"sql-能做什么","link":"#sql-能做什么","children":[]},{"level":2,"title":"3 SQL 发展历史","slug":"sql-发展历史","link":"#sql-发展历史","children":[{"level":3,"title":"3.1 1970s: 起源与早期发展","slug":"_1970s-起源与早期发展","link":"#_1970s-起源与早期发展","children":[]},{"level":3,"title":"3.2 1980s: 标准化与商业化","slug":"_1980s-标准化与商业化","link":"#_1980s-标准化与商业化","children":[]},{"level":3,"title":"3.3 1990s: 扩展与改进","slug":"_1990s-扩展与改进","link":"#_1990s-扩展与改进","children":[]},{"level":3,"title":"3.4 2000s: 持续演进与新特性","slug":"_2000s-持续演进与新特性","link":"#_2000s-持续演进与新特性","children":[]},{"level":3,"title":"3.5 2010s: 新功能与大数据支持","slug":"_2010s-新功能与大数据支持","link":"#_2010s-新功能与大数据支持","children":[]},{"level":3,"title":"3.6 2020s: 现代化与标准更新","slug":"_2020s-现代化与标准更新","link":"#_2020s-现代化与标准更新","children":[]}]},{"level":2,"title":"4 总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1721272515000,"updatedTime":1721272515000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":3.54,"words":1062},"filePathRelative":"backend/database/sql/01-quick-start.md","localizedDate":"2024年7月17日","excerpt":"","autoDesc":true}');export{S as comp,h as data};
