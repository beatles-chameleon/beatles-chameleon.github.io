# 交互反馈

## showToast

显示消息的提示框

### 参数

showToast 方法传入一个对象， 对象中包含如下参数：

|  参数名  |  类型  | 必填 | 默认值 |             说明             |
| :------: | :----: | :--: | :----: | :--------------------------: |
| message  | String |  否  |   无   |          展示的内容          |
| duration | number |  否  |  2000  | 展示的持续时间(以毫秒为单位) |

### 举例

```javascript
cml.showToast({
  message: 'Hello World',
  duration: 1000,
});
```

## alert

用于确保用户可以得到某些消息的警示框。当警示框出现后，用户需要点击确定按钮才能继续进行操作。

### 参数说明

alert 方法传入一个对象，对象中包含如下参数：

|    参数名    |  类型  | 必填 | 默认值 |           说明           |
| :----------: | :----: | :--: | :----: | :----------------------: |
|   message    | String |  否  |   无   |  警示框内显示的文本信息  |
| confirmTitle | String |  否  |  确定  | 确认按钮上显示的文字信息 |

### 返回值

调用 alert 之后返回一个 Promise 对象

### 举例

```javascript
cml
  .alert({
    message: 'This is alert! ',
    confirmTitle: 'ok',
  })
  .then(function() {
    cml.showToast({
      message: 'success!',
      duration: 1000,
    });
  });
```

## confirm

用于使用户可以接受或验证某些信息的确认框。当确认框出现后，用户需要点击确认或取消按钮才能继续进行操作。

### 参数说明

confirm 方法传入一个对象，对象中包含如下参数:

|    参数名    |  类型  | 必填 | 默认值 |                  说明                  |
| :----------: | :----: | :--: | :----: | :------------------------------------: |
|   message    | String |  否  |   无   |         确认框内显示的文字信息         |
| confirmTitle | String |  否  |  确定  | 确认按钮上显示的文字信息，默认是"确认" |
| cancelTitle  | String |  否  |  取消  | 取消按钮上显示的文字信息，默认是“取消” |

### 返回值

调用 confrim 之后返回一个 Promise 对象，其成功回调返回值为：

|  返回值 |  类型  |          说明          |
| :-----: | :----: | :--------------------: |
|  value  | String | 所点击按钮上的文本信息 |

### 举例

```javascript
cml
  .confirm({
    message: 'Do you confirm?',
    confirmTitle: 'ok',
    cancelTitle: 'cancel',
  })
  .then(function(value) {
    cml.showToast({
      message: '用户点击了' + value,
      duration: 1000,
    });
  });
```
