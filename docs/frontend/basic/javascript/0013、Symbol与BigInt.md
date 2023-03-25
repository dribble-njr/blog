---
title: Symbol 和 BigInt
date: 2022-08-23
category:
  - JavaScript
tag:
  - 数据类型
  - Symbol
  - BigInt
---

Symbol 是 ES6 新增，BigInt 是 ES10 新增数据类型。

## Symbol

Symbol 表示**唯一、不可变**的符号，确保对象属性使用唯一标识符，不会发生属性冲突的危险。

### 基本使用

可以使用 `Symbol()` 函数初始化，调用这个函数时，可以传入一个字符串参数作为对符号的描述，但是传入相同的字符串描述返回的仍然是不同的符号。

```js
let symbol1 = Symbol()
let symbol2 = Symbol()
console.log(symbol1 === symbol2); // false

let symbol3 = Symbol('foo')
let symbol4 = Symbol('foo')
console.log(symbol3 === symbol4); // false
```

`Symbol()` 函数不是构造函数，因此不能进行 new 操作，这是为了避免创建符号包装对象，如果确实想使用符号包装对象，可以用 `Object()` 函数。

```js
let symbol = new Symbol() // TypeError: Symbol is not a constructor
let mySymbol = Symbol()
let wrappedSymbol = Object(mySymbol)
console.log(typeof wrappedSymbol); // object
```

### 全局符号注册表

如果需要创建两个相同的符号，以便在运行时的不同文件共用符号实例，可以使用 `Symbol.for()` 方法。

这个方法在第一次使用字符串调用时，会检查全局运行时注册表，发现不存在对应的符号，则会生成一个新符号实例并添加到注册表中；后续调用相同的字符串时同样会检查注册表，发现存在则返回该字符串对应的符号实例。

```js
let fooSymbol = Symbol.for('foo') // 全局注册新符号
let otherFooSymbol = Symbol.for('foo') // 重用已有符号

console.log(fooSymbol === otherFooSymbol)
```

传递给 `Symbol.for()` 方法的任意值都会被转化为字符串：

```js
let emptySymbol = Symbol.for()
console.log(emptySymbol) // Symbol(undefined)
```

还可以使用 `Symbol.keyFor()` 来查询全局注册表，这个方法接受符号，返回对应的字符串键，如果查询的不是全局符号，则会返回 `undefined`。

```js
// 创建全局符号
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s)); // foo

// 创建普通符号
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2)); // undefined

// 如果传给 Symbol.keyFor() 的不是符号，则该方法抛出 TypeError：
Symbol.keyFor(123); // TypeError: 123 is not a symbol
```

### 应用场景

一般用来作为对象的唯一属性名，这就包括了对象字面量属性和 `Object.defineProperty()` / `Object.defineProperties()` 定义的属性，对象字面量只能在计算属性语法中使用符号作为属性。

```js
let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('baz'),
    s4 = Symbol('qux');

// 1. 对象字面量
let o = {
  [s1]: 'foo val'
};
// 这样也可以：o[s1] = 'foo val';

console.log(o); // {Symbol(foo): foo val}

// 2. Object.defineProperty()
Object.defineProperty(o, s2, {value: 'bar val'});

console.log(o); // {Symbol(foo): foo val, Symbol(bar): bar val}

// 3. Object.defineProperties()
Object.defineProperties(o, {
  [s3]: {value: 'baz val'},
  [s4]: {value: 'qux val'}
});

console.log(o);
// {Symbol(foo): foo val, Symbol(bar): bar val,
// Symbol(baz): baz val, Symbol(qux): qux val}
```

ES6 引入了一些内置符号，比如 `Symbol.interator` 属性，用以定义在 `for-of` 循环中的迭代行为。

`Symbol.hasInstance` 属性会由 `instanceof` 操作符使用，确定一个实例的原型链上是否有当前构造函数。这个属性定义在 Function 的原型上，因此默认在所有函数和类上都可以调用。

## BigInt

BigInt 是一种数字类型的数据，可以表示任意精度格式的**整数**，使用 BigInt 可以安全地存储和操作大整数。

BigInt 可以表示大于 `2^53 - 1` 的整数（可以用 Number 表示的最大数字），BigInt 类型的数据必须添加后缀 n，或者直接使用 `BigInt()` 函数，它和 `Symbol()` 一样，不是构造函数，因此也不能和 new 操作符一起使用。

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n
```

因为 BigInt 和 Number 是两种不同的类型，因此：

* 不能用于 `Math` 对象中的方法；
* 不能和任何 `Number` 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 `Number` 变量时可能会丢失精度。