# Store.registerModule

注册一个动态模块。[详细介绍](../../logic/store/module.html)

##### 参数说明

<table>
<tr>
    <th>参数</th>
    <th>类型</th>
    <th>必填</th>
    <th>说明</th>
</tr>
<tr>
    <td>path</td>
    <td>String</td>
    <td>是</td>
    <td>模块注册路径名</td>
</tr>
<tr>
    <td>module</td>
    <td>Module</td>
    <td>是</td>
    <td>模块</td>
</tr>
</table>

##### 示例

```js
// 注册模块 `myModule`
store.registerModule('myModule', {
  // ...
});
```
