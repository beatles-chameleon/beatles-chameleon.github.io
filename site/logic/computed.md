# 计算属性 computed

### 示例

```html
<template>
  <view>
    <text>Original message: "{{ message }}"</text>
    <text>Computed reversed message: "{{ reversedMessage }}"</text>
  </view>
</template>
<script>
  class Index {
    data = {
      message: 'Hello',
    };
    computed = {
      // 计算属性的 getter
      reversedMessage: function() {
        return this.message
          .split('')
          .reverse()
          .join('');
      },
    };
  }
  export default new Index();
</script>
```

结果：

Original message: "Hello"

Computed reversed message: "olleH"

这里我们声明了一个计算属性 reversedMessage。
我们提供的函数将用作属性 reversedMessage 的 getter 函数，当 message 发生改变时，reversedMessage 也会更新
