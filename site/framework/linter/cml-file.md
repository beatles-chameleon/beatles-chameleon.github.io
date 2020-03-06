# CML 文件规范校验

CML 文件规范校验包括校验以下三个规范：

- CML 文件命名规范
- CML 文件内容规范
- CML Interface 内容规范

## CML 文件命名规范

以 cml 后缀结尾的文件分两种情况：

### 1. 多端实现完全一致组件命名格式：

```bash
[component name].cml
```

组件所有逻辑实现在同一文件中

举例：

```bash
demo.cml
```

### 2. 多端实现不一致组件命名格式：

```bash
[component name].[weex|wx|alipay|baidu|web].cml
```

组件文件名按照适配端命名，需要同一目录下的 interface 文件组合使用

```bash
[component name].interface
```

举例：

```bash
demo.interface
demo.weex.cml
demo.wx.cml
demo.alipay.cml
demo.baidu.cml
demo.web.cml
```

## CML 文件内容规范

cml 文件中可能包括以下几个字段标签

1. template(template 规范)：标签中书写组件的视图层结构，chameleon 自定义了一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。
1. style(CMSS 规范)：标签中书写组件的样式, 描述视图中的元素样式。
1. script(script 规范)：标签中填充编写组件逻辑层响应页面操作的代码。
1. json(json 规范)：标签中书写组件的配置信息。

举例：

```html
// demo.cml code
<template>
  <view id="banner"> </view>
</template>
<script>
  class Index {}
  export default new Index();
</script>
<style scoped>
  #banner {
    background-color: #ff0000;
  }
</style>
<script cml-type="json">
  {
    "base":{
      "usingComponents": {
      }
    },
    "wx": {
      "navigationBarTitleText": "index",
      "backgroundTextStyle": "dark",
      "backgroundColor": "#E2E2E2"
    },
    "alipay": {
      "defaultTitle": "index",
      "pullRefresh": false,
      "allowsBounceVertical": "YES",
      "titleBarColor": "#ffffff"
    },
    "baidu": {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "white",
      "navigationBarTitleText": "index",
      "backgroundColor": "#ffffff",
      "backgroundTextStyle": "dark",
      "enablePullDownRefresh": false,
      "onReachBottomDistance": 50
    },
    "web": {
    },
    "weex": {
    }
  }
</script>
```

## CML Interface 内容规范

具体可参见[interface 规范](./standards/cml-interface.html)，.interface 后缀文件用于定义多态组件的接口。
