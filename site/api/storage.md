# 数据存储

## setStorage

该方法通过键值对的形式将数据存储到本地。同时也可以通过该方法更新已有的数据。

### 参数

| 参数  |            类型            |    说明    |
| :---: | :------------------------: | :--------: |
|  key  |           String           | 要存储的键 |
| value | String/Number/Object/Array |  储存的值  |

### 返回值

返回 promise

### 举例

```javascript
cml.setStorage('name', 'Hanks').then(
  () => {},
  function(err) {},
);
```

## getStorage

 获取本地存储的对应键名的键值

### 参数

| 参数 |  类型  |    说明    |
| :--: | :----: | :--------: |
| key  | String | 存储的键名 |

### 返回值

返回 promise

| 返回值 |  类型  |         说明         |
| :----: | :----: | :------------------: |
| value  | String | 存储的键名对应的键值 |

### 举例

```javascript
cml.getStorage('name').then(
  (value) => {
    // 处理获取到的键值
  },
  function(err) {},
);
```

## removeStorage

删除本地存储中对应键值对应的数据

### 参数

| 参数 |  类型  |    说明    |
| :--: | :----: | :--------: |
| key  | String | 存储的键名 |

### 返回值

返回 promise

### 举例

```javascript
cml.removeStorage('name').then(
  () => {},
  function(err) {},
);
```
