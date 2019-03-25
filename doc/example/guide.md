# cml指南(Guide)

`cml` 作为真正让一套代码运行多端的框架，提供标准的MVVM模式，统一开发各类终端。

同时，拥有各端独立的 `运行时框架(runtime)`、`数据管理(store)`、`组件库(ui)`、`接口(api)`。

此外，`cml`在跨端`能力加强`、`能力统一`、`表现一致`等方面做了许多工作，包括不限于以下内容：

<table>
  <tr>
    <th>节点</th>
    <th>项目工程</th>
    <th>项目结构</th>
    <th>路由</th>
    <th>组件</th>
    <th>布局和外观</th>
    <th>数据视图驱动</th>
    <th>生命周期</th>
    <th>交互事件</th>
    <th>数据管理</th>
    <th>本地接口</th>
    <th>尺寸单位</th>
  </tr>
  <tr>
    <td>关键词</td>
    <td>chameleon.config.js</td>
    <td>app、 components、pages、store</td>
    <td>Chameleon URL</td>
    <td>CML单文件</td>
    <td>CMSS</td>
    <td>CML语法、类VUE</td>
    <td>beforeCreate-created-beforeMount-mounted-beforeDestroy-destroyed</td>
    <td>c-bindevent</td>
    <td>类vuex</td>
    <td>chameleon-api</td>
    <td>cpx</td>
  </tr>
  <tr>
    <td>统一性</td>
    <td>针对工程化可以自由定制某端差异化</td>
    <td>统一结构</td>
    <td>自适应打开不同环境同一页面</td>
    <td>CML、CMSS、逻辑JS、JSON</td>
    <td>UI的布局、元素尺寸、文本颜色等</td>
    <td>定义CML，类vue语法</td>
    <td>提供6个基础生命周期</td>
    <td>统一绑定方式</td>
    <td>vuex易用性强</td>
    <td>vuex易用性强</td>
    <td>提供虚拟单位cpx</td>
  </tr>
  <tr>
    <td>差异性</td>
    <td>各类都可以配置</td>
    <td></td>
    <td>H5配置可差异化</td>
    <td colspan="8">多态协议</td>
  </tr>
</table>


- `各端独立`意味着：易扩展。
- `MVVM协议`意味着：标准统一。

