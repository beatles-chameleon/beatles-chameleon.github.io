# 计时器

## setTimeout

设定一个定时器，在定时到期以后执行注册的回调函数

### 参数

|   参数   |   类型   |       说明        |
| :------: | :------: | :---------------: |
| callback | Function |     回调函数      |
|  delay   |  Number  | 延迟时间，单位 ms |

### 返回值

| 返回值 |  类型  |    说明    |
| :----: | :----: | :--------: |
|   ID   | Number |  计时器 id |

### 举例

```javascript
setTimeout(() => {
  // do something after 3000ms
}, 3000);
```

## clearTimeout

取消由 setTimeout() 方法设置的定时器

### 参数

| 参数 |  类型  |    说明    |
| :--: | :----: | :--------: |
|  ID  | Number |  计时器 id |

### 返回值

无

### 举例

```javascript
var timer = setTimeout(() => {
  // do something after 3000ms
}, 3000);
clearTimeout(timer);
```

## setInterval

设定一个定时器，按照指定的周期（以毫秒计）来执行注册的回调函数

### 参数

|   参数   |   类型   |       说明        |
| :------: | :------: | :---------------: |
| callback | Function |     回调函数      |
|  delay   |  Number  | 延迟时间，单位 ms |

### 返回值

| 返回值 |  类型  |    说明    |
| :----: | :----: | :--------: |
|   ID   | Number |  计时器 id |

### 举例

```javascript
setInterval(() => {
  // do something every 3000ms
}, 3000);
```

## clearInterval

取消由 setInterval() 方法设置的定时器 。

### 参数

| 参数 |  类型  |    说明    |
| :--: | :----: | :--------: |
|  ID  | Number |  计时器 id |

### 返回值

无

### 举例

```javascript
var timer = setInterval(() => {
  // do something after 3000ms
}, 3000);
clearInterval(timer);
```
