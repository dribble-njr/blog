---
title: 盒模型
date: 2022-04-28
icon: box
category: 
  - CSS
tag:
  - frontend
  - css
  - basic-knowledge
---

## 盒模型

所有的 HTML 元素都可以看作一个盒子，他由外边距 `margin`、边框 `border`、内边距 `padding`和内容区 `content` 组成。

![盒模型](/assets/image/frontend/basic/css/003/box.png)

## 标准盒模型和怪异盒模型

在 [DOCTYPE](../html/003-doctype.md) 中提到了浏览器的渲染模式，现代的浏览器一般都有两种渲染模式：标准模式和怪异模式。

他们表现在盒模型中差异：

- 标准盒模型：`width` 和 `height` 的计算值都不包含 `border` 和 `padding`，而只会应用到这个元素的 `content`。

![标准盒模型](/assets/image/frontend/basic/css/003/normal-box.png =50%x50%)

- 怪异盒模型：`width` 和 `height` 属性包括 `content`、`padding` 和 `border`，不算 `margin`。

![怪异盒模型](/assets/image/frontend/basic/css/003/abnormal-box.png =50%x50%)

## box-sizing

在 CSS 中，可以设置 `box-sizing` 属性来设置盒子模型。语法如下：

```css
box-sizing: content-box|border-box|inherit;
```

- `content-box`：标准盒模型；
- `border-box`：怪异盒模型；
- `inherit`：规定应从父元素继承 `box-sizing` 属性的值。

一般希望将 `box-sizing` 设置为 `border-box`，能使我们更容易地设定一个元素的宽高：

```css
* {
  box-sizing: border-box;
}
```
