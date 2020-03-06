# Store.dispatch

分发 action。返回一个解析所有被触发的 action 处理器的 Promise。[详细介绍](../../logic/store/action.html)

##### 参数说明

<table>
<tr>
    <th>参数</th>
    <th>类型</th>
    <th>必填</th>
    <th>说明</th>
</tr>
<tr>
    <td>type</td>
    <td>String</td>
    <td>是</td>
    <td>类型</td>
</tr>
<tr>
    <td>payload</td>
    <td>any</td>
    <td>否</td>
    <td>载荷,传入的额外参数</td>
</tr>
</table>

##### 示例

```js
// store.js
import createStore from 'chameleon-store';
const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
});
export default store;

// app.js
store.dispatch('incrementAsync');
```
