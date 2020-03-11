# 逻辑层

逻辑层负责反馈用户对界面操作的处理中心。

逻辑层是终端开发的“灵魂”。

而 `VM 对象` 是逻辑层规范的输入口

## VM 对象

<table>
<tr>
  <th>字段名</th><th>类型</th><th>说明</th>
</tr>
<tr>
  <td>props</td><td>Object</td>
  <td>
  声明当前组件可接收数据属性 <br/>
  props = { type, default } <br/>
  type为数据类型，default为数据默认值
  </td>
</tr>
<tr>
  <td>data</td><td>Object</td><td>CML模板可直接使用的响应数据，是连接视图层的枢纽</td>
</tr>
<tr>
  <td>methods</td><td>Object</td><td>处理业务逻辑与交互逻辑的方法</td>
</tr>
<tr>
  <td><a href="./watch.html">watch</a></td><td>Object</td><td>侦听属性，监听数据的变化，触发相应操作</td>
</tr>
<tr>
  <td><a href="./computed.html">computed</a></td><td>Object</td><td>CML模板可直接使用的计算属性数据,也是连接视图层的枢纽</td>
</tr>
<tr>
  <td>beforeCreate</td><td>Function</td><td>例初始化之后，数据和方法挂在到实例之前
    一个页面只会返回一次</td>
</tr>
<tr>
  <td>created</td><td>Function</td><td>数据及方法挂载完成</td>
</tr>
<tr>
  <td>beforeMount</td><td>Function</td><td>开始挂载已经编译完成的cml到对应的节点时</td>
</tr>
<tr>
  <td>mounted</td><td>Function</td><td>cml模板编译完成,且渲染到dom中完成</td>
</tr>
<tr>
  <td>beforeDestroy</td><td>Function</td><td>实例销毁之前</td>
</tr>
<tr>
  <td>destroyed</td><td>Function</td><td>实例销毁后</td>
</tr>
</table>

## 响应式数据绑定系统

响应式数据绑定意味着开发者只需关心逻辑处理，通过数据绑定的形式，当数据变化时视图自动更新。

通过这个简单的例子来看：

```vue
<template>
  <view>
    <text>Hello {{ name }}!</text>
    <button c-bind:onclick="changeName">Click me!</button>
  </view>
</template>
<script>
class Index {
  data = {
    name: 'Chameleon',
  };
  methods = {
    changeName: function(e) {
      // sent data change to view
      this.name = 'CML';
    },
  };
}
export default new Index();
</script>
```

`框架`首先将逻辑层数据中的 name 与视图层的 name 进行了绑定，所以打开页面的时候会显示 Hello Chameleon!；
当点击按钮的时候，视图层会发送 changeName 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；
回调函数触发后，逻辑层执行数据赋值的操作，将 data 中的 name 从 Chameleon 变为 CML，因为该数据和视图层已经绑定了，从而视图层会自动改变为 Hello CML!。

## 生命周期

每个 Chameleon 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到  节点 并在数据变化时更新  节点 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给开发者在不同阶段添加自己的代码的机会。

chameleon 为[组件](../components/base.md)和 页面 提供了一系列生命周期事件，保障应用有序执行。
如果你想使用某个端特定的生命周期，请从业务出发使用 [接口多态](../framework/poly/api.md) 接收特定的生命周期事件回调。

<table>
  <tr>
    <th>钩子</th>
    <th>执行时机</th>
    <th>详细</th>
  </tr>
  <tr>
    <td>beforeCreate</td>
    <td>实例初始化之后，数据和方法挂在到实例之前</td>
    <td>页面会在该生命周期中返回传入当前页面的参数对象</td>
  </tr>
  <tr>
    <td>created</td>
    <td>数据及方法挂载完成</td>
    <td>页面会在该生命周期中返回传入当前页面的参数对象</td>
  </tr>
  <tr>
    <td>beforeMount</td>
    <td>开始挂载已经编译完成的cml到对应的节点时</td>
    <td>在页面会在该生命周期中返回传入当前页面的参数对象</td>
  </tr>
  <tr>
    <td>mounted</td>
    <td>cml模板编译完成,且渲染到dom中完成</td>
    <td></td>
  </tr>
  <tr>
    <td>beforeDestroy</td>
    <td>实例销毁之前</td>
    <td></td>
  </tr>
  <tr>
    <td>destroyed</td>
    <td>实例销毁后</td>
    <td></td>
  </tr>
