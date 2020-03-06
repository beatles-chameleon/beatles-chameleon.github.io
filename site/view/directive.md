#   指令

## c-if

根据表达式的真假值条件渲染元素

```vue
<div c-if="{{true}}">根据c-if的真假结果决定是否渲染</div>
```

## c-else

- 不需要表达式;
- 限制：前一个兄弟元素必须有 c-if 或者 c-else-if

用法

```vue
<div c-if="{{1 > 0.5}}">
  Now you see me
</div>
<div c-else>
  Now you don't
</div>
```

## c-else-if

- 限制：前一个兄弟元素必须有 c-if 或者 c-else-if

```vue
<div c-if="{{type === 'A'}}">
  A
</div>
<div c-else-if="{{type === 'B'}}">
  B
</div>
<div c-else-if="{{type === 'C'}}">
  C
</div>
<div c-else>
  Not A/B/C
</div>
```

## c-for

```vue
<view c-for="{{array}}" c-for-index="idx" c-for-item="itemName">
 <text> {{idx}}: {{itemName.message}}</text>
</view>
```

## c-model

**父组件**

```vue
<view><text>c-model的使用</text></view>
<input type="text" c-model="{{modelValueTest}}" />
<text>{{modelValueTest}}</text>

<comp c-model="{{modelValueTest2}}"></comp>
<view><text>组件使其改变{{modelValueTest2}}</text></view>
```

**子组件**

```vue
<template>
  <view>
    <input type="text" :value="value" c-bind:input="handleInput" />
  </view>
</template>

<script>

methods = {
    handleInput(e){
      console.log('input',e);
      this.$cmlEmit('input', {
        value:  Date.now()
      })
    }
  }
}
</script>
```

** \$cmlEmit 的事件名必须是 'input', 传入的参数需要有一个更新的 value 作为 key, 其属性值作为新值进行更新；**

## c-text

```vue
<view c-text="{{message}}"></view>
```

不支持组件的 c-text

## c-show

```vue
<view c-show="{{elementShow}}">
    <text>测试元素c-show</text>
  </view>
<view><text>组件v-show</text></view>
<comp c-show="{{elementShow}}"></comp>
```

- 使用 c-show 的元素不支持  同时有 style 属性

- elementShow 是来自 data 或者 computed 中的 key 值,或者 true/false

## c-animation

**传入的值必须由[createAnimation](/api/createAnimation/createAnimation.html)返回**

```html
<template>
  <text c-animation="{{animationData}}" c-bind:click="click">hello world</text>
</template>
<script>
  import cml from 'cml目录';

  const animation = cml.createAnimation();

  class Index {
    data = {
      animationData: {},
    };
    methods = {
      click: function() {
        this.animationData = animation
          .opacity(0.1)
          .step({})
          .export();
      },
    };
  }
  export default new Index();
</script>
```
