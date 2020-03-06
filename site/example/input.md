# input

---

输入框

###示例

```html
<template>
  <view class="page-demo">
    <scroller
      height = "{{-1}}"
    >
      <text class="title-text" >focus聚焦 web端不支持</text>
      <view class="input-wrap">
        <input placeholder="focus聚焦 web端不支持" focus="{{isfocus}}" c-bind:blur="bindblurevent"></input>
      </view>
      <text class="title-text"><text>数据绑定,value:{{inputValue}}</text></text>
      <view class="input-wrap">
        <input placeholder="数据绑定" value="{{inputValue}}" c-bind:input="inputEvent"></input>
      </view>
      <text class="title-text"><text>监听input事件,当前事件：{{eventName}}</text></text>
      <view class="input-wrap">
        <input placeholder="监听input事件"  c-bind:input="testEvent" c-bind:blur="testEvent" c-bind:focus="testEvent" c-bind:confirm="testEvent"></input>
      </view>
      <text class="title-text">最大长度是5</text>
      <view class="input-wrap">
        <input placeholder="最大长度是5" maxlength="{{5}}"></input>
      </view>
      <text class="title-text">text类型的input</text>
      <view class="input-wrap">
        <input placeholder="text类型的input" type="text"></input>
      </view>
      <text class="title-text">number类型的input</text>
      <view class="input-wrap">
        <input placeholder="number类型的input" type="number"></input>
      </view>
      <text class="title-text">password类型的input</text>
      <view class="input-wrap">
        <input placeholder="password类型的input" type="password"></input>
      </view>
      <text class="title-text">禁用input</text>
      <view class="input-wrap">
        <input placeholder="禁用input" disabled="{{true}}"></input>
      </view>
      <text class="title-text">键盘右下键按钮done web端不支持</text>
      <view class="input-wrap">
        <input placeholder="键盘右下键按钮done web端不支持" return-key-type="done"></input>
      </view>
      <text class="title-text">键盘右下键按钮search web端不支持</text>
      <view class="input-wrap">
        <input placeholder="键盘右下键按钮search web端不支持" return-key-type="search"></input>
      </view>
      <text class="title-text">键盘右下键按钮next web端不支持</text>
      <view class="input-wrap">
        <input placeholder="键盘右下键按钮next web端不支持" return-key-type="next"></input>
      </view>
      <text class="title-text">键盘右下键按钮go web端不支持</text>
      <view class="input-wrap">
        <input placeholder="键盘右下键按钮go web端不支持" return-key-type="go"></input>
      </view>
      <text class="title-text">placeholderColor web端不支持</text>
      <view class="input-wrap">
        <input placeholder="placeholderColor web端不支持" placer-holder-color="#ff0000;"></input>
      </view>
      <text class="title-text">自定义样式</text>
      <view class="end-item">
        <input placeholder="自定义样式" cstyle="color: #00ff00; border: 1px solid #00f;" ></input>
      </view>
    </scroller>
  </view>
</template>

<script>
class Input {
  data = {
    isfocus: false,
    inputValue: '',
    eventName: '触发的事件名称',
    winHeight: 0
  }
  computed = {}
  watch = {}
  methods = {
    inputEvent(e) {
      this.inputValue = e.detail.value;
    },
    testEvent(e) {
      this.eventName = e.type
    },
    bindblurevent() {
      console.log('blur')
      this.isfocus = false;
    }
  }
  mounted(res) {
    console.log('mounted')
    setTimeout(() => {
      this.isfocus = true;
    }, 300);
  }
};
export default new Input();
</script>
<style scoped>
 .page-demo {
   background: #FAFAFA;
   position: absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
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
   border-top: 1px solid #D9D9D9;
   border-bottom: 1px solid #D9D9D9;
 }
.input-wrap  {
   position: relative;
   border-top: 1px solid #D9D9D9;
   border-bottom: 1px solid #D9D9D9;
 }
</style>
<script cml-type="json">
{
  "base": {}
}
</script>



```