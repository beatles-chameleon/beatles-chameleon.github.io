# Store.mapActions

创建组件方法分发 action。[详细介绍](../../logic/store/action.html)

##### 参数说明

<table>
<tr>
    <th>参数</th>
    <th>类型</th>
    <th>必填</th>
    <th>说明</th>
</tr>
<tr>
    <td>map</td>
    <td>Array<string> | Object<string></td>
    <td>是</td>
    <td>如果是对象形式，成员可以是一个函数。function(dispatch: function, ...args: any[])</td>
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
    increment(context) {
      context.commit('increment');
    },
  },
});
export default store;

// app.js
import store from './store.js';
class Index {
  // ...
  methods = {
    ...store.mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    ...store.mapActions({
      add: 'increment', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
  };
}
export default new Index();
```
