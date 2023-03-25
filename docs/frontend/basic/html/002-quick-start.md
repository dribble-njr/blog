---
title: 快速开始
date: 2023-03-22
icon: STARTUP
category: HTML
tag:
  - frontend
  - html
  - basic-knowledge
---

::: tip HTML

超文本标记语言（**H**yper**T**ext **M**arkup **L**anguage, HTML）是一种用于创建网页的标记语言。

:::

HTML 不是一个编程语言，而是一个用于定义文档内容结构的标记语言。由于它不仅能插入普通的文本，还可以插入图片、音频、视频、超链接等内容，因此被称为**超文本**标记语言。

比如，对于一段文字，可以如下进行表示：

::: normal-demo HTML 段落

```html
<p>Neymar is one of the best footballers dribbling.</p>
```

:::

::: tip p 元素

p 即为 paragraphs 的缩写，表示段落元素。

:::

## HTML 元素语法

HTML 文档由元素和文本组成，例如在上述的例子中：

```html
<p>Neymar is one of the best footballers dribbling.</p>
```

这个 `<p>` 元素由开始标签 `<p>`、内容（content）和结束标签 `</p>` 组成。

### 元素

在 HTML 中，元素由三个部分组成：

- 开始标签（Opening tag）：包含元素的名称（本例为 p），被 `<`、`>` 所包围。开头标签标志着元素开始或开始生效的地方。
- 内容（Content）：元素的内容，本例中就是段落的文本。
- 结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个 `/`。这标志着该元素的结束。

::: warning

没有包含关闭标签会产生奇怪的结果。

:::

::: tip

