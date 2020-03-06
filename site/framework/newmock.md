# api 多域名 mock

在<a href="./mock.html">数据 mock</a>一节讲述了如何进行 api 数据的 mock，但是只局限于所有 api 请求都是相同域名的情况，工作中可能出现一个项目请求多个域名的 api 接口，本节将讲解如和进行多域名的 mock。

### 1 版本要求

- `chameleon-tool >= 0.2.1`
- `chameleon-api >= 0.3.1`

### 2 chameleon.config.js 中配置多域名信息

domain 对象配置多域名的信息。
`domain`, Object 类型。
配置在 base 对象中，可以作为所有平台的公共配置，dev 模式中配置的`localhost`会替换成当前 dev 模式启动的 web 服务 ip+端口。

例如：

```
cml.config.merge({
  base: {
    dev: {
      domain: {
        domain1: "localhost",
        domain2: "localhost"
      },
    },
    build: {
      domain: {
        domain1: "http://api.cml.com",
        domain2: "http://api2.cml.com"
      },
    }
  },
})
```

### 3 使用 chameleon-api 发网络请求

`chameleon-api`的网络请求`get、post、request`方法中添加 domain 参数。
`chameleon.config.js`中添加的`domain`对象配置，在项目中可以通过`process.env.domain`变量访问。

例如：

```javascript
import cml from 'chameleon-api';
cml
  .get({
    domain: process.env.domain.domain1,
    url: '/api/getMessage',
  })
  .then(
    (res) => {
      cml.showToast({
        message: JSON.stringify(res),
        duration: 2000,
      });
    },
    (err) => {
      cml.showToast({
        message: JSON.stringify(err),
        duration: 2000,
      });
    },
  );
```

### 4 配置 mock 数据

前两步操作实现了网络请求 dev 模式请求本地，build 模式请求线上，这一步就讲解如何 mock 本地多域名的请求数据。

在`/mock/api/`文件夹下创建 mock 数据的 js 文件。文件内容格式如下：

```javascript
module.exports = [
  {
    domainKey: 'domain1',
    request: [
      {
        method: ['get', 'post'],
        path: '/api/getMessage',
        controller: function(req, res, next) {
          res.json({
            total: 0,
            message: [
              {
                name: 'Hello chameleon! domain1',
              },
            ],
          });
        },
      },
    ],
  },
  {
    domainKey: 'domain2',
    request: [
      {
        method: ['get', 'post'],
        path: '/api/getMessage',
        controller: function(req, res, next) {
          res.json({
            total: 0,
            message: [
              {
                name: 'domain2!',
              },
            ],
          });
        },
      },
    ],
  },
];
```

- domainKey 指定 mock 的域名，对应 chameleon.config.js 中 domain 对象的 key 值。
- method 指定请求方法，默认值['get','post']
- path 指定请求的路径
- controller 是 express 的中间件形式，在中间件中可以做任何操作最后调用 res 的方法返回结果。

注：<a href="./deploy.html#apiPrefix、publicPath、router.config.json、chameleonUrl的关系">apiPrefix、publicPath、router.config.json、chameleonUrl 的关系</a>