</table>

### 页面 Page 独有生命周期

#### onShow()

> chameleon-runtime@0.2.0 开始支持

页面显示/切入前台时触发

#### onHide()

> chameleon-runtime@0.2.0 开始支持

页面隐藏/切入后台时触发

** 注意：页面不会在 onShow、onHide 回调函数中返回页面参数 **

### 生命周期回调函数

#### beforeCreate(Object res)

参数说明

<table>
  <tr>
    <th>名称</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>res</td>
    <td>Object</td>
    <td>
      仅有页面在该生命周期回调函数中会
      <br/>
      返回对象res:
      <br/>
      res = { query }
      query 是打开当前页面路径中的参数
    </td>
  </tr>
</table>

#### created(Object res)

参数说明

<table>
  <tr>
    <th>名称</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>res</td>
    <td>Object</td>
    <td>
      仅有页面在该生命周期回调函数中会
      <br/>
      返回对象res:
      <br/>
      res = { query }
      query 是打开当前页面路径中的参数
    </td>
  </tr>
</table>

#### beforeMount(Object res)

参数说明

<table>
  <tr>
    <th>名称</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>res</td>
    <td>Object</td>
    <td>
      仅有页面在该生命周期回调函数中会
      <br/>
      返回对象res:
      <br/>
      res = { query }
      query 是打开当前页面路径中的参数
    </td>
  </tr>
</table>

### 钩子示例

```vue
<template>
  <view> </view>
</template>
<script>
class Index {
  beforeCreate(query) {
    // data数据挂载到this根节点上之前，以及methods所有方法挂载到实例根节点之前
    // 注意：只用页面的 beforeCreate钩子 会返回页面query
    console.log('App beforeCreate: 打开当前页面路径中的参数是 ', query);
  }
  created() {
    // data,methods里面的这些events挂载完成
    console.log('App created');
  }
  beforeMount() {
    // 开始挂载已经编译完成的cml到对应的节点时
    console.log('App beforeMount');
  }
  mounted() {
    // cml模板编译完成,且渲染到dom中完成,在整个生命周期中只执行一次
    console.log('App mounted');
  }
  beforeDestroy() {
    // 实例销毁前
    console.log('App beforeDestroy');
  }
  destroyed() {
    // 实例销毁后
    console.log('App destroyed');
  }
}
export default new Index();
</script>
```

### 生命周期多态

`cml` 在 <a href="../../framework/poly/component.html#webweexwxcml">\*.[web|weex|wx].cml</a> 文件中支持生命周期的多态，可以针对不同的平台添加专属钩子函数。

假设有一个页面`home.cml`，需要使用小程序页面分享生命周期[微信端 onShareAppMessage](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object)，可以如下实现：

1. 项目根目录执行 `cml init component`，选择 `multimode-interface` 多态接口，输入 interface name: `lifecycleInterface`，自动生成`src/components/lifecycleInterface`
   <img src="../images/initinterface.png" width="300px" />

2. 在`src/components/lifecycleInterface/lifecycleInterface.cml`多态接口中，添加如下代码：

