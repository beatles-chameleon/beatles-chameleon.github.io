# CML 项目工程化配置

前端工程化是前端领域在不断发展摸索过程中，总结出的使用`软件工程`对项目的`开发`、`上线`和`维护`等阶段中进行管理的集成解决方案。

`chameleon`根据自身框架特征，设计并完成了一套具有`高度自由度`、`可定制化`的自有工程化解决方案，可在以下几个方面针对不同场景进行配置支持。

- 数据 mock
- 打包构建
- 文件指纹
- 代码压缩

## 项目初始化

按照[快速上手](/quick_start/quick_start.md)新建一个以`test_project`为名称的项目。

项目的 source 目录如下：

```bash
src
├── app
│   └── app.cml
├── assets
│   └── images
│       └── chameleon.png
├── components
│   ├── com2
│   │   └── com2.cml
│   └── demo-com
│       └── demo-com.cml
├── main.js
├── pages
│   ├── a
│   │   └── a.cml
│   └── index
│       └── index.cml
├── router.config.json
└── store
    ├── actions.js
    ├── getters.js
    ├── index.js
    ├── mutations.js
    └── state.js
```

## 数据 mock

数据 mock 是前后端分离的基本保障，在[快速上手](/quick_start/quick_start.md)中已经有了比较详细介绍，这里就不在赘述。

## 打包构建

执行如下命令

```bash
$ cml build
```

打包出来的`dist`目录结构如下

```bash
dist
├── config.json // 各端映射关系表
├── web         // web端部署包
├── weex        // weex端部署包
└── wx          // wx端部署包
```

进入`weex`包, 并查看 weex 包内容

```bash
$ tree dist/weex
dist/weex/
└── test_project_c6bdf9074a821f01e70f.js
```

`cml build`默认在打包的时候添加文件指纹，因为大多数场景下，静态资源以强缓存的方式会存放到 cdn 上，使用文件指纹可以避免代码修改后，客户端缓存导致未更新的问题。
从上边的结果上看打包出来的 weex bundle 文件名已添加上了文件指纹。

不过有些场景下希望不添加文件指纹，比如静态资源为使用协商式缓存的情况。

## 文件指纹

让我们一起把文件指纹去掉，进入刚才创建项目的根目录，找到并打开根目录下的`chameleon.config.js`，找到如下代码片段。

```javascript
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx`,
      apiPrefix
    }
  }
```

在`weex.build`下 增加`hash: false`的配置

```javascript
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx`,
      apiPrefix
    }
  }
```

再次执行

```bash
$ cml build
$ tree dist/weex/
dist/weex/
└── test_project.js
```

只需简单的配置，文件指纹即已去除！

## 代码压缩

代码压缩作为前端工程师的性能优化利器，chameleon 已默认配置了 build 的阶段的代码压缩。

当然，也有某些场景下需要构建出来的产物不进行代码压缩，比如集成测试的时候，使用压缩前的代码能够最便捷的发现问题，下面操作如何取消代码压缩。

仍旧打开根目录下的`chameleon.config.js`文件，增加`minimize: false`参数即达目的。

```javascript
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex`,
      apiPrefix,
      hash: false,
      minimize: false
    },
    custom: {
      publicPath: `${publicPath}/wx`,
      apiPrefix
    }
  }
```

再次执行

```bash
$ cml build
```

这时构建出来的代码即为压缩前代码。
