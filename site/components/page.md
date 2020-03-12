# page

---

含 titleBar 基础页面容器

内置了 Weex 端 titleBar 以及多端修改页面标题方法，titleBar 为固定高度<span style="color:red">88cpx</span>。

### 属性

<table>
  <tr>
    <th width="200px">属性名</th>
    <th>类型</th>
    <th width="60px">必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>是</td>
    <td></td>
    <td>titleBar所显示标题内容</td>
  </tr>
  <tr>
    <td>c-bind:back</td>
    <td>EventHandle</td>
    <td>否</td>
    <td></td>
    <td>点击返回时触发</td>
  </tr>
</table>

### slot

<table>
  <tr>
    <th width="200px">插槽名</th>
    <th>作用</th>
  </tr>
  <tr>
    <td>——</td>
    <td>页面内容</td>
  </tr>
  <tr>
    <td>titlebar</td>
    <td>自定义titlebar，自定义时需保证高度为88cpx，仅weex端可用</td>
  </tr>
  <tr>
    <td>menu</td>
    <td>自定义菜单，仅weex端可用</td>
  </tr>
</table>

### 示例

```vue
<template>
  <page title="页面标题" c-bind:back="goback">
    <text class="main">这是页面内容</text>
  </page>
</template>
<script>
import cml from 'chameleon-api';

class Page {
  methods = {
    goback() {
      cml.showToast({
        message: 'goback',
      });
    },
  };
}
export default new Page();
</script>
<style scoped>
.main {
  color: red;
}
</style>

<script cml-type="json">
{
  "base": {}
}
</script>
```

### Bug & Tips

1. `<page>`组件为页面级基础容器组件，只能在页面组件中使用，在普通组件中使用不能保证正确显示，使用时需位于页面组件根结点位置。
2. `<page>`组件在 Weex 端 titlebar 高度为 88cpx，在使用定位时注意兼容。
3. `<page>`组件内置 Weex 端 titlebar 仅能满足常规使用，若需要复杂的 titlebar 则可通过 titlebar 插槽实现。
4. 由于 Android 和 iOS 页面渲染差异，android 端是从状态栏以下开始渲染，而 ios 是从状态栏开始渲染页面，所以在 ios 端需要考虑状态栏高度
