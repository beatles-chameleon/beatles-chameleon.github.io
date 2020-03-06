# 数据绑定

模板中绑定的数据来均来自于 data、computed 属性。

## 简单绑定

数据绑定使用 Mustache 语法（双大括号）,
`{{}}`之内的可以是一些变量或者简单的表达式。

#### 内容

`<view> <text>{{ message }}</text> </view>`

#### 组件属性

`<view id="item-{{id}}"> </view>`

#### 运算

`<view hidden="{{flag ? true : false}}"> <text>Hidden </text> </view>`
`<view> <text>{{a + b}} + {{c}} + d </text></view>`
`<view c-if="{{length > 5}}"> </view>`

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

view 中的内容为 `3 + 3 + d`

## c-model

#### 应用于表单元素

```html
<template>
  <page title="chameleon">
       <view><text>message:{{message}}</text></view>
       <input c-model="{{message}}"></input>
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

c-model 元素上不支持再绑定 input 事件，如果对于输入值变化之后想执行一些操作，可以通过 watch 对应的值来进行；

#### 应用于父子组件之间

父组件

```html
<template>
  <page title="chameleon">
    <scroller height="{{-1}}">
      <view><text>c-model的在组件上的使用</text></view>
      <comp c-model="{{modelValueTest2}}"></comp>
      <view><text>组件使其改变{{modelValueTest2}}</text></view>
    </scroller>
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
    },
    "wx": {
      "navigationBarTitleText": "index",
      "backgroundTextStyle": "dark",
      "backgroundColor": "#E2E2E2"
    },
    "alipay": {
      "defaultTitle": "index",
      "pullRefresh": false,
      "allowsBounceVertical": "YES",
      "titleBarColor": "#ffffff"
    },
    "baidu": {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "white",
      "navigationBarTitleText": "index",
      "backgroundColor": "#ffffff",
      "backgroundTextStyle": "dark",
      "enablePullDownRefresh": false,
      "onReachBottomDistance": 50
    }
  }
</script>
```

子组件

```html
<template>
  <view>
    <input type="text" value="{{value}}" c-bind:input="handleInput" />
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

## Bug&Tips

注意 c-model 的值只能是 data 或者 computed 中的 key 值，不支持 modelValue.xxx 等需要二次计算的值；
