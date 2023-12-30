---
title: 图片批注
date: 2023-12-28
icon: pizhu
category:
  - BestPracitce
tag:
  - frontend
  - 图片批注
---

实现图片批注有两种方案，一种是通过 `SVG` 绘制，一种是通过 `Canvas` 绘制。以下是两者对比：

| 特点       | Canvas                           | SVG                                 |
| ---------- | -------------------------------- | ----------------------------------- |
| 控制级别   | 像素级控制                       | 矢量图形级别控制                    |
| 编辑操作   | 难以直接编辑已绘制的元素         | 易于访问、操作和编辑 DOM 中的元素   |
| 图形类型   | 更适合复杂绘图和动画             | 适合简单图形和图标                  |
| 性能       | 处理大量图形和复杂交互时性能较好 | 处理大规模动态变化时性能较差        |
| 可保存状态 | 绘制后的图像可以保存为图片       | 图像以 XML 格式保存，易于修改和存储 |
| 适用场景   | 复杂交互和动态绘制               | 静态或少量动态变化的图形            |

综上，选择使用 `Canvas` 实现图片批注。

## 加载图片

实现图片批注的第一步是加载图片，这里使用 `FileReader` 读取图片文件，然后将图片绘制到 `Canvas` 上。

```jsx
const fillImage = (file) => {
  const { current: canvas } = canvasRef
  const { current: wrap } = wrapRef

  if (!canvas || !wrap) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      // 设置 canvas 的宽高
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
    }
    img.src = e.target.result
  }

  if (file) {
    // 读取图片数据
    reader.readAsDataURL(file)
  }
}
```

## 绘制矩形

绘制矩形需要监听 `mousedown`、`mousemove`、`mouseup` 事件，然后根据鼠标的位置计算出矩形的宽高，最后调用 `fillRect` 方法绘制矩形。

```jsx

```

::: react-demo 图片批注

```js
const { useState, useRef } = React

export default () => {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  const fillImage = (file) => {
    const { current: canvas } = canvasRef
    const { current: wrap } = wrapRef

    if (!canvas || !wrap) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvasRatio = wrap.offsetWidth / wrap.offsetHeight
        const imgRatio = img.width / img.height

        canvas.width = wrap.offsetWidth
        canvas.height = wrap.offsetWidth

        const ctx = canvas.getContext('2d')

        // 根据图像和容器的比例调整绘制位置和大小
        if (canvasRatio >= imgRatio) {
          // 图像宽度填充满容器，高度居中裁剪
          const scaledHeight = wrap.offsetWidth / imgRatio
          ctx.drawImage(
            img,
            0,
            (wrap.offsetHeight - scaledHeight) / 2,
            wrap.offsetWidth,
            scaledHeight
          )
        } else {
          // 图像高度填充满容器，宽度居中裁剪
          const scaledWidth = wrap.offsetHeight * imgRatio
          ctx.drawImage(
            img,
            (wrap.offsetWidth - scaledWidth) / 2,
            0,
            scaledWidth,
            wrap.offsetHeight
          )
        }
      }
      img.src = e.target.result
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleImageChange = (e) => {
    fillImage(e.target.files[0])
  }

  return (
    <>
      <div
        ref={wrapRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '500px',
          backgroundColor: '#edeef0'
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </>
  )
}
```

:::
