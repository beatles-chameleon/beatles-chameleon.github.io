# 数据 mock

## 如何 mock api 请求

> 如果需要 mock 多个域名的 api 请参见<a href="./newmock.html">api 多域名 mock</a>。

1、 使用[内置网络请求](../api/request.html)接口发起网络请求。例如：

```javascript
import cml from 'chameleon-api';
cml
  .get({
    url: '/api/getdriver',
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

调用方法的参数 url 中只需要写 api 的路径。那么本地 dev 开发模式如何 mock 这个 api 请求以及 build 线上模式如何请求线上地址，就需要在配置文件中配置 apiPrefix。

2、 [配置 apiPrefix](./config.html#api请求前缀) dev 开发模式和 build 模式配置的 apiPrefix 会拼接到网络请求的 url 前，dev 模式不配置时，默认为当前启动 web 服务的 ip+端口。上面的例子中如果本地 ip 为 198.168.1.1 启动端口为 8000。dev 模式发起的网络请求为`198.168.1.1:8000/api/getdriver`, build 模式发起的网络请求为`http://api.chameleon.com/api/getdriver`。

```javascript
// 设置api请求前缀
const apiPrefix = 'http://api.chameleon.com';
cml.config.merge({
  wx: {
    dev: {},
    build: {
      apiPrefix,
    },
  },
});
```

3、 配置本地 mock 数据

前两步操作实现了网络请求 dev 模式请求本地，build 模式请求线上，这一步就讲解如何 mock 本地请求数据。

在`/mock/api/`文件夹下创建 mock 数据的 js 文件。文件内容格式如下：

```javascript
module.exports = [
  {
    method: 'get',
    path: '/api/getdriver',
    controller: function(req, res, next) {
      console.log('/api/driver/getList');
      res.json({
        total: 100,
        driverList: [],
      });
    },
  },
];
```

- method 指定请求方法，默认值['get','post']
- path 指定请求的路径
- controller 是 express 的中间件形式，在中间件中可以做任何操作最后调用 res 的方法返回结果。

启动 dev 模式后，通过 ip+端口+path 即可访问配置的 api 请求。结合上面讲到的网络请求方法，即可实现本地的 api 数据 mock。

<b>【扩展】如何在本地 dev 模式请求线上数据？</b>

可以在 mock 文件的 controller 中请求对应的线上数据，例如可以使用<a href="https://github.com/request/request">request 模块</a>实现请求。

注：<a href="./deploy.html#apiPrefix、publicPath、router.config.json、chameleonUrl的关系">apiPrefix、publicPath、router.config.json、chameleonUrl 的关系</a>

## 如何 mock php 模板下发数据

`/mock/template/`文件夹下存放的 php 文件是下发的模板数据，php 文件内将下发的数据赋值给\$chameleon 对象，例如：

```php
<?php
  $chameleon = array(
    "errno" => 0,
    "errmsg" => "",
    "pageData" => array(
      "pageInfo" => array(
        "title" => "chameleon",
        "content" => "chameleon跨端"
      )
    )
  );
?>
```

在模板中通过变量`pageData,errno,errmsg`接收。

```javascript
<script>
  var pageData = {json_encode($pageData)}
  var errno = {json_encode($errno)}
  var errmsg = {json_encode($errmsg)}
</script>
```

同时还模拟了与模板下发的 pageData 相同的 ajax 请求，只需在当前访问页面的 url 上添加 puredata=1 参数。

```javascript
{
  errno: 0,
  errmsg: '',
  pageData: {
    pageInfo: {
      title: 'chameleon',
      content: 'chameleon跨端'
    }
  }
}
```
