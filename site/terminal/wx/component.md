# 小程序组件接入

chameleon 允许在多态组件中引入原生微信小程序组件，对于已经熟悉小程序组件开发的朋友将非常 easy，之前封装的微信小程序组件可以直接使用，微信小程序相关的 ui 库可以直接使用，微信小程序自带的组件也可以直接使用。

## 为什么要接入微信小程序组件

多态组件存在的差异不过来自于各端需求不同，又或是各端实现方式的不同。微信小程序组件的接入跟第二个问题完美契合，在原有的小程序开发过程中或许已经产出了常用组件，又或是使用着某个微信小程序的组件库，当使用 chameleon 进行开发时，避免了二次开发原有组件的成本。

## 怎么引入微信小程序组件

第一类是微信小程序支持的组件，比如`view` `text`等，详细请查看[微信小程序组件列表](https://developers.weixin.qq.com/miniprogram/dev/component/)，如果这样的组件已经满足开发需求，那么就可以直接使用了：

```html
<!-- list.wx.cml -->
<template>
  <view>
    <text v-for="l in list">{{l}}</text>
  </view>
</template>
```

第二类是原有的组件，首先你需要将组件复制到 chameleon 项目中，然后只需要在 chameleon 组件中声明式引入该组件即可使用。
还是以`list`组件为例，假设原有封装好的微信小程序的组件`custom-list`，目录结构如下：

```bash
├── components                      // 组件文件夹
|   ├── custom-list
|   |   ├── custom-list.wxml
|   |   ├── custom-list.wxss
|   |   ├── custom-list.js
|   |   └── custom-list.json
```

那么，在 list.wx.cml 中可以直接引用：

```html
<!-- list.wx.cml -->
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

> 需要注意的是组件路径需要写到.wxml 层级，但是不带后缀。

第三类是微信小程序的组件库，这里以[iVew Webapp](https://weapp.iviewui.com/docs/guide/start)为例，首先需要将其代码下载下来放到 chameleon 项目中，假设目录结构如下：

```
├── components                      // 组件文件夹
|   ├── iview
|   |   ├── action-sheet
|   |   |   ├── index.js
|   |   |   ├── index.json
|   |   |   ├── index.wxml
|   |   |   └── index.wxss
|   |   ├── alert
|   |   ├── avatar
|   |   └── ...
```

这里我们需要使用 action-sheet 组件只需要如下即可：

```html
<!-- component.wx.cml -->
<template>
  <action-sheet></action-sheet>
</template>
...
<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "action-sheet": "/components/iview/action-sheet/index"
    }
  }
}
```

> 需要注意的是组件路径需要写到.wxml 层级，但是不带后缀。

## 示例

详细示例戳这里[多态组件扩展](/example/poly.html)
