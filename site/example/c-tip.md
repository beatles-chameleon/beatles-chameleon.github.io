# c-tip

---

提示

### 示例

```html
<template>
  <page title="c-tip演示">
    <view class="tip-eg">
      <c-tip
        show="{{showtip1}}"
        direction="top"
        c-bind:close="closeTip1"
        style="position:absolute;top:0;left:300cpx;"
      >
        <text style="font-size: 24cpx;color: #fff">Tip</text>
      </c-tip>
      <text class="tip-btn" c-bind:tap="showTip1">Show tip</text>
    </view>

    <view class="tip-eg">
      <c-tip
        show="{{showtip2}}"
        direction="{{direction}}"
        c-bind:close="closeTip2"
        style="{{tipStyle}}"
      >
        <text style="font-size: 24cpx;color: #fff">Awesome!</text>
      </c-tip>
      <text class="tip-btn" c-bind:tap="showTip2">chameleon-ui</text>
    </view>
    <button class="btn" c-bind:onclick="showTip2Top" text="top"></button>
    <button class="btn" c-bind:onclick="showTip2Bottom" text="bottom"></button>
    <button class="btn" c-bind:onclick="showTip2Left" text="left"></button>
    <button class="btn" c-bind:onclick="showTip2Right" text="right"></button>
  </page>
</template>
<script>
  class CTip {
    data = {
      showtip1: false,
      showtip2: false,
      direction: 'top',
    };

    computed = {
      tipStyle() {
        let style;
        switch (this.direction) {
          case 'top':
            style = 'position:absolute;top:0;left: 260cpx;';
            break;
          case 'bottom':
            style = 'position:absolute;top:164cpx;left: 260cpx;';
            break;
          case 'left':
            style = 'position:absolute;left:20cpx;top:93cpx;';
            break;
          case 'right':
            style = 'position:absolute;left:480cpx;top:93cpx;';
            break;
        }
        return style;
      },
    };

    methods = {
      closeTip1() {
        this.showtip1 = false;
      },
      showTip1() {
        this.showtip1 = true;
      },
      closeTip2() {
        this.showtip2 = false;
      },
      showTip2() {
        this.direction = 'top';
        this.showtip2 = true;
      },
      showTip2Top() {
        this.direction = 'top';
        this.showtip2 = true;
      },
      showTip2Bottom() {
        this.direction = 'bottom';
        this.showtip2 = true;
      },
      showTip2Left() {
        this.direction = 'left';
        this.showtip2 = true;
      },
      showTip2Right() {
        this.direction = 'right';
        this.showtip2 = true;
      },
    };
  }

  export default new CTip();
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .tip-eg {
    width: 750cpx;
    align-self: center;
    padding: 100cpx 0;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .tip-btn {
    padding: 9cpx 10cpx;
    border: 1px solid #fc9153;
    border-radius: 4cpx;
    font-size: 24cpx;
    color: #fc9153;
    align-self: center;
  }
  .btn {
    margin-top: 20cpx;
    align-self: center;
  }
</style>
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-tip": "cml-ui/components/c-tip/c-tip"
      }
    }
  }
</script>
```
