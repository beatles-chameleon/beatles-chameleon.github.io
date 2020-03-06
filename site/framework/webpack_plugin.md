### webpack 集成

<b>注：内部 webpack 插件版本基于 webpack@3.12.0 开发选择，暂不兼容 webpack4。</b>

通过以下步骤，可以让 webpack 项目中使用 chameleon 的任意组件。

- 1 安装 npm 包 `npm i easy-chameleon chameleon-ui-builtin`

- 2 执行脚本 `node node_modules/\easy-chameleon/bin/index.js`，该脚本会执行检测，安装未安装的第三方 npm 包

- 3 .babelrc 的 preset 添加 flow, chameleon 中用了 flow 语法，如果需要用到`chameleon-api`，建议配置`babel-plugin-chameleon-import`插件实现按需加载。例如：

```
{
  "presets": [
    "flow",
    ["env", {
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-0"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "babel-plugin-chameleon-import", {
      "libraryName": "chameleon-api",
      "libraryDirectory": "src/interfaces",
      "libraryFileName": "index.js",
      "defaulLibraryDirectory": "",
      "defaulLibraryFileName": "index.js",
      }
    ]
  ]
}

```

- 4 入口代码中，引入代码 `import 'easy-chameleon/entry/web_global.js';`

- 5 修改 webpack 配置文件,`easy-chameleon`提供了`getConfig`方法获取 webpack 配置 ，利用`webpack-merge`将项目原有 webpack 配置与`getConfig`方法获取的配置进行合并，例如：

  ```
  const merge = require('webpack-merge')

  const {getConfig} = require('easy-chameleon');

  devWebpackConfig = merge(devWebpackConfig, getConfig({
    cmlType: 'web',
    media: 'dev',
    hot: true,
    disableExtract: false,
    context: path.join(__dirname,'../'),
    cmss: {
      rem: false,
      scale: 0.5
    }
  }))
  ```

  `getConfig方法参数` getConfig(Object object)

  <table>
  <tr><th>参数</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr>
  <tr><td>cmlType</td><td>String</td><td></td><td>是</td><td>端类型，可选值为web|wx|weex</td></tr>
  <tr><td>media</td><td>String</td><td></td><td>是</td><td>构建模式，可选值为dev|build</td></tr>
  <tr><td>hot</td><td>Boolean</td><td>false</td><td>否</td><td>是否开启热更新，只在web端生效</td></tr>
  <tr><td>disableExtract</td><td>Boolean</td><td>false</td><td>否</td><td>不提取css文件</td></tr>
  <tr><td>cmss</td><td>Object</td><td></td><td>否</td><td>cmss处理的配置，参见下方cmss对象属性列表</td></tr>
  <tr><td>wxConfig</td><td>Object</td><td></td><td>否</td><td>微信端构建配置，参见下方wxConfig对象属性列表</td></tr>
  </table>

cmss 对象属性列表

<table>
<tr><th>参数</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr>
<tr><td>rem</td><td>Boolean</td><td>true</td><td>否</td><td>将cpx以75cpx=1rem为标准转换成rem</td></tr>
<tr><td>scale</td><td>Number</td><td>0.5</td><td>否</td><td>当rem为false时，scale将生效，将cpx乘以scale为px</td></tr>
</table>

wxConfig 对象属性列表

<table>
<tr><th>参数</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr>
<tr><td>entry</td><td>Array[String]</td><td></td><td>是</td><td>指定输出的组件入口，以项目根目录下的相对路径,会寻找指定路径下的cml文件进行编译</td></tr>
<tr><td>outputPath</td><td>String</td><td></td><td>否</td><td>输出路径</td></tr>
</table>

## 示例

详细示例戳这里[webpack 集成 chameleon](/example/webpack_plugin.html)
