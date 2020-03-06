# 扩展新端开发指南

## 开发示例体验

扩展新端 demo 示例仓库: https://github.com/chameleon-team/cml-extplatform-demo。 实现了微信端的基本扩展。

##### 运行项目

- 首先全局安装支持扩展新端的脚手架`npm i chameleon-tool@1.0.3 -g`。
- 全局安装`lerna` 对本项目进行管理 `npm i lerna -g`。
- 在本仓库根目录执行`lerna bootstrap`，这一步是安装外部依赖与建立本仓库 npm 包之间的依赖。
- 在`cml-demo-project`目录执行`cml demo dev`, 用微信开发者工具打开`cml-demo-project/dist/demo`目录。

## 开发流程

采用 lerna 对开发的 npm 包进行管理，解决本地开发时多个 npm 包之间相互依赖的问题。lerna init 即可创建一个 lerna 项目，建议直接用<a href="https://github.com/chameleon-team/cml-extplatform-demo">示例仓库</a>进行修改。

### 1 确定名称 创建 npm 包

- 端标识，扩展一个新端首先要确定这个端的标识名称，例如微信小程序端为`wx`,百度小程序端为`baidu`，这个标识决定了构建命令的名称、多态协议中的 cmlType, 配置对象中的 cmlType 等。 示例中确定为`demo`。

- 运行时 npm 包名称， 建议以`cml-${端标识名称}-runtime`格式命名，示例中为`cml-demo-runtime`。

- api 库 npm 包名称， 建议以`cml-${端标识名称}-api`格式命名，示例中为`cml-demo-api`。

- 内置组件 npm 包名称， 建议以`cml-${端标识名称}-ui-builtin`格式命名，示例中为`cml-demo-ui-builtin`。

- 扩展组件 npm 包名称， 建议以`cml-${端标识名称}-ui`格式命名，示例中为`cml-demo-ui`。

- 数据管理 npm 包名称， 建议以`cml-${端标识名称}-store`格式命名，示例中为`cml-demo-store`。

- 编译插件 npm 包名称， 建议以`cml-${端标识名称}-plugin`格式命名，示例中为`cml-demo-plugin`。

在`packages`目录创建上述的 6 个 npm 包。

### 2 创建开发 cml 项目

在`packages`目录创建一个 cml 的项目作为测试项目，开发过程中可以进行调试代码。示例中为`cml-demo-project`。

1 `cml-demo-project`的`chameleon.config.js`需要 添加 extPlatform，babelPath，builtinNpmName 字段的配置，配置如下：

```

cml.config.merge({
  builtinNpmName: 'cml-demo-ui-builtin',
  extPlatform: {
    demo: 'cml-demo-plugin',
  },
  babelPath: [
    path.join(__dirname,'node_modules/cml-demo-ui-builtin'),
    path.join(__dirname,'node_modules/cml-demo-runtime'),
    path.join(__dirname,'node_modules/cml-demo-api'),
  ]
})

```

<b>你的项目中注意把示例 npm 包名称改成你命名的 npm 包名称</b>。

- builtinNpmName 字段是你定义的内置 npm 包名称
- extPlatform 是配置扩展新端的编译插件，key 值为端标识，value 为编译插件 npm 包名称。
- babelPath 配置运行时相关的三个 npm 包需要过 babel

2 `cml-demo-project`的`package.json`的`dependencies`中添加这几个开发 npm 包。

```
"cml-demo-api": "1.0.0",
"cml-demo-plugin": "1.0.0",
"cml-demo-runtime": "1.0.0",
"cml-demo-ui-builtin": "1.0.0"
```

3 在仓库的根目录执行`lerna bootstrap`安装依赖，建立关联，这样`cml-demo-project`的`node_modules`下的这几个 npm 包会符号链接到`packages`下的同名 npm 包。

## 如何进行开发分工

- api 的工作是独立的 不依赖其他 npm 包的开发
- runtime 运行时的工作也是独立的 不依赖其他 npm 包
- plugin 中的模板编译 在事件绑定的代理函数中依赖 runtime 其他的工作不依赖
- ui-builtin 和 ui 依赖 runtime 和 plugin 的完成 才能正确执行。
  cml-tt-store 的工作也是独立的，基本上小程序端实现是相同的。

## [开发编译插件](./mvvm-plugin.md)

## [开发 api 库](./api.md)

## [开发运行时](./runtime.md)

## [开发组件库](./ui-builtin.md)

## 开发数据管理
