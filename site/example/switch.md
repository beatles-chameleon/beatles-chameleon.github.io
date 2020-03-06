# switch

---

开关

### 示例

```html
<template>
  <view>
    <view class="box">
      <switch checked="{{ switchValue1 }}" label="Switch" c-bind:change="switchChange1"></switch>
    </view>
    <view class="title"> <text> switch value: {{ switchValue1 ? 'true': 'false' }}</text></view>
    <view class="box">
      <switch checked="{{ switchValue2 }}" label="Switch" c-bind:change="switchChange2"> </switch>
    </view>
    <view class="title"><text> switch value: {{ switchValue2 ? 'true': 'false'}}</text></view>
    <view class="box">
      <switch checked="{{ switchValue3 }}" label="Disabled Switch" disabled="{{true}}"></switch>
    </view>
    <view class="title"><text> switch value: {{ switchValue3 ? 'true': 'false' }}</text></view>
    <view class="box">
      <switch checked="{{ switchValue4 }}" label="Disabled Switch" disabled="{{true}}"></switch>
    </view>
    <view class="title"><text> switch value: {{ switchValue4 ? 'true': 'false' }}</text></view>
  </view>
</template>
<script>
  class Switch {
    data = {
      switchValue1: false,
      switchValue2: true,
      switchValue3: true,
      switchValue4: false,
    };
    methods = {
      switchChange1(e) {
        this.switchValue1 = e.detail.value;
      },
      switchChange2(e) {
        this.switchValue2 = e.detail.value;
      },
    };
  }

  export default new Switch();
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
