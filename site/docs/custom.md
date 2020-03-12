# 自定义组件

CML 支持简洁的组件化编程。

开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块，有助于代码维护。

## 创建自定义组件

类似页面，自定义组件由 `<template>` `<script>` `<style>` `<script cml-type="json">` 4 部分组成。

要编写一个自定义组件，可以在 `json` 中进行自定义组件声明（将 `component` 字段设为 `true`，这是可选操作，因为 CML 会在引用这个文件时自动识别`自定义组件`）：

```json
{
  "component": true
}
```

接下来，在 `<template>` 中编写组件模板，在 `<style>` 中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见[组件模板和样式](cml.md)。

_代码示例：_

```vue
<!-- 这是自定义组件的内部CML结构 -->
<view class="inner">
  {{innerText}}
</view>
<slot></slot>
```

```css
/* 这里的样式只应用于这个自定义组件 */
.inner {
  color: red;
}
```

**注意：在组件 CMSS 中不应使用 ID 选择器、属性选择器和标签名选择器。**

组件的属性值和内部数据将被用于组件 CML 的渲染，其中，属性值是可由组件外部传入的。

_代码示例：_

```vue
<script>
class CustomCom {
  props = {
    title: String,
    innerText: {
      type: String,
    },
    content: {
      type: Object,
      default: {},
    },
    list: {
      type: Array,
      default: [],
    },
  };

  data = {};
  computed = {};
  watch = {};
  methods = {};
  beforeCreate() {}
  created() {}
  beforeMount() {}
  mounted() {}
  beforeDestroy() {}
  destroyed() {}
}
export default new CustomCom();
</script>
```

## 使用自定义组件

使用已注册的自定义组件前，首先要在页面的 `<script cml-type="json">` 中进行引用声明。

此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径(相对路径或者绝对路径)：

```json
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
```

这样，在页面的 CML 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

_代码示例：_

```vue
<view>
  <!-- 以下是对一个自定义组件的引用 -->
  <component-tag-name title="xxx" inner-text="Some text"></component-tag-name>
</view>
```

自定义组件的 CML 节点结构在与数据结合之后，将被插入到引用位置内。

### 细节注意事项

**一些需要注意的细节：**

- 因为 CML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。
- 自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式（使用 `usingComponents` 字段）。
- 自定义组件和页面所在项目根目录名不能以“wx-”为前缀，否则会报错。

**注意，**是否在页面文件中使用 `usingComponents` 会使得页面的 `this` 对象的原型稍有差异，包括：

- 使用 `usingComponents` 时会多一些方法，如 `selectComponent` 。
- 如果页面比较复杂，新增或删除 `usingComponents` 定义段时建议重新测试一下。

## 组件模板和样式

类似于页面，自定义组件拥有自己的 `<template>` 模板和 `<style>` 样式。

首先我们通过 `cml init project` 生成一个 CML 项目，然后按照以下操作指引，看下如何使用 CML 的组件

``` 
cml init component
选择普通组件
输入 component-tag-namecomponent-tag-name
```

在 `src/pages/index/index.cml`中引入这个组件

```javascript
"usingComponents": {
  "component-tag-name":"/components/component-tag-name/component-tag-name"
}
```

### 组件模板

组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。

在组件模板中可以提供一个 `<slot>` 节点，用于承载组件引用时提供的子节点。

**代码示例：**

```vue
<!-- component-tag-name.cml -->
<!-- 组件模板 -->
<view class="wrapper">
  <view>这里是组件的内部节点</view>
  <slot></slot>
</view>
```

```vue
<!-- index.cml -->
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
    <view>这里是插入到组件slot中的内容</view>
  </component-tag-name>
</view>
```

### 模板数据绑定

可以使用数据绑定，这样就可以向子组件的属性传递动态数据。

**代码示例：**

```vue
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name prop-a="{{dataFieldA}}" prop-b="{{dataFieldB}}">
    <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
    <view>这里是插入到组件slot中的内容</view>
  </component-tag-name>
</view>
```

在以上例子中，组件的属性 `propA` 和 `propB` 将收到页面传递的数据。页面可以通过 `this.dataFieldA`、`this.dataFieldB` 来改变绑定的数据字段。

**注意：这样的数据绑定只能传递 JSON 兼容数据。**

### 组件 \<template\> 的 slot

在组件的 `<template>` 中可以包含 `slot` 节点，用于承载组件使用者提供的 CML 结构。

支持通过具名插槽的方式在模板中使用多个 `slot`

