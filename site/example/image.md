# image

---

图片

### 示例

```html
<template>
  <page title="image演示">
    <view class="container">
      <image src="{{imageSrc}}" style="width: 682cpx;height:600cpx;"></image>
    </view>
  </page>
</template>

<script>
  class Image {
    data = {
      imageSrc: require('../../assets/images/chameleon.png'),
    };
    methods = {
      imageLoad(e) {
        console.log(e);
      },
      imageError(e) {},
    };
  }
  export default new Image();
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
<script cml-type="json">
  {
    "base": {}
  }
</script>
```
