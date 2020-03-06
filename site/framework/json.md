# 组件配置

组件的配置以 json 对象的格式配置在.cml 文件中，结构如下：

```html
<script cml-type="json">
  {
    "base":{
      "usingComponents": {
        "navi": "/components/navi/navi",
        "c-cell": "/components/c-cell/c-cell",
        "c-list": "/components/c-list/c-list",
        "navi-npm": "cml-test-ui/navi/navi"
      }
    },
    "wx": {
    },
    "alipay": {
    },
    "baidu": {
    },
    "web": {
    },
    "weex": {
    }
  }
</script>
```

- base 对象为各端共用的配置对象。
- wx、web、weex 分别对应三端特有的配置对象，base 的配置会应用到每一端的配置，内部做的 merge。
- `usingComponents`字段是目前最重要的配置，各端都会使用，小程序规定页面的 json 文件中配置使用到的组件。web 和 weex 端的构建时也是根据该字段去找到相应的组件进行自动化的注册。所以用到组件必须进行配置
- `usingComponents`中组件的引用地址。
  - 支持引用 src 和 node_modules 下的组件，地址**禁止包含后缀扩展名**：
    - src 下可以写相对路径，也可以写相对于 src 的绝对路径，例如`/components/**`,
    - node_modules 下的组件，不需要写 node_modules，直接从 npm 的包名称开始写例如`cml-test-ui/navi/navi`。
  - 引用的组件类型支持：
    - .cml 扩展名跨端组件
    - .vue 扩展名的 vue、weex 组件，[仅在多态组件可用](../framework/polymorphism/component.html)
    - 小程序组件文件夹路径，[仅在多态组件可用](../framework/polymorphism/component.html)
    - .js 扩展名的 react 组件，[仅在多态组件可用](../framework/polymorphism/component.html)
-  小程序端所需要的一些配置，写在各自的特有配置对象中