```vue
<!-- component-tag-name.cml -->
<template>
  <view>
    <view>组件模板的slot</view>
    <slot name="before"></slot>
    <slot></slot>
    <slot name="after"></slot>
  </view>
</template>
```

然后在父页面 `src/pages/index/index.cml`中

```vue
<template>
  <component-tag-name>
    <view>this is from index</view>
    <view slot="before">this is before from index</view>
    <view slot="after">this is after from index</view>
    <view>this is from index aaaa</view>
  </component-tag-name>
</template>
```

### 组件样式

组件对应 `style` 标签内的样式，只对当前节点生效。编写组件样式时，需要注意以下几点：

- 组件和引用组件的页面不能使用 id 选择器（`#a`）、属性选择器（`[a]`）和标签名选择器，请改用`class`选择器。
- 组件和引用组件的页面中使用后代选择器（`.a .b`）在一些极端情况下会有非预期的表现，如遇，请避免使用。
- 子元素选择器（`.a > .b`）只能用于 `view` 组件与其子节点之间，用于其他组件可能导致非预期的情况。
- 继承样式，如 `font` 、 `color` ，会从组件外继承到组件内。
- 元素选择器不支持

```css
#a {
} /* 在组件中不能使用 */
[a] {
} /* 在组件中不能使用 */
button {
} /* 在组件中不能使用 */
.a > .b {
} /* 除非 .a 是 view 组件节点，否则不一定会生效 */
view {
} /* 不支持元素选择器 */
```

### 样式多态

CML 扩展了多态样式，用于针对对于不同端有不同的样式需求的情况[参考](cmss.md#样式多态)

### 引用外部样式

[参考](../api/#import)

## 组件 VM

在 `.cml` 文件 `<script>` 代码块 `export default` 的对象实例，可用于定义组件，指定组件的属性、数据、方法等。

```
cml init component
选择普通组件
输入 component-tag-name
```

定义如下：

| 字段名        | 类型     | 说明                                                                                       |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| props         | Object   | 声明当前组件可接收数据属性 props = { type, default } type 为数据类型，default 为数据默认值 |
| data          | Object   | CML 模板可直接使用的响应数据，是连接视图层的枢纽                                           |
| methods       | Object   | 处理业务逻辑与交互逻辑的方法                                                               |
| watch         | Object   | 侦听属性，监听数据的变化，触发相应操作                                                     |
| computed      | Object   | CML 模板可直接使用的计算属性数据,也是连接视图层的枢纽                                      |
| beforeCreate  | Function | 例初始化之后，数据和方法挂在到实例之前 一个页面只会返回一次                                |
| created       | Function | 数据及方法挂载完成                                                                         |
| beforeMount   | Function | 开始挂载已经编译完成的 cml 到对应的节点时                                                  |
| mounted       | Function | cml 模板编译完成,且渲染到 dom 中完成                                                       |
| beforeDestroy | Function | 实例销毁之前                                                                               |
| destroyed     | Function | 实例销毁后                                                                                 |

### 组件间的通信

组件间的通信方式有以下几种：

#### 父组件 -> 子组件： props 传递

**代码示例**

```vue
<!-- index.cml -->
<template>
  <view>
    <component-tag-name parent-prop="{{parent}}"> </component-tag-name>
  </view>
</template>

<script>
class Index {
  data = {
    parent: { msg: 'this is parent message' },
  };
}

export default new Index();
</script>
```

```vue
<!-- component-tag-name.cml -->
<template>
  <view>
    <view>{{ parentProp.msg }}</view>
  </view>
</template>

<script>
class ComponentTagName {
  props = {
    parentProp: {
      type: Object,
      default: {},
    },
  };
}

export default new ComponentTagName();
</script>
```

#### 子组件 -> 父组件：事件通讯

**代码示例**

```vue
<!-- index.cml -->
<template>
  <view>
    <component-tag-name c-bind:parentevent="handleParentEvent"> </component-tag-name>
  </view>
</template>
<script>
class Index {
  methods = {
    handleParentEvent(...args) {
      console.log(...args);
    },
  };
}
export default new Index();
</script>
```

```vue
<!-- component-tag-name.cml -->
<template>
  <view>
    <view c-bind:tap="handleClick"></view>
  </view>
</template>
<script>
class ComponentTagName {
  methods = {
    handleClick() {
      this.$cmlEmit('parentevent', {
        value: 'this is from child',
      });
    },
  };
}
export default new ComponentTagName();
</script>
```
