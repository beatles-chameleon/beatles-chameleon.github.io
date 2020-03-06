# c-toast

---

提示框

###示例

```html
<template>
  <view class="toast-page">
    <c-toast
      duration="{{duration}}"
      show="{{show}}"
      c-bind:show="changeShow"
      message="{{message}}"
      type="{{type}}"
      mask="{{mask}}"
    ></c-toast>
    <button btn-style="{{btnStyle}}" text="loading toast" c-bind:onclick="showLoading"></button>
    <button btn-style="{{btnStyle}}" text="mask toast" c-bind:onclick="showMask"></button>
    <button btn-style="{{btnStyle}}" text="success toast" c-bind:onclick="showSuccess"></button>
    <button btn-style="{{btnStyle}}" text="warn toast" c-bind:onclick="showWarn"></button>
  </view>
</template>
<script>
  class Index {
    data = {
      show: false,
      message: '',
      type: 'loading',
      mask: false,
      duration: 3000,
      btnStyle: 'margin-bottom: 20cpx',
    };
    methods = {
      changeShow(e) {
        this.show = e.detail.value;
      },
      showLoading() {
        this.message = 'loading toast';
        this.type = 'loading';
        this.mask = false;
        this.duration = 1000 * 3;
        this.show = true;
      },
      showMask() {
        this.message = 'mask toast';
        this.type = 'loading';
        this.mask = true;
        this.duration = 1000 * 3;
        this.show = true;
      },
      showSuccess() {
        this.message = 'success toast';
        this.type = 'success';
        this.mask = true;
        this.duration = 1000 * 3;
        this.show = true;
      },
      showWarn() {
        this.message = 'warn toast';
        this.type = 'warn';
        this.mask = true;
        this.duration = 1000 * 3;
        this.show = true;
      },
    };
  }
  export default new Index();
</script>
<style scoped>
  .toast-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-toast": "cml-ui/components/c-toast/c-toast"
      }
    }
  }
</script>
```
