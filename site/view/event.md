# 事件

Chameleon 支持一些基础的事件，保障各端效果一致运行。如果你想要使用某个端特定的事件，请从业务出发使用 [组件多态](../framework/polymorphism/component.html)或者[接口多态](../framework/polymorphism/api.html)差异化实现功能。

## 什么是事件

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。

## 事件绑定

当用户点击该组件的时候会在该组件逻辑对象的`methods`中寻找相应的处理函数

```html
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

## 事件类型

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

## 事件对象

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
      chameleon对各平台的事件对象进行统一，会把原始的事件对象放到_originEvent属性中，当需要特殊处理的可以进行访问。
    </td>
  </tr>
</table>

### target && currentTarget 事件属性

<table>
<tr><th>属性</th><th>类型</th><th>说明</th></tr>
<tr><td>id</td><td>String</td><td>事件源组件的id</td></tr>
<tr><td>dataset</td><td>Object</td><td>事件源组件上由`data-`开头的自定义属性组成的集合</td></tr>
<!-- <tr><td>offsetLeft</td><td>Number</td><td>事件源组件相对于窗口左侧的距离</td></tr>
<tr><td>offsetTop</td><td>Number</td><td>事事件源组件相对于窗口上侧的距离</td></tr> -->
</table>
<b>dataset<b>

在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以 data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如 data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰 elementType。

示例：

```html
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

### touches && changedTouches 事件属性

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

### 自定义事件

自定义事件用于父子组件之间的通信，父组件给子组件绑定自定义事件，子组件内部触发该事件。绑定事件的方法是以`bind+事件名称="事件处理函数`的形式给组件添加属性，<b>规定事件名称不能存在大写字母</b>触发事件的方法是调用`this.$cmlEmit(事件名称,detail对象)`。

> 注意：自定义事件名称不支持`click`、`scroll`

例如：
子组件 child

```html
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

```html
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

### 支持的语法

事件绑定支持以下几种形式（在内联语句中，`$event`代表事件对象）

```html
<!-- 写法(1) -->
<view c-bind:tap="handleElementTap"><text>触发元素点击事件</text></view>
<!-- 写法(2) -->
<view c-bind:tap="handleElementTap(1,2,3, 'message'+msg ,  $event)"
  ><text>触发元素点击事件（1,2,3）</text></view
>
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

### 事件冒泡

`chameleon-tool@0.2.0 + 的版本 支持了事件冒泡和阻止事件冒泡`

注意：对于阻止事件冒泡，在内联事件传参的情况下，需要传递 `$event`参数；

```vue
<!-- 不会阻止冒泡 -->
<view c-catch:click="handleElementTap(1,2)"><text>触发元素点击事件</text></view>
<!-- 会阻止冒泡 -->
<view c-catch:click="handleElementTap(1,2,$event)"><text>触发元素点击事件</text></view>
```

```html
<template>
  <view class="root">
    <view class="pad">
      cml语法事件冒泡测试
    </view>
    <view c-bind:click="rootClick">
      <text style="font-size: 40px;">{{rootText}}</text>
      <view class="outer" c-catch:click="parentClick">
        <view>
          <text style="font-size: 40px;">{{parentText}}</text>
        </view>
        <text class="inner" c-bind:click="click">{{innerText}}</text>
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

### 其他事件说明

事件绑定的写法同组件的属性，以 key、value 的形式。
key 以 c-bind，然后跟上事件的类型，如 c-bind:tap、c-bind:touchstart。
value 是一个字符串，需要在对应的逻辑对象中声明的`methods`中声明该方法。

## Bug & Tips

不支持的语法
**注意，事件绑定不支持直接传入一个表达式，和绑定多个内联执行函数比如**

```vue
<div c-bind:tap="count++"></div>
<div c-bind:tap="handleTap1(); handleTap2()"></div>
```
