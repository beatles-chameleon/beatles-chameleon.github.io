# 路由导航

## navigateTo

保留当前页面，跳转到应用内的某个页面。

### 参数

<table>
  <tr>
    <th>参数名</th>
    <th>类型</th>
    <th>必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>path</td>
    <td>String</td>
    <td>是</td>
    <td>无</td>
    <td>应用内页面的路径， <a href="../framework/router.html">路由</a>里面的path值 </td>
  </tr>
  <tr>
    <td>query</td>
    <td>Object</td>
    <td>否</td>
    <td>无</td>
    <td>要传递的参数，可在<b>将进入页面</b>的<a href="../logic/lifecycle.html">beforeCreate</a>里面获取</td>
  </tr>
</table>

### 返回值

无

### 举例

```javascript
cml.navigateTo({
  path: '/pages/navigateBack/index',
  query: {
    a: 1,
    b: 'test',
  },
});
```

## redirectTo

关闭当前页面，跳转到应用内的某个页面

### 参数

<table>
  <tr>
    <th>参数名</th>
    <th>类型</th>
    <th>必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>path</td>
    <td>String</td>
    <td>是</td>
    <td>无</td>
    <td>应用内页面的路径， 即<a href="../framework/router.html">路由</a>里面的path值 </td>
  </tr>
  <tr>
    <td>query</td>
    <td>Object</td>
    <td>否</td>
    <td>无</td>
    <td>要传递给<b>将进入页面</b>参数，可在<b>将进入页面</b>的<a href="../logic/lifecycle.html">beforeCreate</a>里面获取</td>
  </tr>
</table>

### 返回值

无

### 举例

```javascript
cml.redirectTo({
  path: '/pages/navigateBack/index',
  query: {
    a: 1,
    b: 'test',
  },
});
```

## navigateBack

关闭当前页面，返回上一页面

###  参数

<table>
  <tr>
    <th>参数名</th>
    <th>类型</th>
    <th>必填</th>
    <th>默认值</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>backPageNum</td>
    <td>Number[负数]</td>
    <td>否</td>
    <td>-1</td>
    <td>要返回的页面级数, 为负数, 默认返回上一页</td>
  </tr>
</table>

##### 举例

```javascript
cml.navigateBack(-1);
```
