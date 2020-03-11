# cell

---

子列表项容器。

类似 web 端的 li 元素标签，作为`<list>`列表容器的子列表项。

### 示例

```vue
<template>
  <view>
    <list bottom-offset="{{20}}" height="{{-1}}">
      <cell>
        <text>1</text>
      </cell>
    </list>
  </view>
</template>

<script>
class Cell {}
export default new Cell();
</script>
<script cml-type="json">
{
  "base": {}
}
</script>
```

### Bug & Tips

1. `<cell>`的宽度等于父组件 `<list>` 的宽度，并且 `<cell>` 高度会自适应，指定 margin 样式无效
