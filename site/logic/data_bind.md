# 响应式数据绑定系统(Data binding)

当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。

通过这个简单的例子来看：

```html
<template>
  <view>
    <text>Hello {{name}}!</text>
    <button c-bind:onclick="changeName">Click me!</button>
  </view>
</template>
<script>
  class Index {
    data = {
      name: 'Chameleon',
    };
    methods = {
      changeName: function(e) {
        // sent data change to view
        this.name = 'CML';
      },
    };
  }
  export default new Index();
</script>
```

`框架`首先将逻辑层数据中的 name 与视图层的 name 进行了绑定，所以打开页面的时候会显示 Hello Chameleon!；
当点击按钮的时候，视图层会发送 changeName 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；
回调函数触发后，逻辑层执行数据赋值的操作，将 data 中的 name 从 Chameleon 变为 CML，因为该数据和视图层已经绑定了，从而视图层会自动改变为 Hello CML!。
