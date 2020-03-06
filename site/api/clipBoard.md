# 剪贴板

## setClipBoardData

传进 setClipBoardData 方法中的内容(text)将会自动复制到系统剪贴板。
返回值 promise 的回调中会告知你此操作是否成功

### 参数

| 参数名 |  类型  | 必填 | 默认值 | 说明 |
| :----: | :----: | :--: | :----: | :--: |
|  data  | string |  是  |   无   |  无  |

### 举例

```javascript
cml
  .setClipBoardData('你所需要复制的文本内容')
  .then((res) => {
    cml.showToast({
      message: JSON.stringify(res),
      duration: 2000,
    });
  })
  .catch((reason) => {
    cml.showToast({
      message: JSON.stringify(reason),
      duration: 2000,
    });
  });
```

## getClipBoardData

获取系统剪贴板中的内容(text)  
注意：
出于安全考虑和平台限制，只支持获取在本页中复制的内容。
如果你当前没有在本页面发生过 copy 操作，而触发了此方法，则会返回 fail。

### 参数

无

### 返回值

Promise 返回值类型为:

| 返回值 |  类型  |          说明          |
| :----: | :----: | :--------------------: |
|  res   | string | 当前系统剪贴板中的内容 |

### 举例

```javascript
cml.getClipBoardData().then((res) => {
  cml.showToast({
    message: JSON.stringify(res),
    duration: 2000,
  });
});
```
