# CMSS 介绍

CMSS(Chameleon Style Sheets)是一套样式语言，用于描述 CML 的组件样式。

[关于常用布局的汇总](https://github.com/chameleon-team/cml-flexbox)

## 使用 CMSS

CMSS 支持内联及类选择器等。

### 普通写法

具体实现写在 `.cml` 文件的 `<style>` 标签内。

目前支持有如下两种关联到元素上：

#### 静态 class

```vue
<view class="kind-list-item-hd-show class2 class3"></view>
```

#### 动态 class

目前 class 不支持传入**对象**的形式；
简单数据绑定
`{{}}`之内的会被当做一个表达式去处理；

```vue
<view><text class="{{prefix+'a'}}">class数据绑定</text></view>
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

三元运算符

```vue
<view class="{{open ? 'cls1 cls2' : 'cls3 cls4'}}"> </view>
```

或者将其放入计算属性

```vue
<template>
  <view class="{{itemClass}}"> </view>
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

### 内联写法

模版中写内联样式，分为静态和动态两种，静态样式指纯字符串，动态样式是有数据绑定。style 也不支持对象语法和数组语法；
目前可以使用的方式如下：

静态样式：

```vue
<template>
  <view style="width: 200cpx;"> </view>
</template>
```

动态样式：

```vue
<template>
  <view style="{{inlineStyle}}"> </view>
</template>
<script>
class Index {
  data = {
    inlineStyle: 'width: 200cpx;',
  };
}
export default new Index();
</script>
```

## 布局

采用 FlexBox 布局模型，请勿使用 float 方式布局。

[关于常用布局的汇总](https://github.com/chameleon-team/cml-flexbox)

### Flexbox

chameleon 布局模型基于 CSS Flexbox，以便所有页面元素的排版能够一致可预测，同时页面布局能适应各种设备或者屏幕尺寸。

Flexbox 包含 flex 容器和 flex 成员项。如果一个 CML 元素可以容纳其他元素，那么它就成为 flex 容器。需要注意的是，flexbox 的老版规范相较新版有些出入，比如是否能支持 wrapping。这些都描述在 W3C 的工作草案中了，你需要注意下新老版本之间的不同。

#### 容器

在 CML 中，Flexbox 是默认且唯一的布局模型，所以你不需要手动为元素添加 display: flex; 属性。

- flex-direction：

  定义了 flex 容器中 flex 成员项的排列方向。可选值为 row | column 默认值为 column

  - `column`：从上到下排列。
  - `row`：从左到右排列。

- justify-content：

  定义了 flex 容器中 flex 成员项在主轴方向上如何排列以处理空白部分。可选值为 `flex-start | flex-end | center | space-between`默认值为 flex-start。

  - `flex-start`：是默认值，所有的 flex 成员项都排列在容器的前部；
  - `flex-end`：则意味着成员项排列在容器的后部；
  - `center`：即中间对齐，成员项排列在容器中间、两边留白；
  - `space-between`：表示两端对齐，空白均匀地填充到 flex 成员项之间。
  - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<img src="../images/css-flexbox-justify.png" style="width:300px;margin-left:150px;">
- align-items：

定义了 flex 容器中 flex 成员项在纵轴方向上如何排列以处理空白部分。可选值为 stretch | flex-start | center | flex-end 默认值为 stretch。

- `stretch`： 是默认值，即拉伸高度至 flex 容器的大小；
- `flex-start`： 则是上对齐，所有的成员项排列在容器顶部；
- `flex-end`： 是下对齐，所有的成员项排列在容器底部；
- `center`： 是中间对齐，所有成员项都垂直地居中显示。
- `baseline`： 项目的第一行文字的基线对齐。

<img src="../images/css-flexbox-align.png" style="width:300px;margin-left:150px;" >

- flex-flow

  说明:

  - flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性, 用于设置或检索弹性盒模型对象的子元素排列方式。
  - flex-direction 属性规定灵活项目的方向。
  - flex-wrap 属性规定灵活项目是否拆行或拆列。

  语法:

  ```
  flex-flow: flex-direction flex-wrap;
  ```

### 成员项

flex 属性定义了 flex 成员项可以占用容器中剩余空间的大小。如果所有的成员项设置相同的值 flex: 1，它们将平均分配剩余空间. 如果一个成员项设置的值为 flex: 2，其它的成员项设置的值为 flex: 1，那么这个成员项所占用的剩余空间是其它成员项的 2 倍。

- flex {number}：值为 number 类型。

### 示例

一个简单的网格布局。

```vue
<template>
  <view>
    <view c-for="{{list}}" c-for-index="i" c-for-item="item" class="row">
      <view c-for="{{item}}" c-for-index="k" c-for-item="text" class="item">
        <view>
          <text>{{ text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
class Index {
  data = {
    list: [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ],
  };
}
export default new Index();
</script>
<style scoped>
.item {
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: 1;
}
.row {
  flex-direction: row;
  height: 80cpx;
}
</style>
<script cml-type="json">
{
  "base": {}
}
</script>
```

## 定位

CML 支持 position 定位，用法与 CSS position 类似。为元素设置 position 后，可通过 top、right、bottom、left 四个属性设置元素坐标。

- position {string}：

  设置定位类型。可选值为 `relative | absolute | fixed | sticky`默认值为 relative。

  - `relative` 是默认值，指的是相对定位；
  - `absolute` 是绝对定位，以元素的容器作为参考系；
  - `fixed` 保证元素在页面窗口中的对应位置显示；
  - `sticky` 指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部。

- `top {number}`：距离上方的偏移量默认为 0。
- `bottom {number}`：距离下方的偏移量默认为 0。
- `left {number}`：距离左方的偏移量默认为 0。
- `right {number}`：距离右方的偏移量默认为 0。

### 示例

```vue
<template>
  <view class="wrapper">
    <view class="box box1"> </view>
    <view class="box box2"> </view>
    <view class="box box3"> </view>
  </view>
</template>
<script>
class Index {}
export default new Index();
</script>
<style>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #cccccc;
}
.box {
  width: 400cpx;
  height: 400cpx;
  position: absolute;
}
.box1 {
  top: 0;
  left: 0;
  background-color: #ff0000;
}
.box2 {
  top: 150cpx;
  left: 150cpx;
  background-color: #0055dd;
}
.box3 {
  top: 300cpx;
  left: 300cpx;
  background-color: #00ff49;
}
</style>
<script cml-type="json">
{
  "base": {}
}
</script>
```

## 盒模型

chameleon 中盒模型`box-sizing`默认为`border-box`，即宽度包含内容、内边距盒边框。

<img src="../images/css-boxmodel.png" style="margin-left:150px;">

chameleon 盒模型基于 CSS 盒模型，每个 CML 元素都可视作一个盒子。我们一般在讨论设计或布局时，会提到「盒模型」这个概念。

盒模型描述了一个元素所占用的空间。每一个盒子有四条边界：外边距边界 margin edge, 边框边界 border edge, 内边距边界 padding edge 与内容边界 content edge。这四层边界，形成一层层的盒子包裹起来，这就是盒模型大体上的含义。

- **`width: {length}`** 默认值 0

- **`height: {length}`** 默认值 0

- **`padding`**：内边距，内容和边框之间的距离，默认值 0。可有以下写法:

  - `padding-left: {length}` 默认值 0
  - `padding-right: {length}` 默认值 0
  - `padding-top: {length}` 默认值 0
  - `padding-bottom: {length}` 默认值 0

支持简写模式：`padding：{length length length length}`

- **`margin: {length}`** 外边距，元素和元素之间的空白距离。值类型为 length 默认值 0。可有如下写法：

  - `margin-left: {length}` 默认值 0
  - `margin-right: {length}` 默认值 0
  - `margin-top: {length}` 默认值 0
  - `margin-bottom: {length}` 默认值 0

支持简写模式：`margin: {length length length length}`

- **`border`**：设定边框，简写方式：`border：1px solid #ff0000;`

- **`border-style: {string}`** 设定边框样式，值类型为 `string`，可选值为 `solid | dashed | dotted`，默认值 `solid`。可有如下写法：

  - `border-left-style: {string}` 可选值为 `solid | dashed | dotted`默认值 solid
  - `border-top-style: {string}` 可选值为 `solid | dashed | dotted`默认值 solid
  - `border-right-style: {string}` 可选值为 `solid | dashed | dotted`默认值 solid
  - `border-bottom-style: {string}` 可选值为 `solid | dashed | dotted`默认值 solid

- **`border-width: {length}`** 设定边框宽度非负值，默认值 0。可有如下写法：

  - `border-left-width: {length}` 非负值，默认值 0
  - `border-top-width: {length}` 非负值，默认值 0
  - `border-right-width: {length}` 非负值，默认值 0
  - `border-bottom-width: {length}` 非负值，默认值 0

- **`border-color: {color}`**：设定边框颜色默认值 `#000000`。可有如下写法：

  - `border-left-color: {color}` 默认值 #000000
  - `border-top-color: {color}` 默认值 #000000
  - `border-right-color: {color}` 默认值 #000000
  - `border-bottom-color: {color}` 默认值 #000000

- **`border-radius: {length}`** 设定圆角默认值 0。可有如下写法：

  - `border-bottom-left-radius: {length}` 非负值，默认值 0
  - `border-bottom-right-radius: {length}` 非负值，默认值 0
  - `border-top-left-radius: {length}` 非负值，默认值 0
  - `border-top-right-radius: {length}` 非负值，默认值 0

** 注意 **

chameleon 盒模型的 box-sizing 默认为 border-box，即盒子的宽高包含内容、内边距和边框的宽度，不包含外边距的宽度。

目前在 \<image\> 组件上尚无法只定义一个或几个角的 border-radius。比如你无法在这两个组件上使用 `border-top-left-radius`。该约束只对 iOS 生效，Android 并不受此限制。

尽管 overflow:hidden 在 Android 上是默认行为，但只有下列条件都满足时，一个父 view 才会去 clip 它的子 view。这个限制只对 Android 生效，iOS 不受影响。

- 父 view 是 div, a, cell, refresh 或 loading。
- 系统版本是 Android 4.3 或更高。
- 系统版本不是 Andorid 7.0。
- 父 view 没有 background-image 属性或系统版本是 Android 5.0 或更高。

### 示例：

```vue
<template>
  <view>
    <image
      style="width: 400cpx; height: 200cpx; margin-left: 20cpx;"
      src="https://g.alicdn.com/mtb/lab-zikuan/0.0.18/weex/weex_logo_blue@3x.png"
    ></image>
  </view>
</template>
```

## 文本

文本类组件及通用样式。

文本类组件共享一些通用样式, 这类组件目前包括 `<text>`和`<input>`。

### 属性

- color {color}：文字颜色。

  可选值为色值，支持 RGB（ rgb(255, 0, 0) ）；RGBA（ rgba(255, 0, 0, 0.5) ）；十六进制（ #ff0000 ）；精简写法的十六进制（ #f00 ）；色值关键字（red）。

- lines {number}: 指定文本行数。仅在 `<text>` 组件中支持。默认值是 0 代表不限制行数。

- font-size {number}：文字大小。

- font-style {string}：字体类别。可选值 normal | italic 默认为 normal。

- font-weight {string}：字体粗细程度

  - 可选值: normal, bold, 100, 200, 300, 400, 500, 600, 700, 800, 900
  - normal 等同于 400, bold 等同于 700；
  - 默认值: normal；
  - iOS 支持 9 种 font-weight 值；Android 仅支持 400 和 700, 其他值会设为 400 或 700
  - 类似 lighter, bolder 这样的值暂时不支持

- text-decoration {string}：字体装饰，可选值 none | underline | line-through 默认值为 none。

- text-align {string}：对齐方式。可选值 left | center | right 默认值为 left。目前暂不支持 justify, justify-all。

- font-family {string}：设置字体。

  这个设置 不保证 在不同平台，设备间的一致性。如所选设置在平台上不可用，将会降级到平台默认字体。

- text-overflow {string}：设置内容超长时的省略样式。可选值 clip | ellipsis

## 尺寸

为了统一多端尺寸单位，呈现效果一致，同时页面响应式，项目中统一采用`cpx`作为尺寸单位，规定以屏幕 750px（占满屏幕）视觉稿作为标准。

禁止[`.cml`](cml.md)组件中使用 `px`，若要使用请使用多态协议。

在 CML 项目中，我们使用`cpx`作为统一的长度单位。`cpx`可以根据  屏幕宽度自适应，我们规定屏幕宽度为 750cpx。你也可以在  多态组件灰度层使用某一端的长度单位。

### 使用 cpx 设置元素宽度高度

```vue
<template>
  <view style="width: 100cpx; height: 100cpx; background: red;"></view>
</template>
```

### 使用 `cpx` 设置字体大小

```vue
<template>
  <text style="font-size: 24cpx;">Chameleon</text>
</template>
```

### 使用 `cpx` 设置行高

```vue
<template>
  <text style="font-size: 24cpx; line-height: 30cpx;">Chameleon</text>
</template>
```

### 使用 `cpx` 注意事项

** 应避免以下写法 **

```vue
<template>
  <text style="{{'font-size: ' + fontSize + 'cpx'}}">Chameleon</text>
</template>
<script>
class Test {
  data: {
    fontSize: 24,
  };
}
export default new Test();
</script>
```

可以改成以下写法

```vue
<template>
  <text style="{{cstyle}}">Chameleon</text>
</template>
<script>
class Test {
  data: {
    fontSize: 24
  },
  computed: {
    cstyle() {
      return 'font-size: ' + this.fontSize + 'cpx'
    }
  }
}
export default new Test()
</script>
```

### color 单位

支持以下写法：

```css
.class-name {
  color: #0f0; /* 3-chars hex */
  color: #00ff00; /* 6-chars hex */
  color: rgb(255, 0, 0); /* rgba */
  color: rgba(255, 0, 0, 0.5); /* rgba */
  color: transparent; /* transparent */
  color: orange; /* Basic color keywords */
  color: darkgray; /* Extended color keywords */
}
```

**注意**

- 不支持 hsl(), hsla(), currentColor, 8 个字符的十六进制颜色。

- rgb(a,b,c) 或 rgba(a,b,c,d) 的性能比其他颜色格式差很多，请选择合适的颜色格式。

### number 单位

仅仅一个数字。用于 opacity，lines 等。

有时值必须是整数，例如：lines。

### percentage 单位 (暂不支持)

表示百分比值，如“50％”，“66.7％”等。

它是 CSS 标准的一部分，但 CML 暂不支持。

## 颜色

<table>
  <tr>
    <th colspan="2">基础颜色关键词</th>
    <th colspan="2">扩展颜色关键词</th>
  </tr>
  <tr>
    <th>颜色名</th>
    <th>十六进制RGB值</th>
    <th>颜色名</th>
    <th>十六进制RGB值</th>
  </tr>
  <tr>
    <td>black(黑)</td>
    <td>#000000</td>
    <td>aliceblue</td>
    <td>#F0F8FF</td>
  </tr>
  <tr>
    <td>silver(银)</td>
    <td>#C0C0C0</td>
    <td>antiquewhite</td>
    <td>#FAEBD7</td>
  </tr>
  <tr>
    <td>gray(灰)</td>
    <td>#808080</td>
    <td>aqua</td>
    <td>#00FFFF</td>
  </tr>
  <tr>
    <td>white(白)</td>
    <td>#FFFFFF</td>
    <td>aquamarine</td>
    <td>#7FFFD4</td>
  </tr>
  <tr>
    <td>maroon(褐紫红)</td>
    <td>#800000</td>
    <td>azure</td>
    <td>#F0FFFF</td>
  </tr>
  <tr>
    <td>red(红)</td>
    <td>#FF0000</td>
    <td>beige</td>
    <td>#F5F5DC</td>
  </tr>
  <tr>
    <td>purple(紫)</td>
    <td>#800080</td>
    <td>bisque</td>
    <td>#FFE4C4</td>
  </tr>
  <tr>
    <td>fuchsia(晚樱)</td>
    <td>#FF00FF</td>
    <td>black</td>
    <td>#000000</td>
  </tr>
  <tr>
    <td>green(绿)</td>
    <td>#008000</td>
    <td>blanchedalmond</td>
    <td>#FFEBCD</td>
  </tr>
  <tr>
    <td>lime(石灰)</td>
    <td>#00FF00</td>
    <td>blue</td>
    <td>#0000FF</td>
  </tr>
  <tr>
    <td>olive(橄榄)</td>
    <td>#808000</td>
    <td>blueviolet</td>
    <td>#8A2BE2</td>
  </tr>
  <tr>
    <td>yellow(黄)</td>
    <td>#FFFF00</td>
    <td>brown</td>
    <td>#A52A2A</td>
  </tr>
  <tr>
    <td>navy(海军蓝)</td>
    <td>#000080</td>
    <td>burlywood</td>
    <td>#DEB887</td>
  </tr>
  <tr>
    <td>blue(蓝)</td>
    <td>#0000FF</td>
    <td>cadetblue</td>
    <td>#5F9EA0</td>
  </tr>
  <tr>
    <td>teal(水鸭)</td>
    <td>#008080</td>
    <td>chartreuse</td>
    <td>#7FFF00</td>
  </tr>
  <tr>
    <td>aqua(水蓝)</td>
    <td>#00FFFF</td>
    <td>chocolate</td>
    <td>#D2691E</td>
  </tr>
  <tr>
    <td colspan="2" rowspan="131"></td>
    <td>coral</td>
    <td>#FF7F50</td>
  </tr>
  <tr>
    <td>cornflowerblue</td>
    <td>#6495ED</td>
  </tr>
  <tr>
    <td>cornsilk</td>
    <td>#FFF8DC</td>
  </tr>
  <tr>
    <td>crimson</td>
    <td>#DC143C</td>
  </tr>
  <tr>
    <td>cyan</td>
    <td>#00FFFF</td>
  </tr>
  <tr>
    <td>darkblue</td>
    <td>#00008B</td>
  </tr>
  <tr>
    <td>darkcyan</td>
    <td>#008B8B</td>
  </tr>
  <tr>
    <td>darkgoldenrod</td>
    <td>#B8860B</td>
  </tr>
  <tr>
    <td>darkgray</td>
    <td>#A9A9A9</td>
  </tr>
  <tr>
    <td>darkgreen</td>
    <td>#006400</td>
  </tr>
  <tr>
    <td>darkgrey</td>
    <td>#A9A9A9</td>
  </tr>
  <tr>
    <td>darkkhaki</td>
    <td>#BDB76B</td>
  </tr>
  <tr>
    <td>darkmagenta</td>
    <td>#8B008B</td>
  </tr>
  <tr>
    <td>darkolivegreen</td>
    <td>#556B2F</td>
  </tr>
  <tr>
    <td>darkorange</td>
    <td>#FF8C00</td>
  </tr>
  <tr>
    <td>darkorchid</td>
    <td>#9932CC</td>
  </tr>
  <tr>
    <td>darkred</td>
    <td>#8B0000</td>
  </tr>
  <tr>
    <td>darksalmon</td>
    <td>#E9967A</td>
  </tr>
  <tr>
    <td>darkseagreen</td>
    <td>#8FBC8F</td>
  </tr>
  <tr>
    <td>darkslateblue</td>
    <td>#483D8B</td>
  </tr>
  <tr>
    <td>darkslategray</td>
    <td>#2F4F4F</td>
  </tr>
  <tr>
    <td>darkslategrey</td>
    <td>#2F4F4F</td>
  </tr>
  <tr>
    <td>darkturquoise</td>
    <td>#00CED1</td>
  </tr>
  <tr>
    <td>darkviolet</td>
    <td>#9400D3</td>
  </tr>
  <tr>
    <td>deeppink</td>
    <td>#FF1493</td>
  </tr>
  <tr>
    <td>deepskyblue</td>
    <td>#00BFFF</td>
  </tr>
  <tr>
    <td>dimgray</td>
    <td>#696969</td>
  </tr>
  <tr>
    <td>dimgrey</td>
    <td>#696969</td>
  </tr>
  <tr>
    <td>dodgerblue</td>
    <td>#1E90FF</td>
  </tr>
  <tr>
    <td>firebrick</td>
    <td>#B22222</td>
  </tr>
  <tr>
    <td>floralwhite</td>
    <td>#FFFAF0</td>
  </tr>
  <tr>
    <td>forestgreen</td>
    <td>#228B22</td>
  </tr>
  <tr>
    <td>fuchsia</td>
    <td>#FF00FF</td>
  </tr>
  <tr>
    <td>gainsboro</td>
    <td>#DCDCDC</td>
  </tr>
  <tr>
    <td>ghostwhite</td>
    <td>#F8F8FF</td>
  </tr>
  <tr>
    <td>gold</td>
    <td>#FFD700</td>
  </tr>
  <tr>
    <td>goldenrod</td>
    <td>#DAA520</td>
  </tr>
  <tr>
    <td>gray</td>
    <td>#808080</td>
  </tr>
  <tr>
    <td>green</td>
    <td>#008000</td>
  </tr>
  <tr>
    <td>greenyellow</td>
    <td>#ADFF2F</td>
  </tr>
  <tr>
    <td>grey</td>
    <td>#808080</td>
  </tr>
  <tr>
    <td>honeydew</td>
    <td>#F0FFF0</td>
  </tr>
  <tr>
    <td>hotpink</td>
    <td>#FF69B4</td>
  </tr>
  <tr>
    <td>indianred</td>
    <td>#CD5C5C</td>
  </tr>
  <tr>
    <td>indigo</td>
    <td>#4B0082</td>
  </tr>
  <tr>
    <td>ivory</td>
    <td>#FFFFF0</td>
  </tr>
  <tr>
    <td>khaki</td>
    <td>#F0E68C</td>
  </tr>
  <tr>
    <td>lavender</td>
    <td>#E6E6FA</td>
  </tr>
  <tr>
    <td>lavenderblush</td>
    <td>#FFF0F5</td>
  </tr>
  <tr>
    <td>lawngreen</td>
    <td>#7CFC00</td>
  </tr>
  <tr>
    <td>lemonchiffon</td>
    <td>#FFFACD</td>
  </tr>
  <tr>
    <td>lightblue</td>
    <td>#ADD8E6</td>
  </tr>
  <tr>
    <td>lightcoral</td>
    <td>#F08080</td>
  </tr>
  <tr>
    <td>lightcyan</td>
    <td>#E0FFFF</td>
  </tr>
  <tr>
    <td>lightgoldenrodyellow</td>
    <td>#FAFAD2</td>
  </tr>
  <tr>
    <td>lightgray</td>
    <td>#D3D3D3</td>
  </tr>
  <tr>
    <td>lightgreen</td>
    <td>#90EE90</td>
  </tr>
  <tr>
    <td>lightgrey</td>
    <td>#D3D3D3</td>
  </tr>
  <tr>
    <td>lightpink</td>
    <td>#FFB6C1</td>
  </tr>
  <tr>
    <td>lightsalmon</td>
    <td>#FFA07A</td>
  </tr>
  <tr>
    <td>lightseagreen</td>
    <td>#20B2AA</td>
  </tr>
  <tr>
    <td>lightskyblue</td>
    <td>#87CEFA</td>
  </tr>
  <tr>
    <td>lightslategray</td>
    <td>#778899</td>
  </tr>
  <tr>
    <td>lightslategrey</td>
    <td>#778899</td>
  </tr>
  <tr>
    <td>lightsteelblue</td>
    <td>#B0C4DE</td>
  </tr>
  <tr>
    <td>lightyellow</td>
    <td>#FFFFE0</td>
  </tr>
  <tr>
    <td>lime</td>
    <td>#00FF00</td>
  </tr>
  <tr>
    <td>limegreen</td>
    <td>#32CD32</td>
  </tr>
  <tr>
    <td>linen</td>
    <td>#FAF0E6</td>
  </tr>
  <tr>
    <td>magenta</td>
    <td>#FF00FF</td>
  </tr>
  <tr>
    <td>maroon</td>
    <td>#800000</td>
  </tr>
  <tr>
    <td>mediumaquamarine</td>
    <td>#66CDAA</td>
  </tr>
  <tr>
    <td>mediumblue</td>
    <td>#0000CD</td>
  </tr>
  <tr>
    <td>mediumorchid</td>
    <td>#BA55D3</td>
  </tr>
  <tr>
    <td>mediumpurple</td>
    <td>#9370DB</td>
  </tr>
  <tr>
    <td>mediumseagreen</td>
    <td>#3CB371</td>
  </tr>
  <tr>
    <td>mediumslateblue</td>
    <td>#7B68EE</td>
  </tr>
  <tr>
    <td>mediumspringgreen</td>
    <td>#00FA9A</td>
  </tr>
  <tr>
    <td>mediumturquoise</td>
    <td>#48D1CC</td>
  </tr>
  <tr>
    <td>mediumvioletred</td>
    <td>#C71585</td>
  </tr>
  <tr>
    <td>midnightblue</td>
    <td>#191970</td>
  </tr>
  <tr>
    <td>mintcream</td>
    <td>#F5FFFA</td>
  </tr>
  <tr>
    <td>mistyrose</td>
    <td>#FFE4E1</td>
  </tr>
  <tr>
    <td>moccasin</td>
    <td>#FFE4B5</td>
  </tr>
  <tr>
    <td>navajowhite</td>
    <td>#FFDEAD</td>
  </tr>
  <tr>
    <td>navy</td>
    <td>#000080</td>
  </tr>
  <tr>
    <td>oldlace</td>
    <td>#FDF5E6</td>
  </tr>
  <tr>
    <td>olive</td>
    <td>#808000</td>
  </tr>
  <tr>
    <td>olivedrab</td>
    <td>#6B8E23</td>
  </tr>
  <tr>
    <td>orange</td>
    <td>#FFA500</td>
  </tr>
  <tr>
    <td>orangered</td>
    <td>#FF4500</td>
  </tr>
  <tr>
    <td>orchid</td>
    <td>#DA70D6</td>
  </tr>
  <tr>
    <td>palegoldenrod</td>
    <td>#EEE8AA</td>
  </tr>
  <tr>
    <td>palegreen</td>
    <td>#98FB98</td>
  </tr>
  <tr>
    <td>paleturquoise</td>
    <td>#AFEEEE</td>
  </tr>
  <tr>
    <td>palevioletred</td>
    <td>#DB7093</td>
  </tr>
  <tr>
    <td>papayawhip</td>
    <td>#FFEFD5</td>
  </tr>
  <tr>
    <td>peachpuff</td>
    <td>#FFDAB9</td>
  </tr>
  <tr>
    <td>peru</td>
    <td>#CD853F</td>
  </tr>
  <tr>
    <td>pink</td>
    <td>#FFC0CB</td>
  </tr>
  <tr>
    <td>plum</td>
    <td>#DDA0DD</td>
  </tr>
  <tr>
    <td>powderblue</td>
    <td>#B0E0E6</td>
  </tr>
  <tr>
    <td>purple</td>
    <td>#800080</td>
  </tr>
  <tr>
    <td>red</td>
    <td>#FF0000</td>
  </tr>
  <tr>
    <td>rosybrown</td>
    <td>#BC8F8F</td>
  </tr>
  <tr>
    <td>royalblue</td>
    <td>#4169E1</td>
  </tr>
  <tr>
    <td>saddlebrown</td>
    <td>#8B4513</td>
  </tr>
  <tr>
    <td>salmon</td>
    <td>#FA8072</td>
  </tr>
  <tr>
    <td>sandybrown</td>
    <td>#F4A460</td>
  </tr>
  <tr>
    <td>seagreen</td>
    <td>#2E8B57</td>
  </tr>
  <tr>
    <td>seashell</td>
    <td>#FFF5EE</td>
  </tr>
  <tr>
    <td>sienna</td>
    <td>#A0522D</td>
  </tr>
  <tr>
    <td>silver</td>
    <td>#C0C0C0</td>
  </tr>
  <tr>
    <td>skyblue</td>
    <td>#87CEEB</td>
  </tr>
  <tr>
    <td>slateblue</td>
    <td>#6A5ACD</td>
  </tr>
  <tr>
    <td>slategray</td>
    <td>#708090</td>
  </tr>
  <tr>
    <td>slategrey</td>
    <td>#708090</td>
  </tr>
  <tr>
    <td>snow</td>
    <td>#FFFAFA</td>
  </tr>
  <tr>
    <td>springgreen</td>
    <td>#00FF7F</td>
  </tr>
  <tr>
    <td>steelblue</td>
    <td>#4682B4</td>
  </tr>
  <tr>
    <td>tan</td>
    <td>#D2B48C</td>
  </tr>
  <tr>
    <td>teal</td>
    <td>#008080</td>
  </tr>
  <tr>
    <td>thistle</td>
    <td>#D8BFD8</td>
  </tr>
  <tr>
    <td>tomato</td>
    <td>#FF6347</td>
  </tr>
  <tr>
    <td>turquoise</td>
    <td>#40E0D0</td>
  </tr>
  <tr>
    <td>violet</td>
    <td>#EE82EE</td>
  </tr>
  <tr>
    <td>wheat</td>
    <td>#F5DEB3</td>
  </tr>
  <tr>
    <td>white</td>
    <td>#FFFFFF</td>
  </tr>
  <tr>
    <td>whitesmoke</td>
    <td>#F5F5F5</td>
  </tr>
  <tr>
    <td>yellow</td>
    <td>#FFFF00</td>
  </tr>
  <tr>
    <td>yellowgreen</td>
    <td>#9ACD32</td>
  </tr>
</table>

## 样式多态

更加方便地为不同端定制样式。

`.cml` 文件中的 `style` 标签支持样式的多态，即可以针对不同的平台写不同的样式，格式如下：

```vue
<style>
@media cml-type (支持的平台) {

}
.common {
  /**/
}
<style>
```

其中支持的平台为可以用逗号分隔多个平台，可选平台为 `web, weex, wx, alipay, baidu`。
demo 示例，`class1` 在各端的差异实现。

```vue
<template>
  <view><text class="class1">chameleon</text><view>
</template>
<script>
  class DemoPage {

  }
  export default new DemoPage();
</script>
<style>
@media cml-type (web) {
  .class1 {
    color: red;
  }
}
@media cml-type (weex) {
  .class1 {
    color: green;
  }
}
@media cml-type (wx,alipay,baidu,qq,tt) {
  .class1 {
    color: blue;
  }
}
</style>
<script cml-type="json">
{}
</script>
```

**注意**： 多态差异  语法只能在`.cml` 文件中使用，不能在`.css,.less`等其他样式文件中使用，如果需要分文件实现，可以在多态内部分别引入文件。例如：

```vue
<style lang="less">
@media cml-type (web) {
  @import './style1.less';
}
@media cml-type (weex) {
  @import './style2.less';
}
@media cml-type (wx,alipay,baidu,qq,tt) {
  @import './style3.less';
}
</style>
```

## 一致性基础样式

统一各端基础样式，增强表现一致性。

通常情况下，H5、小程序、客户端拥有各自的默认样式，各端呈现效果不一。所以，cml 框架会给各端添加一致性基础样式。

基础样式包括以下方面：

<table>
  <tr>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>布局</td>
    <td>
    display: flex; <br/>
    flex-direction: column;
    </td>
  </tr>
  <tr>
    <td>盒模型</td>
    <td>box-sizing: border-box;</td>
  </tr>
  <tr>
    <td>定位</td>
    <td>position: relative;</td>
  </tr>
  <tr>
    <td>文本</td>
    <td>
    display: block; <br/>
    font-size: 16px; <br/>
    white-space: pre-wrap;
    </td>
  </tr>
</table>

### 针对 H5 端添加的基础样式如下

```css
.cml-root {
  width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.cml-base {
  text-align: left;
  font-size: 0.4rem; /*15px*/
  letter-spacing: 0.02rem;
}

.cml-base,
.cml-base::before,
.cml-base::after {
  box-sizing: border-box;
  text-size-adjust: none;
}

.cml-view {
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.cml-text {
  display: block;
  box-sizing: border-box;
  position: relative;
  white-space: pre-wrap; /* not using 'pre': support auto line feed. */
  word-wrap: break-word;
  overflow: hidden; /* it'll be clipped if the height is not high enough. */

  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}
```

### 针对小程序添加的基础样式如下：

```css
.cml-base {
  text-align: left;
  font-size: 32rpx;
  letter-spacing: 1rpx;
  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.cml-base,
.cml-base::before,
.cml-base::after {
  box-sizing: border-box;
  text-size-adjust: none;
}
.cml-view {
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.cml-text {
  display: block;
  box-sizing: border-box;
  position: relative;
  white-space: pre-wrap; /* not using 'pre': support auto line feed. 保留空白符序列，但是正常地进行换行 */
  word-wrap: break-word; /* 在长单词或 URL 地址内部进行换行。 */
  overflow: hidden; /* it'll be clipped if the height is not high enough. */

  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}
```

说明如下：

<table>
  <tr>
    <th>class名</th>
    <th>代表含义</th>
  </tr>
  <tr>
    <td>.cml-root</td>
    <td>H5端 app 根节点</td>
  </tr>
  <tr>
    <td>.cml-base</td>
    <td>任一节点</td>
  </tr>
  <tr>
    <td>.cml-view</td>
    <td>view 元素</td>
  </tr>
  <tr>
    <td>.cml-text</td>
    <td>text 元素</td>
  </tr>
</table>

## 只跨 Web 和小程序的应用

查看[只跨 Web 和小程序的应用](../tutorial/web-wx-only-app.md)。

受限于客户端的 CMSS 渲染能力，开发会有诸多限制。如果你只需要跨 H5 和小程序应用时，开发会变得很轻便。
