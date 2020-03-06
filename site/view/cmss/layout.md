# 布局

[关于常用布局的汇总](https://github.com/chameleon-team/cml-flexbox)

## Flexbox

chameleon 布局模型基于 CSS Flexbox，以便所有页面元素的排版能够一致可预测，同时页面布局能适应各种设备或者屏幕尺寸。

Flexbox 包含 flex 容器和 flex 成员项。如果一个 chameleon 元素可以容纳其他元素，那么它就成为 flex 容器。需要注意的是，flexbox 的老版规范相较新版有些出入，比如是否能支持 wrapping。这些都描述在 W3C 的工作草案中了，你需要注意下新老版本之间的不同。

### Flex 容器

在 chameleon 中，Flexbox 是默认且唯一的布局模型，所以你不需要手动为元素添加 display: flex; 属性。

- flex-direction：

  定义了 flex 容器中 flex 成员项的排列方向。可选值为 row | column，默认值为 column

  - `column`：从上到下排列。
  - `row`：从左到右排列。

- justify-content：

  定义了 flex 容器中 flex 成员项在主轴方向上如何排列以处理空白部分。可选值为 `flex-start | flex-end | center | space-between`，默认值为 flex-start。

  - `flex-start`：是默认值，所有的 flex 成员项都排列在容器的前部；
  - `flex-end`：则意味着成员项排列在容器的后部；
  - `center`：即中间对齐，成员项排列在容器中间、两边留白；
  - `space-between`：表示两端对齐，空白均匀地填充到 flex 成员项之间。
  - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<img src="../../assets/css-flexbox-justify.png" style="width:300px;margin-left:150px;">
- align-items：

定义了 flex 容器中 flex 成员项在纵轴方向上如何排列以处理空白部分。可选值为 stretch | flex-start | center | flex-end，默认值为 stretch。

    - `stretch`： 是默认值，即拉伸高度至 flex 容器的大小；
    - `flex-start`： 则是上对齐，所有的成员项排列在容器顶部；
    - `flex-end`： 是下对齐，所有的成员项排列在容器底部；
    - `center`： 是中间对齐，所有成员项都垂直地居中显示。
    - `baseline`： 项目的第一行文字的基线对齐。

<img src="../../assets/css-flexbox-align.png" style="width:300px;margin-left:150px;" >

- flex-flow

  说明:

  - flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性, 用于设置或检索弹性盒模型对象的子元素排列方式。
  - flex-direction 属性规定灵活项目的方向。
  - flex-wrap 属性规定灵活项目是否拆行或拆列。

  语法:

  ```
  flex-flow: flex-direction flex-wrap;
  ```

### Flex 成员项

flex 属性定义了 flex 成员项可以占用容器中剩余空间的大小。如果所有的成员项设置相同的值 flex: 1，它们将平均分配剩余空间. 如果一个成员项设置的值为 flex: 2，其它的成员项设置的值为 flex: 1，那么这个成员项所占用的剩余空间是其它成员项的 2 倍。

- flex {number}：值为 number 类型。

### 示例

一个简单的网格布局。

```html
<template>
  <view>
    <view c-for="{{list}}" c-for-index="i" c-for-item="item" class="row">
      <view c-for="{{item}}" c-for-index="k" c-for-item="text" class="item">
        <view>
          <text>{{text}}</text>
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

chameleon 支持 position 定位，用法与 CSS position 类似。为元素设置 position 后，可通过 top、right、bottom、left 四个属性设置元素坐标。

- position {string}：

  设置定位类型。可选值为 `relative | absolute | fixed | sticky`，默认值为 relative。

  - `relative` 是默认值，指的是相对定位；
  - `absolute` 是绝对定位，以元素的容器作为参考系；
  - `fixed` 保证元素在页面窗口中的对应位置显示；
  - `sticky` 指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部。

- `top {number}`：距离上方的偏移量，默认为 0。
- `bottom {number}`：距离下方的偏移量，默认为 0。
- `left {number}`：距离左方的偏移量，默认为 0。
- `right {number}`：距离右方的偏移量，默认为 0。

### 示例

```html
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
