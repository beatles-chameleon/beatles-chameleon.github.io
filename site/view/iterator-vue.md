# 列表渲染

## v-for

在组件上使用 v-for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

```html
<view v-for="(item , index) in array">
  <text>{{index}}: {{item.message}}</text>
</view>
```

```html
<view v-for="(item,index) in array" :key="index">
  <text> {{index}}: {{item.message}}</text>
</view>
```

```html
<view v-for="(item,index) in array" :key="item.id">
  <text> {{index}}: {{item.message}}</text>
</view>
```

## block v-for

类似 block v-if，也可以将 v-for 用在<block/>标签上，以渲染一个包含多节点的结构块。例如：

```html
<block v-for="(item,index) in [1,2,3]">
  <view> <text>{{index}}: </text></view>
  <view> <text>{{item}}</text> </view>
</block>
```

## :key

1.如果 :key="item.id"，那么就是 vue 中正常的语法。

2.如果 :key="item",那么在微信端会被渲染成 wx:key="`*this`"; 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

## Bug & Tip

- 不要与 c-for c-for-index c-for-item c-key 这些语法混用

- vue 的 v-for 相关语法都可以使用，但是需要注意一点就是只支持数组形式的被遍历值
