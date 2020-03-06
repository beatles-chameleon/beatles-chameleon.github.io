# component 动态渲染组件

component 接受两个属性

<table>
<tr>
  <th>属性名</th>
  <th>说明</th>
</tr>
<tr>
  <td>is</td>
  <td>接受一个计算属性作为动态渲染的标签名</td>
</tr>
<tr>
  <td>shrinkcomponents</td>
  <td>接受 usingComponents 中的key值组成的字符串作为动态组件选择的范围</td>
</tr>
</table>

**注意，为了提高微信端的渲染效率，强烈建议加上 shrinkcomponents = "comp1,comp2,...",缩小动态渲染的查找范围，减少不必要的渲染开销**

```html
<template>
  <view class="page-container">
    <view c-bind:tap="handleElementClick"><text>组件改变</text></view>
    <component is="{{currentComp}}" shrinkcomponents="comp,comp1"></component>
  </view>
</template>

<script>
  class Index {
    data = {
      dataComp: 'comp',
    };
    computed = {
      currentComp() {
        return this.dataComp === 'comp' ? 'comp1' : 'comp';
      },
    };
    methods = {
      handleElementClick(a, b) {
        console.log('handleElementClick', arguments, a, b);
        this.dataComp = this.dataComp === 'comp' ? 'comp1' : 'comp';
      },
    };
  }

  export default new Index();
</script>

<script cml-type="json">
  {
      "base": {
          "usingComponents": {
            "comp":"./comp",
            "comp1":"./comp1",
            "comp2":"./comp2",
            "comp3":"./comp3",
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

component 动态组件上同样支持绑定事件，传递属性；

比如

```javascript
<component
  is="{{currentComp}}"
  type="upcaseEvent"
  c-bind:upcaseEvent="handleUpcaseEvent"
  id="{{id}}"
></component>
```

## Bug&Tips

注意 : 小程序端是通过条件判断来模拟 component is 的效果的，所以不要在 component 标签上在在写 c-if c-else c-else-if 等条件判断
