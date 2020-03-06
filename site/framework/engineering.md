# 工程化(Engineering)

工程化是使用软件工程的技术和方法对项目的开发、上线和维护进行管理。chameleon 的工程化包含如下几个大方面：

- 1 模块化，项目中的文件统一以模块化的方式引入，包括.css,.js 以及定义的 interface 文件，这样做有如下好处避免变量污染与命名冲突，提高代码的复用率，提高代码的可维护性。
- 2 组件化，chameleon 定义了.cml 文件，以组件为单位，将一个组件需要的视图、逻辑、样式、配置采用单文件的形式进行开发，提高了代码的可读性。
- 3 本地开发解决方案，chameleon 提供了大量的工程化方法，解决本地开发时的各种痛点，包括
  - 提供 dev 服务，mock 数据等能力，达到不依赖后端实现开发的前后端分离。
  - 提供  热更新，自动刷新，调试窗口，线上资源代理等能力，提高本地开发时的效率。
- 4 线上部署解决方案，chameleon 的构建是完全配置化的，内置线上线下两种构建模式，线上工程化相关功能包括
  - 线上静态资源的路径指定
  -  基于文件内容的文件指纹
  - 减少文件体积的代码压缩
- 5 渐进式使用，chameleon 提供了两种渐进式使用的方式，一种是将 chameleon 的组件导出成各端的原生组件，第二种方式是引用插件在 webpack 项目中使用 chameleon 组件与接口。

#### 相关链接

- [数据 mock](/framework/mock.html)
- [资源定位](/framework/source_location.html)
- [文件指纹](/framework/config.html#文件指纹)
- [代码压缩](/framework/config.html#代码压缩)
- [热更新与自动刷新](/framework/config.html#热更新与自动刷新)
- [代理调试](/framework/devproxy.html)
- [Chameleon URL](/framework/chameleon_url.html)
- [规范与校验](/framework/polymorphism/standards.html)
