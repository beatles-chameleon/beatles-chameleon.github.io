# ChameleonStore.createStore

```javascript
// store.js
import createStore from 'chameleon-store';

const store = createStore({ ...options });

export default store;
```

## createStore 构造器选项

#### state

类型: Object

chameleon store 实例的根 state 对象。[详细介绍](../../logic/store/state.html)

### mutations

类型: { [type: string]: Function }

在 store 上注册 mutation，处理函数总是接受 state 作为第一个参数（如果定义在模块中，则为模块的局部状态），payload 作为第二个参数（可选）。

[详细介绍](../../logic/store/mutation.html)

### actions

类型: { [type: string]: Function }

在 store 上注册 action。处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。

context 对象包含以下属性：

```javascript
{
  state, // 等同于 `store.state`，若在模块中则为局部状态
    rootState, // 等同于 `store.state`，只存在于模块中
    commit, // 等同于 `store.commit`
    dispatch, // 等同于 `store.dispatch`
    getters, // 等同于 `store.getters`
    rootGetters; // 等同于 `store.getters`，只存在于模块中
}
```

同时如果有第二个参数 payload 的话也能够接收。

[详细介绍](../../logic/store/action.html)

### getters

类型: { [key: string]: Function }
在 store 上注册 getter，getter 方法接受以下参数：

```javascript
state,     // 如果在模块中定义则为模块的局部状态
getters,   // 等同于 store.getters
```

当定义在一个模块里时会特别一些：

```javascript
state, // 如果在模块中定义则为模块的局部状态
  getters, // 等同于 store.getters
  rootState; // 等同于 store.state
rootGetters; // 所有 getters
```

注册的 getter 暴露为 store.getters。

[详细介绍](../../logic/store/getters.html)

### modules

类型: Object

包含了子模块的对象，会被合并到 store，大概长这样：

```javascript
{
  key: {
    state,
    namespaced?,
    mutations,
    actions?,
    getters?,
    modules?
  },
  ...
}
```

与根模块的选项一样，每个模块也包含 state 和 mutations 选项。模块的状态使用 key 关联到 store 的根状态。模块的 mutation 和 getter 只会接收 module 的局部状态作为第一个参数，而不是根状态，并且模块 action 的 context.state 同样指向局部状态。
