# c-actionsheet

---

操作列表

### 示例

```html
<template>
  <page title="c-actionsheet演示">
    <button class="btn" c-bind:onclick="showActionSheet" text="ActionSheet"></button>
    <button class="btn" c-bind:onclick="showActionSheetActive" text="ActionSheet - active"></button>
    <button
      class="btn"
      c-bind:onclick="showActionSheetPicker"
      text="ActionSheet - pickerStyle"
    ></button>
    <c-actionsheet
      show="{{actionShow}}"
      title="{{title}}"
      list="{{list}}"
      active="{{active}}"
      cancel-txt="取消"
      picker-style="{{pickerStyle}}"
      c-bind:cancel="cancel"
      c-bind:select="select"
    ></c-actionsheet>
  </page>
</template>
<script>
  import cml from 'chameleon-api';
  class CActionsheet {
    data = {
      actionShow: false,
      mask: true,
      list: ['高铁', '火车', '飞机', '打车', '地铁'],
      active: -1,
      title: '出行方式',
      pickerStyle: false,
    };

    methods = {
      showActionSheet() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetActive() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetPicker() {
        this.pickerStyle = true;
        this.actionShow = true;
      },
      cancel() {
        this.actionShow = false;
        cml.showToast({
          message: 'Clicked 取消',
        });
      },
      select(e) {
        this.actionShow = false;
        this.active = +e.detail.index;
        cml.showToast({
          message: 'Clicked' + ' ' + e.detail.value,
        });
      },
    };
  }

  export default new CActionsheet();
</script>
<style scoped>
  .btn {
    margin-top: 20cpx;
    align-self: center;
  }
</style>

<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-actionsheet": "cml-ui/components/c-actionsheet/c-actionsheet"
      }
    }
  }
</script>
```
