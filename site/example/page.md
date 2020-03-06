# page

---

含 titleBar 基础页面容器。

内置了 weex 端 titleBar 以及多端修改页面标题方法。

### 示例

#### 基础使用

```html
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

#### 自定义 titlebar

```html
<template>
  <page title="页面标题" c-bind:back="goback">
    <view slot="titlebar" class="titlebar">
      <text class="titlebar-text">自定义标题</text>
    </view>
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
