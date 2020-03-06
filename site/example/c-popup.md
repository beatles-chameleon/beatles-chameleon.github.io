# c-popup

---

蒙层

###示例

```html
<template>
  <view class="popup-page">
    <c-popup show="{{show}}" mask="{{mask}}" c-bind:close="close"></c-popup>
    <button btn-style="{{btnStyle}}" text="show popup" c-bind:onclick="showPopup"></button>
  </view>
</template>
<script>
  class C_popup {
    data = {
      show: false,
      headerTitle: 'c-popup',
      headerDesc: 'c-popup',
      mask: true,
      btnStyle: 'margin-bottom: 20cpx',
    };

    methods = {
      showPopup() {
        this.show = true;
      },
      close() {
        this.show = false;
      },
    };
  }
  export default new C_popup();
</script>
<script cml-type="json">
  {
    "base":{
      "usingComponents": {
        "c-popup": "cml-ui/components/c-popup/c-popup"
      }
    }
  }
</script>
```
