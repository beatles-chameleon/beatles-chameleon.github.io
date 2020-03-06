# view

---

视图容器。

### 示例

```html
<template>
  <view class="page-demo">
    <scroller height="{{-1}}">
      <view class="page-box">
        <view class="page-section">
          <view class="page-section-title"><text>flex-direction: row</text></view>
          <view class="page-section-content" style="flex-direction: row">
            <view class="flex-item demo-1"><text>I</text></view>
            <view class="flex-item demo-2"><text>II</text></view>
            <view class="flex-item demo-3"><text>III</text></view>
          </view>
        </view>
        <view class="page-section">
          <view class="page-section-title"><text>flex-direction: column</text></view>
          <view class="page-section-content" style="flex-direction: column">
            <view class="flex-item-V demo-1"><text>I</text></view>
            <view class="flex-item-V demo-2"><text>II</text></view>
            <view class="flex-item-V demo-3"><text>III</text></view>
          </view>
        </view>
      </view>
    </scroller>
  </view>
</template>
<script>
  class View {
    data = {};
  }
  export default new View();
</script>
<style scoped>
  .page-demo {
    background: #fafafa;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .page-box {
    margin-top: 80cpx;
  }
  .page-section-title {
    font-size: 32cpx;
    margin: 0 30cpx;
  }
  .page-section-content {
    margin: 80cpx;
    display: flex;
    font-size: 32cpx;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .flex-item {
    width: 200cpx;
    height: 300cpx;
    line-height: 300cpx;
    justify-content: center;
    align-items: center;
  }
  .flex-item-V {
    width: 300cpx;
    height: 200cpx;
    line-height: 200cpx;
    justify-content: center;
    align-items: center;
  }
  .demo-1 {
    background-color: #81c0c0;
  }
  .demo-2 {
    background-color: #97cbff;
  }
  .demo-3 {
    background-color: #e0e0e0;
  }
</style>
<script cml-type="json">
  {
    "base": {}
  }
</script>
```
