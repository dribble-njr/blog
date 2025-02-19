---
title: 当你编码时
date: 2024-08-07
icon: code
category:
  - READING
tag:
  - pragmatic
---

对所有代码进行批判性思考，包括自己的代码。不断看到程序和设计的改进空间。

## 听从蜥蜴脑

一种有效的脑力突破的方法：

1. 在便签上写下「我正在做 xx」，然后贴在屏幕的一侧。
2. 提醒自己，「xx」注定要出问题。提醒自己，「xx」即使没有出问题也会被扔掉。这样做没有坏处。
3. 在空编辑器窗口中，写一条注释，用一句话描述你想学点什么或做点什么。
4. 开始编码。

如果在实验结束后仍旧不舒服，那就重新从散步、谈话和休息开始。

阅读别人的代码。

## 重构

重组现有代码实体、改变其内部结构而不改变其外部行为的规范式技术。

重构是一项日复一日的工作，需要采取低风险的小步骤进行，它更像是耙松和除草这类活动。这是一种有针对性的、精确的方法，有助于保持代码易于更改，而不是对代码库进行自由的、大规模的重写。

为了保证外部行为没有改变，你需要良好的自动化单元测试来验证代码的行为。

- 尽早重构，尽快重构

## 注意安全

- 保持代码简洁，让攻击面更小
- 尽早打上安全补丁
