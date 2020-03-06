# 组件化标准

MVVM 标准中将`.cml`文件分为三类，`src/app/app.cml`为 app，`router.config.json`中配置的路由对应的文件为 page，其他的`.cml`文件为 component。

### 组件引用

在`.cml`文件的`<script cml-type="json"></script>`json 部分，`usingComponents`字段中声明组件的引用。
例如：

```
{
  "base":{
    "usingComponents": {
      "navi": "/components/navi/navi",
      "c-cell": "../components/c-cell/c-cell",
      "navi-npm": "cml-test-ui/navi/navi"
    }
  }
}
```

`usingComponents`对象中，key 为组件名称，组件名称为小写字母、中划线和下划线组成。value 为组件路径，组件路径的规则如下：

- 相对当前文件的相对路径
- src 下的绝对路径
- node_modules 下的组件直接从 npm 的包名称开始写例如 cml-test-ui/navi/navi
- 组件的路径禁止包含后缀扩展名，查找的优先级为
  - 1.interface 文件指向的多态组件
  - 2 .cml 文件
  - 3 用户通过 hook: find-component 找到的组件

### 组件使用

组件在 CML 模板中使用，组件名为 usingComponents 中的 key 值，组件使用形式为闭合标签，标签名为组件名。例如：

```html
<template>
  <c-cell><c-cell>
</template>
<script cml-type="json">
{
  "base":{
    "usingComponents": {
      "c-cell": "../components/c-cell/c-cell"
    }
  }
}
</script>
```
