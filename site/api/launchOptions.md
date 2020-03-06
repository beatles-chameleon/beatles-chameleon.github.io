# 启动参数信息

## getLaunchOptionsSync()

获取程序启动时的参数信息（同步方法）

### 参数

无

### 返回值

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>query</td>
        <td>Object</td>
        <td>小程序，web或者native中启动时的query信息</td>
    </tr>
    <tr>
        <td>path</td>
        <td>String</td>
        <td>启动小程序的路径</td>
    </tr>
    <tr>
        <td>scene</td>
        <td>Number</td>
        <td>启动小程序的场景值</td>
    </tr>
    <tr>
        <td>其他</td>
        <td>Any</td>
        <td>小程序中并列返回的其他参数</td>
    </tr>
</table>

### 举例

```javascript
let obj = getLaunchOptionsSync();
cml.showToast({
  message: JSON.stringify(obj),
});
```
