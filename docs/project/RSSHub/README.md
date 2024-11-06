---
title: 集中管理碎片化知识
date: 2024-02-24
icon: rss
category:
  - Project
tag:
  - rss
---

将不同平台的信息汇总到一个平台中。

## 信息获取的问题

- 信息多而杂
- 无法形成有效阅读

### 信息多而杂

信息来自不同平台，需要打开不同的软件，知乎、掘金、公众号、B 站、GitHub 等等。

每个平台都充斥着各种你不需要的信息，很容易被其他信息分散注意力。

有时候为了刷到想要的信息，需要长时间停留。

### 无法形成有效阅读

以微信公众号为例，除了一些技术公众号，大部分关注的还是非技术类的，对技术知识获取是一种干扰。

同时由于我们基本都在手机上阅读公众号的文章，难以进行信息提取、标注等，无法形成有效的知识积累。

![微信公众号](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240224191619.png)

## RSS(RDF Site Summary)

内容共享通常发生在特定网站和聚合网站之间。这种交流是以基本的 XML 形式进行的，人和机器都可以读取。要为网站设置 RSS，必须创建一个 XML 文件，即 RSS 文档或 RSS Feed。发明人为「阿龙·斯沃茨」。

![Aaron Swartz](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240224190921.png)

下面是一个 RSS 文档示例。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>RSS title</title>
  <link> https://mywebsitename/index.html </link>
  <description>My Blog</description>
  <item>
    <title>My First Feed</title>
    <link>http://mywebsitename/blog/article/1.html</link>
    <description>My new article</description>
  </item>
  <item>
    <title>My Second Feed</title>
    <link>http://mywebsitename/blog/article/2.html</link>
    <description>Another new article</description>
  </item>
</channel>

</rss>
```

- 首先是 XML 标签、其版本和编码方案。
- 下面一行标志着 RSS 标签的开始及其使用的版本。
- 接下来的几行显示了频道标签，它标志着 RSS Feed 的开始。它包含频道标题、超链接和频道描述。
- 在频道标签中定义了一个或多个项目，基本上就是内容或故事，每个项目都有自己的标题、链接和说明。
- 频道可以容纳任何形式的数据--图片、gifs、音频等。
- 每个项目都有自己独特的 XML 标签。

## 如何获取 RSS

### 提供 RSS 的网站

最直接的方法就是看网站的底部或侧边栏是否有 RSS 图标。

大多数情况下，支持 RSS 订阅的网站都会将 RSS 图标展示出来。不过总有例外，这时候你也可以尝试在网站域名后面加上 `/feed` 或 `/rss` 或许可以碰巧猜中，比如少数派的 RSS 订阅链接就是 https://sspai.com/feed。

![RSS 图标](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225111610.png)

当然，你也可以直接通过搜索引擎通过 网站名 + RSS 的关键字进行搜索，往往都能找到支持网站的 RSS 链接。

![搜索引擎](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225111905.png)

### 未提供 RSS 的网站 —— RSSHub

[RSSHub](https://docs.rsshub.app/) 目前提供了 4461 规则，适配了绝大部分网站。

![RSSHub](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225110516.png)

添加订阅时，只需要将举例中的 UID 换成你想要订阅博主的 UID 即可。（划线部分为 UID）

![添加路由](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227103514.pngv)

### 检测订阅源 —— RSSHub Radar

[RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 是 RSSHub 官方提供了检测订阅源的工具，当一个网站有 RSS 规则时，会自动显示出来。

![RSSHub Radar](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225111133.png)

### 公众号 RSS 源

由于微信公众号的严格限制，需要使用第三方工具比如 [今天看啥](http://www.jintiankansha.me/)，该站目前提供的服务较为稳定，收费如下。

![今天看啥](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227103836.png)

### RSS 阅读工具

一些较好的 RSS 阅读工具如下：

- macOS：Reeder 4
- iOS：lire
- Windows：RSS 追踪
- Android：FeedMe
- 浏览器：Innoreader

![inoreader](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227104627.png)

## 自建 RSSHub 服务

对于一些需要 cookie 的网站，需要自建 RSSHub 服务。

![Medium](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227104754.png)

### Vercel

[Vercel](https://vercel.com) 可以免费托管。

第一步，打开 [Vercel](https://vercel.com)，然后使用 Github 帐号登陆。

![vercel](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227104926.png)

### [Create](https://vercel.com/import/project?template=https://github.com/DIYgod/RSSHub)

[Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) 到 GitHub。

更新一些必要的配置如 `cookie` 等。

使用你的 RSSHub 项目创建并部署一个新的 Vercel 项目.

![create](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227105036.png)

### 获取服务地址

获取部署好的服务地址，并在 RSSHub Radar 中配置即可。

![获取服务地址](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240227105421.png)

## 贡献 RSSHub

如果 RSSHub 提供的订阅源有缺陷，那么我们可以贡献 RSSHub。

[官方文档](https://docs.rsshub.app/zh/joinus/quick-start) 比较详细，按照步骤来即可。

### 安装开发环境

- `fork` 然后将你的项目 `git clone` 到本地。
- 给你的项目增加上游：
  ```shell
  git remote add upstream https://github.com/DIYgod/RSSHub
  ```
- 安装 `pnpm`
  ```shell
  npm install pnpm -g
  ```
- 安装依赖并启动项目
  ```shell
  pnpm install
  pnpm dev
  ```

### 添加脚本路由

`lib/v2/juejin/router.js`

```js
module.exports = (router) => {
  router.get('/collections/:userId', require('./favorites'))
}
```

### 获取收藏夹数据

`lib/v2/juejin/favorites.js`

```js
/**
 * Get all collection by loop
 * @param {String} user_id
 * @return {any[]} collectionSet
 */
