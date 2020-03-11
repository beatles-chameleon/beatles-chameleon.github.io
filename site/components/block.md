# block

---

包装容器

`<block>` 内置组件是一个包装容器，只接受控制属性，不会渲染在页面中

### 示例

```vue
<template>
  <view class="container">
    <block c-if="{{show}}">
      <text>chameleon</text>
    </block>
    <block c-else>
      <text>block</text>
    </block>
    <button c-bind:onclick="clickHandle"></button>
  </view>
</template>

<script>
class Block {
  data = {
    show: true,
  };
  methods = {
    clickHandle() {
      this.show = !this.show;
    },
  };
}

export default new Block();
</script>
<style scoped>
.container {
  align-items: center;
}
</style>

<script cml-type="json">
{
  "base": {}
}
</script>
```
