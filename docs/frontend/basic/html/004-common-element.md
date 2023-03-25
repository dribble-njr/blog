---
title: 常见元素
date: 2023-03-24
icon: header
category: HTML
tag:
  - frontend
  - html
  - basic-knowledge
---

HTML 中包含大量元素，本文将介绍一些常用元素。

## 标题和段落

网页通常由标题和段落组成，在 HTML 中，通过 `<h1>` ~ `<h6>` 表示 6 个不同级别的标题，通过 `<p>` 元素表示基本段落。

::: tip

h 是 heading 的缩写，p 是 paragraph 的缩写。

:::

::: normal-demo 标题

```html
<h1>h1标题</h1>
<h2>h1标题</h2>
<h3>h1标题</h3>
<h4>h1标题</h4>
<h5>h1标题</h5>
<h6>h1标题</h6>
```

:::

::: normal-demo 段落

```html
<p>基本段落</p>
```

:::

### 最佳实践

在编写 HTML 时，需要保证层次结构是合理的。因此需要记住一些最佳实践：

- 最好只对每个页面使用一次 `<h1>` —— 这是顶级标题，所有其他标题位于层次结构中的下方。
- 确保在层次结构中以正确的顺序使用标题。不要使用 `<h3>` 来表示副标题，后面再跟 `<h2>` 来表示二级副标题——这是没有意义的，会导致奇怪的结果。
- 在现有的六个标题层次中，除非觉得有必要，否则应该争取每页使用不超过三个。有很多层次的文件（例如，深层次的标题层次）会变得笨重，难以浏览。在这种情况下，如果可能的话，建议将内容分散到多个页面。

## 图片

使用 `<img>` 在页面中嵌入图片元素。如：

::: normal-demo 图片

```html
<img width="50px" src="/assets/image/frontend/basic/html/002/avatar.jpg">
```

:::

## 超链接

使用 `<a>` 元素可以跳转到另一个链接。如下，可以跳转到本站首页：

::: tip

a 是 anchor（锚）的缩写。

:::

::: normal-demo 超链接

```html
<a href="/">首页</a>
```

:::

`<a>` 元素有两个常见的属性：

- `href` (Hypertext Reference)：指定要打开的 URL 地址。
- `target`：指定在何处显示链接的资源。
  - `_self`：默认值，在当前窗口打开 URL；
  - `_blank`：在新窗口打开 URL；
  - 其它常用于 `<iframe>` 元素中，不常用。

### 块级链接

任何内容都可以作为链接，如果想将一个标题作为链接，则可以将标题元素包裹在锚点元素中：

::: normal-demo 块级链接

```html
<a href="/">
  <h1>本站首页</h1>
</a>
```

:::

### 图片链接

如果有需要作为链接的图片，使用 `<a>` 元素来包裹要引用图片的 `<img>` 元素。

::: normal-demo 图片链接

```html
<a href="/">
  <img width="50px" src="/assets/image/frontend/basic/html/002/avatar.jpg">
</a>
```

:::

### 锚点链接

`<a>` 元素还可以用来做锚点链接，可以跳转到网页中的具体位置：

1. 在要跳转的元素定义一个 `id` 属性；
2. 定义 `<a>` 元素，设置它的 `href` 属性为对应 `id`。

```html
<h1 id="one">标题</h1>

<a href="#one">首页</a>
```

### 电子邮件链接

其最基本和最常用的使用形式为一个指明收件人电子邮件地址的 `mailto:` 链接。例如：

::: normal-demo 电子邮件链接

```html
<a href="mailto:wzw15292257101@163.com">向 我 发邮件</a>
```

:::

实际上，电子邮件地址是可选的。如果 `href` 属性仅仅只是简单的 `mailto:`，发送新的电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在「分享」链接时起到作用，用户可以给他们选择的地址发送邮件。

### 最佳实践

#### 使用清晰的链接措辞

::: normal-demo 好的示例

```html
<a href="/">访问首页</a>
```

:::

::: normal-demo 不好的示例

```html
<a href="/">点击这里</a> 访问首页
```

:::

#### 链接到非 HTML 资源时留下清晰的指示

::: normal-demo 好的示例

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
    下载销售报告（PDF，大小为 10 MB）
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    观看视频（将在新标签页中播放，HD 画质）
  </a>
</p>
```

:::

#### 在下载链接时使用 `download` 属性

::: normal-demo 好的示例

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"
   download="firefox-latest-64bit-installer.exe">
  下载最新的 Firefox 中文版 - Windows（64 位）
</a>
```

:::

## `<iframe>` 元素

利用 `<iframe>` 元素可以实现在 HTML 文档中嵌入其他 HTML 文档。

::: normal-demo iframe

```html
<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
```

:::

由于 `<iframe>` 元素可以嵌套，因此 `<a>` 元素 `target` 属性的其他值可以在 `<iframe>` 元素中生效：

- `_parent`：在父窗口打开 URL；
- `_top`：在顶层窗口打开 URL。

## `<div>` 和 `<span>`

::: tip

div 为 division 的缩写，意为分开，span 以为范围、跨度。

:::

在 Web 发展的早期，由于没有 CSS，因此需要通过语义化的元素告知浏览器一段文字如何显示。

后来出现 CSS，结构和样式开始分离，HTML 只需要负责结构即可。

此时，就出现了 `<div>` 和 `<span>` 来编写 HTML 中的所有结构。

`<div>` 会在不同的行显示，而多个 `<span>` 包裹的内容会在同一行显示。

::: normal-demo iframe

```html
<div>第一部分</div>
<div>第二部分</div>
<div>第三部分</div>

<span>范围一</span>
<span>范围二</span>
<span>范围三</span>
```

:::