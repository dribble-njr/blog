---
title: 关系数据库设计理论
date: 2024-01-17
icon: theory
category:
  - database
tag:
  - backend
  - 数据库设计理论
---

关系数据库有一个成熟的理论——依赖。它涉及到如何构建一个良好的关系型数据库模式，以及当一个模式存在缺陷时应该如何改进。

## 函数依赖

### 定义

**函数依赖**：设 `R` 是一个关系模式，`X` 和 `Y` 是 `R` 的属性集，如果对于 `R` 的任意两个元组 `t1` 和 `t2`，如果 `t1` 和 `t2` 在 `X` 上的分量相等，则 `t1` 和 `t2` 在 `Y` 上的分量也相等，那么我们说 `Y` 函数依赖于 `X`，记作 `X -> Y`。

以关系 `Movies1` 为例。

|     title     | year | length | genre | studioName |   starName    |
| :-----------: | :--: | :----: | :---: | :--------: | :-----------: |
| The Godfather | 1972 |  175   | Crime | Paramount  | Marlon Brando |
| The Godfather | 1972 |  175   | Crime | Paramount  |   Al Pacino   |
| The Godfather | 1972 |  175   | Crime | Paramount  |  James Caan   |

`Movies1` 包含了更多的属性，这种模式设计并不是很好。

该关系有如下 FD：

```
title year --> length genre studioName
```

这个 FD 的含义是：如果两个元组在 `title` 和 `year` 上的分量相等，则它们在 `length`、`genre` 和 `studioName` 上的分量也相等。

因此，希望给定 `title` 和 `year` 就能确定一部电影，进而确定 `length`、`genre` 和 `studioName`。

另外，可以看到下面的 FD，是错误的，它不是一个函数依赖。

```
title year --> starName
```

给定一个 `title` 和 `year`，可能有多个 `starName`，因此 `starName` 不是函数依赖于 `title` 和 `year`。

### 关系的键

**键**：如下面条件满足，则认为一个或多个属性集 `{A1, A2, ..., An}` 是关系 R 的键。

- 这些属性函数决定关系的所有其他属性；
- 在 `{A1, A2, ..., An}` 的真子集中，没有一个函数能决定 R 的所有其他属性。

当键只包括一个单独的属性 A 时，称 A 而不是 `{A}` 是键。

::: tip

一般使用 id 确定唯一主键。

:::

## 关系数据库模式设计

不仔细选择关系数据库模式会带来冗余和相应的异常，关系 `Movies1` 为例。

电影 `The Godfather` 的长度和流派对参演的每个影星都重复了一次，这些信息的重复是冗余的。

### 异常

当试图在一个关系中包含过多的信息时，产生的问题称为冗余，冗余数据会导致以下三种异常：

- 冗余，信息没有必要在多个元组中重复。
- 更新异常，如果信息在多个元组中重复，那么更新数据库时就必须在多个地方进行更新，否则会导致不一致。
- 删除异常，如果从影星集删除 `Al Pacino`，则数据库中将不在包含这部电影的影星，关系 `Movies1` 中关于 `Al Pacino` 的元组就会消失，而且他包含的其他信息如片长 175 分钟等也会在数据库中消失。

### 分解关系

一般用分解关系的办法消除异常。关系 `R` 的分解涉及分离 `R` 的属性，以构造两个新的关系模式。

将关系 `Movies1` 分解成 关系 `Movies2` 和关系 `Movies3`。

- `Movies2` 包含了除 `starName` 外的其他所有属性。
- `Movies3` 包含了属性 `title`、`years` 和 `starName`。

**`Movies2`**

|     title     | year | length | genre | studioName |
| :-----------: | :--: | :----: | :---: | :--------: |
| The Godfather | 1972 |  175   | Crime | Paramount  |

**`Movies3`**

|     title     | year |   starName    |
| :-----------: | :--: | :-----------: |
| The Godfather | 1972 | Marlon Brando |
| The Godfather | 1972 |   Al Pacino   |
| The Godfather | 1972 |  James Caan   |

上述所说三种异常都被解决了：

