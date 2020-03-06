# 数据绑定

模板中绑定的数据来均来自于 data、computed 属性。

## 模板语法

数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于：

### 内容

`<view> <text>{{ message }}</text> </view>`

### 组件属性

`<view :id="dynamicId"> </view>`
或者 v-bind
`view v-bind:id="dynamicId"`

## v-model

### 应用于表单元素

```vue
<template lang='vue'>
  <page title="chameleon">
       <view><text>message:{{message}}</text></view>
       <input v-model="message"></input>
  </page>
</template>
<script>
class Comp {
 data = {
     message:'default-value'
  }
  watch = {
    message(){
      console.log('modelTest change');
    }
  }
}
export default new Comp();
</script>
<script cml-type="json">
{
  "base": {}
}
</script>
```

v-model 元素上不支持再绑定 input 事件，如果对于输入值变化之后想执行一些操作，可以通过 watch 对应的值来进行；

### 应用于父子组件之间

**父组件**

```vue
<template lang="vue">
  <page title="chameleon">
    <view><text>c-model的在组件上的使用</text></view>
    <comp v-model="modelValueTest2" ></comp>
    <view><text>组件使其改变{{modelValueTest2}}</text></view>
  </page>
</template>

<script>
class Index {
  data = {
    currentComp: 'comp1',
    modelValueTest2: 'sss',
  };
  methods = {
    handleClick() {
      this.currentComp = this.currentComp === 'comp1' ? 'comp1' : 'comp2';
    },
  };
}

export default new Index();
</script>
<style>
.scroller-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "comp1":"/components/comp1",
      "comp2":"/components/comp2"
    }
  }
}
</script>
```

**子组件**

```vue
<template lang="vue">
  <view>
    <input type="text" :value="value" v-on:input="handleInput"/>
  </view>    
</template>

<script>
class Comp {
  props = {
    value: {
      type: String,
      default: 'default-value',
    },
  };
  methods = {
    handleInput(e) {
      console.log('input', e);
      debugger;
      this.$cmlEmit('input', {
        value: e.detail.value,
      });
    },
  };
}
export default new Comp();
</script>
<script cml-type="json">
{
  "base": {}
}
</script>
```

## Javascript 表达式

### 在模板内容中

```javascript
{
  {
    number + 1;
  }
}

{
  {
    ok ? 'YES' : 'NO';
  }
}

{
  {
    message
      .split('')
      .reverse()
      .join('');
  }
}
```

### 算数运算

`<view> <text>{{a + b}} + {{c}} + d </text></view>`

```javascript
class Index {
  data = {
    a: 1,
    b: 2,
    c: 3,
  };
}
export default new Index();
```

view 中的内容为 `3 + 3 + d`。

### 字符串运算

`<view><text>{{"hello" + name}}</text></view>`

<b>特别注意：模板中的字符串都要使用双引号，不能使用单引号。</b>

### 数据路径运算

`<view><text>{{object.key}} {{array[0]}}</text></view>`

```javascript
class Index {
  data = {
    object: {
      key: 'Hello ',
    },
    array: ['MINA'],
  };
}
export default new Index();
```

## Bug & Tip

- 使用 component 语法的时候，为了提高微信端的渲染效率，建议加上 shrinkComponents = "comp1,comp2,...",缩小动态渲染的查找范围，减少不必要的渲染开销；

- 注意 v-model 的值只能是 data 或者 computed 中的 key 值，不支持 modelValue.xxx 等需要二次计算的值；
