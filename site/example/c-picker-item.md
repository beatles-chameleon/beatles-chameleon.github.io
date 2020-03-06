# c-picker-item

---

滚动选择器

###示例

```html
<template>
  <view>
    <text class="select-text">选择的值：{{provins[provinsIndex]}}</text>
    <c-picker-item
      text-align="center"
      height="{{400}}"
      list="{{provins}}"
      default-index="{{defaultIndex}}"
      c-bind:selectchange="selectchange"
    ></c-picker-item>
  </view>
</template>
<script>
  class Index {
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
    };
    methods = {
      selectchange(e) {
        this.provinsIndex = this.defaultIndex = e.detail.index;
      },
    };
  }
  export default new Index();
</script>
<style scoped>
  .select-text {
    font-size: 32cpx;
    text-align: center;
  }
</style>

<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-picker-item": "cml-ui/components/c-picker-item/c-picker-item"
      }
    }
  }
</script>
```
