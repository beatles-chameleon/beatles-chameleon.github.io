# 侦听属性 watch

### 示例

```html
<template>
  <view>
    <text>fullName is : "{{ fullName }}"</text>
  </view>
</template>
<script>
  class Index {
    data = {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
    };
    watch = {
      firstName: function(newV, oldV) {
        this.fullName = newV + ' ' + this.lastName;
      },
      lastName: function(newV, oldV) {
        this.fullName = this.firstName + ' ' + newV;
      },
    };
  }
  export default new Index();
</script>
```

除了 watch 选项之外，你还可以使用命令式的 this.\$watch API。

但是，上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```html
<script>
  class Index {
    data = {
      firstName: 'Foo',
      lastName: 'Bar',
    };
    computed = {
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },
    };
  }
</script>
```

所以，不要滥用 watch ~
