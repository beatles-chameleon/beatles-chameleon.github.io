## 扩展新端组件

组件分为内置组件<a href="https://github.com/chameleon-team/chameleon-ui-builtin">chameleon-ui-builtin</a>和扩展组件<a href="https://github.com/chameleon-team/chameleon-ui-builtin">cml-ui</a>。所以用户需要创建两个 npm 包分别实现这两个组件库，结构参考[cml-demo-ui-builtin](https://github.com/chameleon-team/cml-extplatform-demo/tree/master/packages/cml-demo-ui-builtin)和[cml-demo-ui](https://github.com/chameleon-team/cml-extplatform-demo/tree/master/packages/cml-demo-ui)。利用[多态组件扩展](../framework/polymorphism/component_extend.md)语法，对原有组件库中的每一个组件进行新端的实现。

原有组件库中的组件也分为两种，一种为各端都有分别实现的多态组件，例如`chameleon-ui-builtin`中的`button`组件。实现起来新端基本上也是要单独实现。另一种例如`chameleon-ui-builtin`中的`radio`组件，各端的实现都是用的`chameleon-ui-builtin/components/radio/radio.cml`。所以新端基本也可以复用这个实现，(还需要测试情况确实是否可以复用)。

### 新端独立实现

例如：

编写 `my-ui-builtin/components/button/button.interface`

```js
// 引入官方标准interface文件
<include src="chameleon-ui-builtin/components/button/button.interface"></include>
```

编写 `my-ui-builtin/components/button/button.demo.cml`

```html
<template>
  <origin-button
    class="cml-btn"
    c-bind:tap="onclick"
    style="{{mrBtnStyle}}"
    open-type="{{openType}}"
    lang="{{lang}}"
    session-from="{{sessionFrom}}"
    send-message-title="{{sendMessageTitle}}"
    send-message-path="{{sendMessagePath}}"
    send-message-img="{{sendMessageImg}}"
    show-message-card="{{showMessageCard}}"
    app-parameter="{{appParameter}}"
    c-bind:getuserinfo="getuserinfo"
    c-bind:contact="contact"
    c-bind:getphonenumber="getphonenumber"
    c-bind:error="error"
    c-bind:opensetting="opensetting"
  >
    <text class="btn-text" style="{{mrTextStyle}}">{{text}}</text>
  </origin-button>
</template>
<script>
  // js实现部分
</script>
<style scoped>
  // 样式部分
</style>
<script cml-type="json">
  // json配置
</script>
```

### 新端复用现有组件

编写 `my-ui-builtin/components/radio/button.interface`

```js
// 引入官方标准interface文件
<include src="chameleon-ui-builtin/components/radio/radio.interface"></include>
// 复用官方的实现
<script cml-type="demo" src="chameleon-ui-builtin/components/radio/radio.cml"></script>
```
