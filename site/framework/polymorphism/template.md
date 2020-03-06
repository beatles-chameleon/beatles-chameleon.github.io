# 模板多态

`chameleon-tool@1.0.4-alpha.2` 开始支持

## 模板多态的基本使用方式如下

```html
<template class="demo-com">
  <cml type="weex">
    <view>weex端代码以这段代码进行渲染</view>
    <demo-com title="我是标题weex"></demo-com>
  </cml>
  <cml type="alipay,baidu">
    <view>alipay和baidu端以这段代码进行渲染</view>
    <demo-com title="我是标题2"></demo-com>
  </cml>
  <cml type="wx">
    <view>wx端以这段代码进行渲染</view>
    <demo-com title="我是标题wx"></demo-com>
  </cml>
  <cml type="base">
    <view
      >如果找不到对应端的代码，则以type='base'这段代码进行渲染，比如这段代码会在web端进行渲染</view
    >
    <demo-com title="我是标题base"></demo-com>
  </cml>
</template>
```

## 语法要求如下

1.必须符合如上结构，`template` 标签下第一层并列标签必须是 `cml` 标签；

2.cml 标签是必须有 `type` 属性，表明应用于哪端，cml 标签最终会被替换为 `view` 标签
