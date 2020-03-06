# 元素属性

## getRect

获取某个节点的部分属性

### 参数

| 参数名  |  类型   | 必填 | 默认值 |                                    说明                                    |
| :-----: | :-----: | :--: | :----: | :------------------------------------------------------------------------: |
|   ref   | String  |  是  |   无   |                        页面上标记了 ref 属性的节点                         |
| context | context |  是  |   无   | 由于小程序端限制, 组件内获取元素属性需要指定组件的上下文, 通常传 this 即可 |

### 返回值

Promise 成功回调返回值:

| 返回值 |  类型  |       说明       |
| :----: | :----: | :--------------: |
| width  | number |    节点的宽度    |
| height | number |    节点的高度    |
|  left  | number | 节点的左边界坐标 |
| right  | number | 节点的右边界坐标 |
|  top   | number | 节点的上边界坐标 |
| bottom | number | 节点的下边界坐标 |

### 举例

```javascript
// 'refTest'为template中某个节点的ref属性所对应的值
cml.getRect('refTest', this).then((res) => {
  cml.showToast({
    message: JSON.stringify(res),
  });
});
```
