# 资源定位

## 静态资源引用

模板中引用静态资源，不能直接将资源的路径写在模板中，而是要通过 js 中 require 该静态资源得到变量，在模板中引用该变量。
该路径会根据[项目配置的 publicPath](./config.html)自动替换成正确路径。利用该功能可以实现  静态资源  开发路径和部署路径之间的  分离，开发者只需要写相对路径，线上可以通过设置`publicPath`指定任意路径。

```html
<template>
  <!-- 
错误形式
<image src="./assets/logo.png" /> 
-->
  <!-- 正确形式 -->
  <image src="{{imgPath}}" />
</template>
<script>
  class Index {
    data = {
      imgPath: require('./assets/logo.png'),
    };
  }
  export default new Index();
</script>
```

## 图片 base64

支持在引用图片 url 后面添加`inline`参数，以指定图片的 base64 格式，例如：

```html
<script>
  class Index {
    data = {
      imgPath: require('./assets/logo.png?__inline'),
    };
  }
  export default new Index();
</script>
```
