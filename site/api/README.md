## API

chameleon 支持大量基础 API，对外提供统一的接口，以模块的方式引入`chameleon-api`进行使用。

例如:

```javascript
import cml from 'chameleon-api';
cml.showToast({
  message: 'Hello world!',
  duration: 1000,
});
```

注意：

- 接口均以 promise 形式进行返回，所以你可以结合[异步流程控制](./async.html)如 async、await 进行操作。
- API 模块为按需加载模块，可有效减少包体积。
-  失败回调的返回格式为{errMsg:string}，如果是自己扩展的方法也建议按照此结构进行构造。
- 你还可以利用[接口多态](/framework/polymorphism/api.html)来实现跨端的接口或差异化实现特定端接口。

#### 相关链接

- [运行时相关](./runtime/runtime.html)
- [网络请求](./request.html)
- [路由导航](./navigate.html)
- [数据存储](./storage.html)
- [地理位置](./location.html)
- [系统信息](./system.html)
- [启动参数](./launchOptions.html)
- [元素属性](./getRect.html)
- [单位转换](./px.html)
- [交互反馈](./modal.html)
- [设置 title](./title.html)
- [打开/关闭应用页面](./open.html)
- [获取照片](./chooseImage.html)
- [剪贴板](./clipBoard.html)
- [WebSocket](./socket.html)
- [计时器](./timer.html)
- [canIUse](./caniuse.html)
- [异步流程控制](./async.html)
- [异常和错误处理](./error_control.html)
- [动画关键帧](./animationFrame.html)
- [动画](./createAnimation/main.html)
- [Store](./store/store.html)
