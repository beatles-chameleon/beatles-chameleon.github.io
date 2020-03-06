# c-picker

---

底部弹起的滚动选择器

### 示例

```html
<template>
  <page title="c-picker 演示">
    <view>
      <text class="select-text" c-bind:tap="showClick">点击选择：{{column[columnIndex]}}</text>
      <c-picker
        c-if="{{pickerShow}}"
        show="{{pickerShow}}"
        title="请选择"
        header-height="{{100}}"
        text-align="center"
        data-height="{{400}}"
        list="{{column}}"
        default-index="{{defaultIndex}}"
        c-bind:cancel="cancel"
        c-bind:confirm="confirm"
        c-bind:selectchange="selectchange"
      >
      </c-picker>
    </view>
  </page>
</template>
<script>
  class Index {
    data = {
      column: [
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
      columnIndex: 0,
      pickerShow: false,
    };

    methods = {
      selectchange(e) {
        this.columnIndex = this.defaultIndex = e.detail.index;
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
  }
  export default new Index();
</script>
<style scoped>
  .select-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32cpx;
    text-align: center;
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
