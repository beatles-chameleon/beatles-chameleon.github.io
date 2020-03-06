# 路由标准

`router.config.json` 为 json 格式的文件，最外层为对象形式，必选字段`routes`为设置页面路由对象的数组，每一个页面路由对象必选字段为`path`,`path`指向页面的 cml 文件，页面必须是普通 cml 文件，页面不能是多态的，`path`的取值为相对于项目`src`下的页面绝对路径，不带`.cml`文件后缀。

```
{
  "routes":[
    {
      "path": "/pages/index/index"
    }
  ]
}
```

---