```vue
<script cml-type="interface">
interface LifecycleInterfaceInterface {
  onShareAppMessage(): void;
}
</script>

<script cml-type="web">
class Method implements LifecycleInterfaceInterface {
  onShareAppMessage() {
    console.log('web share');
  }
}
export default new Method();
</script>

<script cml-type="weex">
class Method implements LifecycleInterfaceInterface {
  onShareAppMessage() {
    console.log('weex share');
  }
}
export default new Method();
</script>

<script cml-type="wx">
class Method implements LifecycleInterfaceInterface {
  onShareAppMessage() {
    console.log('wx share');
  }
}
export default new Method();
</script>

<script cml-type="alipay">
class Method implements LifecycleInterfaceInterface {
  onShareAppMessage() {
    console.log('alipay share');
  }
}
export default new Method();
</script>

<script cml-type="baidu">
class Method implements LifecycleInterfaceInterface {
  onShareAppMessage() {
    console.log('baidu share');
  }
}
export default new Method();
</script>
```

3. 在 `home.cml` 文件，使`methods`合并`lifecycleInterface`多态方法

```vue
<template>
  <view>
    <text>home页面</text>
  <view>
</template>
<script>
import lifecycleInterface from '../../components/lifecycleInterface/lifecycleInterface'
  class Home {
    data = {}
    computed = {}
    watch = {}
    methods = {
      ...lifecycleInterface
    }
    beforeCreate(res) {}
    created() {}
  }
  export default new Home()
</script>
```

## 计算属性 computed

对于模板内任何复杂逻辑，你都应当使用计算属性

### 示例

```vue
<template>
  <view>
    <text>Original message: "{{ message }}"</text>
    <text>Computed reversed message: "{{ reversedMessage }}"</text>
  </view>
</template>
<script>
class Index {
  data = {
    message: 'Hello',
  };
  computed = {
    // 计算属性的 getter
    reversedMessage: function() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  };
}
export default new Index();
</script>
```

结果：

Original message: "Hello"

Computed reversed message: "olleH"

这里我们声明了一个计算属性 reversedMessage。
我们提供的函数将用作属性 reversedMessage 的 getter 函数，当 message 发生改变时，reversedMessage 也会更新

## 侦听属性 watch

提供了一种更通用的方式来观察和响应实例上的数据变动

### 示例

```vue
<template>
  <view>
    <text>fullName is : "{{ fullName }}"</text>
  </view>
</template>
<script>
class Index {
  data = {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
  };
  watch = {
    firstName: function(newV, oldV) {
      this.fullName = newV + ' ' + this.lastName;
    },
    lastName: function(newV, oldV) {
      this.fullName = this.firstName + ' ' + newV;
    },
  };
}
export default new Index();
</script>
```

除了 watch 选项之外，你还可以使用命令式的 this.\$watch API。

但是，上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```vue
<script>
class Index {
  data = {
    firstName: 'Foo',
    lastName: 'Bar',
  };
  computed = {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
  };
}
</script>
```

所以，不要滥用 watch ~

### [API](/logic/API.md)

调用各端原生能力的入口

## API

chameleon 框架提供了丰富的多态接口，可以调起各端提供的原生能力，如系统信息、元素节点信息、动画效果、本地存储、网络请求、地理位置等。请参考 [API 文档](../api/)。

代码示例

```javascript
import cml from 'chameleon-api';
cml.showToast({
  message: 'Hello world!',
  duration: 1000,
});
```

通常，在 chameleon API 有以下几种类型：

### 通用 API

大多数 API 都是异步 API，如 cml.get 等。这类 API 接口通常都接受一个 Object 类型的参数，返回 `Promise` ，对应请求成功和失败回调，支持 `then` 链式调用。

代码示例

```javascript
cml
  .get({
    url: 'https://cml.com/api/user/1',
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

### 运行时相关 API

提供模块 `导入\导出` 能力，[详细介绍](../api/#export-import)

代码示例

```javascript
import a from 'a.js';

export { a };
```

### 数据管理 Store API

提供多端应用集中式管理状态数据的能力 [详细介绍](../api/#store)

代码示例

```javascript
// store.js
import createStore from 'chameleon-store';

const store = createStore({ state, mutations, actions, getters, modules });

export default store;
```
