# button

---

按钮

### 示例

```html
<template>
  <view class="container">
    <scroller height="{{-1}}">
      <view class="section-title">
        <text class="section-title-text">类型样式</text>
      </view>
      <view class="button-list">
        <text class="button-text">default/blue</text>
        <button c-bind:onclick="testclick"></button>
        <text class="button-text">disabled</text>
        <button type="blue" text="确定" disabled="{{true}}" c-bind:onclick="testclick"></button>
        <text class="button-text">orange</text>
        <button type="orange" text="确定" c-bind:onclick="testclick"></button>
        <text class="button-text">red && disabled</text>
        <button type="red" text="确定" disabled="{{true}}" c-bind:onclick="testclick"></button>
        <text class="button-text">green</text>
        <button type="green" text="确定" c-bind:onclick="testclick"></button>
      </view>

      <view class="section-title">
        <text class="section-title-text">尺寸</text>
      </view>
      <view class="button-list">
        <text class="button-text">big</text>
        <button c-bind:onclick="testclick"></button>
        <text class="button-text">medium</text>
        <button type="orange" text="确定" size="medium" c-bind:onclick="testclick"></button>
        <text class="button-text">small</text>
        <button
          type="red"
          text="确定"
          size="small"
          disabled="{{true}}"
          c-bind:onclick="testclick"
        ></button>
      </view>

      <view class="section-title">
        <text class="section-title-text">微信开放能力</text>
      </view>
      <view>
        <text class="button-text">进入客服会话</text>
        <button
          open-type="contact"
          session-from="{{sessionFrom}}"
          send-message-title="{{messageTitle}}"
          send-message-path="{{messagePath}}"
          send-message-img="{{messageImg}}"
          show-message-card="{{true}}"
          c-bind:contact="bindcontact"
          c-bind:onclick="testclick"
        ></button>
        <text class="button-text">触发用户转发</text>
        <button open-type="share" c-bind:onclick="testclick"></button>
        <text class="button-text">获取用户信息</text>
        <button
          open-type="getUserInfo"
          lang="zh_CN"
          c-bind:getuserinfo="bindgetuserinfo"
          c-bind:onclick="testclick"
        ></button>
        <text class="button-text">获取用户手机号</text>
        <button
          open-type="getPhoneNumber"
          c-bind:getphonenumber="bindgetphonenumber"
          c-bind:onclick="testclick"
        ></button>
        <text class="button-text">打开APP</text>
        <button
          open-type="launchApp"
          app-parameter="wechat"
          c-bind:error="binderror"
          c-bind:onclick="testclick"
        ></button>
        <text class="button-text">打开授权设置页</text>
        <button
          open-type="openSetting"
          c-bind:opensetting="bindopensetting"
          c-bind:onclick="testclick"
        ></button>
        <text class="button-text">打开“意见反馈页面”</text>
        <button open-type="feedback" c-bind:onclick="testclick"></button>
      </view>
    </scroller>
  </view>
</template>
<script>
  import cml from 'chameleon-api';
  class Button {
    data = {
      sessionFrom: '会话来源',
      messageTitle: '标题',
      messagePath: '路径',
      messageImg: '图片',
      contactPath: '',
      contactQuery: {},
      errMsg: '',
      iv: '',
      encryptedData: '',
      appErrMsg: '',
    };
    methods = {
      testclick(e) {
        let type = e.detail.type;
        cml.showToast({
          message: type + ' button',
        });
      },
      bindcontact(e) {
        this.contactPath = e.path;
        this.contactQuery = e.query;
      },
      bindgetuserinfo(e) {
        console.log(e.detail);
      },
      bindgetphonenumber(e) {
        this.errMsg = e.detail.errMsg;
        this.iv = e.detail.iv;
        this.encryptedData = e.detail.encryptedData;
      },
      binderror(e) {
        this.appErrMsg = e.detail.errMsg;
      },
      bindopensetting(e) {
        console.log(e);
      },
    };
  }
  export default new Button();
</script>
<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 60cpx;
    font-size: 32cpx;
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
  }
  .button-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-title {
    margin-top: 60cpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .section-title-text {
    color: #fc9153;
    font-size: 40cpx;
  }
  .button-text {
    display: block;
    color: #999;
    margin-top: 40cpx;
    margin-left: 8cpx;
    margin-bottom: 16cpx;
  }
</style>

<script cml-type="json">
  {
    "base": {}
  }
</script>
```
