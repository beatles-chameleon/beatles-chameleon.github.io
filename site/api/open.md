# 打开新的应用页面

打开新的应用页面

## open

### 参数

|      参数名       |  类型  | 必填 | 默认值 |                                说明                                |
| :---------------: | :----: | :--: | :----: | :----------------------------------------------------------------: |
|        url        | String |  是  |   无   | <a href="../framework/chameleon_url.html">chameleon 地址</a>带参数 |
| commonPatchParams | Object |  否  |   无   |  额外传入的需要同时添加到各个端的参数 ，可用于业务代码自定义添加   |
|   extraOptions    | Object |  否  |   无   |  额外传入的配置，closeCurrent: true 会关闭当前页面后再打开新页面   |

### 返回值

无

### 举例

```javascript
cml.open(
  'https://url?cml_addr=xxx29134e8fa.js&weixin_appid=123456&baidu_appid=123456&alipay_appid=123456&path=page/a/b/c&envVersion=release',
  {
    wd: 'chameleon',
    time: new Date(),
  },
  {
    closeCurrent: false,
  },
);
```

# 关闭当前页面

这个方法设计的初衷是关闭当前“单页面应用”。如果是你要在页面应用中返回上个页面，请使用[navigate](./navigate.html) api 来后退。
注意：在浏览器端，该功能  属于部分支持。

> 注： 在 weex 端，接入 chameleon 客户端 sdk 之后才可以使用该方法

## close

### 参数

无

### 返回值

无

### 举例

```javascript
cml.close();
```
