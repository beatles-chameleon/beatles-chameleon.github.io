# CML 语法

CML（Chameleon Markup Language）用于描述页面的结构，我们知道 HTML 是有一套标准的语义化标签，例如  文本是 `<span>`  按钮是 `<button>`。CML 同样具有一套标准的标签，我们将标签定义为组件，CML 为用户提供了一系列基础组件。同时 CML 中还支持<b>模板语法</b>，例如条件渲染、列表渲染，数据绑定等等。

## 基础组件

框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考[组件](../components/base.md)文档。

什么是组件：

- 组件是视图层的基本组成单元。
- 组件自带一些功能与微信风格一致的样式。
- 一个组件通常包括 开始标签 和 结束标签，属性 用来修饰这个组件，内容 在两个标签之内。

```vue
<tagname property="value">Content goes here ...</tagname>
```

> 注意：所有组件属性都是小写，以连字符`-`连接。

### 属性类型

<table>
  <tr>
    <th>类型</th>
    <th>描述</th>
    <th>注解</th>
  </tr>
  <tr>
    <td>String</td>
    <td>字符串</td>
    <td>`"string"`</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>数字</td>
    <td>`1, 1.5`</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>布尔值</td>
    <td>`true，false`</td>
  </tr>
  <tr>
    <td>Array</td>
    <td>数组</td>
    <td>`[1, 'string']`</td>
  </tr>
  <tr>
    <td>Object</td>
    <td>对象</td>
    <td>`{key: value}`</td>
  </tr>
  <tr>
    <td>EventHandler</td>
    <td>事件处理函数名</td>
    <td>`handlerName`是组件中定义的事件处理函数名</td>
  </tr>
</table>

### 公共属性

所有组件都有以下属性

<table>
  <tr>
    <th>属性名</th>
    <th>类型</th>
    <th>描述</th>
    <th>注解</th>
  </tr>
  <tr>
    <td>id</td>
    <td>String</td>
    <td>组件唯一标示</td>
    <td>保证整个页面唯一</td>
  </tr>
  <tr>
    <td>class</td>
    <td>String</td>
    <td>组件样式类名</td>
    <td>在cmss中定义的样式类</td>
  </tr>
  <tr>
    <td>style</td>
    <td>String</td>
    <td>组件内联样式</td>
    <td>可动态设置内联样式</td>
  </tr>
  <tr>
    <td>c-bind</td>
    <td>EventHandler</td>
    <td>组件事件</td>
    <td></td>
  </tr>
</table>

### 特殊属性

CML 提供了[内置组件](../components/base.md)及[扩展组件](../components/expand.md)，根据组件特殊性几乎每个组件都有自己的特殊属性，详细属性请查看组件文档。

## 数据绑定

模板中绑定的数据来均来自于 data、computed 属性。

### 简单绑定

数据绑定使用 Mustache 语法（双大括号）,
`{{}}`之内的可以是一些变量或者简单的表达式。

#### 内容

```vue
<view><text>{{ message }}</text></view>
```

#### 组件属性

```vue
<view id="item-{{id}}"> </view>
```

#### 运算

```vue
<view hidden="{{flag ? true : false}}"> <text>Hidden </text> </view>
<view><text>{{a + b}} + {{c}} + d </text></view>
<view c-if="{{length > 5}}"> </view>
```

```javascript
class Index {
  data = {
    a: 1,
    b: 2,
    c: 3,
  };
}
export default new Index();
```

view 中的内容为 `3 + 3 + d`

### c-model

#### 应用于表单元素

```vue
<template>
  <page title="chameleon">
       <view><text>message:{{message}}</text></view>
       <input c-model="{{message}}"></input>
  </page>
</template>
<script>
class Comp {
  data = {
     message:'default-value'
  }
  watch = {
    message(){
      console.log('modelTest change');
    }
  }
}
export default new Comp();
</script>
<script cml-type="json">
{
  "base": {}
}
</script>
```

c-model 元素上不支持再绑定 input 事件，如果对于输入值变化之后想执行一些操作，可以通过 watch 对应的值来进行；

#### 应用于父子组件之间

父组件

