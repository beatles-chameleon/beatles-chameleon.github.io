# c-picker

---

底部弹起的滚动选择器

### 属性

<table>
  <tr>
    <th width="200px">属性名</th>
    <th>类型</th>
    <th>必填</th>
    <th width="100px">默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>show</td>
    <td>Boolean</td>
    <td>是</td>
    <td>false</td>
    <td>是否点击打开滚动选择器</td>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>否</td>
    <td>"请选择"</td>
    <td>滚动选择器的标题</td>
  </tr>
  <tr>
    <td>header-height</td>
    <td>Number</td>
    <td>是</td>
    <td>100</td>
    <td>滚动选择器标题栏的高度</td>
  </tr>
  <tr>
    <td>data-height</td>
    <td>Number</td>
    <td>是</td>
    <td>400</td>
    <td>滚动选择器数据栏的高度</td>
  </tr>
  <tr>
    <td>list</td>
    <td>Array</td>
    <td>是</td>
    <td></td>
    <td>滚动选择器滚动的数据,注意：，在新版内置组件，data 属性名已废弃</td>
  </tr>
  <tr>
    <td>default-index</td>
    <td>Number</td>
    <td>是</td>
    <td>0</td>
    <td>滚动选择器默认的数据索引</td>
  </tr>
  <tr>
    <td>text-align</td>
    <td>String</td>
    <td>是</td>
    <td>"center"</td>
    <td>滚动选择器的文本样式:"居中"</td>
  </tr>
  <tr>
    <td>item-style</td>
    <td>String</td>
    <td>否</td>
    <td></td>
    <td>自定义每一项item的样式，如 "color:blue;text-align:center;"</td>
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
  <tr>
    <td>c-bind:selectchange</td>
    <td>EventHandle</td>
    <td>是</td>
    <td></td>
    <td>
    选择器滚动时触发:
    <br/>
    返回事件对象:
    <br/>
    event.type="selectchange"
    <br/>
    event.detail = {index}</td>
  </tr>
</table>

### 示例

```vue
<template>
  <page title="c-picker演示">
    <view>
      <text class="select-text" c-bind:tap="showClick">点击选择：{{ provins[provinsIndex] }}</text>
      <c-picker
        c-if="{{pickerShow}}"
        show="{{pickerShow}}"
        height="{{500}}"
        header-height="{{100}}"
        text-align="center"
        data-scroller-height="{{400}}"
        list="{{provins}}"
        default-index="{{defaultIndex}}"
        confirm-btn-style="color:red"
        cancel-btn-style="color:red"
        c-bind:cancel="cancel"
        c-bind:confirm="confirm"
        c-bind:selectchange="selectchange"
      >
      </c-picker>
    </view>
  </page>
</template>
<script>
class CPicker {
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
    pickerShow: false,
  };

  computed = {};
  watch = {};

  methods = {
    selectchange(e) {
      this.provinsIndex = this.defaultIndex = e.detail.index;
    },
    showClick() {
      this.pickerShow = true;
    },
    cancel() {
      this.pickerShow = false;
    },
    confirm() {
      this.pickerShow = false;
    },
  };

  beforeCreate() {}
  created() {}
  beforeMount() {}
  mounted() {}
  beforeDestroy() {}
  destroyed() {}
}

export default new CPicker();
</script>
<style scoped>
.container {
  background: #f8f8f8;
}
.page-demo {
  background: #fafafa;
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
            "c-picker": "cml-ui/components/c-picker/c-picker"
        }
    }
}
</script>
```

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker.png" width="200px" height="100%" />
    <text style="color: #fda775;font-size: 24px;">wx</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker_web.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;">web</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../images/picker_weex.jpeg" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;">native</text>
  </div>
</div>

### Bug & Tips

1.使用`c-picker`组件时控制显示隐藏需要在该组件上添加`c-if`指令，保证隐藏时该节点被销毁，否则会导致微信小程序错误。
