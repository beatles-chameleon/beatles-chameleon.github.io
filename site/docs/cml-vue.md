# CML - 类 Vue 语法

为了降低学习成本，独立支持了 vue 的指令子集，你可以在模板添加一个 lang 属性 `<template lang="vue">` 即可使用。
**注意必须在组件根元素上 template 上加 lang='vue'**

## 数据绑定

模板中绑定的数据来均来自于 data、computed 属性。

### 模板语法

数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于：

#### 内容

```vue
<view><text>{{ message }}</text></view>
```

#### 组件属性

`<view :id="dynamicId"> </view>`
或者 v-bind
`view v-bind:id="dynamicId"`

### v-model

#### 应用于表单元素

```vue
<template lang='vue'>
  <page title="chameleon">
       <view><text>message:{{message}}</text></view>
       <input v-model="message"></input>
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

v-model 元素上不支持再绑定 input 事件，如果对于输入值变化之后想执行一些操作，可以通过 watch 对应的值来进行；

#### 应用于父子组件之间

**父组件**

```vue
<template lang="vue">
  <page title="chameleon">
    <view><text>c-model的在组件上的使用</text></view>
    <comp v-model="modelValueTest2" ></comp>
    <view><text>组件使其改变{{modelValueTest2}}</text></view>
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
  }
}
</script>
```

**子组件**

```vue
<template lang="vue">
  <view>
    <input type="text" :value="value" v-on:input="handleInput"/>
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
      debugger;
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

### Javascript 表达式

#### 在模板内容中

```javascript
{
  {
    number + 1;
  }
}

{
  {
    ok ? 'YES' : 'NO';
  }
}

{
  {
    message
      .split('')
      .reverse()
      .join('');
  }
}
```

#### 算数运算

```vue
<view><text>{{a + b}} + {{c}} + d</text></view>
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

view 中的内容为 `3 + 3 + d`。

#### 字符串运算

```vue
<view><text>{{"hello" + name}}</text></view>
```

<b>特别注意：模板中的字符串都要使用双引号，不能使用单引号。</b>

#### 数据路径运算

```vue
<view><text>{{object.key}}: {{array[0]}}</text></view>
```

```javascript
class Index {
  data = {
    object: {
      key: 'Hello ',
    },
    array: ['MINA'],
  };
}
export default new Index();
```

### Bug & Tips

- 使用 component 语法的时候，为了提高微信端的渲染效率，建议加上 shrinkComponents = "comp1,comp2,...",缩小动态渲染的查找范围，减少不必要的渲染开销；

- 注意 v-model 的值只能是 data 或者 computed 中的 key 值，不支持 modelValue.xxx 等需要二次计算的值；

## 条件渲染

### v-if

在框架中，使用

```vue
v-if="condition"
```

来判断是否需要渲染该代码块：

```vue
<view v-if="condition">True</view>
```

也可以用 v-else-if 和 v-else 来添加一个 else 块：

```vue
<view v-if="length > 5"><text>1</text></view>
<view v-else-if="length > 2"><text>2</text></view>
<view v-else><text>3</text></view>
```

### block v-if

因为 v-if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 `\<block\>` 标签将多个组件包装起来，并在上边使用 v-if 控制属性。

```vue
<block v-if="true">
  <view><text>view1</text></view>
  <view><text>view2</text></view>
</block>
```

**注意：**: `\<block\>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

### Bug & Tips

- 不要与 c-if c-else-if c-else 混用

## 列表渲染

### v-for

在组件上使用 v-for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

```vue
<view v-for="(item, index) in array">
  <text>{{index}}: {{item.message}}</text>
</view>
```

```vue
<view v-for="(item, index) in array" :key="index">
  <text> {{index}}: {{item.message}}</text>
</view>
```

```vue
<view v-for="(item, index) in array" :key="item.id">
  <text> {{index}}: {{item.message}}</text>
</view>
```

### block v-for

类似 block v-if，也可以将 v-for 用在 `\<block\>` 标签上，以渲染一个包含多节点的结构块。例如：

```vue
<block v-for="(item, index) in [1, 2, 3]">
  <view> <text>{{index}}: </text></view>
  <view> <text>{{item}}</text> </view>
</block>
```

### :key

1.如果 :key="item.id"，那么就是 vue 中正常的语法。

