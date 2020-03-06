# 小程序组件接入

chameleon 允许在多态组件中直接引入支付宝小程序组件，如果你已经封装了支付宝小程序的组件，如果你已经在用支付宝小程序的组件库，不用担心，在 chameleon 项目中你仍然可以使用。

## 为什么要接入支付宝小程序组件

多态组件存在的差异不过来自于各端需求不同，又或是各端实现方式的不同。支付宝小程序组件的接入跟第二个问题完美契合，在原有的小程序开发过程中或许已经产出了常用组件，又或是使用着某个支付宝小程序的组件库，当使用 chameleon 进行开发时，避免了二次开发原有组件的成本。

## 怎么引入支付宝小程序组件

第一类是支付宝小程序支持的组件，比如`view` `text`等，详细请查看[支付宝小程序组件列表](https://docs.alipay.com/mini/component/overview)，如果这样的组件已经满足开发需求，那么就可以直接使用了：

```html
<!-- list.alipay.cml -->
<template>
  <view>
    <text v-for="l in list">{{l}}</text>
  </view>
</template>
```

第二类是原有的组件，首先你需要将组件复制到 chameleon 项目中，然后只需要在 chameleon 组件中声明式引入该组件即可使用。
还是以`list`组件为例，假设原有封装好的支付宝小程序的组件`custom-list`，目录结构如下：

```
├── components                      // 组件文件夹
|   ├── custom-list
|   |   ├── custom-list.axml
|   |   ├── custom-list.acss
|   |   ├── custom-list.js
|   |   └── custom-list.json
```

那么，在 list.alipay.cml 中可以直接引用：

```html
<!-- list.alipay.cml -->
<template>
  <custom-list list="{{list}}"></custom-list>
</template>
...
<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "custom-list": "/components/custom-list/custom-list"
    }
  }
}
```

> 需要注意的是组件路径需要写到.axml 层级，但是不带后缀。

## 示例

详细示例戳这里[多态组件扩展](/example/poly.html)
