# 基础组件

框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考[组件](../component/component.html)文档。

什么是组件：

- 组件是视图层的基本组成单元。
- 组件自带一些功能与微信风格一致的样式。
- 一个组件通常包括 开始标签 和 结束标签，属性 用来修饰这个组件，内容 在两个标签之内。

```
<tagname property="value">Content goes here ...</tagname>
```

> 注意：所有组件属性都是小写，以连字符`-`连接。

## 属性类型

<table>
  <tr>
    <th>类型</th>
    <th>描述</th>
    <th>注解</th>
  </tr>
  <tr>
    <td>String</td>
    <td>字符串</td>
    <td>`"string"`</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>数字</td>
    <td>`1, 1.5`</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>布尔值</td>
    <td>`true，false`</td>
  </tr>
  <tr>
    <td>Array</td>
    <td>数组</td>
    <td>`[1, 'string']`</td>
  </tr>
  <tr>
    <td>Object</td>
    <td>对象</td>
    <td>`{key: value}`</td>
  </tr>
  <tr>
    <td>EventHandler</td>
    <td>事件处理函数名</td>
    <td>`handlerName`是组件中定义的事件处理函数名</td>
  </tr>
</table>

## 公共属性

所有组件都有以下属性

<table>
  <tr>
    <th>属性名</th>
    <th>类型</th>
    <th>描述</th>
    <th>注解</th>
  </tr>
  <tr>
    <td>id</td>
    <td>String</td>
    <td>组件唯一标示</td>
    <td>保证整个页面唯一</td>
  </tr>
  <tr>
    <td>class</td>
    <td>String</td>
    <td>组件样式类名</td>
    <td>在cmss中定义的样式类</td>
  </tr>
  <tr>
    <td>style</td>
    <td>String</td>
    <td>组件内联样式</td>
    <td>可动态设置内联样式</td>
  </tr>
  <tr>
    <td>c-bind</td>
    <td>EventHandler</td>
    <td>组件事件</td>
    <td></td>
  </tr>
</table>

## 特殊属性

chameleon 提供了[内置组件](/component/base/base.html)及[扩展组件](/component/expand/expand.html)，根据组件特殊性几乎每个组件都有自己的特殊属性，详细属性请查看[组件](/component/component.html)文档。