2.如果 :key="item",那么在微信端会被渲染成 wx:key="`*this`"; 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

### Bug & Tips

- 不要与 c-for c-for-index c-for-item c-key 这些语法混用

- vue 的 v-for 相关语法都可以使用，但是需要注意一点就是只支持数组形式的被遍历值

## 事件

Chameleon 支持一些基础的事件，保障各端效果一致运行。如果你想要使用某个端特定的事件，请从业务出发使用 [组件多态](../framework/poly/component.md)或者[接口多态](../framework/poly/api.md)差异化实现功能。

主要扩展了事件的绑定：加强了符合 vue 语法的事件绑定；

### 事件绑定

主要增强了可以通过 `v-on @`这种形式去绑定事件；

```vue
<view v-on:click="handleClick" @tap="handleTap"></view>
```

```vue
<template lang="vue">
<view id="tapTest"  @tap="tapName" v-on:click="handleClick"> <text>Click me!</text> </view>
</template>
<script>
class Index {
  data = {};
  methods = {
    tapName() {
      console.log(e);
    },
  };
}
export default new Index();
</script>
```

### 事件类型

事件类型列表：

<table>
  <tr>
    <th>类型</th>
    <th>触发条件</th>
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
  <tr>
    <td>tap</td>
    <td>手指触摸后马上离开</td>
  </tr>
</table>
### 事件对象
当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。chameleon将事件绑定做了一层代理，将各平台的事件对象做统一，统一后的事件对象有如下属性：

| 名称           | 类型   | 说明                                                                                                              |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| type           | String | 事件类型                                                                                                          |
| timeStamp      | Number | 页面打开到触发事件所经过的毫秒数                                                                                  |
| target         | Object | 触发事件的目标元素 且 target = {id,dateset}                                                                       |
| currentTarget  | Object | 绑定事件的目标元素 且 currentTarget = {id,dataset}                                                                |
| changedTouches | Array  | 触摸事件中的属性，当前变化的触摸点信息的数组 且 changedTouches = [{ identifier, pageX, pageY, clientX, clientY }] |
| detail         | Object | 自定义事件所携带的数据。 通过`$cmlEmit`方法触发自定义事件，可以传递自定义数据即 detail。具体下面`自定义事件`      |
| \_originEvent  | Object | chameleon 对各平台的事件对象进行统一，会把原始的事件对象放到\_originEvent 属性中，当需要特殊处理的可以进行访问。  |

#### target && currentTarget

| 属性    | 类型   | 说明                                        |
| ------- | ------ | ------------------------------------------- |
| id      | String | 事件源组件的 id                             |
| dataset | Object | 事件源组件上由`data-`开头的自定义属性的集合 |

**dataset**

在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以 data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如 data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰 elementType。

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

#### changedTouches 事件属性

数组中的对象有如下属性：

| 属性                 | 类型   | 说明                                                                     |
| -------------------- | ------ | ------------------------------------------------------------------------ |
| identifier           | Number | 触摸点的标识符                                                           |
| pageX<br />pageY     | Number | 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴       |
| clientX<br />clientY | Number | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴 |

注意：返回值的单位为 `px`;可以通过`chameleon-api`中的 `px2cpx`进行单位的转化；

### 自定义事件

自定义事件用于父子组件之间的通信，父组件给子组件绑定自定义事件，子组件内部触发该事件。<b>规定事件名称不能存在大写字母</b>触发事件的方法是调用`this.$cmlEmit(事件名称,detail对象)`。

> 注意：自定义事件名称不支持`click`、`scroll`

例如：
子组件 yyl-com

```vue
<template>
 <view @tap="triggerCustomEvent"><text>触发自定义事件</text></view>
</template>
<script>
class Index {
  data = {}
  method = {
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
  <yyl-com c-bind:customevent="customEventHandler">
  </yyl-com>
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

当点击`yyl-com`组件的按钮时，父组件中的 customEventHandler 方法中打印的 e 对象如下：

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

`vue`语法下仅仅扩展了 `.stop`;

注意：对于阻止事件冒泡，在内联事件传参的情况下，需要传递 `$event`参数；

```vue
<!-- 不会阻止冒泡 -->
<view v-on:click.stop="handleElementTap(1, 2)"><text>触发元素点击事件</text></view>
<!-- 会阻止冒泡 -->
<view v-on:click.stop="handleElementTap(1, 2, $event)"><text>触发元素点击事件</text></view>
```

```vue
<template lang="vue">
  <view class="root">   
    <view class="pad">
      vue语法事件冒泡测试
    </view>
    <view @click="rootClick">
      <text style="font-size: 40px;">{{rootText}}</text>
      <view class="outer" @click="parentClick">
        <view>
          <text style="font-size: 40px;">{{parentText}}</text>
        </view>
        <text class="inner" @click="click">{{innerText}}</text>
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

