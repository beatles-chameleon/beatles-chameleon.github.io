# cell

---

子列表项容器。

### 示例

```html
<template>
  <view class="container">
    <list
      bottom-offset="{{bottomOffset}}"
      c-bind:scrolltobottom="onBottom"
      c-bind:onscroll="onScroll"
      height="{{-1}}"
    >
      <cell class="cell" c-for="{{lists}}" c-for-index="i" c-for-item="item" data-idx="{{i}}">
        <view class="panel">
          <text class="text">{{item}}</text>
        </view>
      </cell>
    </list>
  </view>
</template>
<script>
  import cml from 'chameleon-api';
  const LOADMORE_COUNT = 4;
  class Cell {
    data = {
      /**
       * list 配置 子元素必须是 cell 标签
       */
      bottomOffset: 20,
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    methods = {
      onBottom(e) {
        cml.showToast({
          message: 'loadmore',
          duration: 1000,
        });
        setTimeout(() => {
          const length = this.lists.length;
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1);
          }
        }, 800);
      },
      onScroll(e) {},
    };
  }

  export default new Cell();
</script>

<style scoped>
  .panel {
    display: flex;
    width: 600cpx;
    height: 300cpx;
    margin-left: 75cpx;
    margin-top: 35cpx;
    margin-bottom: 35cpx;
    flex-direction: column;
    justify-content: center;
    border-width: 2cpx;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 88cpx;
    text-align: center;
    color: #41b883;
  }
</style>
<script cml-type="json">
  {
    "base": {}
  }
</script>
```
