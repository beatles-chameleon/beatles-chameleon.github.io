# row

---

flex 布局行容器

### 示例

```html
<template>
  <view class="container">
    <row margin="{{100}}">
      <view class="col-item"></view>
      <view class="col-item"></view>
      <view class="col-item"></view>
    </row>
    <row margin="{{100}}" height="{{200}}">
      <col width="{{50}}" height="{{100}}" background-color="#ddd" margin="{{20}}">
        <view></view>
      </col>
      <col  width="{{100}}" height="{{100}}" background-color="#bbb" margin="{{20}}">
        <view></view>
      </col>
      <col  width="{{200}}" height="{{100}}" background-color="#aaa" margin="{{20}}">
        <view></view>
      </col>
    </row>
    <row margin="{{100}}" height="{{100}}">
      <col margin="{{50}}">
        <view class="col-item-2"></view>
      </col>
      <col margin="{{50}}">
        <view class="col-item-2"></view>
      </col>
      <col margin="{{50}}">
        <view class="col-item-2"></view>
      </col>
    </row>
  </view>
</template>
<script>
 class Row {
    data = {
    }
  }

  export default new Row();

</script>

<style scoped>
.container {
  position: absolute;
  top: 88cpx;
  left: 0;
  right: 0;
  bottom: 0;
}
.col-item {
  background: #ccc;
  width:200cpx;
  height:100cpx;
  margin:0 10cpx;
}
.col-item-2 {
  background: #aaa;
  width:200cpx;
  height:100cpx;
}
</style>

<script cml-type="json">
{
  "base": {}
}
</script>


```
