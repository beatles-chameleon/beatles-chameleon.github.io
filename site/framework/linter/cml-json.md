# 配置规范校验

CML 文件配置规范的校验，包括语法格式，组件的引用等。

## 说明

wx、alipay、baidu、web、weex 分别对应各端构建时所应用的配置信息，base 的配置会应用到每一端的配置，内部做的 result = merge(base,target)。

wx 字段配置的内容最终会生成到微信小程序所需要的 json 文件。

wx.component 字段,如果在微信中该 cml 文件是组件必须声明该字段。
usingComponents 字段是目前最重要的配置，三端都会使用，微信小程序规定页面的 json 文件中配置使用到的组件。web 和 weex 端的构建时也是根据该字段去找到相应的组件进行自动化的注册。所以用到组件必须进行配置
usingComponents 中组件的引用地址支持引用 src 和 node_modules 下的组件，src 下的，可以写相对路径，也可以写相对于 src 的绝对路径，例如/components/\*\*, node_modules 下的组件，不需要写 node_modules，直接从 npm 的包名称开始写例如 cml-test-ui/navi/navi。 路径写到.cml 文件所在层级，不写后缀。
例子：

````javascript
{
  "base": {
    "usingComponents": {
      "c-scroller": "chameleon-ui-builtin/components/scroller/scroller",
      "c-checkbox": "/components/c-checkbox/c-checkbox"
    }
  },
  "wx": {
    "navigationBarTitleText": "index",
    "backgroundTextStyle": "dark",
    "backgroundColor": "#E2E2E2"
  },
  "alipay": {
    "defaultTitle": "index",
    "pullRefresh": false,
    "allowsBounceVertical": "YES",
    "titleBarColor": "#ffffff"
  },
  "baidu": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "index",
    "backgroundColor": "#ffffff",
    "backgroundTextStyle": "dark",
    "enablePullDownRefresh": false,
    "onReachBottomDistance": 50
  },
}

## chameleonjson规范

包括以下三条：
1. 满足标准的json格式规范，满足JSON.parse的解析
  - 数据在名称/值对中
  - 数据由逗号分隔
  - 花括号保存对象
  - 方括号保存数组
2. chameleon json为对象，必须包括base字段，根据适配的平台可配置wx|alipay|baidu|web|weex字段，作为单一端上的特殊配置

```javascript
// 适配微信小程序和weex
{
  "base": {

  },
  "wx": {

  },
  "alipay": {

  },
  "baidu": {

  },
  "weex": {

  }
}
````

3. usingComponents 使用规范:

多端实现完全一致组件:

usingComponents 字段必须放置在 base 下，不应出现 wx|alipay|baidu|web|weex 字段中

多端实现不一致组件:

usingComponents 字段可以放置在 base 下，也可以在出现当前端对应的 wx|alipay|baidu|web|weex 字段中

注：多端实现完全一致组件 和 多端实现不一致组件 的说明可参见这