```vue
<template>
  <page title="chameleon">
    <scroller height="{{-1}}">
      <view><text>c-model的在组件上的使用</text></view>
      <comp c-model="{{modelValueTest2}}"></comp>
      <view
        ><text>组件使其改变{{ modelValueTest2 }}</text></view
      >
    </scroller>
  </page>
</template>

<script>
class Index {
  data = {
    currentComp: 'comp1',
    modelValueTest2: 'sss',
  };
  methods = {
    handleClick() {
      this.currentComp = this.currentComp === 'comp1' ? 'comp1' : 'comp2';
    },
  };
}

export default new Index();
</script>
<style>
.scroller-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "comp1":"/components/comp1",
      "comp2":"/components/comp2"
    }
  },
  "wx": {
    "navigationBarTitleText": "index",
    "backgroundTextStyle": "dark",
    "backgroundColor": "#E2E2E2"
  },
  "alipay": {
    "defaultTitle": "index",
    "pullRefresh": false,
    "allowsBounceVertical": "YES",
    "titleBarColor": "#ffffff"
  },
  "baidu": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "index",
    "backgroundColor": "#ffffff",
    "backgroundTextStyle": "dark",
    "enablePullDownRefresh": false,
    "onReachBottomDistance": 50
  }
}
</script>
```

子组件

```vue
<template>
  <view>
    <input type="text" value="{{value}}" c-bind:input="handleInput" />
  </view>
</template>

<script>
class Comp {
  props = {
    value: {
      type: String,
      default: 'default-value',
    },
  };
  methods = {
    handleInput(e) {
      console.log('input', e);
      this.$cmlEmit('input', {
        value: e.detail.value,
      });
    },
  };
}
export default new Comp();
</script>
<script cml-type="json">
{
  "base": {}
}
</script>
```

### Bug & Tips

注意 c-model 的值只能是 data 或者 computed 中的 key 值，不支持 modelValue.xxx 等需要二次计算的值；

## 条件渲染

### c-if

在框架中，使用

```vue
c-if="{{ condition }}"
```

来判断是否需要渲染该代码块：

```vue
<view c-if="{{condition}}">True</view>
```

也可以用 c-else-if 和 c-else 来添加一个 else 块：

```vue
<view c-if="{{length > 5}}"> <text>1 </text></view>
<view c-else-if="{{length > 2}}"> <text>2 </text></view>
<view c-else> <text>3 </text></view>
```

### block c-if

因为 c-if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 `\<block\>` 标签将多个组件包装起来，并在上边使用 c-if 控制属性。

```vue
<block c-if="{{true}}">
  <view> <text>view1 </text></view>
  <view> <text>view2 </text></view>
</block>
```

**注意：** `\<block\>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

## 列表渲染

### c-for

在组件上使用 c-for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。
默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item

```vue
<view c-for="{{array}}">
  <text>{{index}}: {{item.message}}</text>
</view>
```

使用 c-for-item 可以指定数组当前元素的变量名，
使用 c-for-index 可以指定数组当前下标的变量名：

```vue
<view c-for="{{array}}" c-for-index="idx" c-for-item="itemName">
  <text> {{idx}}: {{itemName.message}}</text>
</view>
```

c-for 也可以嵌套，下边是一个九九乘法表

```vue
<view c-for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" c-for-item="i">
  <view c-for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" c-for-item="j">
    <view v-if="{{i <= j}}">
      <text> {{i}} * {{j}} = {{i * j}}</text>
    </view>
  </view>
</view>
```

### block c-for

类似 block c-if，也可以将 c-for 用在 `\<block\>` 标签上，以渲染一个包含多节点的结构块。例如：

```vue
<block c-for="{{[1, 2, 3]}}">
  <view> <text>{{index}}: </text></view>
  <view> <text>{{item}}</text> </view>
</block>
```

### c-key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input/>` 中的输入内容，`<switch/>`的选中状态），需要使用 c-key 来指定列表中项目的唯一的标识符。~~~~

c-key 的值以两种形式提供

1.字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。

2.保留关键字 \*this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

## 事件

