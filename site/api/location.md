# 获取地理位置

> 注： 在 weex 端，接入 chameleon 客户端 sdk 之后才可以使用该方法

## getLocationInfo

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
        <td>lng</td>
        <td>Number</td>
        <td>经度</td>
    </tr>
    <tr>
        <td>lat</td>
        <td>Number</td>
        <td>纬度</td>
    </tr>
</table>

### 举例

```javascript
cml.getLocationInfo().then((res) => {
  // res: { lng[number]: 40.33, lat[number]: 154.33 }
  cml.showToast({
    message: JSON.stringify(res),
    duration: 2000,
  });
});
```