那么，开发者可以依据`MVVM协议`自由[扩展新端](https://cmljs.org/doc/extend/extend.html)。

今天，为了让大家的项目优雅升级，快速接入，

下面介绍`各端(vue、weex、小程序)迁移cml指南` 以及 `cml 导出组件到各端指南`，方便使用和扩展。

- [如何迁移一个Vue项目到chameleon](./web_to_chameleon.html)
- [如何迁移一个Weex项目到chameleon](./weex_to_chameleon.html)
- [如何迁移一个微信小程序到chameleon](https://cmljs.org/doc/example/wx_to_chameleon.html)
- [普通项目使用chameleon跨端dialog组件](https://cmljs.org/doc/example/webpack_output.html)


其实，迁移到 `cml`，抽象成以下方面：

## 目录结构
和微信小程序一样，`cml` 包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。

在小程序项目里面：

```javascript
.
├── components // 包含各个组件
├── pages // 包含各个页面
├── app.js // 包含各个组件
├── app.js  // 应用启动入口
├── app.json // 全局配置
├── app.wxss // 全局样式
└── project.config.json // 项目配置文件

```

在 `cml`项目里面：
```javascript
.
├── dist // 各个端构建结果
│   ├── alipay 
│   ├── baidu 
│   ├── wx 
│   ├── web  
│   ├── weex 
│   └── config.json // 跨端配置map映射表
├── node_modules // 第三方库
├── mock // 模拟 接口数据 和 模板数据
├── src  // 源代码开发目录
│   ├── app // 应用启动入口
│   ├── assets // 静态资源
│   ├── components // 包含组件
│   ├── pages  // 包含页面
│   ├── store //数据管理
│   └── router.config.json // 路由配置文件
├── chameleon.config.js // 项目配置文件
└── package.json // npm包配置文件

```

## 如何修改配置
在小程序项目里面，分为：

#### [小程序——项目配置](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)

可以在项目根目录使用 `project.config.json` 文件对项目进行配置。

**配置示例：**

```json
{
  "miniprogramRoot": "./src",
  "qcloudRoot": "./svr",
  "setting": {
    "postcss": true,
    "es6": true,
    "minified": true,
    "urlCheck": false
  },
  "packOptions": {
    "ignore": []
  },
  "debugOptions": {}
}
```

#### [小程序——全局配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等

**配置示例：**

```json
{
  "pages": ["pages/index/index", "pages/logs/index"],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  }
}
```

#### [小程序——页面配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE)

每一个小程序页面也可以使用 `.json` 文件来对本页面的窗口表现进行配置。

页面的配置只能设置 `app.json` 中部分 `window` 配置项的内容，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

**配置示例：**

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

同样，在 `cml`项目里面，分为：

#### [cml——项目配置](https://cmljs.org/doc/framework/config.html)

`chameleon.config.js` 为项目的配置文件，你可以定制化构建，比如是否带hash，是否压缩等等。

**配置示例：**

```javascript
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/static';

// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

// 合并配置
cml.config.merge({
  wx: {
    build: {
      apiPrefix
    }
  },
  alipay: {
    build: {
      apiPrefix
    }
  },
  baidu: {
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      hot: true,
      console: true
    },
    build: {
      publicPath: `${publicPath}/web`,
      apiPrefix
    }
  },
  weex: {
    build: {
      publicPath: `${publicPath}/weex`,
      apiPrefix
    }
  }
})

```

#### cml——全局配置

`cml` 项目 `app` 目录下的 `app.cml` 文件的 `<script cml-type="json" />` 用来对 `cml`应用 进行全局配置，具有 跨端配置 和 差异化 的能力

**配置示例：**

```html
<script cml-type="json">
{
  "base": {
    "window": {
      "navigationBarTitleText": "各个端共同title",
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
  },
  "wx": {
    "window": {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "差异化 title",
      "navigationBarTextStyle":"black"
    }
  },
  "baidu": {
    "window": {
      "backgroundTextStyle": "light"
    }
  },
  "alipay": {
      "window": {
        "defaultTitle": "Chameleon"
      }
  }
}
</script>
```

#### [cml——页面/组件配置](https://cmljs.org/doc/framework/json.html)

通过 `usingComponents` 配置 `组件路径` 注册引用的组件。

**配置示例：**

```html
<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "navi": "/components/navi/navi",
      "c-cell": "/components/c-cell/c-cell",
      "c-list": "/components/c-list/c-list",
      "navi-npm": "cml-test-ui/navi/navi"
    }
  },
  "wx": {
  },
  "alipay": {
  },
  "baidu": {
  },
  "web": {
  },
  "weex": {
  }
}
</script>
```

### 如何使用路由能力
在小程序项目里面，[app.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html) 配置项列表的 `pages` 字段用于指定小程序由哪些页面组成，每一项都对应一个页面的 `路径+文件名` 信息。

**数组的第一项代表小程序的初始页面（首页）。新增/减少页面，需要对 `pages` 数组进行修改。**

如果项目有 `pages/index/index.wxml`、`pages/logs/logs.wxml` 两个页面，则需要在 `app.json` 中写

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"]
}
```

在 `cml` 项目里，[src/router.config.json](https://cmljs.org/doc/framework/router.html) 是路由的配置文件，`cml` 内置了一套各端统一的路由管理方式。相应有 `cml` 路由配置映射如下：

```javascript
{
  "mode": "history",
  "domain": "https://www.chameleon.com",
  "routes":[
    {
      "url": "/cml/h5/index",
      "path": "/pages/index/index",
      "mock": "index.php"
    },
    {
      "url": "/cml/h5/logs",
      "path": "pages/logs/logs",
      "mock": "logs.php"
    }
  ]
}
```

文件名不需要写文件后缀，`cml`框架会自动去寻找对于位置的 `.cml` 文件进行处理。

在小程序项目里面，
- 打开新页面：调用 API [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateTo.html)
- 页面重定向：调用 API [wx.redirectTo](https://developers.weixin.qq.com/miniprogram/dev/api/wx.redirectTo.html)
- 页面返回：调用 API [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html)
- 打开另一个小程序：调用 API [wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html)
- 返回到上一个小程序：调用 API [wx.navigateBackMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBackMiniProgram.html)

在 `cml` 项目里，依据统一资源索引URI，自适应打开不同环境同一路由PATH：
- 打开新页面：调用 chameleon-api [cml.navigateTo](https://cmljs.org/doc/api/navigate.html)
- 页面重定向：调用 chameleon-api [cml.redirectTo](https://cmljs.org/doc/api/navigate.html#redirectto)
- 页面返回：调用 chameleon-api [cml.navigateBack](https://cmljs.org/doc/api/navigate.html#navigateback)
- 打开另一个跨端应用：调用 chameleon-api [cml.open](https://cmljs.org/doc/api/open.html)
- 返回到上一个跨端应用：调用 chameleon-api [cml.close](https://cmljs.org/doc/api/open.html#close)


## 如何注册程序
### 小程序注册程序
在小程序项目里面，`App()` 函数用来注册一个小程序。接受一个 `Object` 参数，其指定小程序的生命周期回调等。

**示例代码**

```javascript
App({
  onLaunch(options) {
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```

### cml注册程序

**示例代码**

```html
<script>
import store from '../store/index.js'
import routerConfig from '../router.config.json';

class App {
  data = {
    store,
    routerConfig
  }
  created(res) {
  }
}

export default new App();
</script>
```

细心的你会发现，

小程序中`app.json  app.js  app.wxss`和 `src/app.cml`的对应关系如下

| 小程序 app.js | cml项目 src/app.cml                 |
| ------------- | ----------------------------------- |
| app.js        | `<script></script>`                 |
| app.wxss      | `<style></style>`                   |
| app.json      | `<script cml-type="json"></script>` |

## 如何注册页面
### 小程序注册页面
在小程序项目里面，`Page(Object)` 函数用来注册一个页面。接受一个 `Object` 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。

**示例代码：**
```javascript
// index.js
Page({
  data: {
    text: 'This is page data.'
  },
  onLoad(options) {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```

### cml注册页面
**示例代码**

```html
<script>
class Index {
  data = {
    text: 'Chameleon'
  }
  methods = {
    changeText: function(e) {
      // sent data change to view
      this.text = 'CML';
    }
  }
  computed = {}
  watch = {}
  beforeCreate(query) {
    // data数据挂载到this根节点上之前，以及methods所有方法挂载到实例根节点之前
    // 注意：只用页面的 beforeCreate钩子 会返回页面query
    console.log('App beforeCreate: 打开当前页面路径中的参数是 ', query)
  }
  created() {
    // data,methods里面的这些events挂载完成
    console.log('App created')
  }
  beforeMount() {
    // 开始挂载已经编译完成的cml到对应的节点时
    console.log('App beforeMount')
  }
  mounted() {
    // cml模板编译完成,且渲染到dom中完成,在整个生命周期中只执行一次
    console.log('App mounted')
  }
  beforeDestroy() {
    // 实例销毁前
    console.log('App beforeDestroy')
  }
  destroyed() {
    // 实例销毁后
    console.log('App destroyed')
  }
};
export default new Index();
</script>
```

## 如何注册组件
### 小程序注册组件
在小程序项目里面，
`Component(Object)` 构造器可用于定义组件，调用 `Component` 构造器时可以指定组件的属性、数据、方法等。

**示例代码**

```javascript
Component({
  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填）
      value: '' // 属性初始值（可选）
    },
    myProperty2: String // 简化的定义方式
  },
  data: {
    text: ''
  }, // 私有数据，可用于模板渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() { }, 
  ready() { },
  methods: {
    onMyButtonTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
        text: 'wx'
      })
    }
  }
})
```

### cml注册组件

**示例代码**

```html
<script>
class MyComponent {
  props = {
    myProperty: { // 属性名
      type: String, // 类型（必填）
      default: '' // 属性初始值（可选）
    },
    myProperty2: String // 简化的定义方式
  }
  data =  {
    text: ''
  } // 私有数据，可用于模板渲染

  beforeMount() {}
  mounted() {}
  methods = {
    onMyButtonTap() {
      this.text = 'cml'
    }
  }
  computed = {}
  watch = {}
};
export default new MyComponent();
</script>
```

## 如何声明生命周期
统一各端应用生命周期的定义，是跨端框架的重要组成，也是迁移的必经之路。

每个 `cml` 实例(`App`、`Page`、`Component`)在被创建时都要经过一系列的初始化过程 ———— 

例如，需要设置数据监听、编译模板、将实例挂载到 `CML节点` 并在数据变化时更新 `CML节点` 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给开发者在不同阶段添加自己的代码的机会。

`cml` 为`App`、`页面Page`、`组件Component` 提供了一系列生命周期事件，保障应用有序执行。 

另外，如果你想使用某个端特定的生命周期，你可以从业务出发使用 [生命周期多态](https://cmljs.org/doc/logic/lifecycle.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%A4%9A%E6%80%81)。

在小程序项目里面，可以在 `App(Object)`、`Page(Object)`、`Component(Object)` 传入`Object`参数，其指定小程序的生命周期回调等

**[代码示例](#小程序注册页面)**

在cml项目里，`.cml` 文件 `<script />` 代码块返回的对象实例，其指定生命周期回调

**[代码示例](#cml注册页面)**


### 小程序声明周期
### App 生命周期 映射
小程序 `app.js`中的生命周期 -> cml `src/app/app.cml`

| 小程序      | chameleon    |
| ----------- | ------------ |
| onLaunch    | beforeCreate |
| onShow      | mounted      |
| onHide      | destroyed    |

### Page 生命周期 映射
小程序 `Page()`中的生命周期 -> cml `src/pages/mypage/mypage.cml`

| 小程序      | chameleon    |
| ----------- | ------------ |
| onLoad      | beforeCreate |
| onShow      | mounted      |
| onUnload    | destroyed    |
| onReady     |  <a href="https://cmljs.org/doc/logic/lifecycle.html#生命周期多态">生命周期多态</a>  |
| onHide     |  <a href="https://cmljs.org/doc/logic/lifecycle.html#生命周期多态">生命周期多态</a>  |
| onShareAppMessage     |  <a href="https://cmljs.org/doc/logic/lifecycle.html#生命周期多态">生命周期多态</a>  |

### Component 生命周期 映射
小程序 `Component()`中的生命周期 -> cml `src/components/mycomponent/mycomponent.cml`

| 小程序 | chameleon |
| ------ | --------- |
| created       |  created        |
| attached      |  beforeMount    |
| ready         |  mounted        |
| detached      |  destroyed      |

## 数据如何响应到视图
如今，双向数据绑定&单向数据流 已深入开发者日常，MVMM开发模式算是框架标配。

`cml`运行时框架 提供了跨端响应式数据绑定系统(Data binding)，当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。

只需要将 `view<-->model` 交互部分逻辑，作简单迁移，便可使它成为跨多端的数据响应系统。

[数据绑定](https://cmljs.org/doc/view/databind.html)、[条件渲染](https://cmljs.org/doc/view/condition.html)、[列表渲染](https://cmljs.org/doc/view/iterator.html) 是如何书写的呢？

**示例代码**

在小程序项目里面，

```html
<!--wxml-->
<view class="scroller-wrap">
    <!--数据绑定-->
  <view>{{message}}</view>
  <!--条件渲染-->
  <view wx:if="{{view == 'WEBVIEW'}}">WEBVIEW</view>
  <view wx:elif="{{view == 'APP'}}">APP</view>
  <view wx:else="{{view == 'MINA'}}">MINA</view>
    <!--列表渲染-->
  <view wx:for="{{array}}" wx:for-index="index" wx:for-item="item">{{item}}</view>
</view>
```

```javascript
// page.js
Page({
  data: {
    message: 'Hello MINA!',
    view: 'MINA',
    array: [1, 2, 3, 4, 5]
  },
  onLoad() {
    this.setData({
      message: 'wx'
    })
  }
})
```

在cml项目里，

```html
<template>
<!--index.cml-->
<view class="scroller-wrap">
    <!--数据绑定-->
  <view>{{message}}</view>
  <!--条件渲染-->
  <view c-if="{{view == 'WEBVIEW'}}">WEBVIEW</view>
  <view c-else-if="{{view == 'APP'}}">APP</view>
  <view c-else="{{view == 'MINA'}}">MINA</view>
    <!--列表渲染-->
  <view c-for="{{array}}" c-for-index="index" c-for-item="item">{{item}}</view>
</view>
</template>
<script>
class Index {
  data =  {
    message: 'Hello MINA!',
    view: 'MINA',
    array: [1, 2, 3, 4, 5]
  }

  beforeCreate () {
    this.message = 'cml'
  }
};
export default new Index();
</script>
```

## 事件交互
`cml` 支持一些基础的事件[https://cmljs.org/doc/view/event.html]，保障各端效果(`类型`、`绑定`、`事件对象`)一致运行。

同时，还支持自定义事件，用于父子组件之间的通信。

另外，如果你想要使用某个端特定的事件，`cml` 并不会限制你的自由发挥，你可以从业务出发使用 [组件多态](https://cmljs.org/doc/framework/polymorphism/component.html) 或者 [接口多态](https://cmljs.org/doc/framework/polymorphism/api.html) 差异化实现功能。

**示例代码**

在小程序项目里面，

```html
<!--wxml-->
<view id="tapTest" data-hi="WeChat" bindtap="tapName">Click me!</view>
```

```javascript
// page.js
Page({
  tapName(event) {
    console.log(event)
  }
})
```

在cml项目里，

```html
<template>
  <view id="tapTest" data-hi="WeChat" c-bind:tap="tapName">
    <text>Click me!</text>
  </view>
</template>
<script>
class Index {
  methods = {
    tapName(e) {
      // 打印事件对象
      console.log('事件对象:', e);
    }
  }
}
export default new Index();
</script>
```

## 布局和外观
各端描述 `布局和外观` 的[层叠样式表(CSS)](https://www.w3.org/Style/CSS/)实现存在差异，包括不限于 `布局`、`盒模型`、`定位`、`文本`。

所以， `cml` 框架内置[跨端一致性基础样式]（https://cmljs.org/doc/view/cmss/base_style.html）能力。

并且，定义了用于描述页面的样式规范[CMSS(Chameleon Style Sheet)](https://cmljs.org/doc/view/cmss.html)。

同时，为了统一多端尺寸单位，呈现效果一致，同时页面响应式布局，`cml` 项目统一采用[cpx](https://cmljs.org/doc/view/cmss/unit.html)作为尺寸单位，规定以屏幕750px（占满屏幕）视觉稿作为标准。

而且，各端样式表拥有的能力[不尽相同](https://cmljs.org/doc/example/web_wx.html)，是项目迁移的主要阵地之一。

另外，如果你想要使用某个端特定的样式能力，`cml` 并不会限制你的自由发挥，你可以从业务出发使用 [样式多态](https://cmljs.org/doc/view/cmss/css_diff.html)

### 如何导入外部样式

### 如何导入外部样式

## 如何管理应用状态
构建一个中大型单页应用，在组件外部集中管理状态的数据管理模式是不可或缺的。

`chameleon-store` 提供了集中管理数据的能力。类似 `Vuex` 数据理念和语法规范，大大减低开发者的迁移成本。

## 组件
组件(Component)是视图的基本组成单元。
cml里面应该一切皆组件。
#### 组件化方案
#### 内置
#### 多态扩展原生
## api