- 冗余被消除了，关系 `Movies2` 中电影的片长只出现了一次。
- 更新异常的风险被消除了，因为关系 `Movies2` 中的每个电影只出现一次，所以只需要在一个地方更新。
- 删除异常的风险也被消除了，因为关系 `Movies3` 中的每个影星只出现一次，所以只需要在一个地方删除。

## 设计范式

### 第一范式

第一范式（first normal form, 1NF）只简单地要求每个元组的每个属性都是不可分的（属性具有原子性）。

第一范式需要根据系统的实际需求决定。比如某些数据库系统中需要用到「地址」这个属性，本来直接将「地址」属性设计成一个数据库表的字段就行。

但如果系统经常会访问「地址」属性中的「城市」部分，那么就需要将「地址」这个属性重新拆分为省份、城市、详细地址等多个部分进行存储，这样在对地址中某一部分操作的时候将非常方便。

这样设计才算满足了数据库的第一范式。

| 编号 | 姓名 | 性别 | 年龄 | 联系电话 | 省份 | 城市 | 详细地址 |
| :--: | :--: | :--: | :--: | :------: | :--: | :--: | -------- |
|  1   | 张三 |  男  |  20  | 1234567  | 湖北 | 武汉 | 123 号   |
|  2   | 李四 |  女  |  18  | 1234568  | 湖北 | 武汉 | 456 号   |
|  3   | 王五 |  男  |  22  | 1234569  | 湖北 | 武汉 | 789 号   |

### 第二范式

第二范式（second normal form, 2NF）要求关系模式必须是 1NF，并且每个非主属性完全函数依赖于任何一个候选键。**也就是说在一个数据库表中，一个表中只能保存一种数据，不可以把多种数据保存在同一张数据库表中。**

::: tip

候选键（candidate key）：由关系的一个或多个属性组成，候选键都具备键的特征，都有资格成为主键。

:::

比如要设计一个订单信息表，因为订单中可能会有多种商品，所以要将订单编号和商品编号作为数据库表的联合主键。

| 订单编号 | 商品编号 | 商品名称 | 商品价格 | 商品数量 | 单位 | 客户 | 所属单位 | 联系方式 |
| :------: | :------: | :------: | :------: | :------: | :--: | :--: | :------: | -------- |
|   001    |    1     |   苹果   |    5     |    10    |  斤  | 张三 |  单位 1  | 1234567  |
|   002    |    2     |   香蕉   |    3     |    20    |  斤  | 张三 |  单位 1  | 1234567  |
|   003    |    3     |   苹果   |    5     |    10    |  斤  | 李四 |  单位 2  | 1234568  |

这样就产生一个问题：这个表中是以订单编号和商品编号作为联合主键。这样在该表中商品名称、单位、商品价格等信息不与该表的主键相关，而仅仅是与商品编号相关。所以在这里违反了第二范式的设计原则。

而如果把这个订单信息表进行拆分，把商品信息分离到另一个表中，把订单项目表也分离到另一个表中，就非常完美了。如下所示。

**订单信息表**

| 订单编号 | 客户 | 所属单位 | 联系方式 |
| :------: | :--: | :------: | -------- |
|   001    | 张三 |  单位 1  | 1234567  |
|   002    | 张三 |  单位 1  | 1234567  |
|   003    | 李四 |  单位 2  | 1234568  |

**商品信息表**

| 商品编号 | 商品名称 | 商品价格 | 单位 |
| :------: | :------: | :------: | :--: |
|    1     |   苹果   |    5     |  斤  |
|    2     |   香蕉   |    3     |  斤  |
|    3     |   苹果   |    5     |  斤  |

**订单项目表**

| 订单编号 | 商品编号 | 商品数量 |
| :------: | :------: | :------: |
|   001    |    1     |    10    |
|   002    |    2     |    20    |
|   003    |    3     |    10    |

### 第三范式

第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关。

上述表中存在一个问题：订单信息表中的客户和联系方式与订单编号直接相关，而与主键无关。所以这里违反了第三范式的设计原则。

所以需要将订单信息表进行拆分，把客户信息分离到另一个表中，把订单信息表也分离到另一个表中，就非常完美了。如下所示。

**客户信息表**

| 客户编号 | 客户 | 联系方式 |
| :------: | :--: | -------- |
|    1     | 张三 | 1234567  |
|    2     | 李四 | 1234568  |