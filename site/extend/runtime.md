## 扩展新端运行时

运行时主要是对 cml 文件的逻辑对象进行适配，chameleon 内部将 cml 文件的逻辑对象分为三类 App、Page、Component。对应会调用用户运行时 npm 包的`createApp、createPage、createComponent`方法，所以对外只需要实现这三个方法。

例如一个 Page 的逻辑对象如下：

```
class PageIndex {
  data = {
    name: 'chameleon'
  }
  computed = {
    name2 () {
      return 'Hello' + this.name;
    }
  }
  beforeCreated() {
  }
  mounted() {
  }
}

export default new PageIndex();
```

在<a href="./https://github.com/chameleon-team/cml-extplatform-demo/blob/master/packages/cml-demo-plugin/index.js">编译插件</a>的构造函数中添加上运行时 npm 包名称，`cml-demo-runtime`。

```
  constructor(options) {
    this.runtimeNpmName = 'cml-demo-runtime';
  }
```

编译时就会自动插入`cml-demo-runtime`处理逻辑对象的方法：

```
class PageIndex {
  data = {
    name: 'chameleon'
  }
  computed = {
    name2 () {
      return 'Hello' + this.name;
    }
  }
  beforeCreated() {
  }
  mounted() {
  }
}
export default new PageIndex();

// 编译时自动插入用户配置的运行时方法
import {createPage} from 'cml-demo-runtime';
createPage(exports.default);
```

`createApp、createPage、createComponent`方法,参考<a href="https://github.com/chameleon-team/cml-extplatform-demo/tree/master/packages/cml-demo-runtime">cml-demo-runtime</a>的结构进行实现，需要`include` `chameleon-runtime`中相应的接口进行实现，才能够实现对`chameleon-runtime`的扩展。用户的工作量主要在于对逻辑对象的处理，可以参考<a href="https://github.com/chameleon-team/chameleon-runtime/tree/master/src/interfaces">chameleon-runtime</a>中的实现方式，一般需要如下方面的适配工作。

从宏观来看，运行时处理可分为：

- 输入 Options 对象的适配，[参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js)
- 跨端运行时能力注入，[参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniRuntimeCore.js)

从微观来看，有以下处理：

- 生命周期：[映射表参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/util/lifecycle.js) 和 [实现参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L91)
- 组件 props 属性：[适配参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L89) 和 [变化监听参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L48)
- 数据响应：[数据响应实现参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniRuntimeCore.js#L63)
- computed 计算能力：[实现参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniRuntimeCore.js#L85)
- watch 监听能力：[适配参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniRuntimeCore.js#L126) 和 [实现参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniRuntimeCore.js#L97)
- methods 方法属性：[适配参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L46)
- mixins 能力：[适配参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L31) 和 [合并参考](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L42)
- [生命周期多态](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/proto/MiniVmAdapter.js#L34)

例如： createPage 方法的实现

```
<include src="chameleon-runtime/src/interfaces/createPage/index.interface"></include>
<script cml-type="demo">
  class Method implements createPageInterface {
    createPage(options) {
      // 各端自行实现PageRuntime
      let pageRuntime = new PageRuntime(options);

      // 处理props
      pageRuntime.initProps();

      // 处理data
      pageRuntime.initData();

      // 处理computed
      pageRuntime.initComputed();

      // 处理methods
      pageRuntime.initMethods();

      // 处理生命周期映射
      pageRuntime.initLifeCycle();

      //调用小程序原生页面构造函数
      Page(options);
      return {};
    }
  }

  export default new Method();
</script>
```
