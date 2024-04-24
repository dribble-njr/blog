---
title: 集合引用类型
date: 2024-04-19
icon: reference
category:
  - JavaScript
tag:
  - language advanced
---

## `Object`

创建方式：

- 构造函数；
- 对象字面量。

```js
let person1 = new Object()
person.name = 'Nicholas'
person.age = 29

let person2 = {
  name: 'Nicholas',
  age: 29
}
```

在对象字面量表示法中，属性名可以是字符串或数值，比如：

```js
let person = {
  name: 'Nicholas',
  age: 29,
  5: true
}
```

::: warning

数值属性会自动转换为字符串。

:::

## `Array`

ECMAScript 数组的两个特点：

- 每个槽位可以存储任意类型的数据。
- 数组长度是动态大小的，会随着数据添加而自动增长。

创建方式：

- 构造函数；
- 字面量；
- `Array.from()`；
- `Array.of()`。

`from()` 用于将 [类数组对象](./009-array-like-object.md) 转换为数组实例，而 `of()` 用于将一组参数转换为数组实例。

::: tabs

@tab `from()`

```js
// 字符串会被拆分为单字符数组
console.log(Array.from('Matt')) // ["M", "a", "t", "t"]

// 可以使用 from() 将集合和映射转换为一个新数组
const m = new Map().set(1, 2).set(3, 4)
const s = new Set().add(1).add(2).add(3).add(4)
console.log(Array.from(m)) // [[1, 2], [3, 4]]
console.log(Array.from(s)) // [1, 2, 3, 4]

// Array.from() 对现有数组执行浅复制
const a1 = [1, 2, 3, 4]
const a2 = Array.from(a1)
console.log(a1) // [1, 2, 3, 4]
alert(a1 === a2) // false

// 可以使用任何可迭代对象
const iter = {
  *[Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
    yield 4
  }
}
console.log(Array.from(iter)) // [1, 2, 3, 4]

// arguments 对象可以被轻松地转换为数组
function getArgsArray() {
  return Array.from(arguments)
}
console.log(getArgsArray(1, 2, 3, 4)) // [1, 2, 3, 4]

// from() 也能转换带有必要属性的自定义对象
const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
}
console.log(Array.from(arrayLikeObject)) // [1, 2, 3, 4]
```

@tab `of()`

```js
console.log(Array.of(1, 2, 3, 4)) // [1, 2, 3, 4]
console.log(Array.of(undefined)) // [undefined]
```

:::
