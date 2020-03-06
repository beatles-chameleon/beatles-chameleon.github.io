# text

---

文本容器。

按照指定的样式渲染文本内容。

### 示例

```html
<template>
  <view>
    <text>Original message: {{ message }}</text>
    <text>Computed reversed message: {{ reversedMessage }}</text>
  </view>
</template>

<script>
  class Text {
    data = {
      message: 'Hello',
    };
    computed = {
      reversedMessage: function() {
        return this.message
          .split('')
          .reverse()
          .join('');
      },
    };
  }
  export default new Text();
</script>
<script cml-type="json">
  {
    "base": {}
  }
</script>
```

### Bug & Tip

1. `<text>`会保留文本头尾空白（空格、换行符等），若发现`<text>`文本内容位置不符合预期，大概率是写成下面格式了：

```html
<text>
  我是有空格和换行符的文本
  <text></text
></text>
```

2. `<text>`不支持子组件。
3. `<text>`只能包含文本值，使用 `双花括号` 标记可以将变量值作为文本内容

[查看完整示例](/example/text.html)
