# textarea

---

多行输入框

###示例

```html
<template>
  <view class="page-demo">
    <text class="title-text">focus聚焦</text>
    <view class="input-wrap">
      <textarea placeholder="focus聚焦" focus="{{isfocus}}" c-bind:blur="bindblurevent"></textarea>
    </view>
    <text class="title-text"><text>数据绑定,value:{{inputValue}}</text></text>
    <view class="input-wrap">
      <textarea placeholder="数据绑定" value="" c-bind:input="inputEvent"></textarea>
    </view>
    <text class="title-text"><text>监听input事件,当前事件：{{eventName}}</text></text>
    <view class="input-wrap">
      <textarea
        placeholder="监听textarea事件"
        c-bind:input="testEvent"
        c-bind:blur="testEvent"
        c-bind:focus="testEvent"
        c-bind:confirm="testEvent"
      ></textarea>
    </view>
    <text class="title-text">placeholderColor web端不支持</text>
    <view class="input-wrap">
      <textarea
        placeholder="placeholderColor web端不支持"
        placer-holder-color="#ff0000;"
      ></textarea>
    </view>
    <text class="title-text">自定义样式</text>
    <view class="end-item">
      <textarea
        placeholder="自定义样式"
        cstyle="color: #00ff00; border: 1px solid #00f;"
      ></textarea>
    </view>
  </view>
</template>

<script>
  class Texrarea {
    data = {
      isfocus: false,
      inputValue: '',
      eventName: '触发的事件名称',
    };
    computed = {};
    watch = {};
    methods = {
      inputEvent(e) {
        this.inputValue = e.detail.value;
      },
      testEvent(e) {
        this.eventName = e.type;
      },
      bindblurevent() {
        console.log('blur');
        this.isfocus = false;
      },
    };
    mounted(res) {
      setTimeout(() => {
        this.isfocus = true;
      }, 300);
    }
  }
  export default new Texrarea();
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
  .title-text {
    color: #999;
    margin: 30cpx 20cpx 10cpx;
    display: block;
    font-size: 28cpx;
  }
  .end-item {
    margin-bottom: 40cpx;
    position: relative;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }
  .input-wrap {
    position: relative;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }
</style>

<script cml-type="json">
  {
    "base": {}
  }
</script>
```