const getCollectionList = async (user_id) => {
  const collectionList = []
  let cursor = '0'

  let has_more = true
  while (has_more) {
    // eslint-disable-next-line no-await-in-loop
    const res = await got({
      method: 'post',
      url: `https://api.juejin.cn/interact_api/v2/collectionset/list?spider=0`,
      json: {
        user_id,
        cursor,
        limit: 20
      }
    }).json()

    collectionList.push(...res.data)

    if (res.has_more) {
      cursor = res.cursor
    } else {
      has_more = false
      break
    }
  }

  return collectionList
}
```

### 获取文章数据

```js
/**
 * Get all posts by collection_id
 * @param {String} collection_id
 * @returns {any[]} posts
 */
const getPostList = async (collection_id) => {
  const postList = []
  let cursor = '0'

  let has_more = true
  while (has_more) {
    // eslint-disable-next-line no-await-in-loop
    const res = await got({
      method: 'post',
      url: `https://api.juejin.cn/interact_api/v2/collectionset/detail?spider=0`,
      json: {
        collection_id,
        cursor,
        limit: 10
      }
    }).json()

    postList.push(...res.data.articles)

    if (res.has_more) {
      cursor = res.cursor
    } else {
      has_more = false
      break
    }
  }

  return postList
}
```

### 生成 RSS 源

获取数据后，只需将相关数据赋值给 `ctx.state.data` 对象。

```js
module.exports = async (ctx) => {
  const { userId } = ctx.params

  // 获取用户所有收藏夹id
  const collectionList = await getCollectionList(userId)
  const collectionIds = collectionList.map((item) => item.collection_id)

  // 获取所有收藏夹文章内容
  const posts = (await Promise.all(collectionIds.map(getPostList))).flat()

  const result = await util.ProcessFeed(posts, ctx.cache)

  ctx.state.data = {
    title: '掘金 - 收藏集',
    link: `https://juejin.im/user/${userId}/collections`,
    description: '掘金，指定用户整个收藏集',
    item: result,
    allowEmpty: true
  }
}
```

### 调试

运行 `pnpm dev` 命令：

![debug](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225115649.png)

输入对应路由：

![router](https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240225115815.png)
