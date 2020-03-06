# FAQ

### 问题列表

[怎么理解框架的实现原理？](#怎么理解框架的实现原理？)

[我想使用 chameleon，是否需要大刀阔斧的重构项目？](#我想使用chameleon，是否需要大刀阔斧的重构项目？)

[用 CML 标准编写代码，是否增加调试成本？](#用CML标准编写代码，是否增加调试成本？)

[各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？](#各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？)

[框架有多大，性能是否有影响？](#框架有多大，性能是否有影响？)

[我只想跨 web 和各类小程序，是否可以不使用 Flexbox 布局模型？](#我只想跨web和各类小程序，是否可以不使用Flexbox布局模型？)

[一套代码运行多端，如何保证各个端充分的定制化空间？](#一套代码运行多端，如何保证各个端充分的定制化空间？)

[各端包括小程序的接口更新后，是否一定依赖框架更新？](#各端包括小程序的接口更新后，是否一定依赖框架更新？)

[怎么使用微信小程序的原生 button](#怎么使用微信小程序的原生button)

[现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？](#现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？)

[我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？](#我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？)

[是否支持类似 vue 的 ref？](#是否支持类似vue的ref？)

[小程序端分包大小超过 2M 的限制改如何优化？](#小程序端分包大小超过2M的限制改如何优化？)

[模板中支持函数吗？](#模板中支持函数吗？)

[如何引用字体图标 inonfont？](#如何引用字体图标inonfont？)

[支持第三方 ui 库吗？](#支持第三方ui库吗？)

[怎么在接口多态中定义一个含可选属性的对象](#怎么在接口多态中定义一个含可选属性的对象)

[image 组件如何调用 error 方法](#image组件如何调用error方法)

[build 模式下图片静态资源地址找不到？](#build模式下图片静态资源地址找不到？)

[process.env 获取不到值](#process.env获取不到值)

[是否支持类似 vue 的 ref？](#是否支持类似vue的ref？)

[数据存储有同步方法吗？](#数据存储有同步方法吗？)

[为什么图片切换有延迟？](#为什么图片切换有延迟？)

[build 模式不支持传参，导致无法灵活区分环境](#build模式不支持传参，导致无法灵活区分环境)

[v-model 不支持对象的属性吗？](#v-model不支持对象的属性吗？)

[web 端页面切换动画怎么加？](#web端页面切换动画怎么加？)

[我想通过别名引用项目中的资源，该如何配置?](#我想通过别名引用项目中的资源，该如何配置?)

[如何支持 sass?](#如何支持sass)

[如何给 CML 项目增加 eslint?](#如何给CML项目增加eslint?)

[微信预览为什么显示不了图片](#微信预览为什么显示不了图片)

[web 端开发模式下，如何修改资源协议?](#web端开发模式下，如何修改资源协议?)

[如何将 weex 端输出的文件打包成 apk](#如何将weex端输出的文件打包成apk)

[如何调试 chameleon 的工程化配置](#如何调试chameleon的工程化配置)

### 问题解释

##### 怎么理解框架的实现原理？

实现原理图
![](../assets/architecture_hierarchy.png)

##### 我想使用 chameleon，是否需要大刀阔斧的重构项目？

不需要，可以使用 chameleon 开发公用组件，<a href="../terminal/io.html">导出</a>到各端原有项目中使用。

##### 用 CML 标准编写代码，是否增加调试成本？

我们实现了全面的语法检查功能，且在持续加强。理论上框架是降低调试成本，就像从原生 js 开发到 vuejs、reactjs 是否认为也增加了调试成本，见仁见智。

##### 各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？

1、自建输入语法标准 cml，编译输出结果自定的格式语法。
2、框架的 runtime 层实现匹配接收的编译输出代码，runtime 跟随小程序更新。
3、框架整体方向一致：mvvm 底层设计模式为标准设计接口。
基于以上三条，你可以理解为：我们设计了一个框架统一标准协议，再在各个端 runtime 分别实现这个框架，宏观的角度就像 nodejs 同时运行在 window 和 macOS 系统，就像 flutter 运行在 Android 和 iOS 一个道理。各端小程序接口更新除非遇到不向下兼容情况，否则不影响框架，如果真遇到不向下兼容更新，这种情况下是否用框架都需要改。

##### 框架有多大，性能是否有影响？

1、小程序的主要运行性能瓶颈是 webview 和 js 虚拟机的传输性能，我们在这里会做优化，尽可能 diff 出修改的部分进行传输，性能会更好。
2、包大小，小程序有包大小限制，web 端包大小也是工程师关心的点。首先基于多态协议，产出包纯净保留单端代码；其次框架的 api 和组件会按需打包。包大小是我们重点发力点，会持续优化到极致。目前 build 模式包大小测试结果如下:
<span style="color: #ff534d;">minimize</span><span style="color: #edd0be;"> | </span><span style="color: #25c6fc;">minimize + gzip</span>

<table style="color: #edd0be;">
<tr>
  <th>平台</th><th>js总体积</th><th>外部框架</th><th>chameleon运行时代码</th><th>其他代码</th>
</tr>
<tr>
  <td>web</td>
  <td>
    <span style="color: #ff534d;">141.87kb</span>  
    |
    <span style="color: #25c6fc;">43.72kb</span>
  </td>
  <td>
    vue+vuex+vue-router<br/>
    <span style="color: #ff534d;">99.26kb</span>  
    | 
    <span style="color: #25c6fc;">33.89kb</span>
  </td>
  <td>
    <span style="color: #ff534d;">35.96kb</span>  
    |
    <span style="color: #25c6fc;"> 8.85kb</span>
  </td>
  <td>
    业务代码
  </td>
</tr>
<tr>
  <td>weex</td><td>
    <span style="color: #ff534d;">135kb</span>  
    |
    <span style="color: #25c6fc;">32.43kb</span>
  </td>
  <td>
    vuex+vue-router<br/>
    <span style="color: #ff534d;">33.49kb</span>  
    | 
    <span style="color: #25c6fc;">17.96kb</span>
  </td>
  <td>
    <span style="color: #ff534d;">25.23kb</span>  
    |
    <span style="color: #25c6fc;">5.94kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>wx</td><td>
    <span style="color: #ff534d;">101.66kb</span>  
    |
    <span style="color: #25c6fc;">28.12kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">98.75kb</span>  
    |
    <span style="color: #25c6fc;">26.53kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>baidu</td><td>
    <span style="color: #ff534d;">101.72kb</span>  
    |
    <span style="color: #25c6fc;"> 28.13kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">98.78kb</span>  
    |
    <span style="color: #25c6fc;">26.61kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>alipay</td><td>
    <span style="color: #ff534d;">102kb</span>  
    |
    <span style="color: #25c6fc;">28.12kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">99.15kb</span>  
    |
    <span style="color: #25c6fc;">26.34kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

</table>

##### 我只想跨 web 和各类小程序，是否可以不使用 Flexbox 布局模型？

可以，如果你的项目不在 快应用、react-native、weex 等平台运行，可以更便捷开发项目，特别是 CSS 的限制更少：
<a href="../example/web_wx.html">只跨 web 和小程序的应用</a>

##### 一套代码运行多端，如何保证各个端充分的定制化空间？

基于多态协议，充分保证各端发挥，且保证最终一致性。

##### 各端包括小程序的接口更新后，是否一定依赖框架更新？

同上一个问题，基于多态协议，可自己直接调用新的底层接口。

##### 怎么使用微信小程序的原生 button？

同类问题：

1、怎么使用微信授权登录？

2、怎么使用小程序登录？

这个功能是微信小程序等特有的功能，所以不建议写在公用跨端部分，用[多态组件](https://cml.js.org/doc/framework/polymorphism/component.html)封装适合自己业务的 `<passport>`组件，在 `passport.wx.cml` 里面使用 `<origin-button>`来调用微信小程序原生组件。

CML 框架方为什么不直接提供组件？

目前提供的封装的组件都是可跨所有端。而微信小程序的免密授权登录功能时小程序所特有的功能，在 web 端时用户可能需要用账号密码登录，各个公司业务的登录功能设计不一致，平台无法提供统一的 passport 组件；所以在你第一次使用 CML 时需要自己用多态组件封装一次`<passport>`登录组件，后续所有项目都可以使用这个`<passport>`登录组件.

##### 现在提供的组件是针对三端通用，很多小程序特有功能不能使用，后续有什么改进规划吗？

目前我们正在开发只针对小程序的组件库，用户可以直接使用各类小程序统一版本的登录组件库。
同时基于[多态组件的重载能力](https://cml.js.org/doc/framework/polymorphism/component_extend.html)可以重载登录组件的 web 端实现，这样既能在各类小程序使用统一登录，又能定制化 web 端等登录能力。

##### 我的项目只运行微信小程序端，官方提供的某个组件灵活性不够？

不仅仅是微信小程序端，任意端想实现自己想要的功能时皆可适用。
找到改组件原来的代码，使用[多态组件的重载能力](https://cml.js.org/doc/framework/polymorphism/component_extend.html)或者 [多态接口的重载能力](https://cml.js.org/doc/framework/polymorphism/api_extend.html)重新实现微信小程序端的实现，实现自己定制化能力。

##### 是否支持类似 vue 的 ref？

目前暂不支持；

##### 小程序端分包大小超过 2M 的限制改如何优化？

具体优化步骤参考：https://github.com/beatles-chameleon/cml-subpage

[issue332](https://github.com/didi/chameleon/issues/332)

##### 模板中支持函数吗？

```html
<view>getText()</view>
```

由于小程序端语法限制，不支持函数自执行，参考 [issue100](https://github.com/didi/chameleon/issues/100)

##### 如何引用字体图标 inonfont？

具体参考 [issue77](https://github.com/didi/chameleon/issues/77)

##### 使用 c-tabbar 后，发现其他 cml 组建中的 created 方法不执行，只执行 c-tabbar 页面中的 created，请问该怎么解决这个问题？

具体参考 [issue301](https://github.com/didi/chameleon/issues/301)
开发者需要注意一点，c-tabbar 仅仅是一个组件，和微信原生的配置的 tabbar 并不一样；

##### 支持第三方 ui 库吗？

支持，具体参考 [issue119](https://github.com/didi/chameleon/issues/119)

##### 怎么在接口多态中定义一个含可选属性的对象

具体参考 [issue327](https://github.com/didi/chameleon/issues/327)

##### image 组件如何调用 error 方法

具体参考 [issue348](https://github.com/didi/chameleon/issues/348)

##### build 模式下图片静态资源地址找不到？

具体参考 [publicPath](https://cmljs.org/doc/framework/deploy.html#apiPrefix%E3%80%81publicPath%E3%80%81router.config.json%E3%80%81chameleonUrl%E7%9A%84%E5%85%B3%E7%B3%BB)

##### process.env 获取不到值

首先要了解 webpack 中 DefinePlugin 的作用，可以参考[官网](https://webpack.docschina.org/plugins/define-plugin/)

所以当我们取值的时候，只能取到该插件已经声明的值；

##### 数据存储有同步方法吗？

store 部分请参考：

[store-mutation](https://cml.js.org/doc/logic/store/mutation.html)
[store-action](https://cml.js.org/doc/logic/store/action.html)

备注：mutation 是数据的同步操作,action 是数据的异步操作

##### 为什么图片切换有延迟？

可以参考 https://cml.js.org/doc/framework/source_location.html?h=inline

将图片改为 base64 的形式；

##### build 模式不支持传参，导致无法灵活区分环境

如果我们需要多套构建配置，可以自定义一个构建类型，具体参考[项目配置-自定义配置](https://cml.js.org/doc/framework/config.html)

假如你在构建微信小程序端，一个构建模式下要求不压缩代码，一个构建模式下要求显示模块名字，那么可以如下配置

```javascript
cml.config.merge({
  wx: {
    build: {
      minimize: true,//对打包结果进行压缩
      moduleIdType: "id" //编译的模块结果以模块名字显示
    }
    custom: {
      minimize: false,//对打包结果进行压缩
      moduleIdType: "name" //编译的模块结果以模块名字显示
    }
  }
})
```

执行 cml wx build 则打包的代码会进行压缩以及模块名以 id 取名；

执行 cml wx custom 则打包的代码不会压缩抑菌剂模块名以该模块对应的 name 取名

##### v-model 不支持对象的属性吗？

目前不支持对象的属性；参考[issue340](https://github.com/didi/chameleon/issues/340)

##### web 端页面切换动画怎么加？

参考 [issue234](https://github.com/didi/chameleon/issues/234)

##### 我想通过别名引用项目中的资源，该如何配置?

可以通过[chameleon 提供的回调函数](https://cml.js.org/doc/framework/config.html#%E4%BF%AE%E6%94%B9webpack%E9%85%8D%E7%BD%AE)，对 webpack 进行配置；利用 resolve.alias 选项；具体参考 [webpack-resolvealias](https://webpack.js.org/configuration/resolve/#resolvealias)

比如想提供一个对于 `src` 目录的访问别名
修改 `chameleon.config.js`

```javascript
const path = require('path');
cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params;
  //这里新增 SRC 别名；
  webpackConfig.resolve.alias &&
    (webpackConfig.resolve.alias.SRC = path.resolve(__dirname, 'src/'));
  return { type, media, webpackConfig };
});
```

假如项目目录中有`src/utils/utils.js`这个模块，那么在项目中可以直接

```javascript
import utils from 'SRC/utils/utils.js';
```

注意：chameleon 内置了一些别名

```javascript
'$CMLPROJECT';
'/components';
'$PROJECT';
'$ROUTER_CONFIG';
```

##### 如何支持 sass?

可以自定义扩展 webpack 配置，具体配置可以参考 [issue128](https://github.com/didi/chameleon/issues/128)

##### 如何给 CML 项目增加 eslint?

如果是新初始化的项目，可以根据 [issue358](https://github.com/didi/chameleon/issues/358)中《如何使用 eslint 规范 CML 项目》部分进行配置；

如果是已开发一段时间的 CML 项目，想渐进式的对项目进行 eslint 规范，那么可以参考 [issue358](https://github.com/didi/chameleon/issues/358) 中《如何使用 eslint 校验本次提交》部分进行配置；

##### 微信预览为什么显示不了图片

首先要参考下

- [资源定位](https://cmljs.org/doc/framework/source_location.html?h=publicpath)
- [chameleon 上线指南](https://cmljs.org/doc/framework/deploy.html?h=publicpath)

在 build 模式下会定位到配置的 publicPath 路径下，所以如果要预览的话，务必配置正确的 publicPath

##### web 端开发模式下，如何修改资源协议?

cml web dev 之后，我们可以在 `node_modules/.chameleon` 文件夹中看到资源的具体内容

可以通过以下配置修改协议

```javascript
cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params;
  if (type === 'web' && media === 'dev') {
    //这里修改 publicPath 即可，dev模式下默认是 http://本机ip:port/
    webpackConfig.output.publicPath = webpackConfig.output.publicPath.replace(/http:/, '');
  }
  return { type, media, webpackConfig };
});
```

##### 如何将 weex 端输出的文件打包成 apk

测试的话可以把 jsbundle 放到 android 工程 app 模块的 assets 目录下，clone 并参考：
https://github.com/chameleon-team/chameleon-sdk-android
这里有 demo 工程示例的 jsbundle，直接读取 assets 目录下并渲染
https://github.com/chameleon-team/chameleon-sdk-android/tree/master/app/src/main/assets

另，这里的 android 相关文章建议先读一遍。
https://cmljs.org/doc/chameleon_client/android/introduction.html

##### 如何调试 chameleon 的工程化配置

第一步：

`cml -v` 找到当前使用 chameleon-tool 的路径

第二步：

用编辑器打开该路径下源码，找到`chameleon.js` 文件,修改成如下

```javascript

#! /usr/bin/env node --inspect-brk
require('./lib/index.js');

```

可以在源码目录中任何想调试的地方打上断点`debugger`

第三步：

修改`chameleon.config.js`

```javascript
cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params;
  /*最终断点会进到这里，在这里可以看.
  type:编译端，web,wx,weex等
  media:编译类型 dev build
  webpackConfig:chameleon内置工程化配置
  */
  debugger;
  return { type, media, webpackConfig };
});
```

第四步：

执行相关的运行命令之后，比如 `cml web dev`
打开`chrome://inspect`

进入调试终端即可