### Bug & Tips

#### 不支持的语法

**注意，事件绑定不支持直接传入一个表达式，和绑定多个内联执行函数比如**

```vue
<div c-bind:tap="count++"></div>
<div c-bind:tap="handleTap1(); handleTap2()"></div>
```

## 指令

### v-if

根据表达式的真假值条件渲染元素

```vue
<div v-if="true">根据v-if的真假结果决定是否渲染</div>
```

### v-else

- 不需要表达式
- 限制：前一个兄弟元素必须有 v-if 或者 v-else-if

用法

```vue
<div v-if="1 > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

### v-else-if

- 限制：前一个兄弟元素必须有 v-if 或者 v-else-if

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### v-for

```vue
<view v-for="(item, index) in array">
 <text> {{idx}}: {{itemName.message}}</text>
</view>
```

### v-model

**父组件**

```vue
<view><text>v-model的使用</text></view>
<input type="text" v-model="modelValueTest" />
<text>{{modelValueTest}}</text>

<comp v-model="modelValueTest2"></comp>
<view><text>组件使其改变{{modelValueTest2}}</text></view>
```

**子组件**

```vue
<template>
  <view>
    <input type="text" :value="value" @input="handleInput" />
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

### v-text

```vue
<view v-text="message"></view>
```

不支持组件的 v-text

### v-show

```vue
<view v-show="elementShow">
    <text>测试元素c-show</text>
  </view>
<view><text>组件v-show</text></view>
<comp v-show="elementShow"></comp>
```

- 使用 v-show 的元素不支持  同时有 style 属性

- elementShow 是来自 data 或者 computed 中的 key 值，或者 true/false

### 动态组件

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

```vue
<template>
  <view class="page-container">
    <view v-on:tap="handleElementClick"><text>组件改变</text></view>
    <component :is="currentComp" shrinkcomponents="comp,comp1"></component>
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
<component :is="currentComp"
    type="upcaseEvent"
    v-on:upcaseEvent="handleUpcaseEvent"
    :id="id"
    ></component>
```

#### Bug & Tips

注意 : 小程序端是通过条件判断来模拟 component is 的效果的，所以不要在 component 标签上在在写 c-if c-else c-else-if 等条件判断

## 样式语法

### class 属性

如果使用 class 语法，支持如下写法

```vue
<template lang="vue">
<view class="page-container">
  <view><text :class="true? 'bg-green':''" class="font" >fafafa</text></view>
  <view><text class="bg-green font" >fafafa</text></view>
</view>
</template>
```

#### 简单数据绑定

```vue
<template>
  <view>
    <text :class="prefix + 'a'">class数据绑定</text>
  </view>
</template>
<script>
class Index {
  data() {
    return {
      prefix: 'cls',
    };
  }
}
export default new Index();
</script>
```

#### 三元运算符

```vue
<view class="static" class="open ? 'cls1 cls2' : 'cls3 cls4'"> </view>
```

或者将其放入计算属性

```vue
<template>
  <view class="itemClass"> </view>
</template>
<script>
class Index {
  computed = {
    itemClass() {
      return open ? 'cls1 cls2' : 'cls3 cls4';
    },
  };
}
export default new Index();
</script>
```

### style 语法

**如果使用 style 语法支持如下写法，style 不支持多个 style,即 style :style 同时写**

```vue
<view> <text style="background-color:red">fafafa</text></view>
<view><text :style="computedString">fafafa</text> </view>
<script>
class Index {
  data = {
    inlineStyle: 'border: 1px solid red;',
  };
  computed = {
    computedString() {
      return inlineStyle;
    },
  };
}
export default new Index();
</script>
```
