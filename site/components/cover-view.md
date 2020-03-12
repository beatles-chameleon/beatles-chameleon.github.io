# cover-view

---

覆盖在原生组件之上的文本视图。

cover-view 标签在各端的映射如下

<table>
  <tr>
    <th width="200px">cml</th>
    <th>web</th>
    <th width="60px">weex</th>
    <th>wx</th>
    <th>alipay</th>
    <th>baidu</th>
  </tr>
  <tr>
    <td>cover-view</td>
    <td>div</td>
    <td>div</td>
    <td>cover-view</td>
    <td>cover-view</td>
    <td>cover-view</td>
  </tr>
</table>

### 示例

```vue
<template>
  <cover-view></cover-view>
</template>
```

web/Weex 端渲染结果

```vue
<template>
  <div></div>
</template>
```

微信/支付宝/百度渲染结果

```vue
<template>
  <cover-view></cover-view>
</template>
```
