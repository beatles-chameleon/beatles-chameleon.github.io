# WebSocket

> 注： 在 weex 端，接入 chameleon 客户端 sdk 之后才可以使用该方法

## initSocket

该方法传入一个 url，返回一个 WebSocket 实例

### 参数

| 参数 |  类型  |           说明           |
| :--: | :----: | :----------------------: |
| url  | String | 开发者服务器 ws 接口地址 |

### 返回值

返回 WebSocket 实例

### 举例

假设将调用 cml.initSocket 返回的 WebSocket 实例命名为 ws，则 ws 上具有的方法如下：

- ws.send(data): 通过 WebSocket 连接向服务端发送数据,data 支持字符串和对象
- ws.close(): 关闭 WebSocket 连接
- ws.onopen(): 监听 WebSocket 连接打开事件
- ws.onclose(): 监听 WebSocket 连接关闭事件
- ws.onmessage(): 监听 WebSocket 接收到服务器的消息事件
- ws.onerror(): 监听 WebSocket 错误事件

```javascript
let ws = cml.initSocket('ws://172.22.137.223:3333');

ws.onopen(() => {
  cml.showToast({
    message: 'socket connected...',
    duration: 1000,
  });
  setTimeout(() => {
    ws.send('hello cml socket');
  }, 2000);
});

ws.onmessage((res) => {
  cml.showToast({
    message: 'receive from server: ' + res.data,
    duration: 1000,
  });
  ws.send({
    keyword: 'socket传递复杂类型',
    content: 'hello cml socket',
    arr: ['test1', 12, {}],
  });
});

ws.onerror((err) => {
  console.error(err);
});

ws.onclose(() => {
  cml.showToast({
    message: 'socket closed...',
  });
});

setTimeout(() => {
  ws.close();
}, 20000);
```
