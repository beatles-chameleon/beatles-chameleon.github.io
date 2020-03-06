# 样式使用

## 普通写法

具体实现写在`.cml`的`<style>`标签内。

目前支持有如下两种关联到元素上：

#### 静态 class

```html
<view class="kind-list-item-hd-show class2 class3"> </view>
```

#### 动态 class

目前 class 不支持传入**对象**的形式；
简单数据绑定
`{{}}`之内的会被当做一个表达式去处理；

```html
<view><text class="{{prefix+'a'}}">class数据绑定</text></view>
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

三元运算符

```html
<view class="{{open ? 'cls1 cls2' : 'cls3 cls4'}}"> </view>
```

或者将其放入计算属性

```html
<template>
  <view class="{{itemClass}}"> </view>
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

## 内联写法

模版中写内联样式，分为静态和动态两种，静态样式指纯字符串，动态样式是有数据绑定。style 也不支持对象语法和数组语法；
目前可以使用的方式如下：

静态样式：

```html
<template>
  <view style="width: 200cpx;"> </view>
</template>
```

动态样式：

```html
<template>
  <view style="{{inlineStyle}}"> </view>
</template>
<script>
  class Index {
    data = {
      inlineStyle: 'width: 200cpx;',
    };
  }
  export default new Index();
</script>
```
