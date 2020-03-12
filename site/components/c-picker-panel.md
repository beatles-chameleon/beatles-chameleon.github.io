# c-picker-panel

---

从底部弹起的控制板。

### 属性

<table>
  <tr>
    <th width="170px">属性名</th>
    <th>类型</th>
    <th width="60px">必填</th>
    <th width="90px">默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>show</td>
    <td>Boolean</td>
    <td>是</td>
    <td>false</td>
    <td>是否点击打开底部控制板</td>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>否</td>
    <td>"请选择"</td>
    <td>控制板的标题</td>
  </tr>
  <tr>
    <td>header-height</td>
    <td>Number</td>
    <td>是</td>
    <td>100</td>
    <td>底部控制板标题栏的高度</td>
  </tr>
  <tr>
    <td>cancel-btn-style</td>
    <td>String</td>
    <td>否</td>
    <td></td>
    <td>自定义取消按钮的样式，如 "color:red;text-align:center;"</td>
  </tr>
  <tr>
    <td>confirm-btn-style</td>
    <td>String</td>
    <td>否</td>
    <td></td>
    <td>自定义确定按钮的样式,如 "color:red;text-align:center;"</td>
  </tr>
  <tr>
    <td>c-bind:cancel</td>
    <td>EventHandle</td>
    <td>否</td>
    <td></td>
    <td>用户点击"取消"时触发:<br/>返回事件对象:<br/>event.type="cancel"</td>
  </tr>
  <tr>
    <td>c-bind:confirm</td>
    <td>EventHandle</td>
    <td>否</td>
    <td></td>
    <td>用户点击"确定"时触发:<br/>返回事件对象:<br/>event.type="confirm"</td>
  </tr>
</table>

### 示例

**c-picker-panel**

```vue
<template>
  <page title="c-picker-panel演示">
    <view class="container">
      <text class="select-text" c-bind:tap="showClick">点击选择：{{ provins[provinsIndex] }}</text>
      <c-picker-panel
        c-if="{{panelShow}}"
        show="{{panelShow}}"
        height="{{500}}"
        header-height="{{100}}"
        c-bind:cancel="cancel"
        c-bind:confirm="confirm"
      >
        <c-picker-item
          text-align="center"
          height="{{400}}"
          list="{{provins}}"
          default-index="{{defaultIndex}}"
          c-bind:selectchange="selectchange"
        >
        </c-picker-item>
      </c-picker-panel>
    </view>
  </page>
</template>
<script>
import { provins } from './data';
class CPickerPanel {
  data = {
    provins: [
      '北京市',
      '天津市',
      '河北省',
      '山西省',
      '内蒙古',
      '辽宁省',
      '吉林省',
      '黑龙江省',
      '上海市',
      '江苏省',
      '浙江省',
      '安徽省',
      '福建省',
      '江西省',
      '山东省',
      '河南省',
      '湖北省',
      '湖南省',
      '广东省',
      '广西',
      '海南省',
      '重庆市',
      '四川省',
      '贵州省',
      '云南省',
      '西藏',
      '陕西省',
      '甘肃省',
      '青海',
      '宁夏',
      '新疆',
    ],
    defaultIndex: 0,
    provinsIndex: 0,
    panelShow: false,
  };

  computed = {};
  watch = {};

  methods = {
    selectchange(e) {
      this.provinsIndex = this.defaultIndex = e.detail.index;
    },
    showClick() {
      this.panelShow = true;
    },
    cancel() {
      this.panelShow = false;
    },
    confirm() {
      this.panelShow = false;
    },
  };

  beforeCreate() {}
  created() {}
  beforeMount() {}
  mounted() {}
  beforeDestroy() {}
  destroyed() {}
}

export default new CPickerPanel();
</script>
<style scoped>
.container {
  background: #f8f8f8;
  position: absolute;
  top: 88cpx;
  bottom: 0;
  left: 0;
  right: 0;
}
.page-demo {
  background: #fafafa;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.title-text {
  color: #999;
  margin: 30cpx 20cpx 10cpx;
  display: block;
  font-size: 28cpx;
}
.picker-item {
  background: #fff;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
}
.picker-text-left {
  font-size: 40cpx;
  height: 70cpx;
  line-height: 70cpx;
  margin-left: 20cpx;
  width: 300cpx;
}
.picker-text-right {
  font-size: 40cpx;
  height: 70cpx;
  line-height: 70cpx;
  margin-left: 20cpx;
  flex: 1;
  text-align: center;
}
.select-text {
  font-size: 32cpx;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
            "c-picker-panel": "cml-ui/components/c-picker-panel/c-picker-panel",
            "c-picker-item": "cml-ui/components/c-picker-item/c-picker-item"
        }
    }
}
</script>
```

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker_panel.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">wx</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker_panel_web.png" width="200px" />
    <text style="color: #fda775;font-size: 24px;">web</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker_panel_weex.jpeg" width="200px" />
    <text style="color: #fda775;font-size: 24px;">native</text>
  </div>
</div>

### Bug & Tips

1.使用`c-picker-panel`组件时控制显示隐藏需要在该组件上添加`c-if`指令，保证隐藏时该节点被销毁，否则会导致微信小程序错误。