Chameleon 支持一些基础的事件，保障各端效果一致运行。如果你想要使用某个端特定的事件，请从业务出发使用[多态组件](poly.md#多态组件)或者[多态接口](poly.md#多态接口)差异化实现功能。

### 什么是事件

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。

### 事件绑定

当用户点击该组件的时候会在该组件逻辑对象的`methods`中寻找相应的处理函数

```vue
<template>
  <view id="tapTest" data-hi="WeChat" c-bind:tap="tapName">
    <text>Click me!</text>
  </view>
</template>
<script>
class Index {
  methods = {
    tapName(e) {
      // 打印事件对象
      console.log('事件对象:', e);
    },
  };
}
export default new Index();
</script>
```

### 事件类型

chameleon 所有元素都支持基础事件类型如下：

<table>
  <tr>
    <th>类型</th>
    <th>触发条件</th>
  </tr>
  <tr>
    <td>tap</td>
    <td>手指触摸后马上离开</td>
  </tr>
  <tr>
    <td>touchstart</td>
    <td>手指触摸动作开始</td>
  </tr>
  <tr>
    <td>touchmove</td>
    <td>手指触摸后移动</td>
  </tr>
  <tr>
    <td>touchend</td>
    <td>手指触摸动作结束</td>
  </tr>
</table>

### 事件对象

当触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。它有以下属性：

<table>
  <tr>
    <th>名称</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>事件类型</td>
  </tr>
  <tr>
    <td>timeStamp</td>
    <td>Number</td>
    <td>页面打开到触发事件所经过的毫秒数</td>
  </tr>
  <tr>
    <td>target</td>
    <td>Object</td>
    <td>
      触发事件的目标元素
      且 target = { id, dataset }
    </td>
  </tr>
  <tr>
    <td>currentTarget</td>
    <td>Object</td>
    <td>
      绑定事件的目标元素
      且 currentTarget = { id, dataset }
    </td>
  </tr>
  <tr>
    <td>touches</td>
    <td>Array</td>
    <td>
      触摸事件中的属性，当前停留在屏幕中的触摸点信息的数组
      且 touches = [{
        identifier,
        pageX,
        pageY,
        clientX,
        clientY
      }]
    </td>
  </tr>
  <tr>
    <td>changedTouches</td>
    <td>Array</td>
    <td>
      触摸事件中的属性，当前变化的触摸点信息的数组
      且 changedTouches = [{
        identifier,
        pageX,
        pageY,
        clientX,
        clientY
      }]
    </td>
  </tr>
  <tr>
    <td>detail</td>
    <td>Object</td>
    <td>
      自定义事件所携带的数据。
      通过`$cmlEmit`方法触发自定义事件，可以传递自定义数据即detail。具体下面`自定义事件`。
    </td>
  </tr>
  <tr>
    <td>_originEvent</td>
    <td>Object</td>
    <td>
      CML 对各平台的事件对象进行统一，会把原始的事件对象放到_originEvent属性中，当需要特殊处理的可以进行访问。
    </td>
  </tr>
</table>

#### target && currentTarget 事件属性

<table>
<tr><th>属性</th><th>类型</th><th>说明</th></tr>
<tr><td>id</td><td>String</td><td>事件源组件的id</td></tr>
<tr><td>dataset</td><td>Object</td><td>事件源组件上由`data-`开头的自定义属性组成的集合</td></tr>
<!-- <tr><td>offsetLeft</td><td>Number</td><td>事件源组件相对于窗口左侧的距离</td></tr>
<tr><td>offsetTop</td><td>Number</td><td>事事件源组件相对于窗口上侧的距离</td></tr> -->
</table>
<b>dataset</b>

在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以 data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如 data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰 elementType。

示例：

```vue
<view data-alpha-beta="1" data-alphaBeta="2" c-bind:tap="bindViewTap"> DataSet Test </view>
<script>
class Index {
  methods = {
    bindViewTap: function(event) {
      event.currentTarget.dataset.alphaBeta === 1; // - 会转为驼峰写法
      event.currentTarget.dataset.alphabeta === 2; // 大写会转为小写
    },
  };
}
export default new Index();
</script>
```

#### touches && changedTouches 事件属性

数组中的对象具有如下属性：

<table>
<tr>
<th>属性</th><th>类型</th><th>说明</th>
</tr>
<tr>
<td>identifier</td><td>Number</td><td>触摸点的标识符</td>
</tr>
<tr>
<td>pageX, pageY</td><td>Number</td><td>距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴</td>
</tr>
<tr>
<td>clientX, clientY</td><td>Number</td><td>距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴</td>
</tr>
</table>

注意：返回值的单位为 `px`;可以通过`chameleon-api`中的 `px2cpx`进行单位的转化；

#### 自定义事件

自定义事件用于父子组件之间的通信，父组件给子组件绑定自定义事件，子组件内部触发该事件。绑定事件的方法是以`bind+事件名称="事件处理函数`的形式给组件添加属性，<b>规定事件名称不能存在大写字母</b>触发事件的方法是调用`this.$cmlEmit(事件名称,detail对象)`。

> 注意：自定义事件名称不支持`click`、`scroll`

例如：
子组件 child

```vue
<template>
 <view c-bind:tap="triggerCustomEvent"><text>触发自定义事件</text></view>
</template>
<script>
class Index {
  data: {}
  method: {
    triggerCustomEvent(e) {
      this.$cmlEmit('customevent', {
        company: 'didi',
        age: 18
      })
    }
  }
}
export default new Index();
<script>
```

父组件

```vue
<template>
  <child c-bind:customevent="customEventHandler">
  </child>
</template>
<script>
class Index {
  data = {}
  method = {
    customEventHandler(e) {
      console.log(e)
    }
  }
}
export default new Index();
<script>
```

当点击`child`组件的按钮时，父组件中的 customEventHandler 方法中打印的 e 对象如下：

```javascript
{
  type: "customevent",
  detail: {
    company: "didi",
    age: 18
  }
}
```

#### 支持的语法

事件绑定支持以下几种形式（在内联语句中，`$event`代表事件对象）

```vue
<!-- 写法(1) -->
<view c-bind:tap="handleElementTap"><text>触发元素点击事件</text></view>
<!-- 写法(2) -->
<view
  c-bind:tap="handleElementTap(1,2,3, 'message'+msg ,  $event)"><text>触发元素点击事件（1,2,3）</text></view>
<!-- 写法(3) -->
<view c-bind:tap="handleElementTap()"><text>触发元素点击事件（）</text></view>
```

**针对以上写法返回的事件对象如下： **

写法(1)调用事件函数输出如下

```javascript
'handleElementTap'[e];
```

写法(2)调用事件函数输出如下

```javascript
'handleElementTap'[(1, 2, 3, 'messagetestEvent', e)];
```

写法(3)调用事件函数输出如下

```javascript
'handleElementTap'  []
```

#### 事件冒泡

`chameleon-tool@0.2.0 + 的版本 支持了事件冒泡和阻止事件冒泡`

注意：对于阻止事件冒泡，在内联事件传参的情况下，需要传递 `$event`参数；

```vue
<!-- 不会阻止冒泡 -->
<view c-catch:click="handleElementTap(1,2)"><text>触发元素点击事件</text></view>
<!-- 会阻止冒泡 -->
<view c-catch:click="handleElementTap(1,2,$event)"><text>触发元素点击事件</text></view>
```

```vue
<template>
  <view class="root">
    <view class="pad">
      cml语法事件冒泡测试
    </view>
    <view c-bind:click="rootClick">
      <text style="font-size: 40px;">{{ rootText }}</text>
      <view class="outer" c-catch:click="parentClick">
        <view>
          <text style="font-size: 40px;">{{ parentText }}</text>
        </view>
        <text class="inner" c-bind:click="click">{{ innerText }}</text>
      </view>
    </view>
  </view>
</template>

<script>
class Index {
  methods = {
    click: function(e) {
      this.innerText = 'inner bubble';
      console.log('this.innerText', this.innerText);
    },
    parentClick: function(e) {
      this.parentText = 'parent bubble';
      console.log('this.parentClick', this.parentClick);
    },
    rootClick: function(e) {
      this.rootText = 'root bubble';
      console.log('this.rootClick', this.rootClick);
    },
  };
}

export default new Index();
</script>
```

#### 其他事件说明

事件绑定的写法同组件的属性，以 key、value 的形式。
key 以 c-bind，然后跟上事件的类型，如 c-bind:tap、c-bind:touchstart。
value 是一个字符串，需要在对应的逻辑对象中声明的`methods`中声明该方法。

### Bug & Tips

不支持的语法
**注意，事件绑定不支持直接传入一个表达式，和绑定多个内联执行函数比如**

```vue
<div c-bind:tap="count++"></div>
<div c-bind:tap="handleTap1(); handleTap2()"></div>
```

## 动态组件

component 接受两个属性

<table>
<tr>
  <th>属性名</th>
  <th>说明</th>
</tr>
<tr>
  <td>is</td>
  <td>接受一个计算属性作为动态渲染的标签名</td>
</tr>
<tr>
  <td>shrinkcomponents</td>
  <td>接受 usingComponents 中的key值组成的字符串作为动态组件选择的范围</td>
</tr>
</table>

**注意，为了提高微信端的渲染效率，强烈建议加上 shrinkcomponents = "comp1,comp2,...",缩小动态渲染的查找范围，减少不必要的渲染开销**

```vue
<template>
  <view class="page-container">
    <view c-bind:tap="handleElementClick"><text>组件改变</text></view>
    <component is="{{currentComp}}" shrinkcomponents="comp,comp1"></component>
  </view>
</template>

<script>
class Index {
  data = {
    dataComp: 'comp',
  };
  computed = {
    currentComp() {
      return this.dataComp === 'comp' ? 'comp1' : 'comp';
    },
  };
  methods = {
    handleElementClick(a, b) {
      console.log('handleElementClick', arguments, a, b);
      this.dataComp = this.dataComp === 'comp' ? 'comp1' : 'comp';
    },
  };
}

export default new Index();
</script>

<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "comp":"./comp",
          "comp1":"./comp1",
          "comp2":"./comp2",
          "comp3":"./comp3",
        }
    },
    "wx": {
        "navigationBarTitleText": "index",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    },
    "alipay": {
      "defaultTitle": "index",
      "pullRefresh": false,
      "allowsBounceVertical": "YES",
      "titleBarColor": "#ffffff"
    },
    "baidu": {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "white",
      "navigationBarTitleText": "index",
      "backgroundColor": "#ffffff",
      "backgroundTextStyle": "dark",
      "enablePullDownRefresh": false,
      "onReachBottomDistance": 50
    }
}
</script>
```

component 动态组件上同样支持绑定事件，传递属性；

比如

```javascript
<component
  is="{{currentComp}}"
  type="upcaseEvent"
  c-bind:upcaseEvent="handleUpcaseEvent"
  id="{{id}}"
></component>
```

### Bug & Tips

注意 : 小程序端是通过条件判断来模拟 component is 的效果的，所以不要在 component 标签上在在写 c-if c-else c-else-if 等条件判断

## 指令

### c-if

根据表达式的真假值条件渲染元素

```vue
<div c-if="{{true}}">根据c-if的真假结果决定是否渲染</div>
```

### c-else

- 不需要表达式;
- 限制：前一个兄弟元素必须有 c-if 或者 c-else-if

用法

```vue
<div c-if="{{1 > 0.5}}">
  Now you see me
</div>
<div c-else>
  Now you don't
</div>
```

### c-else-if

- 限制：前一个兄弟元素必须有 c-if 或者 c-else-if

```vue
<div c-if="{{type === 'A'}}">
  A
</div>
<div c-else-if="{{type === 'B'}}">
  B
</div>
<div c-else-if="{{type === 'C'}}">
  C
</div>
<div c-else>
  Not A/B/C
</div>
```

### c-for

```vue
<view c-for="{{array}}" c-for-index="idx" c-for-item="itemName">
 <text> {{idx}}: {{itemName.message}}</text>
</view>
```

### c-model

**父组件**

```vue
<view><text>c-model的使用</text></view>
<input type="text" c-model="{{modelValueTest}}" />
<text>{{modelValueTest}}</text>

<comp c-model="{{modelValueTest2}}"></comp>
<view><text>组件使其改变{{modelValueTest2}}</text></view>
```

**子组件**

```vue
<template>
  <view>
    <input type="text" :value="value" c-bind:input="handleInput" />
  </view>
</template>

<script>

methods = {
    handleInput(e){
      console.log('input',e);
      this.$cmlEmit('input', {
        value:  Date.now()
      })
    }
  }
}
</script>
```

** \$cmlEmit 的事件名必须是 'input', 传入的参数需要有一个更新的 value 作为 key, 其属性值作为新值进行更新；**

### c-text

```vue
<view c-text="{{message}}"></view>
```

不支持组件的 c-text

### c-show

```vue
<view c-show="{{elementShow}}">
    <text>测试元素c-show</text>
  </view>
<view><text>组件v-show</text></view>
<comp c-show="{{elementShow}}"></comp>
```

- 使用 c-show 的元素不支持  同时有 style 属性

- elementShow 是来自 data 或者 computed 中的 key 值,或者 true/false

### c-animation

**传入的值必须由[createAnimation](../api/#createanimation)返回**

```vue
<template>
  <text c-animation="{{animationData}}" c-bind:click="click">hello world</text>
</template>
<script>
import cml from 'cml目录';

const animation = cml.createAnimation();

class Index {
  data = {
    animationData: {},
  };
  methods = {
    click: function() {
      this.animationData = animation
        .opacity(0.1)
        .step({})
        .export();
    },
  };
}
export default new Index();
</script>
```
