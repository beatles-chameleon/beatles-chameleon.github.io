# c-loading

---

加载中

###示例

```html
<template>
  <view>
    <c-loading loading="{{loading}}" tip="加载中"></c-loading>
    <view class="button-wrapper">
      <button class="button" text="更改loading态" c-bind:onclick="changeLoading"></button>
    </view>
  </view>
</template>
<script>
  class CLoading {
    data = {
      loading: true,
    };

    methods = {
      changeLoading() {
        this.loading = !this.loading;
      },
    };
  }

  export default new CLoading();
</script>
<style scoped>
  .content {
    width: 750cpx;
    height: 300cpx;
    background-color: peru;
  }
  .button-wrapper {
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 50cpx;
  }
</style>
<script cml-type="json">
  {
      "base": {
          "usingComponents": {
              "c-loading": "cml-ui/components/c-loading/c-loading"
          }
      }
  }
</script>
```