某些情况下一些标签可以被省略，详见 [optional-tags](https://html.spec.whatwg.org/multipage/syntax.html#optional-tags)

:::

### 元素嵌套

元素可以进行嵌套，比如：

::: normal-demo 元素嵌套

```html
<p>Neymar is one of the best footballers <strong>dribbling</strong>.</p>
```

:::

### 空元素

不是所有的元素都拥有开始标签、内容合结束标签。一些元素只有一个标签，用来在此元素的位置插入/嵌入一些东西，这些元素称为**空元素**。

::: normal-demo 空元素

```html
<img width="50px" src="/assets/image/frontend/basic/html/002/avatar.jpg">
```

:::

::: note

HTML 中，无需在一个空元素的标签末尾添加 `/`，例如 `<img src="" alt="" />`。

然而，当你希望你的 HTML 是有效的 XML 时，这也是一种有效的语法。

:::

## 属性

在上述例子中，元素中包含了**属性**，用来控制元素的工作方式。

```html
<img width="50px" src="/assets/image/frontend/basic/html/002/avatar.jpg">
```

属性被放置在开始标签，并由一组被 `=` 分开的 `name` 和 `value` 组成，通常情况下用 `""` 包裹 `value`。

属性与元素名称之间包含一个空格，如果有多个属性，属性之间由空格隔开。

::: tip

建议始终添加引号——这样可以避免很多问题，并且使代码更易读。

:::

### 常用属性

以下属性使用于所有元素。

| 属性  |        描述        |
| :---: | :----------------: |
|  id   |  定义元素唯一 id   |
| class | 定义一个或多个类名 |
| style |   定义元素的样式   |
| title | 描述元素的额外信息 |

### 布尔属性

一般情况下，属性值必须由 `""` 引用，但如果该属性值为空字符串，则可以完全省略该值及 `=`。

这种情况下，将这些属性称为布尔属性。

例如，考虑 `disabled` 属性，你可以将其分配给表单输入元素。用它来禁用表单输入元素，这样用户就不能输入了。被禁用的元素通常有一个灰色的外观。

::: normal-demo 布尔属性

```html
<input disabled>
```

:::

## HTML 文档结构

一个基本的 HTML 文档如下所示：

::: normal-demo HTML 文档结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Sample page</h1>
  <p>This is a <a href="">simple</a> sample.</p>
  <!-- this is a comment -->
</body>
</html>
```

:::

其中：

- `<!DOCTYPE html>` 用于声明该文档使用 HTML5 标准。
- `<html>` 标签表示 HTML 文档的开始。
- `<head>` 标签包含了网页的元信息，如标题、样式表和脚本等。
- `<title>` 标签用于定义网页的标题，显示在浏览器的标题栏中。
- `<body>` 标签包含了网页的主要内容。
- `<!-- -->` 代表文档注释内容。

下面将介绍 HTML 文档结构中较为复杂的元素。

### DOCTYPE

在 HTML 中，每个 HTML 文档必须以 DOCTYPE 开头，它的目的在于告诉浏览器应该以什么样的文档类型定义（Document Type Definition, DTD）来解析文档。

::: info DTD

DTD：文档类型定义，是一套关于标记符的语法规则。

在 HTML5 以前，HTML 都是基于标准通用标记语言（Standard Generalized Markup Language，SGML）来实现的，而 SGML 使用 DTD 来定义不同版本的语法。

详情请见 [DOCTYPE](003-DOCTYPE.md)

:::

### `<html>` 元素

`<html>` 元素表示一个 HTML 文档的根（顶级元素），所以也被称为**根元素**。

W3C 标准建议为 `<html>` 元素增加 `lang` 属性，作用在于：

- 帮助语音合成工具确定要使用的发音；
- 帮助翻译工具确定要使用的翻译规则。

一些常用的规则：

- `lang="en"` 表示该文档的语言为英文；
- `lang="zh-CN"` 表示该文档的语言为中文。

### `<head>` 元素

`<head>` 元素用于规定网页的元信息，一般常见的配置：

- `<title>` 标签用于定义网页的标题。
- `<meta charset="utf-8">` 用于设置网页的字符编码。

::: info UTF-8

utf-8 字符集包含了大多数人类书面语言的字符。基本上它能识别输入的所有文本内容。

不设置或者错误设置可能会导致文档乱码。

W3C 也将 UTF-8 标记为推荐的字符编码，所以建议在任何 HTML 文件中都添加此标签。

详情请见 [字符编码](../../../computer-science/operating-system/001-character-encoding.md)

:::

### HTML 注释

HTML 拥有在代码中写注释的机制。浏览器会忽略注释，有效地使注释对用户来说不可见。注释的目的是让你在代码中加入注释，以解释你的逻辑或编码。如果你在离开很久后回到一个代码库，以至于你不能完全记住它，这就非常有用。同样，当不同的人在进行修改和更新时，注释也是非常宝贵的。

为了将一段 HTML 中的内容置为注释，你需要将其用特殊的记号 <!-- 和 --> 包裹起来，比如：

::: normal-demo HTML 注释

```html
<p>我在注释外！</p>

<!-- <p>我在注释内！</p> -->
```

:::

## HTML 空白

HTML 中对空格的处理有点特殊，无论在 HTML 元素的内容中使用多少空格（包括一个或多个空白字符或换行），当渲染这些代码的时候，HTML 解释器会将连续出现的空白字符减少为一个单独的空格符。

::: normal-demo HTML 注释

```html
<p>狗 狗 很 呆 萌。</p>

<p>狗 狗        很
         呆 萌。</p>
```

:::

## 字符引用

在 HTML 中，字符 `<`、`>`、`"`、`'` 和 `&` 是特殊字符。它们是 HTML 语法自身的一部分，那么你如何将这些字符包含进你的文本中呢，比如说如果你真的想要在文本中使用符号 `&` 或者 `<`，而不想让它们被浏览器视为代码并被解释？

我们必须使用字符引用——表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号 `&` 开始，以分号`;`结束。

在下面的案例中，你会看到第一段是错误的，因为浏览器会认为第二个 `<p>` 是开始一个新的段落！第二段是正确的，因为我们用字符引用来代替了角括号 `<` 和 `>` 符号。

::: normal-demo HTML 注释

```html
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

:::

下面是一些常用的字符引用

| 原义字符 | 等价字符引用 |
| :------: | :----------: |
|   `<`    |    `&lt;`    |
|   `>`    |    `&gt;`    |
|   `"`    |   `&quot;`   |
|   `'`    |    `apos`    |
|   `&`    |   `&amp;`    |

::: info 备注

不需要为任何其他符号使用实体引用，因为只要你的 HTML 的字符编码设置为 UTF-8，现代浏览器就能很好地处理实际符号。

:::

## 总结

```mindmap
root((快速开始))
  HTML 元素语法
    元素
    元素嵌套
    空元素
  属性
    常用属性
    布尔属性
  HTML 文档结构
    DOCTYPE
    <html> 元素
    <head> 元素
    HTML 注释
  HTML 空白
  字符引用
```
