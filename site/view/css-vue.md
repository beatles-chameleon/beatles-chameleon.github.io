# 样式语法

## class 属性

如果使用 class 语法，支持如下写法

```html
<template lang="vue">
<view class="page-container">
  <view><text :class="true? 'bg-green':''" class="font" >fafafa</text></view>
  <view><text class="bg-green font" >fafafa</text></view>
</view>
</template>
```

### 简单数据绑定

```html
<template>
  <view>
    <text :class="prefix+'a'">class数据绑定</text>
  </view>
</template>
<script>
  class Index {
    data() {
      return {
        prefix: 'cls',
      };
    }
  }
  export default new Index();
</script>
```

### 三元运算符

```html
<view class="static" class="open ? 'cls1 cls2' : 'cls3 cls4'"> </view>
```

或者将其放入计算属性

```html
<template>
  <view class="itemClass"> </view>
</template>
<script>
  class Index {
    computed = {
      itemClass() {
        return open ? 'cls1 cls2' : 'cls3 cls4';
      },
    };
  }
  export default new Index();
</script>
```

## style 语法

**如果使用 style 语法支持如下写法，style 不支持多个 style,即 style :style 同时写**

```html
<view> <text style="background-color:red">fafafa</text></view>
<view><text :style="computedString">fafafa</text> </view>
<script>
  class Index {
    data = {
      inlineStyle: 'border: 1px solid red;',
    };
    computed = {
      computedString() {
        return inlineStyle;
      },
    };
  }
  export default new Index();
</script>
```
