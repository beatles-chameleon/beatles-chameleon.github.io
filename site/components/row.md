# row

---

横向 flex 布局容器

`<row>`是提供横向 flex 布局的容器，与 `<col>`组件（提供纵向 flex 布局）结合使用，可快速构建整洁干净的 flex 布局效果。

### row 属性

<table>
  <tr>
    <th width="200px">属性名</th>
    <th>类型</th>
    <th width="60px">必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>justify</td>
    <td>String</td>
    <td>否</td>
    <td>center</td>
    <td>横向对齐方式，可选值包括：start/end/center/space-around/space-between</td>
  </tr>
  <tr>
    <td>align</td>
    <td>String</td>
    <td>否</td>
    <td>middle</td>
    <td>纵向对齐方式，可选值包括：top/middle/bottom</td>
  </tr>
  <tr>
    <td>height</td>
    <td>Number</td>
    <td>否</td>
    <td>0</td>
    <td>容器高度，值为0时容器高度由内部元素高度决定</td>
  </tr>
  <tr>
    <td>wrap</td>
    <td>Boolean</td>
    <td>否</td>
    <td>false</td>
    <td>是否支持换行</td>
  </tr>
  <tr>
    <td>margin</td>
    <td>Number</td>
    <td>否</td>
    <td>0</td>
    <td>容器上下间隔（单位cpx）</td>
  </tr>
</table>

### 示例

```vue

<template>
  <row margin="{{100}}" height="{{200}}">
    <col width="{{50}}" height="{{100}}" background-color="#ddd" margin="{{20}}">
      <view></view>
    </col>
    <col  width="{{100}}" height="{{100}}" background-color="#bbb" margin="{{20}}">
      <view></view>
    </col>
    <col  width="{{200}}" height="{{100}}" background-color="#aaa" margin="{{20}}">
      <view></view>
    </col>
  </row>
</template>
<script>

class Row  {
}
export default new Row();
</script>

<script cml-type="json">
{
  "base": {}
}
</script>
```

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/row_wx.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">wx</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/row_web.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">web</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/row_weex.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">native</text>
  </div>
</div>

### Bug & Tips

1. `<row>` 组件内部不一定要使用`<col>`组件，可使用任何需要布局的容器或组件。
2. 如果`<row>` 组件内部不使用`<col>`组件，需要自行设置内部的宽高等属性。
3. 如果`<row>` 组件内部使用`<col>`组件，需要将`<col>`组件设置为`<row>` 组件的直接子节点。
4. `<row>` 和 `<col>`组件组合使用类似栅格布局，`<row>` 和 `<col>`组件只能相互嵌套。
5. 建议使用高度属性设置组件高度，而非使用 css 控制，否则垂直居中的样式可能会受到影响。
