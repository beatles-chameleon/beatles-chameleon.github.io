# checkbox

---

复选框

### 示例

```html
<template>
  <view>
    <text class="title">Checkbox</text>
    <view class="box">
      <checkbox
        checked="{{checkboxValue1}}"
        disabled="{{false}}"
        label="Checkbox1"
        c-bind:change="valueChange1"
      >
      </checkbox>
    </view>
    <view class="title"><text>value: {{ checkboxValue1 ? 'true' : 'false' }}</text></view>
    <view class="box">
      <checkbox
        checked="{{checkboxValue2}}"
        label="Checkbox2"
        position="right"
        c-bind:change="valueChange2"
      >
      </checkbox>
    </view>
    <view class="title"><text>value: {{ checkboxValue2 ? 'true' : 'false' }}</text></view>
    <view class="box">
      <checkbox checked="{{checkboxValue3}}" label="Checkbox3" position="right" disabled="{{true}}">
      </checkbox>
    </view>
    <view class="title"><text>value: {{ checkboxValue3 ? 'true' : 'false' }}</text></view>
  </view>
</template>
<script>
  class Checkbox {
    data = {
      checkboxValue1: true,
      checkboxValue2: true,
      checkboxValue3: true,
    };
    methods = {
      valueChange1(e) {
        this.checkboxValue1 = e.detail.value;
      },
      valueChange2(e) {
        this.checkboxValue2 = e.detail.value;
      },
    };
  }

  export default new Checkbox();
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
    padding: 8cpx 30cpx;
    background: #eee;
  }
  .checkbox-value {
    font-size: 32cpx;
  }
  .box {
    margin: 10cpx 50cpx;
  }
</style>

<script cml-type="json">
  {
    "base": {}
  }
</script>
```
