# c-tab

---

### 示例

```html
<template>
  <page title="c-tab演示">
    <view>
      <!-- 单tab测试 -->
      <view class="title"><text>单tab案例</text></view>
      <c-tab
        tabs="{{tabsAlone}}"
        c-bind:tabclick="handleTabTapAlone"
        active-label="{{activeLabelAlone}}"
        has-underline="{{false}}"
        inline="{{false}}"
      >
      </c-tab>

      <view class="title"><text class="title">tab+pane案例</text></view>
      <c-tab
        tabs="{{tabs}}"
        c-bind:tabclick="handleTabTap"
        active-label="{{activeLabel}}"
        inline="{{false}}"
      >
      </c-tab>
      <c-tab-pane tabs="{{tabs}}" active-label="{{activeLabel}}">
        <!-- 案例1 -->
        <!-- <c-tab-pane-item c-for="{{tabs}}" >
         <slot><text>{{item.label}}</text></slot>
       </c-tab-pane-item> -->
        <!-- 案例2 -->
        <c-tab-pane-item>
          <view class="one"
            ><text>
              1
            </text></view
          >
        </c-tab-pane-item>
        <c-tab-pane-item>
          <view class="two"
            ><text>
              2
            </text></view
          >
        </c-tab-pane-item>
        <c-tab-pane-item>
          <view class="three"
            ><text>
              3
            </text></view
          >
        </c-tab-pane-item>
        <c-tab-pane-item>
          <view
            ><text>
              4
            </text></view
          >
        </c-tab-pane-item>
      </c-tab-pane>
    </view>
  </page>
</template>

<script>
  /***
   * prefixStyle  suffixStyle 可以用来放置图标
   */
  class CTab {
    data = {
      headerTitle: 'c-tabs',
      headerDesc: 'c-tabs',
      tabsAlone: [
        {
          label: 'label11',
          // prefixStyle:"width:50cpx;height:20cpx;background-color:red;",
        },
        {
          label: 'label22',
          // suffixStyle:"width:50cpx;height:20cpx;background-color:red;"
        },
        {
          label: 'label33',
        },
      ],
      activeLabelAlone: 'label33',
      tabs: [
        {
          label: 'label1',
          // prefixStyle:"width:50cpx;height:20cpx;background-color:red"
        },
        {
          label: 'label2',
          // suffixStyle:"width:50cpx;height:20cpx;background-color:red"
        },
        {
          label: 'label3',
          // labelStyle:"color:green"
        },
      ],
      activeLabel: 'label3',
    };
    methods = {
      handleTabTap(e) {
        console.log(e);
        this.activeLabel = e.detail.label;
      },
      handleTabTapAlone(e) {
        this.activeLabelAlone = e.detail.label;
      },
    };
  }
  export default new CTab();
</script>
<script cml-type="json">
  {
    "base":{
       "usingComponents": {
            "c-tab": "cml-ui/components/c-tab/c-tab",
            "c-tab-pane": "cml-ui/components/c-tab-pane/c-tab-pane",
            "c-tab-pane-item": "cml-ui/components/c-tab-pane-item/c-tab-pane-item"
        }
    }
  }
</script>
<style scoped>
  .container {
    flex: 1;
    background: #f8f8f8;
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: 88cpx;
    font-size: 28cpx;
    text-align: center;
    height: 88cpx;
    color: #999;
  }
  .one {
    color: #fff;
    height: 500cpx;
    background-color: rgb(46, 240, 127);
  }
  .two {
    color: #fff;
    height: 500cpx;
    background-color: rgb(0, 162, 255);
  }
  .three {
    color: #fff;
    height: 500cpx;
    background-color: #00ffe4;
  }
</style>
```

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../assets/c-tabs-wx.png" width="200px" height="100%" />
    <text style="color: #fda775;font-size: 24px;">wx</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../assets/c-tabs-web.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;">web</text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="../assets/c-tabs-weex.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;">native</text>
  </div>
</div>
