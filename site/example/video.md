# video

---

视频播放器

### 示例

```html
<template>
  <view class="container">
    <view class="text-wrap">
      <text>视频state: </text>
      <text class="info">{{state}}</text>
    </view>
    <video
      src="{{videoSrc}}"
      autoplay="{{true}}"
      controls="{{true}}"
      c-bind:start="onstart"
      c-bind:pause="onpause"
      c-bind:finish="onfinish"
      c-bind:fail="onfail"
    ></video>
  </view>
</template>
<script>
  import cml from 'chameleon-api';
  class Video {
    data = {
      videoSrc:
        'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      state: '----',
    };
    methods = {
      onstart(event) {
        this.state = 'onstart';
        cml.showToast({
          message: this.state,
        });
      },
      onpause(event) {
        this.state = 'onpause';
        cml.showToast({
          message: this.state,
        });
      },
      onfinish(event) {
        this.state = 'onfinish';
        cml.showToast({
          message: this.state,
        });
      },
      onfail(event) {
        this.state = 'onfail';
        cml.showToast({
          message: this.state,
        });
      },
    };
  }
  export default new Video();
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-wrap {
    flex-direction: row;
    margin-bottom: 20cpx;
  }
  .info {
    font-size: 40cpx;
    text-align: center;
    color: #fc9153;
  }
</style>

<script cml-type="json">
  {
    "base": {}
  }
</script>
```
