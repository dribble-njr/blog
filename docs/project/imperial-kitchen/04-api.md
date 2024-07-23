---
title: 接口设计
date: 2024-07-11
icon: api
category:
  - Project
tag:
  - kitchen
---

## `category`

接口路径：`/category`。

### `list`

请求方法：`GET`。

描述：获取所有分类的列表。

请求参数：无。

响应数据：`Category[]`。

```js
export interface Category {
  id: number;
  name: string;
  description?: string;
  goods: Commodity[];
}

export interface Commodity {
  id: number;
  name: string;
  price: number;
  description?: string;
}
```

### `create`

请求方法：`POST`。

描述：创建分类。

请求参数：`Category`。

响应数据：`category_id: number`。
