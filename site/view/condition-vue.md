# 条件渲染

## v-if

在框架中，使用 `v-if="condition"` 来判断是否需要渲染该代码块：
`<view v-if="condition"> True </view>`
也可以用 v-else-if 和 v-else 来添加一个 else 块：

```html
<view v-if="length > 5"> <text>1 </text></view>
<view v-else-if="length > 2"> <text>2 </text></view>
<view v-else> <text>3 </text></view>
```

## block v-if

因为 v-if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <block/> 标签将多个组件包装起来，并在上边使用 v-if 控制属性。

```html
<block v-if="true">
  <view> <text>view1 </text></view>
  <view> <text>view2 </text></view>
</block>
```

**注意：**: `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

## Bug & Tip

- 不要与 c-if c-else-if c-else 混用
