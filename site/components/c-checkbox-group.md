# c-checkbox-group

---

复选框列表

### 属性

<table>
  <tr>
    <th width="200px">属性名</th>
    <th>类型</th>
    <th width="60px">必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>option</td>
    <td>Array</td>
    <td>是</td>
    <td>[]</td>
    <td>选项数组</td>
  </tr>
  <tr>
    <td>horizontal</td>
    <td>Boolean</td>
    <td>否</td>
    <td>false</td>
    <td>单选框排列方向，默认纵向排列</td>
  </tr>
  <tr>
    <td>position</td>
    <td>String</td>
    <td>否</td>
    <td>left</td>
    <td>按钮相对于文案的位置，可选值包括：left、right</td>
  </tr>
  <tr>
    <td>checkedIcon</td>
    <td>String</td>
    <td>否</td>
    <td>-</td>
    <td>选中时图标</td>
  </tr>
  <tr>
    <td>uncheckIcon</td>
    <td>String</td>
    <td>否</td>
    <td>-</td>
    <td>未选中时图标</td>
  </tr>
  <tr>
    <td>cstyle</td>
    <td>String</td>
    <td>否</td>
    <td>-</td>
    <td>自定义样式</td>
  </tr>
  <tr>
    <td>itemStyle</td>
    <td>String</td>
    <td>否</td>
    <td>-</td>
    <td>checkbox自定义样式</td>
  </tr>
  <tr>
    <td>c-bind:groupchange</td>
    <td>EventHandle</td>
    <td>否</td>
    <td></td>
    <td>点击按钮出发
        <br/>返回事件对象：
        <br/>event.detail
        <br/>返回值：
        <br/>event.detail.value - 修改后的选项数组
        <br/>event.detail.index - 修改的复选框索引
        <br/>event.detail.selected - 选中的项目文案数组
    </td>
  </tr>
</table>

### 示例

```vue
<template>
  <c-checkbox-group option="{{ checkboxGroupOption }}" c-bind:groupchange="groupChangeHandler">
  </c-checkbox-group>
</template>
<script>
class CCheckbox {
  data = {
    checkboxGroupOption: [
      {
        checked: true,
        label: 'one',
        disabled: true,
      },
      {
        checked: false,
        label: 'two',
      },
      {
        checked: false,
        label: 'three',
      },
    ],
    selected: 'one',
  };

  methods = {
    groupChangeHandler(e) {
      this.checkboxGroupOption = e.detail.value;
      this.selected = e.detail.selected.join(', ');
    },
  };
}
export default new CCheckbox();
</script>
<script cml-type="json">
{
  "base": {
      "usingComponents": {
          "c-checkbox-group": "cml-ui/components/c-checkbox-group/c-checkbox-group"
      }
  }
}
</script>
```

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/checkbox_group_wx.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">wx</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/checkbox_group_web.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">web</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/checkbox_group_weex.jpeg" width="200px" />
    <text style="color: #fda775;font-size: 24px;">native</text>
  </div>
</div>
