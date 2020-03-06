# API

chameleon 框架提供了丰富的多态接口，可以调起各端提供的原生能力，如系统信息、元素节点信息、动画效果、本地存储、网络请求、地理位置等。请参考 [API 文档](../api/api.html)。

代码示例

```javascript
import cml from 'chameleon-api';
cml.showToast({
  message: 'Hello world!',
  duration: 1000,
});
```

通常，在 chameleon API 有以下几种类型：

## 通用 API

大多数 API 都是异步 API，如 cml.get 等。这类 API 接口通常都接受一个 Object 类型的参数，返回 `Promise` ，对应请求成功和失败回调，支持 `then` 链式调用。

代码示例

```javascript
cml
  .get({
    url: 'https://cml.com/api/user/1',
  })
  .then(
    (res) => {
      cml.showToast({
        message: JSON.stringify(res),
        duration: 2000,
      });
    },
    (err) => {
      cml.showToast({
        message: JSON.stringify(err),
        duration: 2000,
      });
    },
  );
```

## 运行时相关 API

提供模块 `导入\导出` 能力，[详细介绍](../api/runtime/runtime.html)

代码示例

```javascript
import a from 'a.js';

export { a };
```

## 数据管理 store API

提供多端应用集中式管理状态数据的能力 [详细介绍](../api/store/store.html)

代码示例

```javascript
// store.js
import createStore from 'chameleon-store';

const store = createStore({ state, mutations, actions, getters, modules });

export default store;
```
