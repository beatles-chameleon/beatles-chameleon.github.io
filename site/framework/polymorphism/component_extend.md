# 组件多态的扩展

<b>(chameleon-tool@0.4.0 以上开始支持)</b>

<a href="./api.html">组件多态</a>一节讲解了组件多态的使用，这一节讲解组件多态的一些扩展语法，更适用于扩展新端使用。

## 1 扩展语法

## 1.1 `include`标签

多态组件的`.interface`文件内部可以用`<include>`标签引入其他多态组件的`.interface`文件，代表采用该文件的接口定义和对应的各端实现。
语法是`<include src="${引用路径}.interface"></include>`，有如下规则：

- src 属性指向的文件路径不支持 webpack 别名，只能是相对路径或者 npm 包名开始。
- cml-type interface 部分必须是唯一的

#### 例如扩展新端组件（以头条小程序为例，假设端扩展标识为：toutiao）:

编写 `my-ui-builtin/button/button.interface`

```js
// 引入官方标准interface文件
<include src="chameleon-ui-builtin/components/button/button.interface"></include>
```

再编写 `my-ui-builtin/button/button.toutiao.cml`

```html
//
扩展实现新端（以头条小程序为例，假设端扩展标识为：toutiao），具体代码可参考在其他端的实现如：chameleon-ui-builtin/components/button/button.wx.cml
<template>
  <button
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
  </button>
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

这样在引用`my-ui-builtin/button/button`这个多态组件时，就会有`chameleon-ui-builtin`中 button 支持的端和自己扩展的端。

## 1.2 `script` src 属性

`<script></script>`标签可以通过指定`src`的方式引用 cml 文件作为某一平台或某几个平台的实现或者接口定义。
有如下规则：

- src 属性指向的文件路径不支持 webpack 别名，只能是相对路径或者 npm 包名开始。
- cml-type 属性为字符串，如果多个端可以用英文逗号 , 进行分割，例如 cml-type="web,wx"。

例如上面扩展 button 的例子可以写成 下面的形式
编写 `my-ui-builtin/button/button.interface`

```js
// 引入官方标准interface文件
<include src="chameleon-ui-builtin/components/button/button.interface"></include>
<script cml-type="toutiao" src="./mybutton.cml"></script>
```

再编写 `my-ui-builtin/button/mybutton.cml`

```html
//
扩展实现新端（以头条小程序为例，假设端扩展标识为：toutiao），具体代码可参考在其他端的实现如：chameleon-ui-builtin/components/button/button.wx.cml
<template>
  <button
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
  </button>
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

## 多态组件查找优先级

没有扩展语法之前，采用的是各端的实现和`.interface`文件保持同名的方式，各端有各自的端标识后缀，有了扩展语法之后这种约定同名的方式被打破。 多态组件的查找从 interface 作为入口进行查找，多态组件的查找，包含在组件的查找内，所以这里直接讲组件的查找优先级。
以一个例子进行说明
组件引用

```
{
  "usingComponents": {
    "demo-com": "/componnets/button/button"
  }
}
```

文件结构

```
├── components
  ├── button
    └── button.interface
    └── custombutton.cml
    └── button.toutiao.cml
    └── button.cml
```

`button.interface`内容如下：

```js
// 引入官方标准interface文件
<include src="chameleon-ui-builtin/components/button/button.interface"></include>
<script cml-type="toutiao" src="./custombutton.cml"></script>
```

当前端标识为`toutiao`查找优先级如下：

- 1 找`/componnets/button/button.interface`文件，如果里面`<script>`的 cmltype 等于当前端标识 toutiao,则找到`<script>`的 src 属性指向的 cml 文件。本例子中是`custombutton.cml`

- 2 找`/componnets/button/button.interface`文件 对应同名的带有当前端标识的 cml 文件，本例子中是`button.toutiao.cml`

- 3 找`/componnets/button/button.interface`文件，里面的`<include></include>`标签的 src 指向的`.interface`文件，以该文件进行递归执行 1，2 步的查找。

- 3 找非多态组件`/componnets/button/button.cml`文件

- 4 找各平台的原生组件例如`/componnets/button/button.vue`,`/componnets/button/button.wxml` ，还有扩展新端中用户可以自定义查找

#### 注意 cml-type interface 部分必须是唯一的

例 1：

```
// 引入cml-ui interface文件
<include src="cml-ui/src/components/c-tab/c-tab.interface"></include>

// 错误实现interface部分
<script cml-type="interface"></script>

// 扩展实现新端
<script cml-type="demo" src="......"></script>
```

`<include>`的`cml-ui/src/components/c-tab/c-tab.interface`文件中已经有`cml-type="interface"`的定义，所以当前文件中定义`<script cml-type="interface"></script>`部分是错误的。

例 2：

```
// 引入cml-tt-ui interface文件
<include src="cml-tt-ui/src/components/c-tab/c-tab.interface"></include>

// 引入cml-quickapp-ui interface文件
<include src="cml-quickapp-ui/src/components/c-tab/c-tab.interface"></include>

// 扩展实现新端
<script cml-type="demo" src="......"></script>
```

文件中引入了两个`interface`文件，但是他们内部找到的`<script cml-type="interface"></script>`定义部分都在`cml-ui/src/components/c-tab/c-tab.interface`中，是同一文件。所不认为是错误的。
