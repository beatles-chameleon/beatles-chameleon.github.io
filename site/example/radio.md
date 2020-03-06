# radio

---

单选框

### 示例

```html
<template>
  <view>
    <view class="box">
      <radio checked="{{ radioValue1 }}" label="Option1" c-bind:change="valueChange1"> </radio>
    </view>
    <view class="title"><text>value: {{ radioValue1 ? 'true' : 'false' }}</text></view>
    <view class="box">
      <radio
        checked="{{ radioValue2 }}"
        label="Option3"
        position="right"
        c-bind:change="valueChange2"
      >
      </radio>
    </view>
    <view class="title"><text>value: {{ radioValue2 ? 'true' : 'false' }}</text></view>
    <view class="box">
      <radio checked="{{ radioValue3 }}" label="Option2" disabled="{{ true }}"> </radio>
    </view>
    <view class="title"><text>value: {{ radioValue3 ? 'true' : 'false' }}</text></view>
    <view class="box">
      <radio checked="{{ radioValue4 }}" label="Option3" position="right" disabled="{{ true }}">
      </radio>
    </view>
    <view class="title"><text>value: {{ radioValue4 ? 'true' : 'false' }}</text></view>
  </view>
</template>
<script>
  class Radio {
    data = {
      radioValue1: false,
      radioValue2: true,
      radioValue3: true,
      radioValue4: false,
    };
    methods = {
      valueChange1(e) {
        this.radioValue1 = e.detail.value;
      },
      valueChange2(e) {
        this.radioValue2 = e.detail.value;
      },
    };
  }
  export default new Radio();
</script>
<style scoped>
  .container {
    position: absolute;
    top: 88cpx;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title {
    font-size: 38cpx;
    font-weight: 400;
    margin: 20cpx 0;
    padding: 10cpx 30cpx;
    background: #eee;
  }
  .radio-value {
    font-size: 32cpx;
  }
  .box {
    margin: 0cpx 50cpx;
  }
</style>

<script cml-type="json">
  {
    "base": {}
  }
</script>
```
