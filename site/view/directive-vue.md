#   指令

## v-if

根据表达式的真假值条件渲染元素

```vue
<div v-if="true">根据v-if的真假结果决定是否渲染</div>
```

## v-else

- 不需要表达式
- 限制：前一个兄弟元素必须有 v-if 或者 v-else-if

用法

```vue
<div v-if="1 > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

## v-else-if

- 限制：前一个兄弟元素必须有 v-if 或者 v-else-if

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## v-for

```vue
<view v-for="(item, index) in array">
 <text> {{idx}}: {{itemName.message}}</text>
</view>
```

## v-model

**父组件**

```vue
<view><text>v-model的使用</text></view>
<input type="text" v-model="modelValueTest" />
<text>{{modelValueTest}}</text>

<comp v-model="modelValueTest2"></comp>
<view><text>组件使其改变{{modelValueTest2}}</text></view>
```

**子组件**

```vue
<template>
  <view>
    <input type="text" :value="value" @input="handleInput" />
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

## v-text

```vue
<view v-text="message"></view>
```

不支持组件的 v-text

## v-show

```vue
<view v-show="elementShow">
    <text>测试元素c-show</text>
  </view>
<view><text>组件v-show</text></view>
<comp v-show="elementShow"></comp>
```

- 使用 v-show 的元素不支持  同时有 style 属性

- elementShow 是来自 data 或者 computed 中的 key 值，或者 true/false
