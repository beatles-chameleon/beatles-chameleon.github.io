# 路由管理

chameleon 项目内置了一套各端统一的路由管理方式。

## 路由配置文件

`src/router.config.json`是路由的配置文件,内容如下：

```javascript
{
  "mode": "history",
  "domain": "https://www.chameleon.com",
  "routes":[
    {
      "url": "/cml/h5/index",
      "path": "/pages/index/index",
      "mock": "index.php"
    }
  ]
}
```

- mode 为 web 端路由模式，分为`hash`或`history`。
- domain，当 mode 为 hash 时 domain 为 web 端页面的最终访问地址，当 mode 为 history 时，domain 为 web 端页面的域名。
- routes 为路由配置
  - path 为路由对应的 cml 文件的路径,以 src 目录下开始的绝对路径，以/开头。
  - url,当 mode 为 hash 时 url 为 web 端页面地址对应的 hash，当 mode 为 history 时，url 为 web 端页面的路径。
  - mock 为该路由对应的[mock 文件](../framework/mock.html)(仅模拟模板下发需要)
- 小程序端，构建时会将`router.config.json`的内容，插入到 app.json 的 pages 字段，实现小程序端的路由。

- <b>注: `router.config.json`中的 domain 指定页面最终线上地址，只是用于 config.json 的生成,真正决定 web 页面访问地址的还是取决于 web 服务器的配置。</b>

注：<a href="./deploy.html#apiPrefix、publicPath、router.config.json、chameleonUrl的关系">apiPrefix、publicPath、router.config.json、chameleonUrl 的关系</a>

## 使用路由场景

- [应用内路由](../api/navigate.html)
- [跨应用路由](../api/open.html)
