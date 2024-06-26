---
title: 数组
date: 2024-02-15
icon: array
category:
  - algorithm
tag:
  - 数组
  - 二分查找
  - 双指针
---

`JavaScript` 中数组是一种特殊的对象，用于存储多个值。数组的每个元素都有一个数字索引，用于访问数组中的元素。

常见初始化数组的方式：

```ts
const arr = [1, 2, 3]
const arr = new Array(1, 2, 3)
const arr = new Array(n).fill(0)
```

数组是一种线性表数据结构，它用一组连续的内存空间，来存储一组具有相同类型的数据。

常见的解题思路有：

- 二分查找
- 双指针
- 滑动窗口
- 暴力解法

## n 数之和

一般思路为使用哈希表、双指针、排序等方法。

### 两数之和

::: tip 原题链接

[1. 两数之和](https://leetcode-cn.com/problems/two-sum)

:::

思路：使用哈希表存储遍历过的元素，每次遍历时，判断哈希表中是否存在 `target - nums[i]`，如果存在则返回结果。

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    if (map.has(diff)) {
      return [map.get(diff), i]
    }

    map.set(nums[i], i)
  }

  return []
}
```

### 三数之和

::: tip 原题链接

[15. 三数之和](https://leetcode-cn.com/problems/3sum)

:::

思路：使用双指针，先对数组进行排序，然后遍历数组，使用双指针分别指向当前元素的下一个元素和数组的最后一个元素，计算三数之和，然后移动指针。

::: tip

本题不能无脑使用 `for` 循环套两数之和哈希表，因为会有重复的结果。

:::

```ts
function threeSum(nums: number[]): number[][] {
  const res = []
  const len = nums.length

  if (len < 3) {
    return res
  }

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    // 因为排序过，若大于 0 ，则后面不可能有三个数和等于 0
    if (nums[i] > 0) return res

    // 如果和前一个数相等，因为不能出现重复的答案，因此跳过这个元素
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])

        // 若左指针与下一位相等，为了去除重复，则将 left 加 1
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        // 若右指针与上一位相等，为了去除重复，则将 right 减 1
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        // 若左右没有与下一位相等，则继续寻找
        left++
        right--
      } else if (sum < 0) {
        // 若和大于 0，说明 nums[r] 太大，right 左移
        left++
      } else {
        // 若和小于 0，说明 nums[L] 太小，left 右移
        right--
      }
    }
  }

  return res
}
```

### 最接近的三数之和

::: tip 原题链接

[16. 最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest)

:::

#### 暴力解法

思路：使用三重循环，遍历数组，计算三数之和，然后比较与目标值的差值，找到最接近的结果。

```ts
function threeSumClosest(nums: number[], target: number): number {
  let res = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]

        if (Math.abs(sum - target) < Math.abs(res - target)) {
          res = sum
        }
      }
    }
  }

  return res
}
```

#### 双指针

思路：使用双指针，先对数组进行排序，然后遍历数组，使用双指针分别指向当前元素的下一个元素和数组的最后一个元素，计算三数之和，然后移动指针。

```ts
function threeSumClosest(nums: number[], target: number): number {
  let res = nums[0] + nums[1] + nums[2]

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }

      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return res
      }
    }
  }

  return res
}
```

### 四数之和

::: tip 原题链接

[18. 四数之和](https://leetcode-cn.com/problems/4sum)

:::

思路：参照 [三数之和](#三数之和)，使用双指针，先对数组进行排序，然后遍历数组，使用双指针分别指向当前元素的下一个元素和数组的最后一个元素，计算四数之和，然后移动指针。

::: warning 易错提示

- 在遍历数组时，需要判断是否和前一个元素相等，如果相等则跳过。
- `i` 从 0 开始，`j` 从 `i + 1` 开始，`left` 从 `j + 1` 开始，`right` 从 `nums.length - 1` 开始。

:::

```ts
function fourSum(nums: number[], target: number): number[][] {
  const res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let left = j + 1,
        right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if (sum > target) {
          right--
        } else if (sum < target) {
          left++
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]])

          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--

          left++
          right--
        }
      }
    }
  }

  return res
}
```

## 双指针

### 接雨水

::: tip 原题链接

[11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water)

[42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water)

:::

思路：使用双指针，分别指向数组的头尾，计算当前面积，然后移动高度较小的指针。

```ts
function maxArea(height: number[]): number {
  let res = 0
  let left = 0,
    right = height.length - 1

  while (left <= right) {
    const weight = right - left

    if (height[left] < height[right]) {
      res = Math.max(height[left] * weight, res)
      left++
    } else {
      res = Math.max(height[right] * weight, res)
      right--
    }
  }

  return res
}
```

### 删除有序数组中的重复项

::: tip 原题链接

[26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)

:::

思路：使用双指针，一个指针用于遍历数组，另一个指针用于指向不重复的元素。

```ts
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}
```

### 移除元素

::: tip 原题链接

[27. 移除元素](https://leetcode-cn.com/problems/remove-element)

:::

思路：使用双指针，一个指针用于遍历数组，另一个指针用于指向不等于目标值的元素。

```ts
function removeElement(nums: number[], val: number): number {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
  }

  return slow
}
```

### 下一个排列

::: tip 原题链接

[31. 下一个排列](https://leetcode.cn/problems/next-permutation/description/)

:::

思路：关键找到「较小数」与「较大数」。

1. 我们需要将一个左边的「较小数」与一个右边的「较大数」交换，以能够让当前排列变大，从而得到下一个排列。
2. 同时我们要让这个「较小数」尽量靠右，而「较大数」尽可能小。当交换完成后，「较大数」右边的数需要按照升序重新排列。这样可以在保证新排列大于原来排列的情况下，使变大的幅度尽可能小。

以排列 `[4,5,2,6,3,1]` 为例：

- 我们能找到的符合条件的一对「较小数」与「较大数」的组合为 `2` 与 `3`，满足「较小数」尽量靠右，而「较大数」尽可能小。
- 当我们完成交换后排列变为 `[4,5,3,6,2,1]`，此时我们可以重排「较小数」右边的序列，序列变为 `[4,5,3,1,2,6]`。

```ts
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  // find smaller num
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // now [i + 1, end) is decreasing

  // find bigger num
  if (i >= 0) {
    let j = nums.length - 1
    while (j > 0 && nums[i] >= nums[j]) {
      j--
    }
    // swap
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // reverse [i, end)
  for (let l = i + 1, r = nums.length - 1; l < r; l++, r--) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
  }
}
```
