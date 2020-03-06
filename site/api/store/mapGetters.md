# Store.mapGetters

为组件创建计算属性以返回 getter 的返回值。[详细介绍](../../logic/store/getters.html)

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
    <td>如果是对象形式，成员可以是一个函数。function(state: any)</td>
</tr>
</table>

##### 示例

```js
// store.js
import createStore from 'chameleon-store';
const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },
});
export default store;

// app.js
import store from './store.js';
class Index {
  // ...
  computed = {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...store.mapGetters([
      'doneTodosCount',
      //'anotherGetter'
    ]),
  };
}
export default new Index();
```
