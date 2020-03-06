# c-dialog

---

对话框

###示例

```html
<template>
  <view class="dialog-page">
    <c-dialog
      show="{{show}}"
      type="{{type}}"
      c-bind:show="changeShow"
      title="{{title}}"
      mask="{{mask}}"
      content="{{content}}"
      show-close="{{showClose}}"
      icon-type="{{iconType}}"
      icon-style="{{iconStyle}}"
      c-bind:close="closeEvent"
      c-bind:confirm="confirmEvent"
      c-bind:cancel="cancelEvent"
    >
    </c-dialog>
    <button btn-style="{{btnStyle}}" text="alert dialog" c-bind:onclick="showAlert"></button>
    <button btn-style="{{btnStyle}}" text="confirm dialog" c-bind:onclick="showConfirm"></button>
    <button
      btn-style="{{btnStyle}}"
      text="show close dialog"
      c-bind:onclick="showCloseIcon"
    ></button>
  </view>
</template>
<script>
  class C_dialog {
    data = {
      show: false,
      mask: true,
      showClose: false,
      headerTitle: 'c-dialog',
      headerDesc: 'c-dialog',
      message: '',
      type: 'alert',
      btnStyle: 'margin-bottom: 20cpx',
      iconType: 'warn',
      iconStyle: {
        width: '60cpx',
        height: '60cpx',
      },
      title: '我是标题',
      content: '我是内容',
    };

    methods = {
      changeShow(e) {
        this.show = e.detail.value;
      },
      showAlert() {
        this.type = 'alert';
        this.title = '我是标题';
        this.content = '我是内容';
        this.iconType = 'warn';
        this.showClose = false;
        this.show = true;
      },
      showConfirm() {
        this.type = 'confirm';
        this.title = '确定离开吗';
        this.content = '';
        this.iconType = 'network';
        this.showClose = false;
        this.show = true;
      },
      showCloseIcon() {
        this.type = 'alert';
        this.title = '我是标题';
        this.content = '我是内容';
        this.iconType = 'warn';
        this.showClose = true;
        this.show = true;
      },
      closeEvent() {},
      confirmEvent() {},
      cancelEvent() {},
    };
  }
  export default new C_dialog();
</script>
<style scoped>
  .dialog-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-dialog": "cml-ui/components/c-dialog/c-dialog"
      }
    }
  }
</script>
```
