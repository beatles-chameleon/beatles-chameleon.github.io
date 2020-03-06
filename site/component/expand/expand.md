# 扩展组件(Extended components)

扩展组件需要额外引入。如：

```html
<script cml-type="json">
  {
    "base": {
        "usingComponents": {
          "c-dialog": "cml-ui/components/c-dialog/c-dialog"
        }
    }
  }
</script>
```

<!-- 扩展组件分为以下三种：

<table>
<tr>
  <th>分类</th>
  <th>说明</th>
</tr>
<tr>
  <td>多态组件</td>
  <td>使用基于多态协议扩展的最底层组件</td>
</tr>
<tr>
  <td>复合组件</td>
  <td>普通业务功能的聚合，调用多态组件或者复合组件进行功能封装</td>
</tr>
<tr>
  <td>扩展原生组件</td>
  <td>native 原生解析渲染，灵活定制、跨端兼容</td>
</tr>
</table>

* [多态组件](/component/expand/polymorphism/polymorphism.html)
* [复合组件](/component/expand/compound/compound.html)
* [扩展原生组件](/component/expand/native/native.html) -->

资料：[cml-ui](https://github.com/beatles-chameleon/cml-ui) chameleon 扩展组件库。
