## animation.translate()

对 X 轴坐标进行倾斜

### 参数

|   参数    |  类型  |       说明        |
| :-------: | :----: | :---------------: |
| number tx | number | 在 X 轴平移的距离 |
| number ty | number | 在 Y 轴平移的距离 |

### 返回值

|                         返回值                        |   类型    |   说明   |
| :---------------------------------------------------: | :-------: | :------: |
| [animation](/api/createAnimation/animation/main.html) | animation | 动画实例 |

> 注： 调用 export 方法后不会清除该样式

### 示例

```html
<template>
  <view>
    <view class="block" c-animation="{{animationData}}" c-bind:click="handleClick">
      <text>请点击我</text>
    </view>
  </view>
</template>
<script>
  import { createAnimation } from 'chameleon-api';
  const animation = createAnimation();
  class Index {
    data = {
      animationData: null,
    };
    methods = {
      handleClick() {
        this.animationData = animation
          .translate(100, 100)
          .step({ duration: 1000 })
          .export();
      },
    };
  }
  export default new Index();
</script>
<style scoped>
  .block {
    position: absolute;
    width: 200cpx;
    height: 200cpx;
    background-color: #e3edcd;
  }
</style>
<script cml-type="json">
  {
      "base": {
          "usingComponents": {}
      }
  }
</script>
```
