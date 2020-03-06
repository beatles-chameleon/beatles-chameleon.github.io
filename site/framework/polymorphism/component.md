# 组件多态(Polymorphic component)

chameleon 在跨端的统一性上做了很多的工作，但即使是做到了 99%的统一，仍然存在着 1%的差异，基于代码可维护性的考量，chameleon 引入了[多态协议](./intro.html)。

![多态组件全景图](../../assets/polymorphism_widget.png)

## 组件多态的使用

项目根目录下执行`cml init component`，选择`Polymorphic component`，输入组件名称，例如`c-list`，生成如下文件结构

```
├── components
│   ├── c-list
│   │   ├── c-list.interface
│   │   ├── c-list.web.cml
│   │   ├── c-list.weex.cml
│   │   ├── c-list.wx.cml
│   │   ├── c-list.alipay.cml
│   │   ├── c-list.baidu.cml
│   │   └── ...
```

## interface 文件

`.interface`文件利用[接口校验语法](./check.html)对组件的属性和事件进行类型定义， 保证各端的组件和事件一致，框架在开发环境的运行时做校验。例如`c-list.interface`

```javascript
type eventType = 'change';
type eventDetail = {
  value: string
}
type changeEvent = (a: eventType, detail: eventDetail) => void;

export default Interface Clist {
  name: string,
  age: number,
  changeEvent: changeEvent
}
```

## \*.[web|weex|wx|alipay|baidu].cml

`c-list.web.cml`、`c-list.weex.cml`、`c-list.wx.cml`、`c-list.alipay.cml`、`c-list.baidu.cml`、`...`
文件是灰度区，它是唯一可以调用下层端组件的 CML 文件，分别是 web、weex、wx、alipay、baidu 五个端的调用入口。建议这一块代码尽量薄，只是用来调用下层端代码，不要编写过于重的代码。

- 在灰度区的 template 模板中：
  - 调用下层全局组件或者引入的下层组件时，该组件传入的属性是各自下层端的语法，绑定的函数回调事件对象也是原始对象
    - 引入的下层组件通过可以直接调用，传递各端下层属性语法
    - 下层全局组件需添加`origin-`前缀，例如`<组件/>`改成`<origin-组件名/>`，传递各端下层语法，[查看示例](../../framework/linter/cml-template.html#%08%E5%BC%95%E7%94%A8%E5%B9%B3%E5%8F%B0%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6)
  - 调用普通 CML 内置组件或者引入的 cml 组件时，正常使用 cml 模板属性语法

* 在灰度区的 script 逻辑代码中：

  - 可以调用下层端的全局变量和任意方法，以及下层端的生命周期。
  - 也可以正常使用普通 cml 逻辑代码。

* 在灰度区的 style 样式代码中：

  - 可以使用下层端 css 语法。
  - 也可以正常调用 cmss 语法。

* 在灰度区的 json 配置代码中：
  - \*web.cml：`base.usingComponents`可以引入任意`.vue`扩展名的普通 vue 组件文件，路径规则见[组件配置](../../framework/json.html)
  - \*wx.cml：`base.usingComponents`可以引入普通[微信小程序组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)，路径规则见[组件配置](../../framework/json.html)
  - \*alipay.cml：`base.usingComponents`可以引入普通[支付宝小程序组件](https://docs.alipay.com/mini/framework/custom-component-overview)，路径规则见[组件配置](../../framework/json.html)
  - \*baidu.cml：`base.usingComponents`可以引入普通[百度小程序组件](https://smartprogram.baidu.com/docs/develop/framework/custom-component/)，路径规则见[组件配置](../../framework/json.html)
  - \*weex.cml：`base.usingComponents`可以引入支持`.vue`扩展名的普通 weex 组件文件，路径规则见[组件配置](../../framework/json.html)

## 使用举例

[ 手把手教你系列- 实现多态 echart ](../../example/poly.html)

## 扩展阅读

### 什么时候用到组件多态？

chameleon 中的组件是采用单文件格式的 cml 文件，其中包括了一个组件所拥有的视图层、逻辑层及配置信息。考虑以下两种场景：

- 场景一：当某个功能组件需要调用各端的原生组件，各端原生组件的属性不一致，或者一端有原生组件，其他端需要组合实现等。
- 场景二：产品在需求上导致某一个组件在各端的结构表现不同。

### 为什么要引入多态协议

以场景一为例，先看一个最容易理解的跨端组件实现：

```html
<template c-if="{{ENV === 'web'}}">
  <ul c-for="{{list}}">
    <li>{{item.name}}</li>
  </ul>
</template>
<template c-else-if="{{ENV === 'wx'}}">
  // 假设wx-list 是微信小程序原生的组件
  <wx-list data="{{list}}"></wx-list>
</template>
<template c-else-if="{{ENV === 'alipay'}}">
  // 假设alipay-list 是微信小程序原生的组件
  <alipay-list data="{{list}}"></alipay-list>
</template>
<template c-else-if="{{ENV === 'baidu'}}">
  // 假设baidu-list 是微信小程序原生的组件
  <baidu-list data="{{list}}"></baidu-list>
</template>
<template c-else-if="{{ENV === 'weex'}}">
  // 假设list 是weex端原生的组件
  <list source="{{list}}"></list>
</template>
```

上面的代码块是一个简单的列表实现，wx 和 weex 都是使用了各自的原生组件，这样的实现方法其实是把三端或者 N 端的模版放在了同一个文件中，当然，这里只是展示了模版的复杂，假设在 js 代码块中也存在着端的判断，那代码的复杂可想而知。

总结下来，这样的代码有如下  待解决问题：

1. 增加代码复杂度，难以维护
2. 各端组件的属性和事件定义可能不一致
3. 各端组件耦合在一起，bug 风险极高
4. 没有做到各端代码的分离，增大体积

而利用了组件多态之后的使用方式如下：

```html
<c-list data="{{list}}"><c-list></c-list></c-list>
```

可以看到我们只引用了一个`c-list`组件，该组件提供了统一的属性。
