# 事件

Chameleon 支持一些基础的事件，保障各端效果一致运行。如果你想要使用某个端特定的事件，请从业务出发使用 [组件多态](../framework/polymorphism/component.html)或者[接口多态](../framework/polymorphism/api.html)差异化实现功能。

主要扩展了事件的绑定：加强了符合 vue 语法的事件绑定；

## 事件绑定

主要增强了可以通过 `v-on @`这种形式去绑定事件；

```html
<view v-on:click="handleClick " @tap="handleTap"></view>
```

```html
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

## 事件类型

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
## 事件对象
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

### target && currentTarget

| 属性    | 类型   | 说明                                        |
| ------- | ------ | ------------------------------------------- |
| id      | String | 事件源组件的 id                             |
| dataset | Object | 事件源组件上由`data-`开头的自定义属性的集合 |

**dataset**

在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以 data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如 data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰 elementType。

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

### changedTouches 事件属性

数组中的对象有如下属性：

| 属性                 | 类型   | 说明                                                                     |
| -------------------- | ------ | ------------------------------------------------------------------------ |
| identifier           | Number | 触摸点的标识符                                                           |
| pageX<br />pageY     | Number | 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴       |
| clientX<br />clientY | Number | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴 |

注意：返回值的单位为 `px`;可以通过`chameleon-api`中的 `px2cpx`进行单位的转化；

## 自定义事件

自定义事件用于父子组件之间的通信，父组件给子组件绑定自定义事件，子组件内部触发该事件。<b>规定事件名称不能存在大写字母</b>触发事件的方法是调用`this.$cmlEmit(事件名称,detail对象)`。

> 注意：自定义事件名称不支持`click`、`scroll`

例如：
子组件 yyl-com

```html
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

```html
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

`vue`语法下仅仅扩展了 `.stop`;

注意：对于阻止事件冒泡，在内联事件传参的情况下，需要传递 `$event`参数；

```vue
<!-- 不会阻止冒泡 -->
<view v-on:click.stop="handleElementTap(1, 2)"><text>触发元素点击事件</text></view>
<!-- 会阻止冒泡 -->
<view v-on:click.stop="handleElementTap(1, 2, $event)"><text>触发元素点击事件</text></view>
```

```html
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

## Bug & Tips

### 不支持的语法

**注意，事件绑定不支持直接传入一个表达式，和绑定多个内联执行函数比如**

```vue
<div c-bind:tap="count++"></div>
<div c-bind:tap="handleTap1(); handleTap2()"></div>
```
