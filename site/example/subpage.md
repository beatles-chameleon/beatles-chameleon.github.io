# 使用分包

**chameleon-tool@0.3.3 以上版本支持**

## 配置方法

### 1 支持的分包目录结构如下，在`pages`文件夹下新建一个分包目录,比如下面的`subpage1 subpage2`

```

├── mock
│   ├── api
│   └── template
├── npm-shrinkwrap.json
├── package.json
└── src
    ├── app
    ├── assets
    ├── components
    ├── pages
    │   ├── index
    │   │   └── index.cml
    │   ├── subpage1
    │   │   └── page1
    │   │       └── page1.cml
    │   └── subpage2
    │       └── page2
    │           └── page2.cml
    ├── router.config.json
    └── store

```

### 2 开发者在 `src/app/app.cml`中`cml-type="json"`声明对应的小程序端分包结构

比如下面的结构将 `subpage1`进行了分包

```javascript

<script cml-type="json">
{
  "wx": {
    "window": {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle":"black"
    },
    "subPackages":[{
      "root":"pages/subpage1",
      "pages":[
        "page1/page1"
      ]
    }]
  },
  "baidu": {
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle": "black"
    },
    "subPackages":[{
      "root":"pages/subpage1",
      "pages":[
        "page1/page1"
      ]
    }]
  },
  "alipay": {
      "window": {
        "defaultTitle": "Chameleon"
      },
      "subPackages":[{
      "root":"pages/subpage1",
      "pages":[
        "page1/page1"
      ]
    }]
  }
}
</script>

```

`subPackages`支持的配置项如下

| 字段        | 类型    | 说明                           |
| ----------- | ------- | ------------------------------ |
| root        | String  | 分包根目录                     |
| name        | String  | 分包别名                       |
| pages       | Array   | 分包页面路径，相对于分包根目录 |
| independent | Boolean | 分包是否是独立分包             |

### 3 开发者在 `router.config.json`中配置对应的路径

```javascript
{
  "mode": "history",
  "domain": "https://www.chameleon.com",
  "routes":[
    {
      "url": "/cml/h5/index",
      "path": "/pages/index/index",
      "name": "首页",
      "mock": "index.php"
    },
    {
      "url": "/cml/h5/index1",
      "path": "/pages/subpage/page1/page1",
      "name": "分包1",
      "mock": "index.php"
    },
    {
      "url": "/cml/h5/index2",
      "path": "/pages/subpage2/page2/page2",
      "name": "分包2",
      "mock": "index.php"
    }
  ]
}
```

### 4 小程序分包体积优化

具体参考:[小程序主包体积优化](https://github.com/beatles-chameleon/cml-subpage)

### 5 分包预加载

开发者可以通过配置，在进入小程序某个页面时，由小程序相关框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

案例[参考](https://github.com/beatles-chameleon/cml-subpage)

```json
{
  "wx": {
    "window": {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle":"black"
    },
    "subPackages":[{
      "root":"pages/subpage",
      "pages":[
        "page1/page1"
      ]
    },
    {
      "root":"subpage2",
      "pages":[
        "page2/page2"
      ]
    }],
    "preloadRule": {
      "pages/index/index": { // 进入pages/index/index 这个页面会预加载 pages/subpage 这个分包资源
        "network": "all",
        "packages": ["pages/subpage"]
      },
      "pages/subpage/page1/page1": { //进入 /pages/subpage/page1/page1 这个页面会加载 subpage2 这个分包资源
        "network": "all",
        "packages": ["subpage2"]
      }
    }
  },
```
