# 扩展新端编译插件

参考`cml-demo-plugin/index.js`文件 实现编译类。对项目中的每一个文件或者部分进行编译处理。处理节点的`source`字段，编译后结果放入`output`字段。

## 1 模板编译

监听`compile-template`事件
参数列表：(currentNode，parentNodeType)

- currentNode 当前处理的节点
- parentNodeType 父节点的 nodeType，如果是 app/page/component 节点的子节点会有值，否则为 undefined

说明：
这个钩子用于处理`cml`文件的模板部分，如果模板是类 vue 语法，内部已经将其转为标准的 cml 语法，这个阶段用于对模板语法进行编译，生成目标代码。

```
compiler.hook('compile-template', function(currentNode, parentNodeType) {
    currentNode.output = templateParser(currentNode.source)
})
```

<b>`mvvm-template-parser`这个 npm 包提供了模板编译的方法。</b>
`const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');`

- cmlparse 将字符串转为 ast 语法树
- traverse 对语法树进行遍历
- types 语法树节点类型判断
- generator 语法树生成字符串

例如模板编译方法如下：

```
const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');

module.exports = function(content) {
  let ast = cmlparse(content);
  traverse(ast, {
    enter(path) {
      let node = path.node;
      if (t.isJSXElement(node)) {
        let attributes = node.openingElement.attributes;
        attributes.forEach(attr=>{
          if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-for') {
            attr.name.name = 'wx:for'
          }
          if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-if') {
            attr.name.name = 'wx:if'
          }
        })
        let tagName = node.openingElement.name.name;
        if(/^origin\-/.test(tagName)) {
          let newtagName = tagName.replace(/^origin\-/,'');
          node.openingElement.name.name = newtagName;
          node.closingElement.name.name = newtagName;
        }
      }
    }
  });
  return generator(ast).code;
}

```

上面的方法就可以将 模板

```
<view>
  <view c-for="{{array}}">
  </view>
  <view c-if="{{condition}}"> True </view>
  <origin-button></origin-button>
</view>
```

编译为

```
<view>
  <view wx:for="{{array}}">
  </view>
  <view wx:if="{{condition}}"> True </view>
  <button></button>
</view>
```

对模板 ast 的编译本质上是对目标节点的增删改，通过类型判断确定目标节点.
可以使用网站`https://astexplorer.net/` 方便我们确定节点类型。该网站是将 ast 中的节点图形化展示出来，注意选择`javascript`,`babylon7` `jsx`。

增删改的 api 参考 babel 插件编写文档`https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-replacing-a-node-with-multiple-nodes`。

我们没有直接让用户采用 babel 系列 是因为对`generator和parser`内部都有做针对 cml 的改造。

#### 原生组件的处理

chameleon 中规定，在模板中使用`origin-组件名称`作为组件名称，代表使用各端原生组件。例如

```
<template>
  <origin-button></origin-button>
</tempalte>
```

代表使用原生的`<button></button>`组件，chameleon 对于模板的标准编译没有处理`origin-组件名称`这种标签名称，原因是能够让用户根据组件的名称区别组件是否是原生组件而做不同的处理，例如原生组件的事件不做代理。所以最后用户的模板编译中应该对`origin-组件名称`这种组件名称进行替换。替换方法如下：

```
traverse(ast, {
    enter(path) {
      let node = path.node;
      if (t.isJSXElement(node)) {
        let tagName = node.openingElement.name.name;
        if(/^origin\-/.test(tagName)) {
          let newtagName = tagName.replace(/^origin\-/,'');
          node.openingElement.name.name = newtagName;
          node.closingElement.name.name = newtagName;
        }
      }
    }
  });
```

#### 注

模板编译总体上是要将所有的[CML 的语法](../view/cml.md)编译成目标端的语法，可以参考<a href="https://github.com/didi/chameleon/tree/master/packages/chameleon-template-parse">chameleon-template-parse</a>中的编译实现。
比如微信端包括如下几方面的实现：

- 标签的替换，比如`slider-item` 标签替换成`swiper-item`。
- 属性的替换，c-if c-else c-else-if c-show c-for c-text c-key。
- 动态组件，component is 动态组件的支持。
- style 与 class 的编译处理
- c-model 的实现 配合运行时 mixins 代理事件与处理事件对象
- c-animation 的处理
- c-bind 事件绑定 配合运行时 mixins 代理事件与处理事件对象

## 2 样式编译

监听`compile-style`事件
参数列表：(currentNode，parentNodeType)

- currentNode 当前处理的节点
- parentNodeType 父节点的 nodeType，如果是 app/page/component 节点的子节点会有值，否则为 undefined

说明：
这个钩子用于处理所有的`style`节点，内部已经对 less stylus 等语法进行编译处理，这里得到的已经是标准的 css 格式，可以转成对应端的样式，比如对尺寸单位 cpx 的转换，将 css 转成对象形式等。

```
compiler.hook('compile-style', function(currentNode, parentNodeType) {
  currentNode.output = styleParser(currentNode.source);
})
```

推荐用户使用`postcss`或者`rework`进行编译，参考`cml-demo-plugin/styleParser.js`的实现。利用了`chameleon-css-loader`中的 postcss 插件进行编译。例如：

```
const postcss = require('postcss');
const cpx = require('chameleon-css-loader/postcss/cpx.js')
const weexPlus = require('chameleon-css-loader/postcss/weex-plus.js')

module.exports = function(source) {
  let options = {
    cpxType: 'rpx'
  }
  return postcss([cpx(options), weexPlus()]).process(source).css;
}

```

上面方法可以将 内容

```
.test {
  font-size: 24cpx;
  lines: 1;
}
```

编译为：

```
.test {
  font-size: 24rpx;
  lines: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

```

### 3.3 script 编译

参数列表：(currentNode，parentNodeType)

- currentNode 当前处理的节点
- parentNodeType 父节点的 nodeType，如果是 app/page/component 节点的子节点会有值，否则为 undefined

说明：
这个钩子用于处理`script`节点，内部已经对 js 文件进行了 babel 处理，这个阶段用于做模块的包装，`compiler.amd`对象提供了 amd 模块的包装方法，模块 id 使用节点的`modId`字段。例如：

```
compiler.hook('compile-script', function(currentNode, parentNodeType) {
  currentNode.output = compiler.amd.amdWrapModule(currentNode.source, currentNode.modId);
})
```

例如一个节点 source 如下，modId 为'./component/test.js'：

```
module.exports = function() {
  return 'test';
}
```

经过`compiler.amd.amdWrapModule(currentNode.source, currentNode.modId)`处理后成为

```
cmldefine('./component/test.js', function(require, exports, module) {
  module.exports = function() {
    return 'test';
  }
})

```

### 3.4 asset 编译

静态资源的编译和`script`节点的编译相同，因为 cml 内部已经将静态资源节点变成了资源的 publicPath 字符串。
例如`src/assets/img/chameleon.png`这个节点的 source 为

```
 module.exports = 'http://168.1.1.1:8000/static/img/chameleon.png'
```

经过`compiler.amd.amdWrapModule(currentNode.source, currentNode.modId)`处理后成为

```
cmldefine('./component/test.js', function(require, exports, module) {
  module.exports = 'http://168.1.1.1:8000/static/img/chameleon.png';
})

```

更多编译事件参考<a href="./start.html"> 扩展新端手册</a>。

### 3.5 编译打包与文件输出

参考`cml-demo-plugin/index.js`中对`compiler.hook('pack', function(projectGraph) {})` `pack`事件的实现，编译编译图，拼接目标文件，调用`compiler.writeFile`输出文件。
