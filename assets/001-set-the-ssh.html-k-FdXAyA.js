const e=JSON.parse('{"key":"v-9b6b098e","path":"/backend/linux/practice/001-set-the-ssh.html","title":"服务器设置 ssh 密钥登录","lang":"zh-CN","frontmatter":{"title":"服务器设置 ssh 密钥登录","date":"2021-05-12T00:00:00.000Z","icon":"key","category":["linux"],"tag":["centos","ssh"],"description":"使用密码登录服务器并不安全，因此我们需要设置密钥登录。 创建密钥对 登录阿里云控制台 -> 云服务 ECS -> 网络与安全 -> 密钥对 -> 创建密钥对。 step1-create-ssh 创建成功之后，浏览器会自动下载一个 .pem 私钥文件，记住这个文件的位置，之后要用。 绑定密钥对 选中刚才创建的密钥对，点击右侧绑定密钥对，将密钥对绑定到实例...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/backend/linux/practice/001-set-the-ssh.html"}],["meta",{"property":"og:title","content":"服务器设置 ssh 密钥登录"}],["meta",{"property":"og:description","content":"使用密码登录服务器并不安全，因此我们需要设置密钥登录。 创建密钥对 登录阿里云控制台 -> 云服务 ECS -> 网络与安全 -> 密钥对 -> 创建密钥对。 step1-create-ssh 创建成功之后，浏览器会自动下载一个 .pem 私钥文件，记住这个文件的位置，之后要用。 绑定密钥对 选中刚才创建的密钥对，点击右侧绑定密钥对，将密钥对绑定到实例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-09T04:30:54.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:tag","content":"ssh"}],["meta",{"property":"article:published_time","content":"2021-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-09T04:30:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器设置 ssh 密钥登录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-09T04:30:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"创建密钥对","slug":"创建密钥对","link":"#创建密钥对","children":[]},{"level":2,"title":"绑定密钥对","slug":"绑定密钥对","link":"#绑定密钥对","children":[]},{"level":2,"title":"添加安全组规则","slug":"添加安全组规则","link":"#添加安全组规则","children":[]},{"level":2,"title":"密钥验证并禁用密码登录","slug":"密钥验证并禁用密码登录","link":"#密钥验证并禁用密码登录","children":[]}],"git":{"createdTime":1704774654000,"updatedTime":1704774654000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"backend/linux/practice/001-set-the-ssh.md","localizedDate":"2021年5月12日","excerpt":"","autoDesc":true}');export{e as data};
