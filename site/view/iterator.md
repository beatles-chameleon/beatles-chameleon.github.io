# 列表渲染

## c-for

在组件上使用 c-for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。
默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item

```html
<view c-for="{{array}}">
  <text>{{index}}: {{item.message}}</text>
</view>
```

使用 c-for-item 可以指定数组当前元素的变量名，
使用 c-for-index 可以指定数组当前下标的变量名：

```html
<view c-for="{{array}}" c-for-index="idx" c-for-item="itemName">
  <text> {{idx}}: {{itemName.message}}</text>
</view>
```

c-for 也可以嵌套，下边是一个九九乘法表

```html
<view c-for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" c-for-item="i">
  <view c-for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" c-for-item="j">
    <view v-if="{{i <= j}}">
      <text> {{i}} * {{j}} = {{i * j}}</text>
    </view>
  </view>
</view>
```

## block c-for

类似 block c-if，也可以将 c-for 用在<block/>标签上，以渲染一个包含多节点的结构块。例如：

```html
<block c-for="{{[1, 2, 3]}}">
  <view> <text>{{index}}: </text></view>
  <view> <text>{{item}}</text> </view>
</block>
```

## c-key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input/>` 中的输入内容，`<switch/>`的选中状态），需要使用 c-key 来指定列表中项目的唯一的标识符。

c-key 的值以两种形式提供

1.字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。

2.保留关键字 \*this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。
