---
title: 拖拽排序
date: 2023-11-23
icon: tuozhuai
category:
  - BestPracitce
tag:
  - frontend
  - 拖拽排序
---

::: react-demo

```tsx
const SortableItem = (props: {
  id: string
  itemRender: () => ReactElement
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition!,
    cursor: 'move'
  }
  return (
    <div
      className="mr-2"
      ref={setNodeRef}
      style={{ ...style }}
      {...attributes}
      {...listeners}
    >
      {props.itemRender()}
    </div>
  )
}
```

:::
