# 只跨 web 和小程序的应用

## 背景介绍

通常情况下，cml 框架会生成跨 H5、小程序、客户端的应用。为了 H5、小程序、客户端初始样式呈现效果一致，cml 会添加[一致性基础样式](../view/cmss/base_style.html)。在开发模式下，构建会严格[校验 CMSS 语法](../framework/linter/cml-cmss.html)，只允许书写跨 H5、小程序、客户端都通用的 [CMSS](../view/cmss.html) 规则。因此，受限于客户端的 CMSS 渲染能力，开发会有诸多限制，另一方面，当开发者只需要跨 H5 和小程序应用时，开发会变得很轻便。

通过下面的表格，展示 CMSS 跨端 能力差异：

!INCLUDE "./different.md"

## 项目初始化与配置

- [项目初始化](../quick_start/quick_start.html)
- 以[merge config](../framework/config.html#配置api)的方式修改项目根目录下的 [chameleon.config.js](../framework/config.html)，如下：

```js
cml.config.merge({
  platforms: ['web', 'wx', 'alipay', 'baidu'],
});
```

## CMSS

此时，CMSS 语法和可用属性，不再受限于客户端的渲染。CMSS 遵循 [W3C 层叠样式表](https://www.w3.org/TR/css-backgrounds-3/#introduction) (Cascading Style Sheets，缩写为 CSS）规范，在此基础上，小程序的标准样式会有一些限制。

## 一致性基础样式可选

如果你希望去除小程序、客户端的的一致性基础样式，修改项目根目录下的 [chameleon.config.js](../framework/config.html)，如下：

```js
cml.config.merge({
  baseStyle: {
    wx: false,
    alipay: false,
    baidu: false,
    web: true,
    weex: false,
  },
});
```

如果你希望更细粒度的去配置某一组件或者页面是否去除基本样式，可以在对应组件或者页面的 json 文件中配置 baseStyle 字段，baseStyle 为 false 时表示该组件或页面不添加默认样式，不配置该字段时是默认添加默认样式的。示例如下：

```js
<script cml-type="json">
{
  "base": {
    "baseStyle": true,
    "usingComponents": {
      "demo-com": "/components/demo-com/demo-com"
    }
  },
  "web": {
    "baseStyle": false
  },
  "wx": {
    "baseStyle": true,
    "navigationBarTitleText": "index",
    "backgroundTextStyle": "dark",
    "backgroundColor": "#E2E2E2"
  },
  "alipay": {
    "baseStyle": false,
    "defaultTitle": "index",
    "pullRefresh": false,
    "allowsBounceVertical": "YES",
    "titleBarColor": "#ffffff"
  }
}
</script>
```
