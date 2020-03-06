# video

---

音频播放器

升级`chameleon-ui-builtin chameleon-api chameleon-bridge`

```
npm i chameleon-ui-builtin@0.2.12 -S
npm i chameleon-api@0.5.0 -S
npm i chameleon-bridge@0.1.11 -S
```

### 属性

| 属性名            | 类型        | 必填 | 默认值   | 说明                                                                   |
| ----------------- | ----------- | ---- | -------- | ---------------------------------------------------------------------- |
| src               | String      | 是   | ""       | 要播放的音频资源地址                                                   |
| loop              | Boolean     | 否   | false    | 是否循环播放                                                           |
| controls          | Boolean     | 否   | false    | 是否显示音频控件                                                       |
| poster            | String      | 否   | ""       | 默认控件上的音频封面的图片资源地址                                     |
| name              | String      | 否   | 未知音频 | 默认控件上的音频名字                                                   |
| author            | String      | 否   | 未知作者 | 默认控件上的作者名字                                                   |
| autoplay          | Boolean     | 否   | false    | 是否自动播放音频                                                       |
| c-bind:play       | EventHandle | 否   |          | 当开始/继续播放时触发 play 事件                                        |
| c-bind:pause      | EventHandle | 否   |          | 当暂停播放时触发 pause 事件                                            |
| c-bind:timeupdate | EventHandle | 否   |          | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} |
| c-bind:end        | EventHadnle | 否   |          | 当播放到末尾时触发 ended 事件                                          |
| c-bind:error      | EventHadnle | 否   |          | 当发生错误时触发 error 事件，detail = {errMsg:errorCode}               |

errorCode 取值如下：

| 值    | 说明     | 最低版本 |
| :---- | :------- | :------- |
| 10001 | 系统错误 |          |
| 10002 | 网络错误 |          |
| 10003 | 文件错误 |          |
| 10004 | 格式错误 |          |
| -1    | 未知错误 |          |

### 示例

```html
<template>
  <page title="audio">
    <view class="audio">
      <audio
        src="{{src}}"
        controls="{{true}}"
        autoplay="{{true}}"
        loop="{{true}}"
        poster="{{poster}}"
        c-bind:pause="handlePause"
        c-bind:play="handlePlay"
        c-bind:timeupdate="handleTimeupdate"
        c-bind:ended="handleEnded"
        c-bind:error="handleError"
      ></audio>
    </view>
  </page>
</template>
<script>
  import cml from 'chameleon-api';
  class Audio {
    data = {
      poster:
        'http://p1.music.126.net/bYTctrjUegSyzDPteIeNOw==/74766790705099.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
      src:
        'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    };

    computed = {};
    watch = {};
    methods = {
      handlePause(...args) {
        console.log('emit-pause', args);
        this.audioText = 'pause';
      },
      handlePlay(...args) {
        console.log('emit-play', args);
        this.audioText = 'play';
      },
      handleTimeupdate(...args) {
        this.audioText = 'timeUpdate';
        // console.log('timeupdate',args)
      },
      handleEnded(...args) {
        this.audioText = 'ended';
        console.log('emit-ended', args);
      },
      handleError(...args) {
        console.log('emit-error', args);
      },
    };
  }
  export default new Audio();
</script>
<style scoped>
  .audio {
    padding-top: 200cpx;
  }
</style>
<script cml-type="json">
  {
      "base": {
          "usingComponents": {
          },
          "navigationBarTitleText": "button",
          "backgroundTextStyle": "dark",
          "backgroundColor": "#E2E2E2"
      }
  }
</script>
```
